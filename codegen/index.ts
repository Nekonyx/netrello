import { existsSync } from 'fs'
import { resolve } from 'path'
import { generateApi } from 'swagger-typescript-api'

const OPENAPI_FILE = resolve(__dirname, 'swagger.json')
const OPENAPI_URL =
  'https://dac-static.atlassian.com/cloud/trello/swagger.v3.json'

const useLocalSwagger = existsSync(OPENAPI_FILE)

if (useLocalSwagger) {
  console.log('using local swagger.json')
}

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
  cleanOutput: true,
  generateClient: true
})
