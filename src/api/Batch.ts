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

import { HttpClient, IRequestParams } from './http-client'

export class Batch {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Make up to 10 GET requests in a single, batched API call.
   *
   * @name GetBatch
   * @summary Batch Requests
   * @request GET:/batch
   * @secure
   */
  public async getBatch(
    query: {
      /** A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]" */
      urls: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/batch`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }
}
