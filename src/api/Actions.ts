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

import {
  Action,
  ActionFields,
  Board,
  BoardFields,
  Card,
  CardFields,
  ListFields,
  Member,
  MemberFields,
  Organization,
  OrganizationFields,
  TrelloID,
  TrelloList
} from './data-contracts'
import { ContentType, HttpClient, IRequestParams } from './http-client'

export class Actions {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Get an Action
   *
   * @name GetActionsId
   * @summary Get an Action
   * @request GET:/actions/{id}
   * @secure
   */
  public async getActionsId(
    id: TrelloID,
    query?: {
      /** @default true */
      display?: boolean
      /** @default false */
      entities?: boolean
      /**
       * `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object)
       * @default "all"
       */
      fields?: string
      /** @default true */
      member?: boolean
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "avatarHash,fullName,initials,username"
       */
      member_fields?: string
      /**
       * Whether to include the member object for the creator of the action
       * @default true
       */
      memberCreator?: boolean
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "avatarHash,fullName,initials,username"
       */
      memberCreator_fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.
   *
   * @name PutActionsId
   * @summary Update an Action
   * @request PUT:/actions/{id}
   * @secure
   */
  public async putActionsId(
    id: TrelloID,
    query: {
      /** The new text for the comment */
      text: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a specific action. Only comment actions can be deleted.
   *
   * @name DeleteActionsId
   * @summary Delete an Action
   * @request DELETE:/actions/{id}
   * @secure
   */
  public async deleteActionsId(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific property of an action
   *
   * @name GetActionsIdField
   * @summary Get a specific field on an Action
   * @request GET:/actions/{id}/{field}
   * @secure
   */
  public async getActionsIdField(
    id: TrelloID,
    field: ActionFields,
    params: IRequestParams = {}
  ): Promise<Action> {
    return this.client.request<Action>({
      path: `/actions/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get the Board for an Action
   *
   * @name GetActionsIdBoard
   * @summary Get the Board for an Action
   * @request GET:/actions/{id}/board
   * @secure
   */
  public async getActionsIdBoard(
    id: TrelloID,
    query?: {
      /** `all` or a comma-separated list of board fields */
      fields?: BoardFields
    },
    params: IRequestParams = {}
  ): Promise<Board> {
    return this.client.request<Board>({
      path: `/actions/${id}/board`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the card for an action
   *
   * @name GetActionsIdCard
   * @summary Get the Card for an Action
   * @request GET:/actions/{id}/card
   * @secure
   */
  public async getActionsIdCard(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of card fields
       * @default "all"
       */
      fields?: CardFields
    },
    params: IRequestParams = {}
  ): Promise<Card> {
    return this.client.request<Card>({
      path: `/actions/${id}/card`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the List for an Action
   *
   * @name GetActionsIdList
   * @summary Get the List for an Action
   * @request GET:/actions/{id}/list
   * @secure
   */
  public async getActionsIdList(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of list fields
       * @default "all"
       */
      fields?: ListFields
    },
    params: IRequestParams = {}
  ): Promise<TrelloList> {
    return this.client.request<TrelloList>({
      path: `/actions/${id}/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Gets the member of an action (not the creator)
   *
   * @name GetActionsIdMember
   * @summary Get the Member of an Action
   * @request GET:/actions/{id}/member
   * @secure
   */
  public async getActionsIdMember(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member fields
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
      path: `/actions/${id}/member`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the Member who created the Action
   *
   * @name GetActionsIdMembercreator
   * @summary Get the Member Creator of an Action
   * @request GET:/actions/{id}/memberCreator
   * @secure
   */
  public async getActionsIdMembercreator(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member fields
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
      path: `/actions/${id}/memberCreator`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the Organization of an Action
   *
   * @name GetActionsIdOrganization
   * @summary Get the Organization of an Action
   * @request GET:/actions/{id}/organization
   * @secure
   */
  public async getActionsIdOrganization(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of organization fields
       * @default "all"
       */
      fields?: OrganizationFields
    },
    params: IRequestParams = {}
  ): Promise<Organization> {
    return this.client.request<Organization>({
      path: `/actions/${id}/organization`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update a comment action
   *
   * @name PutActionsIdText
   * @summary Update a Comment Action
   * @request PUT:/actions/{id}/text
   * @secure
   */
  public async putActionsIdText(
    id: TrelloID,
    query: {
      /** The new text for the comment */
      value: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${id}/text`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * List reactions for an action
   *
   * @name GetActionsIdactionReactions
   * @summary Get Action's Reactions
   * @request GET:/actions/{idAction}/reactions
   * @secure
   */
  public async getActionsIdactionReactions(
    idAction: TrelloID,
    query?: {
      /**
       * Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
       * @default true
       */
      member?: boolean
      /**
       * Whether to load the emoji as a nested resource.
       * @default true
       */
      emoji?: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${idAction}/reactions`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Adds a new reaction to an action
   *
   * @name PostActionsIdactionReactions
   * @summary Create Reaction for Action
   * @request POST:/actions/{idAction}/reactions
   * @secure
   */
  public async postActionsIdactionReactions(
    idAction: TrelloID,
    data: {
      /** The primary `shortName` of the emoji to add. See [/emoji](#emoji) */
      shortName?: string
      /** The `skinVariation` of the emoji to add. See [/emoji](#emoji) */
      skinVariation?: string
      /** The emoji to add as a native unicode emoji. See [/emoji](#emoji) */
      native?: string
      /** The `unified` value of the emoji to add. See [/emoji](#emoji) */
      unified?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${idAction}/reactions`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * Get information for a reaction
   *
   * @name GetActionsIdactionReactionsId
   * @summary Get Action's Reaction
   * @request GET:/actions/{idAction}/reactions/{id}
   * @secure
   */
  public async getActionsIdactionReactionsId(
    idAction: TrelloID,
    id: TrelloID,
    query?: {
      /**
       * Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
       * @default true
       */
      member?: boolean
      /**
       * Whether to load the emoji as a nested resource.
       * @default true
       */
      emoji?: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${idAction}/reactions/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Deletes a reaction
   *
   * @name DeleteActionsIdactionReactionsId
   * @summary Delete Action's Reaction
   * @request DELETE:/actions/{idAction}/reactions/{id}
   * @secure
   */
  public async deleteActionsIdactionReactionsId(
    idAction: TrelloID,
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${idAction}/reactions/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * List a summary of all reactions for an action
   *
   * @name GetActionsIdactionReactionsummary
   * @summary List Action's summary of Reactions
   * @request GET:/actions/{idAction}/reactionsSummary
   * @secure
   */
  public async getActionsIdactionReactionsummary(
    idAction: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/actions/${idAction}/reactionsSummary`,
      method: 'GET',
      secure: true,
      ...params
    })
  }
}
