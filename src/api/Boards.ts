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
  Board,
  BoardStars,
  CustomField,
  Label,
  MemberFields,
  Memberships,
  Plugin,
  TrelloID,
  TrelloList,
  ViewFilter
} from './data-contracts'
import { ContentType, HttpClient, IRequestParams } from './http-client'

export class Boards {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Get information about the memberships users have to the board.
   *
   * @name GetBoardsIdMemberships
   * @summary Get Memberships of a Board
   * @request GET:/boards/{id}/memberships
   * @secure
   */
  public async getBoardsIdMemberships(
    id: TrelloID,
    query?: {
      /**
       * One of `admins`, `all`, `none`, `normal`
       * @default "all"
       */
      filter?: 'admins' | 'all' | 'none' | 'normal'
      /**
       * Works for premium organizations only.
       * @default false
       */
      activity?: boolean
      /**
       * Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.
       * @default false
       */
      orgMemberType?: boolean
      /**
       * Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).
       * @default false
       */
      member?: boolean
      /**
       * Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).
       * @default "fullname,username"
       */
      member_fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<Memberships> {
    return this.client.request<Memberships>({
      path: `/boards/${id}/memberships`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Request a single board.
   *
   * @name GetBoardsId
   * @summary Get a Board
   * @request GET:/boards/{id}
   * @secure
   */
  public async getBoardsId(
    id: TrelloID,
    query?: {
      /**
       * This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
       * @default "all"
       */
      actions?: string
      /**
       * Valid values are one of: `mine` or `none`.
       * @default "none"
       */
      boardStars?: string
      /**
       * This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
       * @default "none"
       */
      cards?: string
      /**
       * Use with the `cards` param to include card pluginData with the response
       * @default false
       */
      card_pluginData?: boolean
      /**
       * This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
       * @default "none"
       */
      checklists?: string
      /**
       * This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).
       * @default false
       */
      customFields?: boolean
      /**
       * The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url
       * @default "name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames"
       */
      fields?: string
      /** This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
      labels?: string
      /**
       * This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
       * @default "open"
       */
      lists?: string
      /**
       * This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
       * @default "none"
       */
      members?: string
      /**
       * This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
       * @default "none"
       */
      memberships?: string
      /**
       * Determines whether the pluginData for this board should be returned. Valid values: true or false.
       * @default false
       */
      pluginData?: boolean
      /**
       * This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
       * @default false
       */
      organization?: boolean
      /**
       * Use with the `organization` param to include organization pluginData with the response
       * @default false
       */
      organization_pluginData?: boolean
      /** @default false */
      myPrefs?: boolean
      /**
       * Also known as collections, tags, refer to the collection(s) that a Board belongs to.
       * @default false
       */
      tags?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Board> {
    return this.client.request<Board>({
      path: `/boards/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update an existing board by id
   *
   * @name PutBoardsId
   * @summary Update a Board
   * @request PUT:/boards/{id}
   * @secure
   */
  public async putBoardsId(
    id: TrelloID,
    query?: {
      /** The new name for the board. 1 to 16384 characters long. */
      name?: string
      /** A new description for the board, 0 to 16384 characters long */
      desc?: string
      /** Whether the board is closed */
      closed?: boolean
      /** Whether the acting user is subscribed to the board */
      subscribed?: TrelloID
      /** The id of the Workspace the board should be moved to */
      idOrganization?: string
      /** One of: org, private, public */
      'prefs/permissionLevel'?: string
      /** Whether Workspace members can join the board themselves */
      'prefs/selfJoin'?: boolean
      /** Whether card covers should be displayed on this board */
      'prefs/cardCovers'?: boolean
      /** Determines whether the Voting Power-Up should hide who voted on cards or not. */
      'prefs/hideVotes'?: boolean
      /** Who can invite people to this board. One of: admins, members */
      'prefs/invitations'?: string
      /** Who can vote on this board. One of disabled, members, observers, org, public */
      'prefs/voting'?: string
      /** Who can comment on cards on this board. One of: disabled, members, observers, org, public */
      'prefs/comments'?: string
      /** The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey */
      'prefs/background'?: string
      /** One of: pirate, regular */
      'prefs/cardAging'?: string
      /** Determines whether the calendar feed is enabled or not. */
      'prefs/calendarFeedEnabled'?: boolean
      /** Name for the green label. 1 to 16384 characters long */
      'labelNames/green'?: string
      /** Name for the yellow label. 1 to 16384 characters long */
      'labelNames/yellow'?: string
      /** Name for the orange label. 1 to 16384 characters long */
      'labelNames/orange'?: string
      /** Name for the red label. 1 to 16384 characters long */
      'labelNames/red'?: string
      /** Name for the purple label. 1 to 16384 characters long */
      'labelNames/purple'?: string
      /** Name for the blue label. 1 to 16384 characters long */
      'labelNames/blue'?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a board.
   *
   * @name DeleteBoardsId
   * @summary Delete a Board
   * @request DELETE:/boards/{id}
   * @secure
   */
  public async deleteBoardsId(
    id: TrelloID,
    id: string,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Get a single, specific field on a board
   *
   * @name GetBoardsIdField
   * @summary Get a field on a Board
   * @request GET:/boards/{id}/{field}
   * @secure
   */
  public async getBoardsIdField(
    id: string,
    field: string,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetBoardsIdActions
   * @summary Get Actions of a Board
   * @request GET:/boards/{boardId}/actions
   * @secure
   */
  public async getBoardsIdActions(
    boardId: string,
    query?: {
      /** The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object). */
      fields?: Action
      /** A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/). */
      filter?: string
      /**
       * The format of the returned Actions. Either list or count.
       * @default "list"
       */
      format?: string
      /** A comma-separated list of idModels. Only actions related to these models will be returned. */
      idModels?: string
      /**
       * The limit of the number of responses, between 0 and 1000.
       * @default 50
       */
      limit?: number
      /**
       * Whether to return the member object for each action.
       * @default true
       */
      member?: boolean
      /**
       * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
       * @default "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username"
       */
      member_fields?: string
      /**
       * Whether to return the memberCreator object for each action.
       * @default true
       */
      memberCreator?: boolean
      /**
       * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
       * @default "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username"
       */
      memberCreator_fields?: string
      /**
       * The page of results for actions.
       * @default 0
       */
      page?: number
      /** Whether to show reactions on comments or not. */
      reactions?: boolean
      /** An Action ID */
      before?: string
      /** An Action ID */
      since?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${boardId}/actions`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a single Card on a Board.
   *
   * @name GetBoardsIdCardsIdcard
   * @summary Get a Card on a Board
   * @request GET:/boards/{id}/cards/{idCard}
   * @secure
   */
  public async getBoardsIdCardsIdcard(
    id: string,
    idCard: string,
    query?: {
      /** The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object). */
      fields?: Action
      /** A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/). */
      filter?: string
      /**
       * The format of the returned Actions. Either list or count.
       * @default "list"
       */
      format?: string
      /** A comma-separated list of idModels. Only actions related to these models will be returned. */
      idModels?: string
      /**
       * The limit of the number of responses, between 0 and 1000.
       * @default 50
       */
      limit?: number
      /**
       * Whether to return the member object for each action.
       * @default true
       */
      member?: boolean
      /**
       * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
       * @default "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username"
       */
      member_fields?: string
      /**
       * Whether to return the memberCreator object for each action.
       * @default true
       */
      memberCreator?: boolean
      /**
       * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
       * @default "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username"
       */
      memberCreator_fields?: string
      /**
       * The page of results for actions.
       * @default 0
       */
      page?: number
      /** Whether to show reactions on comments or not. */
      reactions?: boolean
      /** An Action ID */
      before?: string
      /** An Action ID */
      since?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/cards/${idCard}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetBoardsIdBoardstars
   * @summary Get boardStars on a Board
   * @request GET:/boards/{boardId}/boardStars
   * @secure
   */
  public async getBoardsIdBoardstars(
    boardId: string,
    query?: {
      /**
       * Valid values: mine, none
       * @default "mine"
       */
      filter?: string
    },
    params: IRequestParams = {}
  ): Promise<BoardStars[]> {
    return this.client.request<BoardStars[]>({
      path: `/boards/${boardId}/boardStars`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get all of the checklists on a Board.
   *
   * @name BoardsIdChecklists
   * @summary Get Checklists on a Board
   * @request GET:/boards/{id}/checklists
   * @secure
   */
  public async boardsIdChecklists(
    id: string,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/checklists`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get all of the open Cards on a Board.
   *
   * @name GetBoardsIdCards
   * @summary Get Cards on a Board
   * @request GET:/boards/{id}/cards
   * @secure
   */
  public async getBoardsIdCards(
    id: string,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/cards`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get the Cards on a Board that match a given filter.
   *
   * @name GetBoardsIdCardsFilter
   * @summary Get filtered Cards on a Board
   * @request GET:/boards/{id}/cards/{filter}
   * @secure
   */
  public async getBoardsIdCardsFilter(
    id: string,
    filter: 'all' | 'closed' | 'none' | 'open' | 'visible',
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/cards/${filter}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get the Custom Field Definitions that exist on a board.
   *
   * @name GetBoardsIdCustomfields
   * @summary Get Custom Fields for Board
   * @request GET:/boards/{id}/customFields
   * @secure
   */
  public async getBoardsIdCustomfields(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<CustomField[]> {
    return this.client.request<CustomField[]>({
      path: `/boards/${id}/customFields`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get all of the Labels on a Board.
   *
   * @name GetBoardsIdLabels
   * @summary Get Labels on a Board
   * @request GET:/boards/{id}/labels
   * @secure
   */
  public async getBoardsIdLabels(
    id: TrelloID,
    query?: {
      /** The fields to be returned for the Labels. */
      fields?: Label
      /**
       * The number of Labels to be returned.
       * @format int32
       * @min 0
       * @max 1000
       * @default 50
       */
      limit?: number
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/labels`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new Label on a Board.
   *
   * @name PostBoardsIdLabels
   * @summary Create a Label on a Board
   * @request POST:/boards/{id}/labels
   * @secure
   */
  public async postBoardsIdLabels(
    id: string,
    query: {
      /** The name of the label to be created. 1 to 16384 characters long. */
      name: string
      /** Sets the color of the new label. Valid values are a label color or `null`. */
      color: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/labels`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the Lists on a Board
   *
   * @name GetBoardsIdLists
   * @summary Get Lists on a Board
   * @request GET:/boards/{id}/lists
   * @secure
   */
  public async getBoardsIdLists(
    id: TrelloID,
    query?: {
      /** Filter to apply to Cards. */
      cards?: ViewFilter
      /**
       * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)
       * @default "all"
       */
      card_fields?: string
      /** Filter to apply to Lists */
      filter?: ViewFilter
      /**
       * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<TrelloList[]> {
    return this.client.request<TrelloList[]>({
      path: `/boards/${id}/lists`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new List on a Board.
   *
   * @name PostBoardsIdLists
   * @summary Create a List on a Board
   * @request POST:/boards/{id}/lists
   * @secure
   */
  public async postBoardsIdLists(
    id: TrelloID,
    query: {
      /** The name of the list to be created. 1 to 16384 characters long. */
      name: string
      /**
       * Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.
       * @default "top"
       */
      pos?: string
    },
    params: IRequestParams = {}
  ): Promise<TrelloList> {
    return this.client.request<TrelloList>({
      path: `/boards/${id}/lists`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetBoardsIdListsFilter
   * @summary Get filtered Lists on a Board
   * @request GET:/boards/{id}/lists/{filter}
   * @secure
   */
  public async getBoardsIdListsFilter(
    id: TrelloID,
    filter: ViewFilter,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/lists/${filter}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get the Members for a board
   *
   * @name GetBoardsIdMembers
   * @summary Get the Members of a Board
   * @request GET:/boards/{id}/members
   * @secure
   */
  public async getBoardsIdMembers(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/members`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Invite a Member to a Board via their email address.
   *
   * @name PutBoardsIdMembers
   * @summary Invite Member to Board via email
   * @request PUT:/boards/{id}/members
   * @secure
   */
  public async putBoardsIdMembers(
    id: TrelloID,
    query: {
      /**
       * The email address of a user to add as a member of the board.
       * @format email
       */
      email: string
      /**
       * Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.
       * @default "normal"
       */
      type?: 'admin' | 'normal' | 'observer'
    },
    data: {
      /** The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end with a space. */
      fullName?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/members`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * Add a member to the board.
   *
   * @name PutBoardsIdMembersIdmember
   * @summary Add a Member to a Board
   * @request PUT:/boards/{id}/members/{idMember}
   * @secure
   */
  public async putBoardsIdMembersIdmember(
    id: TrelloID,
    idMember: TrelloID,
    query: {
      /** One of: admin, normal, observer. Determines the type of member this user will be on the board. */
      type: 'admin' | 'normal' | 'observer'
      /**
       * Optional param that allows organization admins to add multi-board guests onto a board.
       * @default false
       */
      allowBillableGuest?: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/members/${idMember}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name Boardsidmembersidmember
   * @summary Remove Member from Board
   * @request DELETE:/boards/{id}/members/{idMember}
   * @secure
   */
  public async boardsidmembersidmember(
    id: TrelloID,
    idMember: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/members/${idMember}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Update an existing board by id
   *
   * @name PutBoardsIdMembershipsIdmembership
   * @summary Update Membership of Member on a Board
   * @request PUT:/boards/{id}/memberships/{idMembership}
   * @secure
   */
  public async putBoardsIdMembershipsIdmembership(
    id: TrelloID,
    idMembership: TrelloID,
    query: {
      /** One of: admin, normal, observer. Determines the type of member that this membership will be to this board. */
      type: 'admin' | 'normal' | 'observer'
      /**
       * Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
       * @default "fullName, username"
       */
      member_fields?:
        | 'all'
        | 'avatarHash'
        | 'bio'
        | 'bioData'
        | 'confirmed'
        | 'fullName'
        | 'idPremOrgsAdmin'
        | 'initials'
        | 'memberType'
        | 'products'
        | 'status'
        | 'url'
        | 'username'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/memberships/${idMembership}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update emailPosition Pref on a Board
   *
   * @name PutBoardsIdMyprefsEmailposition
   * @summary Update emailPosition Pref on a Board
   * @request PUT:/boards/{id}/myPrefs/emailPosition
   * @secure
   */
  public async putBoardsIdMyprefsEmailposition(
    id: TrelloID,
    query: {
      /** Valid values: bottom, top. Determines the position of the email address. */
      value: 'bottom' | 'top'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/myPrefs/emailPosition`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Change the default list that email-to-board cards are created in.
   *
   * @name PutBoardsIdMyprefsIdemaillist
   * @summary Update idEmailList Pref on a Board
   * @request PUT:/boards/{id}/myPrefs/idEmailList
   * @secure
   */
  public async putBoardsIdMyprefsIdemaillist(
    id: TrelloID,
    query: {
      /** The id of an email list. */
      value: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/myPrefs/idEmailList`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PutBoardsIdMyPrefsShowlistguide
   * @summary Update showListGuide Pref on a Board
   * @request PUT:/boards/{id}/myPrefs/showListGuide
   * @secure
   */
  public async putBoardsIdMyPrefsShowlistguide(
    id: TrelloID,
    query: {
      /** Determines whether to show the list guide. */
      value: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/myPrefs/showListGuide`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PutBoardsIdMyPrefsShowsidebar
   * @summary Update showSidebar Pref on a Board
   * @request PUT:/boards/{id}/myPrefs/showSidebar
   * @secure
   */
  public async putBoardsIdMyPrefsShowsidebar(
    id: TrelloID,
    query: {
      /** Determines whether to show the side bar. */
      value: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/myPrefs/showSidebar`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PutBoardsIdMyPrefsShowsidebaractivity
   * @summary Update showSidebarActivity Pref on a Board
   * @request PUT:/boards/{id}/myPrefs/showSidebarActivity
   * @secure
   */
  public async putBoardsIdMyPrefsShowsidebaractivity(
    id: TrelloID,
    query: {
      /** Determines whether to show sidebar activity. */
      value: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/myPrefs/showSidebarActivity`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PutBoardsIdMyPrefsShowsidebarboardactions
   * @summary Update showSidebarBoardActions Pref on a Board
   * @request PUT:/boards/{id}/myPrefs/showSidebarBoardActions
   * @secure
   */
  public async putBoardsIdMyPrefsShowsidebarboardactions(
    id: TrelloID,
    query: {
      /** Determines whether to show the sidebar board actions. */
      value: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/myPrefs/showSidebarBoardActions`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PutBoardsIdMyPrefsShowsidebarmembers
   * @summary Update showSidebarMembers Pref on a Board
   * @request PUT:/boards/{id}/myPrefs/showSidebarMembers
   * @secure
   */
  public async putBoardsIdMyPrefsShowsidebarmembers(
    id: TrelloID,
    query: {
      /** Determines whether to show members of the board in the sidebar. */
      value: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/myPrefs/showSidebarMembers`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new board.
   *
   * @name PostBoards
   * @summary Create a Board
   * @request POST:/boards/
   * @secure
   */
  public async postBoards(
    query: {
      /**
       * The new name for the board. 1 to 16384 characters long.
       * @minLength 1
       * @maxLength 16384
       */
      name: string
      /**
       * Determines whether to use the default set of labels.
       * @default true
       */
      defaultLabels?: boolean
      /**
       * Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.
       * @default true
       */
      defaultLists?: boolean
      /**
       * A new description for the board, 0 to 16384 characters long
       * @minLength 0
       * @maxLength 16384
       */
      desc?: string
      /** The id or name of the Workspace the board should belong to. */
      idOrganization?: TrelloID
      /** The id of a board to copy into the new board. */
      idBoardSource?: TrelloID
      /**
       * To keep cards from the original board pass in the value `cards`
       * @default "none"
       */
      keepFromSource?: 'cards' | 'none'
      /** The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`. */
      powerUps?: 'all' | 'calendar' | 'cardAging' | 'recap' | 'voting'
      /**
       * The permissions level of the board. One of: `org`, `private`, `public`.
       * @default "private"
       */
      prefs_permissionLevel?: 'org' | 'private' | 'public'
      /**
       * Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.
       * @default "disabled"
       */
      prefs_voting?: 'disabled' | 'members' | 'observers' | 'org' | 'public'
      /**
       * Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
       * @default "members"
       */
      prefs_comments?: 'disabled' | 'members' | 'observers' | 'org' | 'public'
      /**
       * Determines what types of members can invite users to join. One of: `admins`, `members`.
       * @default "members"
       */
      prefs_invitations?: 'members' | 'admins'
      /**
       * Determines whether users can join the boards themselves or whether they have to be invited.
       * @default true
       */
      prefs_selfJoin?: boolean
      /**
       * Determines whether card covers are enabled.
       * @default true
       */
      prefs_cardCovers?: boolean
      /**
       * The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.
       * @default "blue"
       */
      prefs_background?:
        | 'blue'
        | 'orange'
        | 'green'
        | 'red'
        | 'purple'
        | 'pink'
        | 'lime'
        | 'sky'
        | 'grey'
      /**
       * Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.
       * @default "regular"
       */
      prefs_cardAging?: 'pirate' | 'regular'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new board.
   *
   * @name PostBoardsIdCalendarkeyGenerate
   * @summary Create a calendarKey for a Board
   * @request POST:/boards/{id}/calendarKey/generate
   * @secure
   */
  public async postBoardsIdCalendarkeyGenerate(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/calendarKey/generate`,
      method: 'POST',
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PostBoardsIdEmailkeyGenerate
   * @summary Create a emailKey for a Board
   * @request POST:/boards/{id}/emailKey/generate
   * @secure
   */
  public async postBoardsIdEmailkeyGenerate(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/emailKey/generate`,
      method: 'POST',
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PostBoardsIdIdtags
   * @summary Create a Tag for a Board
   * @request POST:/boards/{id}/idTags
   * @secure
   */
  public async postBoardsIdIdtags(
    id: TrelloID,
    query: {
      /** The id of a tag from the organization to which this board belongs. */
      value: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/idTags`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PostBoardsIdMarkedasviewed
   * @summary Mark Board as viewed
   * @request POST:/boards/{id}/markedAsViewed
   * @secure
   */
  public async postBoardsIdMarkedasviewed(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/markedAsViewed`,
      method: 'POST',
      secure: true,
      ...params
    })
  }

  /**
   * Get the enabled Power-Ups on a board
   *
   * @name GetBoardsIdBoardplugins
   * @summary Get Enabled Power-Ups on Board
   * @request GET:/boards/{id}/boardPlugins
   * @secure
   */
  public async getBoardsIdBoardplugins(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Plugin[]> {
    return this.client.request<Plugin[]>({
      path: `/boards/${id}/boardPlugins`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Enable a Power-Up on a Board
   *
   * @name PostBoardsIdBoardplugins
   * @summary Enable a Power-Up on a Board
   * @request POST:/boards/{id}/boardPlugins
   * @deprecated
   * @secure
   */
  public async postBoardsIdBoardplugins(
    id: TrelloID,
    query?: {
      /** The ID of the Power-Up to enable */
      idPlugin?: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/boardPlugins`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Disable a Power-Up on a board
   *
   * @name DeleteBoardsIdBoardplugins
   * @summary Disable a Power-Up on a Board
   * @request DELETE:/boards/{id}/boardPlugins/{idPlugin}
   * @deprecated
   * @secure
   */
  public async deleteBoardsIdBoardplugins(
    id: TrelloID,
    idPlugin: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/boards/${id}/boardPlugins/${idPlugin}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * List the Power-Ups on a board
   *
   * @name GetBoardIdPlugins
   * @summary Get Power-Ups on a Board
   * @request GET:/boards/{id}/plugins
   * @secure
   */
  public async getBoardIdPlugins(
    id: TrelloID,
    query?: {
      /**
       * One of: `enabled` or `available`
       * @default "enabled"
       */
      filter?: 'enabled' | 'available'
    },
    params: IRequestParams = {}
  ): Promise<Plugin> {
    return this.client.request<Plugin>({
      path: `/boards/${id}/plugins`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }
}
