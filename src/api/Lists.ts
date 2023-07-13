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

import { Card, TrelloID } from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Lists {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Get information about a List
   *
   * @name GetListsId
   * @summary Get a List
   * @request GET:/lists/{id}
   * @secure
   */
  public async getListsId(
    id: string,
    query?: {
      /**
       * `all` or a comma separated list of List field names.
       * @default "name,closed,idBoard,pos"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update the properties of a List
   *
   * @name PutListsId
   * @summary Update a List
   * @request PUT:/lists/{id}
   * @secure
   */
  public async putListsId(
    id: string,
    query?: {
      /** New name for the list */
      name?: string
      /** Whether the list should be closed (archived) */
      closed?: boolean
      /** ID of a board the list should be moved to */
      idBoard?: TrelloID
      /** New position for the list: `top`, `bottom`, or a positive floating point number */
      pos?: number | 'top' | 'bottom'
      /** Whether the active member is subscribed to this list */
      subscribed?: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new List on a Board
   *
   * @name PostLists
   * @summary Create a new List
   * @request POST:/lists
   * @secure
   */
  public async postLists(
    query: {
      /** Name for the list */
      name: string
      /** The long ID of the board the list should be created on */
      idBoard: TrelloID
      /** ID of the List to copy into the new List */
      idListSource?: TrelloID
      /** Position of the list. `top`, `bottom`, or a positive floating point number */
      pos?: number | 'top' | 'bottom'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Archive all cards in a list
   *
   * @name PostListsIdArchiveallcards
   * @summary Archive all Cards in List
   * @request POST:/lists/{id}/archiveAllCards
   * @secure
   */
  public async postListsIdArchiveallcards(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}/archiveAllCards`,
      method: 'POST',
      secure: true,
      ...params
    })
  }

  /**
   * Move all Cards in a List
   *
   * @name PostListsIdMoveallcards
   * @summary Move all Cards in List
   * @request POST:/lists/{id}/moveAllCards
   * @secure
   */
  public async postListsIdMoveallcards(
    id: TrelloID,
    query: {
      /** The ID of the board the cards should be moved to */
      idBoard: TrelloID
      /** The ID of the list that the cards should be moved to */
      idList: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}/moveAllCards`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Archive or unarchive a list
   *
   * @name PutListsIdClosed
   * @summary Archive or unarchive a list
   * @request PUT:/lists/{id}/closed
   * @secure
   */
  public async putListsIdClosed(
    id: TrelloID,
    query?: {
      /** Set to true to close (archive) the list */
      value?: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}/closed`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Move a List to a different Board
   *
   * @name PutIdIdboard
   * @summary Move List to Board
   * @request PUT:/lists/{id}/idBoard
   * @secure
   */
  public async putIdIdboard(
    id: TrelloID,
    query: {
      /** The ID of the board to move the list to */
      value: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}/idBoard`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Rename a list
   *
   * @name PutListsIdField
   * @summary Update a field on a List
   * @request PUT:/lists/{id}/{field}
   * @secure
   */
  public async putListsIdField(
    id: TrelloID,
    field: 'name' | 'pos' | 'subscribed',
    query?: {
      /** The new value for the field */
      value?: string | number | 'top' | 'bottom' | boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}/${field}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the Actions on a List
   *
   * @name GetListsIdActions
   * @summary Get Actions for a List
   * @request GET:/lists/{id}/actions
   * @secure
   */
  public async getListsIdActions(
    id: string,
    query?: {
      /** A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). */
      filter?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}/actions`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the board a list is on
   *
   * @name GetListsIdBoard
   * @summary Get the Board a List is on
   * @request GET:/lists/{id}/board
   * @secure
   */
  public async getListsIdBoard(
    id: string,
    query?: {
      /**
       * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
       * @default "all"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/lists/${id}/board`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * List the cards in a list
   *
   * @name GetListsIdCards
   * @summary Get Cards in a List
   * @request GET:/lists/{id}/cards
   * @secure
   */
  public async getListsIdCards(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Card[]> {
    return this.client.request<Card[]>({
      path: `/lists/${id}/cards`,
      method: 'GET',
      secure: true,
      ...params
    })
  }
}
