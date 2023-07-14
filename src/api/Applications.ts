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

export class Applications {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * No description
   *
   * @name GetComplianceKey
   * @summary Get Application's compliance data
   * @request GET:/applications/{key}/compliance
   * @secure
   */
  public async getComplianceKey(
    key: string,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/applications/${key}/compliance`,
      method: 'GET',
      secure: true,
      ...params
    })
  }
}
