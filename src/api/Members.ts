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
  BoardFields,
  Channel,
  IBoard,
  IBoardBackground,
  IBoardStars,
  ICard,
  ICustomEmoji,
  ICustomSticker,
  IMember,
  INotification,
  INotificationChannelSettings,
  IOrganization,
  IPosStringOrNumber,
  ISavedSearch,
  IToken,
  MemberFields,
  OrganizationFields,
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
   * @name Get
   * @summary Get a Member
   * @request GET:/members/{id}
   * @secure
   */
  public async get(
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
  ): Promise<IMember> {
    return this.client.request<IMember>({
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
   * @name Update
   * @summary Update a Member
   * @request PUT:/members/{id}
   * @secure
   */
  public async update(
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
  ): Promise<IMember> {
    return this.client.request<IMember>({
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
   * @name GetField
   * @summary Get a field on a Member
   * @request GET:/members/{id}/{field}
   * @secure
   */
  public async getField(
    id: TrelloID,
    field: MemberFields,
    params: IRequestParams = {}
  ): Promise<IMember> {
    return this.client.request<IMember>({
      path: `/members/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * List the actions for a member
   *
   * @name GetActions
   * @summary Get a Member's Actions
   * @request GET:/members/{id}/actions
   * @secure
   */
  public async getActions(
    id: TrelloID,
    query?: {
      /** A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). */
      filter?: string
    },
    params: IRequestParams = {}
  ): Promise<IMember[]> {
    return this.client.request<IMember[]>({
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
   * @name GetBoardBackgrounds
   * @summary Get Member's custom Board backgrounds
   * @request GET:/members/{id}/boardBackgrounds
   * @secure
   */
  public async getBoardBackgrounds(
    id: TrelloID,
    query?: {
      /**
       * One of: `all`, `custom`, `default`, `none`, `premium`
       * @default "all"
       */
      filter?: 'all' | 'custom' | 'default' | 'none' | 'premium'
    },
    params: IRequestParams = {}
  ): Promise<IBoardBackground[]> {
    return this.client.request<IBoardBackground[]>({
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
   * @name CreateBoardBackgrounds
   * @summary Upload new boardBackground for Member
   * @request POST:/members/{id}/boardBackgrounds
   * @secure
   */
  public async createBoardBackgrounds(
    id: TrelloID,
    query: {
      /** @format binary */
      file: File
    },
    params: IRequestParams = {}
  ): Promise<IBoardBackground[]> {
    return this.client.request<IBoardBackground[]>({
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
   * @name GetBoardBackgroundsIdBackground
   * @summary Get a boardBackground of a Member
   * @request GET:/members/{id}/boardBackgrounds/{idBackground}
   * @secure
   */
  public async getBoardBackgroundsIdBackground(
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
  ): Promise<IBoardBackground> {
    return this.client.request<IBoardBackground>({
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
   * @name UpdateBoardBackgroundsIdBackground
   * @summary Update a Member's custom Board background
   * @request PUT:/members/{id}/boardBackgrounds/{idBackground}
   * @secure
   */
  public async updateBoardBackgroundsIdBackground(
    id: TrelloID,
    idBackground: TrelloID,
    query?: {
      /** One of: `dark`, `light`, `unknown` */
      brightness?: 'dark' | 'light' | 'unknown'
      /** Whether the background should be tiled */
      tile?: boolean
    },
    params: IRequestParams = {}
  ): Promise<IBoardBackground> {
    return this.client.request<IBoardBackground>({
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
   * @name DeleteBoardBackgroundsIdBackground
   * @summary Delete a Member's custom Board background
   * @request DELETE:/members/{id}/boardBackgrounds/{idBackground}
   * @secure
   */
  public async deleteBoardBackgroundsIdBackground(
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
   * @name GetBoardStars
   * @summary Get a Member's boardStars
   * @request GET:/members/{id}/boardStars
   * @secure
   */
  public async getBoardStars(
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
   * @name CreateBoardStars
   * @summary Create Star for Board
   * @request POST:/members/{id}/boardStars
   * @secure
   */
  public async createBoardStars(
    id: TrelloID | string,
    query: {
      /** The ID of the board to star */
      idBoard: TrelloID
      /** The position of the newly starred board. `top`, `bottom`, or a positive float. */
      pos: IPosStringOrNumber
    },
    params: IRequestParams = {}
  ): Promise<IBoardStars[]> {
    return this.client.request<IBoardStars[]>({
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
   * @name GetBoardStarsIdStar
   * @summary Get a boardStar of Member
   * @request GET:/members/{id}/boardStars/{idStar}
   * @secure
   */
  public async getBoardStarsIdStar(
    id: TrelloID,
    idStar: TrelloID,
    params: IRequestParams = {}
  ): Promise<IBoardStars> {
    return this.client.request<IBoardStars>({
      path: `/members/${id}/boardStars/${idStar}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update the position of a starred board
   *
   * @name UpdateBoardStarsIdStar
   * @summary Update the position of a boardStar of Member
   * @request PUT:/members/{id}/boardStars/{idStar}
   * @secure
   */
  public async updateBoardStarsIdStar(
    id: TrelloID,
    idStar: TrelloID,
    query?: {
      /** New position for the starred board. `top`, `bottom`, or a positive float. */
      pos?: IPosStringOrNumber
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
   * @name DeleteBoardStarsIdStar
   * @summary Delete Star for Board
   * @request DELETE:/members/{id}/boardStars/{idStar}
   * @secure
   */
  public async deleteBoardStarsIdStar(
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
   * @name GetBoards
   * @summary Get Boards that Member belongs to
   * @request GET:/members/{id}/boards
   * @secure
   */
  public async getBoards(
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
  ): Promise<IBoard[]> {
    return this.client.request<IBoard[]>({
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
   * @name GetBoardsInvited
   * @summary Get Boards the Member has been invited to
   * @request GET:/members/{id}/boardsInvited
   * @secure
   */
  public async getBoardsInvited(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: BoardFields
    },
    params: IRequestParams = {}
  ): Promise<IBoard[]> {
    return this.client.request<IBoard[]>({
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
   * @name GetCards
   * @summary Get Cards the Member is on
   * @request GET:/members/{id}/cards
   * @secure
   */
  public async getCards(
    id: TrelloID,
    query?: {
      /**
       * One of: `all`, `closed`, `none`, `open`, `visible`
       * @default "visible"
       */
      filter?: 'all' | 'closed' | 'none' | 'open' | 'visible'
    },
    params: IRequestParams = {}
  ): Promise<ICard[]> {
    return this.client.request<ICard[]>({
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
   * @name GetCustomBoardBackgrounds
   * @summary Get a Member's custom Board Backgrounds
   * @request GET:/members/{id}/customBoardBackgrounds
   * @secure
   */
  public async getCustomBoardBackgrounds(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<IBoardBackground[]> {
    return this.client.request<IBoardBackground[]>({
      path: `/members/${id}/customBoardBackgrounds`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Upload a new custom board background
   *
   * @name CreateCustomBoardBackgrounds
   * @summary Create a new custom Board Background
   * @request POST:/members/{id}/customBoardBackgrounds
   * @secure
   */
  public async createCustomBoardBackgrounds(
    id: TrelloID,
    query: {
      /** @format binary */
      file: File
    },
    params: IRequestParams = {}
  ): Promise<IBoardBackground> {
    return this.client.request<IBoardBackground>({
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
   * @name GetCustomBoardBackgroundsIdBackground
   * @summary Get custom Board Background of Member
   * @request GET:/members/{id}/customBoardBackgrounds/{idBackground}
   * @secure
   */
  public async getCustomBoardBackgroundsIdBackground(
    id: TrelloID | string,
    idBackground: TrelloID,
    params: IRequestParams = {}
  ): Promise<IBoardBackground> {
    return this.client.request<IBoardBackground>({
      path: `/members/${id}/customBoardBackgrounds/${idBackground}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update a specific custom board background
   *
   * @name UpdateCustomBoardBackgroundsIdBackground
   * @summary Update custom Board Background of Member
   * @request PUT:/members/{id}/customBoardBackgrounds/{idBackground}
   * @secure
   */
  public async updateCustomBoardBackgroundsIdBackground(
    id: TrelloID | string,
    idBackground: TrelloID,
    query?: {
      /** One of: `dark`, `light`, `unknown` */
      brightness?: 'dark' | 'light' | 'unknown'
      /** Whether to tile the background */
      tile?: boolean
    },
    params: IRequestParams = {}
  ): Promise<IBoardBackground> {
    return this.client.request<IBoardBackground>({
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
   * @name DeleteCustomBoardBackgroundsIdBackground
   * @summary Delete custom Board Background of Member
   * @request DELETE:/members/{id}/customBoardBackgrounds/{idBackground}
   * @secure
   */
  public async deleteCustomBoardBackgroundsIdBackground(
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
   * @name GetCustomEmoji
   * @summary Get a Member's customEmojis
   * @request GET:/members/{id}/customEmoji
   * @secure
   */
  public async getCustomEmoji(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<ICustomEmoji[]> {
    return this.client.request<ICustomEmoji[]>({
      path: `/members/${id}/customEmoji`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Create a new custom Emoji
   *
   * @name CreateCustomEmoji
   * @summary Create custom Emoji for Member
   * @request POST:/members/{id}/customEmoji
   * @secure
   */
  public async createCustomEmoji(
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
  ): Promise<ICustomEmoji> {
    return this.client.request<ICustomEmoji>({
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
   * @name GetCustomEmojiIdEmoji
   * @summary Get a Member's custom Emoji
   * @request GET:/members/{id}/customEmoji/{idEmoji}
   * @secure
   */
  public async getCustomEmojiIdEmoji(
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
  ): Promise<ICustomEmoji> {
    return this.client.request<ICustomEmoji>({
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
   * @name GetCustomStickers
   * @summary Get Member's custom Stickers
   * @request GET:/members/{id}/customStickers
   * @secure
   */
  public async getCustomStickers(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<ICustomSticker[]> {
    return this.client.request<ICustomSticker[]>({
      path: `/members/${id}/customStickers`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Upload a new custom sticker
   *
   * @name CreateCustomStickers
   * @summary Create custom Sticker for Member
   * @request POST:/members/{id}/customStickers
   * @secure
   */
  public async createCustomStickers(
    id: TrelloID,
    query: {
      /** @format binary */
      file: File
    },
    params: IRequestParams = {}
  ): Promise<ICustomSticker> {
    return this.client.request<ICustomSticker>({
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
   * @name GetCustomStickersIdSticker
   * @summary Get a Member's custom Sticker
   * @request GET:/members/{id}/customStickers/{idSticker}
   * @secure
   */
  public async getCustomStickersIdSticker(
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
  ): Promise<ICustomSticker> {
    return this.client.request<ICustomSticker>({
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
   * @name DeleteCustomStickersIdSticker
   * @summary Delete a Member's custom Sticker
   * @request DELETE:/members/{id}/customStickers/{idSticker}
   * @secure
   */
  public async deleteCustomStickersIdSticker(
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
   * @name GetNotifications
   * @summary Get Member's Notifications
   * @request GET:/members/{id}/notifications
   * @secure
   */
  public async getNotifications(
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
  ): Promise<INotification[]> {
    return this.client.request<INotification[]>({
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
   * @name GetOrganizations
   * @summary Get Member's Organizations
   * @request GET:/members/{id}/organizations
   * @secure
   */
  public async getOrganizations(
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
  ): Promise<IOrganization[]> {
    return this.client.request<IOrganization[]>({
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
   * @name GetOrganizationsInvited
   * @summary Get Organizations a Member has been invited to
   * @request GET:/members/{id}/organizationsInvited
   * @secure
   */
  public async getOrganizationsInvited(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: OrganizationFields
    },
    params: IRequestParams = {}
  ): Promise<IOrganization[]> {
    return this.client.request<IOrganization[]>({
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
   * @name GetSavedSearches
   * @summary Get Member's saved searched
   * @request GET:/members/{id}/savedSearches
   * @secure
   */
  public async getSavedSearches(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<ISavedSearch[]> {
    return this.client.request<ISavedSearch[]>({
      path: `/members/${id}/savedSearches`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Create a saved search
   *
   * @name CreateSavedSearches
   * @summary Create saved Search for Member
   * @request POST:/members/{id}/savedSearches
   * @secure
   */
  public async createSavedSearches(
    id: TrelloID,
    query: {
      /** The name for the saved search */
      name: string
      /** The search query */
      query: string
      /** The position of the saved search. `top`, `bottom`, or a positive float. */
      pos: IPosStringOrNumber
    },
    params: IRequestParams = {}
  ): Promise<ISavedSearch> {
    return this.client.request<ISavedSearch>({
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
   * @name GetSavedSearchesIdSearch
   * @summary Get a saved search
   * @request GET:/members/{id}/savedSearches/{idSearch}
   * @secure
   */
  public async getSavedSearchesIdSearch(
    id: string,
    idSearch: string,
    params: IRequestParams = {}
  ): Promise<ISavedSearch> {
    return this.client.request<ISavedSearch>({
      path: `/members/${id}/savedSearches/${idSearch}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update a saved search
   *
   * @name UpdateSavedSearchesIdSearch
   * @summary Update a saved search
   * @request PUT:/members/{id}/savedSearches/{idSearch}
   * @secure
   */
  public async updateSavedSearchesIdSearch(
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
  ): Promise<ISavedSearch> {
    return this.client.request<ISavedSearch>({
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
   * @name DeleteSavedSearchesIdSearch
   * @summary Delete a saved search
   * @request DELETE:/members/{id}/savedSearches/{idSearch}
   * @secure
   */
  public async deleteSavedSearchesIdSearch(
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
   * @name GetTokens
   * @summary Get Member's Tokens
   * @request GET:/members/{id}/tokens
   * @secure
   */
  public async getTokens(
    id: TrelloID,
    query?: {
      /**
       * Whether to include webhooks
       * @default false
       */
      webhooks?: boolean
    },
    params: IRequestParams = {}
  ): Promise<IToken[]> {
    return this.client.request<IToken[]>({
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
   * @name CreateAvatar
   * @summary Create Avatar for Member
   * @request POST:/members/{id}/avatar
   * @secure
   */
  public async createAvatar(
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
   * @name CreateOneTimeMessagesDismissed
   * @summary Dismiss a message for Member
   * @request POST:/members/{id}/oneTimeMessagesDismissed
   * @secure
   */
  public async createOneTimeMessagesDismissed(
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
   * @name GetNotificationsChannelSettings
   * @summary Get a Member's notification channel settings
   * @request GET:/members/{id}/notificationsChannelSettings
   * @secure
   */
  public async getNotificationsChannelSettings(
    id: TrelloID | string,
    params: IRequestParams = {}
  ): Promise<INotificationChannelSettings[]> {
    return this.client.request<INotificationChannelSettings[]>({
      path: `/members/${id}/notificationsChannelSettings`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update blocked notification keys of Member on a specific channel
   *
   * @name UpdateNotificationsChannelSettings
   * @summary Update blocked notification keys of Member on a channel
   * @request PUT:/members/{id}/notificationsChannelSettings
   * @secure
   */
  public async updateNotificationsChannelSettings(
    id: TrelloID | string,
    data: {
      channel: Channel
      /** Blocked key or array of blocked keys. */
      blockedKeys: BlockedKey | BlockedKey[]
    },
    params: IRequestParams = {}
  ): Promise<INotificationChannelSettings> {
    return this.client.request<INotificationChannelSettings>({
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
   * @name GetNotificationsChannelSettingsChannel
   * @summary Get blocked notification keys of Member on this channel
   * @request GET:/members/{id}/notificationsChannelSettings/{channel}
   * @secure
   */
  public async getNotificationsChannelSettingsChannel(
    id: TrelloID | string,
    channel: Channel,
    params: IRequestParams = {}
  ): Promise<INotificationChannelSettings> {
    return this.client.request<INotificationChannelSettings>({
      path: `/members/${id}/notificationsChannelSettings/${channel}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update blocked notification keys of Member on a specific channel
   *
   * @name UpdateNotificationsChannelSettingsChannel
   * @summary Update blocked notification keys of Member on a channel
   * @request PUT:/members/{id}/notificationsChannelSettings/{channel}
   * @originalName updateNotificationsChannelSettingsChannel
   * @duplicate
   * @secure
   */
  public async updateNotificationsChannelSettingsChannel(
    id: TrelloID | string,
    channel: Channel,
    data: {
      /** Singular key or array of notification keys */
      blockedKeys: BlockedKey | BlockedKey[]
    },
    params: IRequestParams = {}
  ): Promise<INotificationChannelSettings> {
    return this.client.request<INotificationChannelSettings>({
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
   * @name UpdateNotificationsChannelSettingsChannelBlockedKeys
   * @summary Update blocked notification keys of Member on a channel
   * @request PUT:/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}
   * @originalName updateNotificationsChannelSettingsChannelBlockedKeys
   * @duplicate
   * @secure
   */
  public async updateNotificationsChannelSettingsChannelBlockedKeys(
    id: TrelloID | string,
    channel: Channel,
    blockedKeys: BlockedKey,
    params: IRequestParams = {}
  ): Promise<INotificationChannelSettings> {
    return this.client.request<INotificationChannelSettings>({
      path: `/members/${id}/notificationsChannelSettings/${channel}/${blockedKeys}`,
      method: 'PUT',
      secure: true,
      ...params
    })
  }
}
