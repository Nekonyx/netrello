/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { IEmoji } from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Emoji {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * List available Emoji
   *
   * @name Get
   * @summary List available Emoji
   * @request GET:/emoji
   */
  public async get(
    query?: {
      /** The locale to return emoji descriptions and names in. Defaults to the logged in member's locale. */
      locale?: string
      /**
       * `true` to return spritesheet URLs in the response
       * @default false
       */
      spritesheets?: boolean
    },
    params: IRequestParams = {}
  ): Promise<IEmoji> {
    return this.client.request<IEmoji>({
      path: `/emoji`,
      method: 'GET',
      query: query,
      ...params
    })
  }
}
