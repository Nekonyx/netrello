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
  BlockedKey,
  Board,
  BoardBackground,
  BoardFields,
  BoardStars,
  Card,
  Channel,
  CustomEmoji,
  CustomSticker,
  Member,
  MemberFields,
  Notification,
  NotificationChannelSettings,
  Organization,
  OrganizationFields,
  PosStringOrNumber,
  SavedSearch,
  Token,
  TrelloID
} from './data-contracts'
import { ContentType, HttpClient, IRequestParams } from './http-client'

export class Members {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Get a member
   *
   * @name GetMembersId
   * @summary Get a Member
   * @request GET:/members/{id}
   * @secure
   */
  public async getMembersId(
    id: TrelloID | string,
    query?: {
      /** See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource) */
      actions?: string
      /** See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource) */
      boards?: string
      /**
       * One of: `all`, `custom`, `default`, `none`, `premium`
       * @default "none"
       */
      boardBackgrounds?: 'all' | 'custom' | 'default' | 'none' | 'premium'
      /** `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned */
      boardsInvited?:
        | 'closed'
        | 'members'
        | 'open'
        | 'organization'
        | 'pinned'
        | 'public'
        | 'starred'
        | 'unpinned'
      /**
       * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "name,closed,idOrganization,pinned"
       */
      boardsInvited_fields?: BoardFields
      /**
       * Whether to return the boardStars or not
       * @default false
       */
      boardStars?: boolean
      /**
       * See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options
       * @default "none"
       */
      cards?: string
      /**
       * `all` or `none`
       * @default "none"
       */
      customBoardBackgrounds?: 'all' | 'none'
      /**
       * `all` or `none`
       * @default "none"
       */
      customEmoji?: 'all' | 'none'
      /**
       * `all` or `none`
       * @default "none"
       */
      customStickers?: 'all' | 'none'
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: MemberFields
      /** See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource) */
      notifications?: string
      /**
       * One of: `all`, `members`, `none`, `public`
       * @default "none"
       */
      organizations?: 'all' | 'members' | 'none' | 'public'
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      organization_fields?: OrganizationFields
      /**
       * Whether or not to include paid account information in the returned workspace object
       * @default false
       */
      organization_paid_account?: boolean
      /**
       * One of: `all`, `members`, `none`, `public`
       * @default "none"
       */
      organizationsInvited?: 'all' | 'members' | 'none' | 'public'
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      organizationsInvited_fields?: OrganizationFields
      /**
       * Whether or not to include paid account information in the returned member object
       * @deprecated
       * @default false
       */
      paid_account?: boolean
      /** @default false */
      savedSearches?: boolean
      /**
       * `all` or `none`
       * @default "none"
       */
      tokens?: 'all' | 'none'
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
      path: `/members/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update a Member
   *
   * @name PutMembersId
   * @summary Update a Member
   * @request PUT:/members/{id}
   * @secure
   */
  public async putMembersId(
    id: TrelloID,
    query?: {
      /** New name for the member. Cannot begin or end with a space. */
      fullName?: string
      /**
       * New initials for the member. 1-4 characters long.
       * @minLength 1
       * @maxLength 4
       */
      initials?: string
      /** New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique. */
      username?: string
      bio?: string
      /** One of: `gravatar`, `none`, `upload` */
      avatarSource?: 'gravatar' | 'none' | 'upload'
      'prefs/colorBlind'?: boolean
      'prefs/locale'?: string
      /**
       * `-1` for disabled, `1`, or `60`
       * @format int32
       */
      'prefs/minutesBetweenSummaries'?: number
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
      path: `/members/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a particular property of a member
   *
   * @name GetMembersIdField
   * @summary Get a field on a Member
   * @request GET:/members/{id}/{field}
   * @secure
   */
  public async getMembersIdField(
    id: TrelloID,
    field: MemberFields,
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
      path: `/members/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * List the actions for a member
   *
   * @name GetMembersIdActions
   * @summary Get a Member's Actions
   * @request GET:/members/{id}/actions
   * @secure
   */
  public async getMembersIdActions(
    id: TrelloID,
    query?: {
      /** A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). */
      filter?: string
    },
    params: IRequestParams = {}
  ): Promise<Member[]> {
    return this.client.request<Member[]>({
      path: `/members/${id}/actions`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a member's custom board backgrounds
   *
   * @name GetMembersIdBoardbackgrounds
   * @summary Get Member's custom Board backgrounds
   * @request GET:/members/{id}/boardBackgrounds
   * @secure
   */
  public async getMembersIdBoardbackgrounds(
    id: TrelloID,
    query?: {
      /**
       * One of: `all`, `custom`, `default`, `none`, `premium`
       * @default "all"
       */
      filter?: 'all' | 'custom' | 'default' | 'none' | 'premium'
    },
    params: IRequestParams = {}
  ): Promise<BoardBackground[]> {
    return this.client.request<BoardBackground[]>({
      path: `/members/${id}/boardBackgrounds`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Upload a new boardBackground
   *
   * @name PostMembersIdBoardbackgrounds1
   * @summary Upload new boardBackground for Member
   * @request POST:/members/{id}/boardBackgrounds
   * @secure
   */
  public async postMembersIdBoardbackgrounds1(
    id: TrelloID,
    query: {
      /** @format binary */
      file: File
    },
    params: IRequestParams = {}
  ): Promise<BoardBackground[]> {
    return this.client.request<BoardBackground[]>({
      path: `/members/${id}/boardBackgrounds`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a member's board background
   *
   * @name GetMembersIdBoardbackgroundsIdbackground
   * @summary Get a boardBackground of a Member
   * @request GET:/members/{id}/boardBackgrounds/{idBackground}
   * @secure
   */
  public async getMembersIdBoardbackgroundsIdbackground(
    id: TrelloID,
    idBackground: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`
       * @default "all"
       */
      fields?: 'all' | 'brightness' | 'fullSizeUrl' | 'scaled' | 'tile'
    },
    params: IRequestParams = {}
  ): Promise<BoardBackground> {
    return this.client.request<BoardBackground>({
      path: `/members/${id}/boardBackgrounds/${idBackground}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update a board background
   *
   * @name PutMembersIdBoardbackgroundsIdbackground
   * @summary Update a Member's custom Board background
   * @request PUT:/members/{id}/boardBackgrounds/{idBackground}
   * @secure
   */
  public async putMembersIdBoardbackgroundsIdbackground(
    id: TrelloID,
    idBackground: TrelloID,
    query?: {
      /** One of: `dark`, `light`, `unknown` */
      brightness?: 'dark' | 'light' | 'unknown'
      /** Whether the background should be tiled */
      tile?: boolean
    },
    params: IRequestParams = {}
  ): Promise<BoardBackground> {
    return this.client.request<BoardBackground>({
      path: `/members/${id}/boardBackgrounds/${idBackground}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a board background
   *
   * @name DeleteMembersIdBoardbackgroundsIdbackground
   * @summary Delete a Member's custom Board background
   * @request DELETE:/members/{id}/boardBackgrounds/{idBackground}
   * @secure
   */
  public async deleteMembersIdBoardbackgroundsIdbackground(
    id: TrelloID,
    idBackground: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/boardBackgrounds/${idBackground}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * List a member's board stars
   *
   * @name GetMembersIdBoardstars
   * @summary Get a Member's boardStars
   * @request GET:/members/{id}/boardStars
   * @secure
   */
  public async getMembersIdBoardstars(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/boardStars`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Star a new board on behalf of a Member
   *
   * @name PostMembersIdBoardstars
   * @summary Create Star for Board
   * @request POST:/members/{id}/boardStars
   * @secure
   */
  public async postMembersIdBoardstars(
    id: TrelloID | string,
    query: {
      /** The ID of the board to star */
      idBoard: TrelloID
      /** The position of the newly starred board. `top`, `bottom`, or a positive float. */
      pos: PosStringOrNumber
    },
    params: IRequestParams = {}
  ): Promise<BoardStars[]> {
    return this.client.request<BoardStars[]>({
      path: `/members/${id}/boardStars`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific boardStar
   *
   * @name GetMembersIdBoardstarsIdstar
   * @summary Get a boardStar of Member
   * @request GET:/members/{id}/boardStars/{idStar}
   * @secure
   */
  public async getMembersIdBoardstarsIdstar(
    id: TrelloID,
    idStar: TrelloID,
    params: IRequestParams = {}
  ): Promise<BoardStars> {
    return this.client.request<BoardStars>({
      path: `/members/${id}/boardStars/${idStar}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update the position of a starred board
   *
   * @name PutMembersIdBoardstarsIdstar
   * @summary Update the position of a boardStar of Member
   * @request PUT:/members/{id}/boardStars/{idStar}
   * @secure
   */
  public async putMembersIdBoardstarsIdstar(
    id: TrelloID,
    idStar: TrelloID,
    query?: {
      /** New position for the starred board. `top`, `bottom`, or a positive float. */
      pos?: PosStringOrNumber
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/boardStars/${idStar}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Unstar a board
   *
   * @name DeleteMembersIdBoardstarsIdstar
   * @summary Delete Star for Board
   * @request DELETE:/members/{id}/boardStars/{idStar}
   * @secure
   */
  public async deleteMembersIdBoardstarsIdstar(
    id: TrelloID,
    idStar: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/boardStars/${idStar}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Lists the boards that the user is a member of.
   *
   * @name GetMembersIdBoards
   * @summary Get Boards that Member belongs to
   * @request GET:/members/{id}/boards
   * @secure
   */
  public async getMembersIdBoards(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`
       * @default "all"
       */
      filter?:
        | 'all'
        | 'closed'
        | 'members'
        | 'open'
        | 'organization'
        | 'public'
        | 'starred'
      /**
       * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: BoardFields
      /**
       * Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`
       * @default "none"
       */
      lists?: 'all' | 'closed' | 'none' | 'open'
      /**
       * Whether to include the Organization object with the Boards
       * @default false
       */
      organization?: boolean
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "name,displayName"
       */
      organization_fields?: OrganizationFields
    },
    params: IRequestParams = {}
  ): Promise<Board[]> {
    return this.client.request<Board[]>({
      path: `/members/${id}/boards`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the boards the member has been invited to
   *
   * @name GetMembersIdBoardsinvited
   * @summary Get Boards the Member has been invited to
   * @request GET:/members/{id}/boardsInvited
   * @secure
   */
  public async getMembersIdBoardsinvited(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: BoardFields
    },
    params: IRequestParams = {}
  ): Promise<Board[]> {
    return this.client.request<Board[]>({
      path: `/members/${id}/boardsInvited`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Gets the cards a member is on
   *
   * @name GetMembersIdCards
   * @summary Get Cards the Member is on
   * @request GET:/members/{id}/cards
   * @secure
   */
  public async getMembersIdCards(
    id: TrelloID,
    query?: {
      /**
       * One of: `all`, `closed`, `none`, `open`, `visible`
       * @default "visible"
       */
      filter?: 'all' | 'closed' | 'none' | 'open' | 'visible'
    },
    params: IRequestParams = {}
  ): Promise<Card[]> {
    return this.client.request<Card[]>({
      path: `/members/${id}/cards`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a member's custom board backgrounds
   *
   * @name GetMembersIdCustomboardbackgrounds
   * @summary Get a Member's custom Board Backgrounds
   * @request GET:/members/{id}/customBoardBackgrounds
   * @secure
   */
  public async getMembersIdCustomboardbackgrounds(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<BoardBackground[]> {
    return this.client.request<BoardBackground[]>({
      path: `/members/${id}/customBoardBackgrounds`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Upload a new custom board background
   *
   * @name Membersidcustomboardbackgrounds1
   * @summary Create a new custom Board Background
   * @request POST:/members/{id}/customBoardBackgrounds
   * @secure
   */
  public async membersidcustomboardbackgrounds1(
    id: TrelloID,
    query: {
      /** @format binary */
      file: File
    },
    params: IRequestParams = {}
  ): Promise<BoardBackground> {
    return this.client.request<BoardBackground>({
      path: `/members/${id}/customBoardBackgrounds`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific custom board background
   *
   * @name GetMembersIdCustomboardbackgroundsIdbackground
   * @summary Get custom Board Background of Member
   * @request GET:/members/{id}/customBoardBackgrounds/{idBackground}
   * @secure
   */
  public async getMembersIdCustomboardbackgroundsIdbackground(
    id: TrelloID | string,
    idBackground: TrelloID,
    params: IRequestParams = {}
  ): Promise<BoardBackground> {
    return this.client.request<BoardBackground>({
      path: `/members/${id}/customBoardBackgrounds/${idBackground}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update a specific custom board background
   *
   * @name PutMembersIdCustomboardbackgroundsIdbackground
   * @summary Update custom Board Background of Member
   * @request PUT:/members/{id}/customBoardBackgrounds/{idBackground}
   * @secure
   */
  public async putMembersIdCustomboardbackgroundsIdbackground(
    id: TrelloID | string,
    idBackground: TrelloID,
    query?: {
      /** One of: `dark`, `light`, `unknown` */
      brightness?: 'dark' | 'light' | 'unknown'
      /** Whether to tile the background */
      tile?: boolean
    },
    params: IRequestParams = {}
  ): Promise<BoardBackground> {
    return this.client.request<BoardBackground>({
      path: `/members/${id}/customBoardBackgrounds/${idBackground}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a specific custom board background
   *
   * @name DeleteMembersIdCustomboardbackgroundsIdbackground
   * @summary Delete custom Board Background of Member
   * @request DELETE:/members/{id}/customBoardBackgrounds/{idBackground}
   * @secure
   */
  public async deleteMembersIdCustomboardbackgroundsIdbackground(
    id: TrelloID | string,
    idBackground: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/customBoardBackgrounds/${idBackground}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Get a Member's uploaded custom Emojis
   *
   * @name GetMembersIdCustomemoji
   * @summary Get a Member's customEmojis
   * @request GET:/members/{id}/customEmoji
   * @secure
   */
  public async getMembersIdCustomemoji(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<CustomEmoji[]> {
    return this.client.request<CustomEmoji[]>({
      path: `/members/${id}/customEmoji`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Create a new custom Emoji
   *
   * @name PostMembersIdCustomemoji
   * @summary Create custom Emoji for Member
   * @request POST:/members/{id}/customEmoji
   * @secure
   */
  public async postMembersIdCustomemoji(
    id: TrelloID,
    query: {
      /** @format binary */
      file: File
      /**
       * Name for the emoji. 2 - 64 characters
       * @minLength 2
       * @maxLength 64
       */
      name: string
    },
    params: IRequestParams = {}
  ): Promise<CustomEmoji> {
    return this.client.request<CustomEmoji>({
      path: `/members/${id}/customEmoji`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a Member's custom Emoji
   *
   * @name Membersidcustomemojiidemoji
   * @summary Get a Member's custom Emoji
   * @request GET:/members/{id}/customEmoji/{idEmoji}
   * @secure
   */
  public async membersidcustomemojiidemoji(
    id: TrelloID,
    idEmoji: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of `name`, `url`
       * @default "all"
       */
      fields?: 'name' | 'url' | 'all'
    },
    params: IRequestParams = {}
  ): Promise<CustomEmoji> {
    return this.client.request<CustomEmoji>({
      path: `/members/${id}/customEmoji/${idEmoji}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a Member's uploaded stickers
   *
   * @name GetMembersIdCustomstickers
   * @summary Get Member's custom Stickers
   * @request GET:/members/{id}/customStickers
   * @secure
   */
  public async getMembersIdCustomstickers(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<CustomSticker[]> {
    return this.client.request<CustomSticker[]>({
      path: `/members/${id}/customStickers`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Upload a new custom sticker
   *
   * @name PostMembersIdCustomstickers
   * @summary Create custom Sticker for Member
   * @request POST:/members/{id}/customStickers
   * @secure
   */
  public async postMembersIdCustomstickers(
    id: TrelloID,
    query: {
      /** @format binary */
      file: File
    },
    params: IRequestParams = {}
  ): Promise<CustomSticker> {
    return this.client.request<CustomSticker>({
      path: `/members/${id}/customStickers`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a Member's custom Sticker
   *
   * @name GetMembersIdCustomstickersIdsticker
   * @summary Get a Member's custom Sticker
   * @request GET:/members/{id}/customStickers/{idSticker}
   * @secure
   */
  public async getMembersIdCustomstickersIdsticker(
    id: TrelloID,
    idSticker: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of `scaled`, `url`
       * @default "all"
       */
      fields?: 'scaled' | 'url' | 'all'
    },
    params: IRequestParams = {}
  ): Promise<CustomSticker> {
    return this.client.request<CustomSticker>({
      path: `/members/${id}/customStickers/${idSticker}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a Member's custom Sticker
   *
   * @name DeleteMembersIdCustomstickersIdsticker
   * @summary Delete a Member's custom Sticker
   * @request DELETE:/members/{id}/customStickers/{idSticker}
   * @secure
   */
  public async deleteMembersIdCustomstickersIdsticker(
    id: TrelloID,
    idSticker: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/customStickers/${idSticker}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Get a member's notifications
   *
   * @name GetMembersIdNotifications
   * @summary Get Member's Notifications
   * @request GET:/members/{id}/notifications
   * @secure
   */
  public async getMembersIdNotifications(
    id: TrelloID,
    query?: {
      /** @default false */
      entities?: boolean
      /** @default false */
      display?: boolean
      /** @default "all" */
      filter?: string
      /**
       * One of: `all`, `read`, `unread`
       * @default "all"
       */
      read_filter?: string
      /**
       * `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: string
      /**
       * Max 1000
       * @format int32
       * @default "50"
       */
      limit?: number
      /**
       * Max 100
       * @format int32
       * @default "0"
       */
      page?: number
      /** A notification ID */
      before?: string
      /** A notification ID */
      since?: string
      /** @default true */
      memberCreator?: boolean
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "avatarHash,fullName,initials,username"
       */
      memberCreator_fields?: string
    },
    params: IRequestParams = {}
  ): Promise<Notification[]> {
    return this.client.request<Notification[]>({
      path: `/members/${id}/notifications`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a member's Workspaces
   *
   * @name GetMembersIdOrganizations
   * @summary Get Member's Organizations
   * @request GET:/members/{id}/organizations
   * @secure
   */
  public async getMembersIdOrganizations(
    id: TrelloID,
    query?: {
      /**
       * One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)
       * @default "all"
       */
      filter?: 'all' | 'members' | 'none' | 'public'
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: OrganizationFields
      /**
       * Whether or not to include paid account information in the returned workspace object
       * @default false
       */
      paid_account?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Organization[]> {
    return this.client.request<Organization[]>({
      path: `/members/${id}/organizations`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a member's Workspaces they have been invited to
   *
   * @name GetMembersIdOrganizationsinvited
   * @summary Get Organizations a Member has been invited to
   * @request GET:/members/{id}/organizationsInvited
   * @secure
   */
  public async getMembersIdOrganizationsinvited(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: OrganizationFields
    },
    params: IRequestParams = {}
  ): Promise<Organization[]> {
    return this.client.request<Organization[]>({
      path: `/members/${id}/organizationsInvited`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * List the saved searches of a Member
   *
   * @name GetMembersIdSavedsearches
   * @summary Get Member's saved searched
   * @request GET:/members/{id}/savedSearches
   * @secure
   */
  public async getMembersIdSavedsearches(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<SavedSearch[]> {
    return this.client.request<SavedSearch[]>({
      path: `/members/${id}/savedSearches`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Create a saved search
   *
   * @name PostMembersIdSavedsearches
   * @summary Create saved Search for Member
   * @request POST:/members/{id}/savedSearches
   * @secure
   */
  public async postMembersIdSavedsearches(
    id: TrelloID,
    query: {
      /** The name for the saved search */
      name: string
      /** The search query */
      query: string
      /** The position of the saved search. `top`, `bottom`, or a positive float. */
      pos: PosStringOrNumber
    },
    params: IRequestParams = {}
  ): Promise<SavedSearch> {
    return this.client.request<SavedSearch>({
      path: `/members/${id}/savedSearches`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a saved search
   *
   * @name GetMembersIdSavedsearchesIdsearch
   * @summary Get a saved search
   * @request GET:/members/{id}/savedSearches/{idSearch}
   * @secure
   */
  public async getMembersIdSavedsearchesIdsearch(
    id: string,
    idSearch: string,
    params: IRequestParams = {}
  ): Promise<SavedSearch> {
    return this.client.request<SavedSearch>({
      path: `/members/${id}/savedSearches/${idSearch}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update a saved search
   *
   * @name PutMembersIdSavedsearchesIdsearch
   * @summary Update a saved search
   * @request PUT:/members/{id}/savedSearches/{idSearch}
   * @secure
   */
  public async putMembersIdSavedsearchesIdsearch(
    id: string,
    idSearch: string,
    query?: {
      /** The new name for the saved search */
      name?: string
      /** The new search query */
      query?: string
      /** New position for saves search. `top`, `bottom`, or a positive float. */
      pos?: string
    },
    params: IRequestParams = {}
  ): Promise<SavedSearch> {
    return this.client.request<SavedSearch>({
      path: `/members/${id}/savedSearches/${idSearch}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a saved search
   *
   * @name DeleteMembersIdSavedsearchesIdsearch
   * @summary Delete a saved search
   * @request DELETE:/members/{id}/savedSearches/{idSearch}
   * @secure
   */
  public async deleteMembersIdSavedsearchesIdsearch(
    id: string,
    idSearch: string,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/savedSearches/${idSearch}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * List a members app tokens
   *
   * @name GetMembersIdTokens
   * @summary Get Member's Tokens
   * @request GET:/members/{id}/tokens
   * @secure
   */
  public async getMembersIdTokens(
    id: TrelloID,
    query?: {
      /**
       * Whether to include webhooks
       * @default false
       */
      webhooks?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Token[]> {
    return this.client.request<Token[]>({
      path: `/members/${id}/tokens`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new avatar for a member
   *
   * @name Membersidavatar
   * @summary Create Avatar for Member
   * @request POST:/members/{id}/avatar
   * @secure
   */
  public async membersidavatar(
    id: string,
    query: {
      /** @format binary */
      file: File
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/avatar`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Dismiss a message
   *
   * @name PostMembersIdOnetimemessagesdismissed
   * @summary Dismiss a message for Member
   * @request POST:/members/{id}/oneTimeMessagesDismissed
   * @secure
   */
  public async postMembersIdOnetimemessagesdismissed(
    id: TrelloID,
    query: {
      /** The message to dismiss */
      value: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/members/${id}/oneTimeMessagesDismissed`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a member's notification channel settings
   *
   * @name GetMembersIdNotificationChannelSettings
   * @summary Get a Member's notification channel settings
   * @request GET:/members/{id}/notificationsChannelSettings
   * @secure
   */
  public async getMembersIdNotificationChannelSettings(
    id: TrelloID | string,
    params: IRequestParams = {}
  ): Promise<NotificationChannelSettings[]> {
    return this.client.request<NotificationChannelSettings[]>({
      path: `/members/${id}/notificationsChannelSettings`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update blocked notification keys of Member on a specific channel
   *
   * @name PutMembersIdNotificationChannelSettingsChannelBlockedKeys
   * @summary Update blocked notification keys of Member on a channel
   * @request PUT:/members/{id}/notificationsChannelSettings
   * @secure
   */
  public async putMembersIdNotificationChannelSettingsChannelBlockedKeys(
    id: TrelloID | string,
    data: {
      channel: Channel
      /** Blocked key or array of blocked keys. */
      blockedKeys: BlockedKey | BlockedKey[]
    },
    params: IRequestParams = {}
  ): Promise<NotificationChannelSettings> {
    return this.client.request<NotificationChannelSettings>({
      path: `/members/${id}/notificationsChannelSettings`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * Get blocked notification keys of Member on a specific channel
   *
   * @name GetMembersIdNotificationChannelSettingsChannel
   * @summary Get blocked notification keys of Member on this channel
   * @request GET:/members/{id}/notificationsChannelSettings/{channel}
   * @secure
   */
  public async getMembersIdNotificationChannelSettingsChannel(
    id: TrelloID | string,
    channel: Channel,
    params: IRequestParams = {}
  ): Promise<NotificationChannelSettings> {
    return this.client.request<NotificationChannelSettings>({
      path: `/members/${id}/notificationsChannelSettings/${channel}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update blocked notification keys of Member on a specific channel
   *
   * @name PutMembersIdNotificationChannelSettingsChannelBlockedKeys2
   * @summary Update blocked notification keys of Member on a channel
   * @request PUT:/members/{id}/notificationsChannelSettings/{channel}
   * @originalName putMembersIdNotificationChannelSettingsChannelBlockedKeys
   * @duplicate
   * @secure
   */
  public async putMembersIdNotificationChannelSettingsChannelBlockedKeys2(
    id: TrelloID | string,
    channel: Channel,
    data: {
      /** Singular key or array of notification keys */
      blockedKeys: BlockedKey | BlockedKey[]
    },
    params: IRequestParams = {}
  ): Promise<NotificationChannelSettings> {
    return this.client.request<NotificationChannelSettings>({
      path: `/members/${id}/notificationsChannelSettings/${channel}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * Update blocked notification keys of Member on a specific channel
   *
   * @name PutMembersIdNotificationChannelSettingsChannelBlockedKeys3
   * @summary Update blocked notification keys of Member on a channel
   * @request PUT:/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}
   * @originalName putMembersIdNotificationChannelSettingsChannelBlockedKeys
   * @duplicate
   * @secure
   */
  public async putMembersIdNotificationChannelSettingsChannelBlockedKeys3(
    id: TrelloID | string,
    channel: Channel,
    blockedKeys: BlockedKey,
    params: IRequestParams = {}
  ): Promise<NotificationChannelSettings> {
    return this.client.request<NotificationChannelSettings>({
      path: `/members/${id}/notificationsChannelSettings/${channel}/${blockedKeys}`,
      method: 'PUT',
      secure: true,
      ...params
    })
  }
}
