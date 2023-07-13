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

import { Color, TrelloID } from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Labels {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Get information about a single Label.
   *
   * @name GetLabelsId
   * @summary Get a Label
   * @request GET:/labels/{id}
   * @secure
   */
  public async getLabelsId(
    id: TrelloID,
    query?: {
      /**
       * all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/labels/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update a label by ID.
   *
   * @name PutLabelsId
   * @summary Update a Label
   * @request PUT:/labels/{id}
   * @secure
   */
  public async putLabelsId(
    id: TrelloID,
    query?: {
      /** The new name for the label */
      name?: string
      /** The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options */
      color?: Color
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/labels/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a label by ID.
   *
   * @name DeleteLabelsId
   * @summary Delete a Label
   * @request DELETE:/labels/{id}
   * @secure
   */
  public async deleteLabelsId(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/labels/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Update a field on a label.
   *
   * @name PutLabelsIdField
   * @summary Update a field on a label
   * @request PUT:/labels/{id}/{field}
   * @secure
   */
  public async putLabelsIdField(
    id: string,
    field: 'color' | 'name',
    query: {
      /** The new value for the field. */
      value: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/labels/${id}/${field}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new Label on a Board.
   *
   * @name PostLabels
   * @summary Create a Label
   * @request POST:/labels
   * @secure
   */
  public async postLabels(
    query: {
      /** Name for the label */
      name: string
      /** The color for the label. */
      color: Color
      /** The ID of the Board to create the Label on. */
      idBoard: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/labels`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }
}
