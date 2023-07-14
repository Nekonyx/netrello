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
  ActionFields,
  BoardFields,
  CardFields,
  IAction,
  IBoard,
  ICard,
  IMember,
  IOrganization,
  ITrelloList,
  ListFields,
  MemberFields,
  OrganizationFields,
  TrelloID
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
   * @name Get
   * @summary Get an Action
   * @request GET:/actions/{id}
   * @secure
   */
  public async get(
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
   * @name Update
   * @summary Update an Action
   * @request PUT:/actions/{id}
   * @secure
   */
  public async update(
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
   * @name Delete
   * @summary Delete an Action
   * @request DELETE:/actions/{id}
   * @secure
   */
  public async delete(
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
   * @name GetField
   * @summary Get a specific field on an Action
   * @request GET:/actions/{id}/{field}
   * @secure
   */
  public async getField(
    id: TrelloID,
    field: ActionFields,
    params: IRequestParams = {}
  ): Promise<IAction> {
    return this.client.request<IAction>({
      path: `/actions/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get the Board for an Action
   *
   * @name GetBoard
   * @summary Get the Board for an Action
   * @request GET:/actions/{id}/board
   * @secure
   */
  public async getBoard(
    id: TrelloID,
    query?: {
      /** `all` or a comma-separated list of board fields */
      fields?: BoardFields
    },
    params: IRequestParams = {}
  ): Promise<IBoard> {
    return this.client.request<IBoard>({
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
   * @name GetCard
   * @summary Get the Card for an Action
   * @request GET:/actions/{id}/card
   * @secure
   */
  public async getCard(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of card fields
       * @default "all"
       */
      fields?: CardFields
    },
    params: IRequestParams = {}
  ): Promise<ICard> {
    return this.client.request<ICard>({
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
   * @name GetList
   * @summary Get the List for an Action
   * @request GET:/actions/{id}/list
   * @secure
   */
  public async getList(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of list fields
       * @default "all"
       */
      fields?: ListFields
    },
    params: IRequestParams = {}
  ): Promise<ITrelloList> {
    return this.client.request<ITrelloList>({
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
   * @name GetMember
   * @summary Get the Member of an Action
   * @request GET:/actions/{id}/member
   * @secure
   */
  public async getMember(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member fields
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<IMember> {
    return this.client.request<IMember>({
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
   * @name GetMemberCreator
   * @summary Get the Member Creator of an Action
   * @request GET:/actions/{id}/memberCreator
   * @secure
   */
  public async getMemberCreator(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member fields
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<IMember> {
    return this.client.request<IMember>({
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
   * @name GetOrganization
   * @summary Get the Organization of an Action
   * @request GET:/actions/{id}/organization
   * @secure
   */
  public async getOrganization(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of organization fields
       * @default "all"
       */
      fields?: OrganizationFields
    },
    params: IRequestParams = {}
  ): Promise<IOrganization> {
    return this.client.request<IOrganization>({
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
   * @name UpdateText
   * @summary Update a Comment Action
   * @request PUT:/actions/{id}/text
   * @secure
   */
  public async updateText(
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
   * @name GetReactions
   * @summary Get Action's Reactions
   * @request GET:/actions/{idAction}/reactions
   * @secure
   */
  public async getReactions(
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
   * @name CreateReactions
   * @summary Create Reaction for Action
   * @request POST:/actions/{idAction}/reactions
   * @secure
   */
  public async createReactions(
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
   * @name GetReactionsIdAction
   * @summary Get Action's Reaction
   * @request GET:/actions/{idAction}/reactions/{id}
   * @secure
   */
  public async getReactionsIdAction(
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
   * @name DeleteReactionsIdAction
   * @summary Delete Action's Reaction
   * @request DELETE:/actions/{idAction}/reactions/{id}
   * @secure
   */
  public async deleteReactionsIdAction(
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
   * @name GetReactionsSummary
   * @summary List Action's summary of Reactions
   * @request GET:/actions/{idAction}/reactionsSummary
   * @secure
   */
  public async getReactionsSummary(
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
