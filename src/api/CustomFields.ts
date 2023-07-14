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

import { ICustomField, IPosStringOrNumber, TrelloID } from './data-contracts'
import { ContentType, HttpClient, IRequestParams } from './http-client'

export class CustomFields {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Create a new Custom Field on a board.
   *
   * @name Create
   * @summary Create a new Custom Field on a Board
   * @request POST:/customFields
   * @secure
   */
  public async create(
    data: {
      /** The ID of the model for which the Custom Field is being defined. This should always be the ID of a board. */
      idModel: TrelloID
      /** The type of model that the Custom Field is being defined on. This should always be `board`. */
      modelType: 'board'
      /** The name of the Custom Field */
      name: string
      /** The type of Custom Field to create. */
      type: 'checkbox' | 'list' | 'number' | 'text' | 'date'
      /** If the type is `checkbox`  */
      options?: string
      pos: IPosStringOrNumber
      /**
       * Whether this Custom Field should be shown on the front of Cards
       * @default true
       */
      display_cardFront?: boolean
    },
    params: IRequestParams = {}
  ): Promise<ICustomField> {
    return this.client.request<ICustomField>({
      path: `/customFields`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * No description
   *
   * @name Get
   * @summary Get a Custom Field
   * @request GET:/customFields/{id}
   * @secure
   */
  public async get(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<ICustomField> {
    return this.client.request<ICustomField>({
      path: `/customFields/${id}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update a Custom Field definition.
   *
   * @name Update
   * @summary Update a Custom Field definition
   * @request PUT:/customFields/{id}
   * @secure
   */
  public async update(
    id: TrelloID,
    data: {
      /** The name of the Custom Field */
      name?: string
      pos?: IPosStringOrNumber
      /** Whether to display this custom field on the front of cards */
      'display/cardFront'?: boolean
    },
    params: IRequestParams = {}
  ): Promise<ICustomField> {
    return this.client.request<ICustomField>({
      path: `/customFields/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * Delete a Custom Field from a board.
   *
   * @name Delete
   * @summary Delete a Custom Field definition
   * @request DELETE:/customFields/{id}
   * @secure
   */
  public async delete(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/customFields/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Add an option to a dropdown Custom Field
   *
   * @name CreateOptions
   * @summary Add Option to Custom Field dropdown
   * @request POST:/customFields/{id}/options
   * @secure
   */
  public async createOptions(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/customFields/${id}/options`,
      method: 'POST',
      secure: true,
      ...params
    })
  }

  /**
   * Get the options of a drop down Custom Field
   *
   * @name GetOptions
   * @summary Get Options of Custom Field drop down
   * @request GET:/customFields/{id}/options
   * @secure
   */
  public async getOptions(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/customFields/${id}/options`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Retrieve a specific, existing Option on a given dropdown-type Custom Field
   *
   * @name GetOptionsIdCustomFieldOption
   * @summary Get Option of Custom Field dropdown
   * @request GET:/customFields/{id}/options/{idCustomFieldOption}
   * @secure
   */
  public async getOptionsIdCustomFieldOption(
    id: TrelloID,
    idCustomFieldOption: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/customFields/${id}/options/${idCustomFieldOption}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Delete an option from a Custom Field dropdown.
   *
   * @name DeleteOptionsIdCustomFieldOption
   * @summary Delete Option of Custom Field dropdown
   * @request DELETE:/customFields/{id}/options/{idCustomFieldOption}
   * @secure
   */
  public async deleteOptionsIdCustomFieldOption(
    id: TrelloID,
    idCustomFieldOption: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/customFields/${id}/options/${idCustomFieldOption}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }
}
