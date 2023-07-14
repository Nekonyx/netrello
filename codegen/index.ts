import toCamelCase from 'camelcase'
import { existsSync } from 'fs'
import { resolve } from 'path'
import { generateApi } from 'swagger-typescript-api'

const OPENAPI_FILE = resolve(__dirname, 'swagger.json')
const OPENAPI_URL =
  'https://dac-static.atlassian.com/cloud/trello/swagger.v3.json'
const ID_TOKEN = 'id'
const TOKEN_REGEX = /\{([a-z0-9]+)\}/gi

const useLocalSwagger = existsSync(OPENAPI_FILE)

if (useLocalSwagger) {
  console.log('using local swagger.json')
}

const primitiveComponents = new Set<string>()

generateApi({
  ...(useLocalSwagger
    ? {
        input: OPENAPI_FILE
      }
    : {
        url: OPENAPI_URL
      }),
  templates: resolve(__dirname, 'templates'),
  output: resolve(process.cwd(), 'src/api'),
  modular: true,
  // only fetch is supported by templates
  httpClientType: 'fetch',
  // only single http client is supported by templates
  singleHttpClient: true,
  prettier: {
    arrowParens: 'always',
    bracketSpacing: true,
    endOfLine: 'lf',
    insertPragma: false,
    bracketSameLine: false,
    printWidth: 80,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    requirePragma: false,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false
  },
  sortTypes: true,
  cleanOutput: true,
  generateClient: true,
  hooks: {
    onCreateComponent(component) {
      const type = component.rawTypeData?.type

      if (type && type !== 'object') {
        primitiveComponents.add(component.typeName)
      }
    },
    onFormatTypeName(typeName, rawTypeName, schemaType) {
      if (schemaType === 'type-name' && !primitiveComponents.has(typeName)) {
        return `I${typeName}`
      }
    },
    onCreateRouteName(routeNameInfo, rawRouteInfo) {
      const { route, method } = rawRouteInfo
      const tokens = extractTokensFromPath(route)

      const postfix = getMethodPostfix(tokens)
      const resource = getResourceNameFromRoute(route, false)

      const nameParts: string[] = [getMethodPrefix(method), resource, postfix]

      console.debug({
        route,
        tokens,
        nameParts
      })

      const name = toCamelCase(nameParts.filter(Boolean).join('-'))

      return {
        duplicate: routeNameInfo.duplicate,
        usage: name,
        original: name
      }
    }
  }
})

function getMethodPrefix(method: string) {
  switch (method) {
    case 'get':
      return 'get'
    case 'post':
      return 'create'
    case 'delete':
      return 'delete'
    case 'put':
      return 'update'
    default:
      throw new Error(`Unknown method: ${method}`)
  }
}

function getMethodPostfix(tokens: string[]) {
  if (
    tokens.length === 1 &&
    (tokens[0] === ID_TOKEN || tokens[0].includes('id'))
  ) {
    // return `by-${tokens[0]}`
    return ''
  }

  return tokens.filter((token) => token !== ID_TOKEN).join('-')
}

function getResourceNameFromRoute(route: string, includeFirst = true) {
  let [resource, ...rest] = route
    .split('/')
    .filter((part) => part.length > 1 && !part.match(TOKEN_REGEX))

  if (resource.length === 0) {
    throw new Error(`Can't get resource name: ${route}`)
  }

  const parts: string[] = []

  if (includeFirst) {
    if (resource.at(-1) === 's') {
      resource = resource.slice(0, -1)
    }

    parts.push(resource)
  }

  parts.push(...rest)

  return parts.join('-')
}

function extractTokensFromPath(path: string): string[] {
  return Array.from(path.matchAll(TOKEN_REGEX)).flatMap((match) => match[1])
}
