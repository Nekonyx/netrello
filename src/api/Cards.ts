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
  AttachmentFields,
  CardFields,
  IAction,
  IAttachment,
  ICard,
  ICheckItem,
  ICustomFieldItems,
  IPosStringOrNumber,
  TrelloID
} from './data-contracts'
import { ContentType, HttpClient, IRequestParams } from './http-client'

export class Cards {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Create a new card
   *
   * @name Create
   * @summary Create a new Card
   * @request POST:/cards
   * @secure
   */
  public async create(
    query: {
      /** The name for the card */
      name?: string
      /** The description for the card */
      desc?: string
      /** The position of the new card. `top`, `bottom`, or a positive float */
      pos?: 'top' | 'bottom' | number
      /**
       * A due date for the card
       * @format date
       */
      due?: string
      /**
       * The start date of a card, or `null`
       * @format date
       */
      start?: string | null
      dueComplete?: boolean
      /** The ID of the list the card should be created in */
      idList: TrelloID
      /** Comma-separated list of member IDs to add to the card */
      idMembers?: TrelloID[]
      /** Comma-separated list of label IDs to add to the card */
      idLabels?: TrelloID[]
      /**
       * A URL starting with `http://` or `https://`
       * @format url
       */
      urlSource?: string
      /** @format binary */
      fileSource?: File
      /** The mimeType of the attachment. Max length 256 */
      mimeType?: string
      /** The ID of a card to copy into the new card */
      idCardSource?: TrelloID
      /**
       * If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`
       * @default "all"
       */
      keepFromSource?:
        | 'all'
        | 'attachments'
        | 'checklists'
        | 'comments'
        | 'customFields'
        | 'due'
        | 'start'
        | 'labels'
        | 'members'
        | 'stickers'
      /** For use with/by the Map View */
      address?: string
      /** For use with/by the Map View */
      locationName?: string
      /** For use with/by the Map View. Should take the form latitude,longitude */
      coordinates?: string
    },
    params: IRequestParams = {}
  ): Promise<ICard> {
    return this.client.request<ICard>({
      path: `/cards`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a card by its ID
   *
   * @name Get
   * @summary Get a Card
   * @request GET:/cards/{id}
   * @secure
   */
  public async get(
    id: TrelloID,
    query?: {
      /** `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url` */
      fields?: string
      /** See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource) */
      actions?: string
      /**
       * `true`, `false`, or `cover`
       * @default false
       */
      attachments?: 'cover' | boolean
      /**
       * `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      attachment_fields?: string
      /**
       * Whether to return member objects for members on the card
       * @default false
       */
      members?: boolean
      /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username` */
      member_fields?: string
      /**
       * Whether to return member objects for members who voted on the card
       * @default false
       */
      membersVoted?: boolean
      /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username` */
      memberVoted_fields?: string
      /** @default false */
      checkItemStates?: boolean
      /**
       * Whether to return the checklists on the card. `all` or `none`
       * @default "none"
       */
      checklists?: string
      /**
       * `all` or a comma-separated list of `idBoard,idCard,name,pos`
       * @default "all"
       */
      checklist_fields?: string
      /**
       * Whether to return the board object the card is on
       * @default false
       */
      board?: boolean
      /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs` */
      board_fields?: string
      /**
       * See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)
       * @default false
       */
      list?: boolean
      /**
       * Whether to include pluginData on the card with the response
       * @default false
       */
      pluginData?: boolean
      /**
       * Whether to include sticker models with the response
       * @default false
       */
      stickers?: boolean
      /**
       * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      sticker_fields?: string
      /**
       * Whether to include the customFieldItems
       * @default false
       */
      customFieldItems?: boolean
    },
    params: IRequestParams = {}
  ): Promise<ICard> {
    return this.client.request<ICard>({
      path: `/cards/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update a card
   *
   * @name Update
   * @summary Update a Card
   * @request PUT:/cards/{id}
   * @secure
   */
  public async update(
    id: TrelloID,
    query?: {
      /** The new name for the card */
      name?: string
      /** The new description for the card */
      desc?: string
      /** Whether the card should be archived (closed: true) */
      closed?: boolean
      /** Comma-separated list of member IDs */
      idMembers?: TrelloID
      /** The ID of the image attachment the card should use as its cover, or null for none */
      idAttachmentCover?: TrelloID
      /** The ID of the list the card should be in */
      idList?: TrelloID
      /** Comma-separated list of label IDs */
      idLabels?: TrelloID
      /** The ID of the board the card should be on */
      idBoard?: TrelloID
      /** The position of the card in its list. `top`, `bottom`, or a positive float */
      pos?: 'top' | 'bottom' | number
      /**
       * When the card is due, or `null`
       * @format date
       */
      due?: string | null
      /**
       * The start date of a card, or `null`
       * @format date
       */
      start?: string | null
      /** Whether the due date should be marked complete */
      dueComplete?: boolean
      /** Whether the member is should be subscribed to the card */
      subscribed?: boolean
      /** For use with/by the Map View */
      address?: string
      /** For use with/by the Map View */
      locationName?: string
      /** For use with/by the Map View. Should be latitude,longitude */
      coordinates?: string
      /**
       * Updates the card's cover
       *  | Option | Values | About |
       *  |--------|--------|-------|
       *  | color | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . |
       *  | brightness | `dark`, `light` | Determines whether the text on the cover should be dark or light.
       *  | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.
       *  | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |
       *  | size | `normal`, `full` | Determines whether to show the card name on the cover, or below it. |
       *
       *  `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.
       *
       *  On the brightness options, setting it to light will make the text on the card cover dark:
       *  ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)
       *
       *  And vice versa, setting it to dark will make the text on the card cover light:
       *  ![](/cloud/trello/images/rest/cards/cover-brightness-light.png)
       */
      cover?: {
        /**
         * An object containing information regarding the card's cover
         *  `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and an `idAttachment` at the same time.
         */
        value?: {
          /**
           * One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green`
           * @example "pink"
           */
          color?:
            | 'pink'
            | 'yellow'
            | 'lime'
            | 'blue'
            | 'black'
            | 'orange'
            | 'red'
            | 'purple'
            | 'sky'
            | 'green'
          /** Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text on the card cover dark. And vice versa, setting it to dark will make the text on the card cover light */
          brightness?: 'dark' | 'light'
          /**
           * Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work.
           * @format url
           */
          url?: string
        }
      }
    },
    params: IRequestParams = {}
  ): Promise<ICard> {
    return this.client.request<ICard>({
      path: `/cards/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a Card
   *
   * @name Delete
   * @summary Delete a Card
   * @request DELETE:/cards/{id}
   * @secure
   */
  public async delete(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific property of a card
   *
   * @name GetField
   * @summary Get a field on a Card
   * @request GET:/cards/{id}/{field}
   * @secure
   */
  public async getField(
    id: TrelloID,
    field: CardFields,
    params: IRequestParams = {}
  ): Promise<ICard> {
    return this.client.request<ICard>({
      path: `/cards/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * List the Actions on a Card
   *
   * @name GetActions
   * @summary Get Actions on a Card
   * @request GET:/cards/{id}/actions
   * @secure
   */
  public async getActions(
    id: TrelloID,
    query?: {
      /**
       * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
       * @default "commentCard, updateCard:idList"
       */
      filter?: string
      /**
       * The page of results for actions. Each page of results has 50 actions.
       * @max 19
       * @default 0
       */
      page?: number
    },
    params: IRequestParams = {}
  ): Promise<IAction[]> {
    return this.client.request<IAction[]>({
      path: `/cards/${id}/actions`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * List the attachments on a card
   *
   * @name GetAttachments
   * @summary Get Attachments on a Card
   * @request GET:/cards/{id}/attachments
   * @secure
   */
  public async getAttachments(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: string
      /**
       * Use `cover` to restrict to just the cover attachment
       * @default "false"
       */
      filter?: string
    },
    params: IRequestParams = {}
  ): Promise<IAttachment[]> {
    return this.client.request<IAttachment[]>({
      path: `/cards/${id}/attachments`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create an Attachment to a Card
   *
   * @name CreateAttachments
   * @summary Create Attachment On Card
   * @request POST:/cards/{id}/attachments
   * @secure
   */
  public async createAttachments(
    id: TrelloID,
    query?: {
      /** The name of the attachment. Max length 256. */
      name?: string
      /**
       * The file to attach, as multipart/form-data
       * @format binary
       */
      file?: File
      /** The mimeType of the attachment. Max length 256 */
      mimeType?: string
      /** A URL to attach. Must start with `http://` or `https://` */
      url?: string
      /**
       * Determines whether to use the new attachment as a cover for the Card.
       * @default false
       */
      setCover?: boolean
    },
    params: IRequestParams = {}
  ): Promise<IAttachment[]> {
    return this.client.request<IAttachment[]>({
      path: `/cards/${id}/attachments`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific Attachment on a Card.
   *
   * @name GetAttachmentsIdAttachment
   * @summary Get an Attachment on a Card
   * @request GET:/cards/{id}/attachments/{idAttachment}
   * @secure
   */
  public async getAttachmentsIdAttachment(
    id: TrelloID,
    idAttachment: TrelloID,
    query?: {
      /**
       * The Attachment fields to be included in the response.
       * @default ["all"]
       */
      fields?: AttachmentFields[]
    },
    params: IRequestParams = {}
  ): Promise<IAttachment[]> {
    return this.client.request<IAttachment[]>({
      path: `/cards/${id}/attachments/${idAttachment}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete an Attachment
   *
   * @name DeleteAttachmentsIdAttachment
   * @summary Delete an Attachment on a Card
   * @request DELETE:/cards/{id}/attachments/{idAttachment}
   * @secure
   */
  public async deleteAttachmentsIdAttachment(
    id: TrelloID,
    idAttachment: TrelloID,
    id: TrelloID,
    idAttachment: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/attachments/${idAttachment}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Get the board a card is on
   *
   * @name GetBoard
   * @summary Get the Board the Card is on
   * @request GET:/cards/{id}/board
   * @secure
   */
  public async getBoard(
    id: TrelloID,
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
      path: `/cards/${id}/board`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the completed checklist items on a card
   *
   * @name GetCheckItemStates
   * @summary Get checkItems on a Card
   * @request GET:/cards/{id}/checkItemStates
   * @secure
   */
  public async getCheckItemStates(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of: `idCheckItem`, `state`
       * @default "all"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/checkItemStates`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the checklists on a card
   *
   * @name GetChecklists
   * @summary Get Checklists on a Card
   * @request GET:/cards/{id}/checklists
   * @secure
   */
  public async getChecklists(
    id: TrelloID,
    query?: {
      /**
       * `all` or `none`
       * @default "all"
       */
      checkItems?: 'all' | 'none'
      /**
       * `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`
       * @default "name,nameData,pos,state,due,dueReminder,idMember"
       */
      checkItem_fields?:
        | 'name'
        | 'nameData'
        | 'pos'
        | 'state'
        | 'type'
        | 'due'
        | 'dueReminder'
        | 'idMember'
      /**
       * `all` or `none`
       * @default "all"
       */
      filter?: 'all' | 'none'
      /**
       * `all` or a comma-separated list of: `idBoard,idCard,name,pos`
       * @default "all"
       */
      fields?: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/checklists`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new checklist on a card
   *
   * @name CreateChecklists
   * @summary Create Checklist on a Card
   * @request POST:/cards/{id}/checklists
   * @secure
   */
  public async createChecklists(
    id: TrelloID,
    query?: {
      /** The name of the checklist */
      name?: string
      /** The ID of a source checklist to copy into the new one */
      idChecklistSource?: TrelloID
      /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
      pos?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/checklists`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific checkItem on a card
   *
   * @name GetCheckItemIdCheckItem
   * @summary Get checkItem on a Card
   * @request GET:/cards/{id}/checkItem/{idCheckItem}
   * @secure
   */
  public async getCheckItemIdCheckItem(
    id: TrelloID,
    idCheckItem: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`
       * @default "name,nameData,pos,state,due,dueReminder,idMember"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/checkItem/${idCheckItem}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update an item in a checklist on a card.
   *
   * @name UpdateCheckItemIdCheckItem
   * @summary Update a checkItem on a Card
   * @request PUT:/cards/{id}/checkItem/{idCheckItem}
   * @secure
   */
  public async updateCheckItemIdCheckItem(
    id: TrelloID,
    idCheckItem: TrelloID,
    query?: {
      /** The new name for the checklist item */
      name?: string
      /** One of: `complete`, `incomplete` */
      state?: 'complete' | 'incomplete'
      /** The ID of the checklist this item is in */
      idChecklist?: TrelloID
      /** `top`, `bottom`, or a positive float */
      pos?: IPosStringOrNumber
      /**
       * A due date for the checkitem
       * @format date
       */
      due?: string
      /** A dueReminder for the due date on the checkitem */
      dueReminder?: number | null
      /** The ID of the member to remove from the card */
      idMember?: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/checkItem/${idCheckItem}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a checklist item
   *
   * @name DeleteCheckItemIdCheckItem
   * @summary Delete checkItem on a Card
   * @request DELETE:/cards/{id}/checkItem/{idCheckItem}
   * @secure
   */
  public async deleteCheckItemIdCheckItem(
    id: TrelloID,
    idCheckItem: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/checkItem/${idCheckItem}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Get the list a card is in
   *
   * @name GetList
   * @summary Get the List of a Card
   * @request GET:/cards/{id}/list
   * @secure
   */
  public async getList(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the members on a card
   *
   * @name GetMembers
   * @summary Get the Members of a Card
   * @request GET:/cards/{id}/members
   * @secure
   */
  public async getMembers(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "avatarHash,fullName,initials,username"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/members`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the members who have voted on a card
   *
   * @name GetMembersVoted
   * @summary Get Members who have voted on a Card
   * @request GET:/cards/{id}/membersVoted
   * @secure
   */
  public async getMembersVoted(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "avatarHash,fullName,initials,username"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/membersVoted`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Vote on the card for a given member.
   *
   * @name CreateMembersVoted
   * @summary Add Member vote to Card
   * @request POST:/cards/{id}/membersVoted
   * @secure
   */
  public async createMembersVoted(
    id: TrelloID,
    query: {
      /** The ID of the member to vote 'yes' on the card */
      value: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/membersVoted`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get any shared pluginData on a card.
   *
   * @name GetPluginData
   * @summary Get pluginData on a Card
   * @request GET:/cards/{id}/pluginData
   * @secure
   */
  public async getPluginData(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/pluginData`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get the stickers on a card
   *
   * @name GetStickers
   * @summary Get Stickers on a Card
   * @request GET:/cards/{id}/stickers
   * @secure
   */
  public async getStickers(
    id: TrelloID,
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/stickers`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Add a sticker to a card
   *
   * @name CreateStickers
   * @summary Add a Sticker to a Card
   * @request POST:/cards/{id}/stickers
   * @secure
   */
  public async createStickers(
    id: TrelloID,
    query: {
      /** For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below) */
      image: string
      /**
       * The top position of the sticker, from -60 to 100
       * @format float
       * @min -60
       * @max 100
       */
      top: number
      /**
       * The left position of the sticker, from -60 to 100
       * @format float
       * @min -60
       * @max 100
       */
      left: number
      /** The z-index of the sticker */
      zIndex: number
      /**
       * The rotation of the sticker
       * @format float
       * @min 0
       * @max 360
       * @default 0
       */
      rotate?: number
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/stickers`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific sticker on a card
   *
   * @name GetStickersIdSticker
   * @summary Get a Sticker on a Card
   * @request GET:/cards/{id}/stickers/{idSticker}
   * @secure
   */
  public async getStickersIdSticker(
    id: TrelloID,
    idSticker: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/stickers/${idSticker}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Remove a sticker from the card
   *
   * @name DeleteStickersIdSticker
   * @summary Delete a Sticker on a Card
   * @request DELETE:/cards/{id}/stickers/{idSticker}
   * @secure
   */
  public async deleteStickersIdSticker(
    id: TrelloID,
    idSticker: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/stickers/${idSticker}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Update a sticker on a card
   *
   * @name UpdateStickersIdSticker
   * @summary Update a Sticker on a Card
   * @request PUT:/cards/{id}/stickers/{idSticker}
   * @secure
   */
  public async updateStickersIdSticker(
    id: TrelloID,
    idSticker: TrelloID,
    query: {
      /**
       * The top position of the sticker, from -60 to 100
       * @format float
       * @min -60
       * @max 100
       */
      top: number
      /**
       * The left position of the sticker, from -60 to 100
       * @format float
       * @min -60
       * @max 100
       */
      left: number
      /** The z-index of the sticker */
      zIndex: number
      /**
       * The rotation of the sticker
       * @format float
       * @min 0
       * @max 360
       * @default 0
       */
      rotate?: number
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/stickers/${idSticker}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update an existing comment
   *
   * @name UpdateActionsCommentsIdAction
   * @summary Update Comment Action on a Card
   * @request PUT:/cards/{id}/actions/{idAction}/comments
   * @secure
   */
  public async updateActionsCommentsIdAction(
    id: TrelloID,
    idAction: TrelloID,
    query: {
      /** The new text for the comment */
      text: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/actions/${idAction}/comments`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a comment
   *
   * @name DeleteActionsCommentsIdAction
   * @summary Delete a comment on a Card
   * @request DELETE:/cards/{id}/actions/{idAction}/comments
   * @secure
   */
  public async deleteActionsCommentsIdAction(
    id: TrelloID,
    idAction: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/actions/${idAction}/comments`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
   *
   * @name UpdateCustomFieldItemIdCardIdCustomField
   * @summary Update Custom Field item on Card
   * @request PUT:/cards/{idCard}/customField/{idCustomField}/item
   * @secure
   */
  public async updateCustomFieldItemIdCardIdCustomField(
    idCard: TrelloID,
    idCustomField: TrelloID,
    data:
      | {
          /** An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined. */
          value?: {
            text?: string
            checked?: boolean
            /**
             * @format date-time
             * @example "2018-03-13T16:00:00.000Z"
             */
            date?: string
            number?: number
          }
        }
      | {
          /** The ID of the option for the list type Custom Field */
          idValue?: TrelloID
        },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${idCard}/customField/${idCustomField}/item`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * Setting, updating, and removing the values for multiple Custom Fields on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
   *
   * @name UpdateCustomFields
   * @summary Update Multiple Custom Field items on Card
   * @request PUT:/cards/{idCard}/customFields
   * @secure
   */
  public async updateCustomFields(
    idCard: string,
    data: {
      /** An array of objects containing the custom field ID, key and value, and ID of list type option. */
      customFieldItems?: {
        /**
         * The ID of the Custom Field
         * @pattern ^[0-9a-fA-F]{32}$
         * @example "5abbe4b7ddc1b351ef961414"
         */
        idCustomField?: any
        /** An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined. This is optional if Custom Field is list type. */
        value?: {
          text?: string
          checked?: boolean
          /**
           * @format date-time
           * @example "2018-03-13T16:00:00.000Z"
           */
          date?: string
          number?: number
        }
        /**
         * The ID of the option for the list type Custom Field. This is optional if Custom Field is not list type.
         * @pattern ^[0-9a-fA-F]{32}$
         * @example "5abbe4b7ddc1b351ef961414"
         */
        idValue?: any
      }[]
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${idCard}/customFields`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * Get the custom field items for a card.
   *
   * @name GetCustomFieldItems
   * @summary Get Custom Field Items for a Card
   * @request GET:/cards/{id}/customFieldItems
   * @secure
   */
  public async getCustomFieldItems(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<ICustomFieldItems[]> {
    return this.client.request<ICustomFieldItems[]>({
      path: `/cards/${id}/customFieldItems`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Add a new comment to a card
   *
   * @name CreateActionsComments
   * @summary Add a new comment to a Card
   * @request POST:/cards/{id}/actions/comments
   * @secure
   */
  public async createActionsComments(
    id: TrelloID,
    query: {
      /** The comment */
      text: string
    },
    params: IRequestParams = {}
  ): Promise<IAction> {
    return this.client.request<IAction>({
      path: `/cards/${id}/actions/comments`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Add a label to a card
   *
   * @name CreateIdLabels
   * @summary Add a Label to a Card
   * @request POST:/cards/{id}/idLabels
   * @secure
   */
  public async createIdLabels(
    id: TrelloID,
    query?: {
      /** The ID of the label to add */
      value?: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/idLabels`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Add a member to a card
   *
   * @name CreateIdMembers
   * @summary Add a Member to a Card
   * @request POST:/cards/{id}/idMembers
   * @secure
   */
  public async createIdMembers(
    id: TrelloID,
    query?: {
      /** The ID of the Member to add to the card */
      value?: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/idMembers`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create a new label for the board and add it to the given card.
   *
   * @name CreateLabels
   * @summary Create a new Label on a Card
   * @request POST:/cards/{id}/labels
   * @secure
   */
  public async createLabels(
    id: TrelloID,
    query: {
      /** A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/) */
      color: string
      /** A name for the label */
      name?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/labels`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Mark notifications about this card as read
   *
   * @name CreateMarkAssociatedNotificationsRead
   * @summary Mark a Card's Notifications as read
   * @request POST:/cards/{id}/markAssociatedNotificationsRead
   * @secure
   */
  public async createMarkAssociatedNotificationsRead(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/markAssociatedNotificationsRead`,
      method: 'POST',
      secure: true,
      ...params
    })
  }

  /**
   * Remove a label from a card
   *
   * @name DeleteIdLabelsIdLabel
   * @summary Remove a Label from a Card
   * @request DELETE:/cards/{id}/idLabels/{idLabel}
   * @secure
   */
  public async deleteIdLabelsIdLabel(
    id: TrelloID,
    idLabel: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/idLabels/${idLabel}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Remove a member from a card
   *
   * @name DeleteIdMembersIdMember
   * @summary Remove a Member from a Card
   * @request DELETE:/cards/{id}/idMembers/{idMember}
   * @secure
   */
  public async deleteIdMembersIdMember(
    id: TrelloID,
    idMember: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/idMembers/${idMember}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Remove a member's vote from a card
   *
   * @name DeleteMembersVotedIdMember
   * @summary Remove a Member's Vote on a Card
   * @request DELETE:/cards/{id}/membersVoted/{idMember}
   * @secure
   */
  public async deleteMembersVotedIdMember(
    id: TrelloID,
    idMember: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/membersVoted/${idMember}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Update an item in a checklist on a card.
   *
   * @name UpdateChecklistCheckItemIdCardIdChecklistIdCheckItem
   * @summary Update Checkitem on Checklist on Card
   * @request PUT:/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}
   * @secure
   */
  public async updateChecklistCheckItemIdCardIdChecklistIdCheckItem(
    idCard: TrelloID,
    idCheckItem: TrelloID,
    idChecklist: TrelloID,
    query?: {
      /** `top`, `bottom`, or a positive float */
      pos?: IPosStringOrNumber
    },
    params: IRequestParams = {}
  ): Promise<ICheckItem> {
    return this.client.request<ICheckItem>({
      path: `/cards/${idCard}/checklist/${idChecklist}/checkItem/${idCheckItem}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a checklist from a card
   *
   * @name DeleteChecklistsIdChecklist
   * @summary Delete a Checklist on a Card
   * @request DELETE:/cards/{id}/checklists/{idChecklist}
   * @secure
   */
  public async deleteChecklistsIdChecklist(
    id: TrelloID,
    idChecklist: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/cards/${id}/checklists/${idChecklist}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }
}
