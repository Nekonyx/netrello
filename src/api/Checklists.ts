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

import { IPosStringOrNumber, TrelloID } from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Checklists {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * No description
   *
   * @name Create
   * @summary Create a Checklist
   * @request POST:/checklists
   * @secure
   */
  public async create(
    query: {
      /** The ID of the Card that the checklist should be added to. */
      idCard: TrelloID
      /**
       * The name of the checklist. Should be a string of length 1 to 16384.
       * @minLength 1
       * @maxLength 16384
       */
      name?: string
      /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
      pos?: IPosStringOrNumber
      /** The ID of a checklist to copy into the new checklist. */
      idChecklistSource?: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name Get
   * @summary Get a Checklist
   * @request GET:/checklists/{id}
   * @secure
   */
  public async get(
    id: TrelloID,
    query?: {
      /**
       * Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).
       * @default "none"
       */
      cards?: 'all' | 'closed' | 'none' | 'open' | 'visible'
      /**
       * The check items on the list to return. One of: `all`, `none`.
       * @default "all"
       */
      checkItems?: 'all' | 'none'
      /**
       * The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`
       * @default "name, nameData, pos, state, due, dueReminder, idMember"
       */
      checkItem_fields?:
        | 'all'
        | 'name'
        | 'nameData'
        | 'pos'
        | 'state'
        | 'type'
        | 'due'
        | 'dueReminder'
        | 'idMember'
      /**
       * `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update an existing checklist.
   *
   * @name Update
   * @summary Update a Checklist
   * @request PUT:/checklists/{id}
   * @secure
   */
  public async update(
    id: TrelloID,
    query?: {
      /** Name of the new checklist being created. Should be length of 1 to 16384. */
      name?: string
      /** Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
      pos?: IPosStringOrNumber
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a checklist
   *
   * @name Delete
   * @summary Delete a Checklist
   * @request DELETE:/checklists/{id}
   * @secure
   */
  public async delete(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetField
   * @summary Get field on a Checklist
   * @request GET:/checklists/{id}/{field}
   * @secure
   */
  public async getField(
    id: TrelloID,
    field: 'name' | 'pos',
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name UpdateField
   * @summary Update field on a Checklist
   * @request PUT:/checklists/{id}/{field}
   * @secure
   */
  public async updateField(
    id: TrelloID,
    field: 'name' | 'pos',
    query: {
      /** The value to change the checklist name to. Should be a string of length 1 to 16384. */
      value: IPosStringOrNumber | TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}/${field}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetBoard
   * @summary Get the Board the Checklist is on
   * @request GET:/checklists/{id}/board
   * @secure
   */
  public async getBoard(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: 'all' | 'name'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}/board`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetCards
   * @summary Get the Card a Checklist is on
   * @request GET:/checklists/{id}/cards
   * @secure
   */
  public async getCards(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}/cards`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetCheckItems
   * @summary Get Checkitems on a Checklist
   * @request GET:/checklists/{id}/checkItems
   * @secure
   */
  public async getCheckItems(
    id: TrelloID,
    query?: {
      /**
       * One of: `all`, `none`.
       * @default "all"
       */
      filter?: 'all' | 'none'
      /**
       * One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.
       * @default "name, nameData, pos, state, due, dueReminder, idMember"
       */
      fields?:
        | 'all'
        | 'name'
        | 'nameData'
        | 'pos'
        | 'state'
        | 'type'
        | 'due'
        | 'dueReminder'
        | 'idMember'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}/checkItems`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name CreateCheckItems
   * @summary Create Checkitem on Checklist
   * @request POST:/checklists/{id}/checkItems
   * @secure
   */
  public async createCheckItems(
    id: TrelloID,
    query: {
      /**
       * The name of the new check item on the checklist. Should be a string of length 1 to 16384.
       * @minLength 1
       * @maxLength 16384
       */
      name: string
      /**
       * The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.
       * @default "bottom"
       */
      pos?: IPosStringOrNumber
      /**
       * Determines whether the check item is already checked when created.
       * @default false
       */
      checked?: boolean
      /**
       * A due date for the checkitem
       * @format date
       */
      due?: string
      /** A dueReminder for the due date on the checkitem */
      dueReminder?: number | null
      /** An ID of a member resource. */
      idMember?: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}/checkItems`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetCheckItemsIdCheckItem
   * @summary Get a Checkitem on a Checklist
   * @request GET:/checklists/{id}/checkItems/{idCheckItem}
   * @secure
   */
  public async getCheckItemsIdCheckItem(
    id: TrelloID,
    idCheckItem: TrelloID,
    query?: {
      /**
       * One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.
       * @default "name, nameData, pos, state, due, dueReminder, idMember"
       */
      fields?:
        | 'all'
        | 'name'
        | 'nameData'
        | 'pos'
        | 'state'
        | 'type'
        | 'due'
        | 'dueReminder'
        | 'idMember'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}/checkItems/${idCheckItem}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Remove an item from a checklist
   *
   * @name DeleteCheckItemsIdCheckItem
   * @summary Delete Checkitem from Checklist
   * @request DELETE:/checklists/{id}/checkItems/{idCheckItem}
   * @secure
   */
  public async deleteCheckItemsIdCheckItem(
    id: TrelloID,
    idCheckItem: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/checklists/${id}/checkItems/${idCheckItem}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }
}
