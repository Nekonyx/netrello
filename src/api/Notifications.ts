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
  BoardFields,
  CardFields,
  IBoard,
  ICard,
  IMember,
  INotification,
  IOrganization,
  ITrelloList,
  ListFields,
  MemberFields,
  NotificationFields,
  OrganizationFields,
  TrelloID
} from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Notifications {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * No description
   *
   * @name Get
   * @summary Get a Notification
   * @request GET:/notifications/{id}
   * @secure
   */
  public async get(
    id: TrelloID,
    query?: {
      /**
       * Whether to include the board object
       * @default false
       */
      board?: boolean
      /**
       * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "name"
       */
      board_fields?: BoardFields
      /**
       * Whether to include the card object
       * @default false
       */
      card?: boolean
      /**
       * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "name"
       */
      card_fields?: CardFields
      /**
       * Whether to include the display object with the results
       * @default false
       */
      display?: boolean
      /**
       * Whether to include the entities object with the results
       * @default false
       */
      entities?: boolean
      /**
       * `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: NotificationFields
      /**
       * Whether to include the list object
       * @default false
       */
      list?: boolean
      /**
       * Whether to include the member object
       * @default true
       */
      member?: boolean
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "avatarHash,fullName,initials,username"
       */
      member_fields?: MemberFields
      /**
       * Whether to include the member object of the creator
       * @default true
       */
      memberCreator?: boolean
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "avatarHash,fullName,initials,username"
       */
      memberCreator_fields?: MemberFields
      /**
       * Whether to include the organization object
       * @default false
       */
      organization?: boolean
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "displayName"
       */
      organization_fields?: OrganizationFields
    },
    params: IRequestParams = {}
  ): Promise<INotification> {
    return this.client.request<INotification>({
      path: `/notifications/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update the read status of a notification
   *
   * @name Update
   * @summary Update a Notification's read status
   * @request PUT:/notifications/{id}
   * @secure
   */
  public async update(
    id: TrelloID,
    query?: {
      /** Whether the notification should be marked as read or not */
      unread?: boolean
    },
    params: IRequestParams = {}
  ): Promise<INotification> {
    return this.client.request<INotification>({
      path: `/notifications/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific property of a notification
   *
   * @name GetField
   * @summary Get a field of a Notification
   * @request GET:/notifications/{id}/{field}
   * @secure
   */
  public async getField(
    id: TrelloID,
    field: NotificationFields,
    params: IRequestParams = {}
  ): Promise<INotification> {
    return this.client.request<INotification>({
      path: `/notifications/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Mark all notifications as read
   *
   * @name CreateAllRead
   * @summary Mark all Notifications as read
   * @request POST:/notifications/all/read
   * @secure
   */
  public async createAllRead(
    query?: {
      /**
       * Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)
       * @default true
       */
      read?: boolean
      /** A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread. */
      ids?: TrelloID[]
    },
    params: IRequestParams = {}
  ): Promise<INotification> {
    return this.client.request<INotification>({
      path: `/notifications/all/read`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Update Notification's read status
   *
   * @name UpdateUnread
   * @summary Update Notification's read status
   * @request PUT:/notifications/{id}/unread
   * @secure
   */
  public async updateUnread(
    id: TrelloID,
    query?: {
      value?: string
    },
    params: IRequestParams = {}
  ): Promise<INotification> {
    return this.client.request<INotification>({
      path: `/notifications/${id}/unread`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the board a notification is associated with
   *
   * @name GetBoard
   * @summary Get the Board a Notification is on
   * @request GET:/notifications/{id}/board
   * @secure
   */
  public async getBoard(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: BoardFields
    },
    params: IRequestParams = {}
  ): Promise<IBoard> {
    return this.client.request<IBoard>({
      path: `/notifications/${id}/board`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the card a notification is associated with
   *
   * @name GetCard
   * @summary Get the Card a Notification is on
   * @request GET:/notifications/{id}/card
   * @secure
   */
  public async getCard(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: CardFields
    },
    params: IRequestParams = {}
  ): Promise<ICard> {
    return this.client.request<ICard>({
      path: `/notifications/${id}/card`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the list a notification is associated with
   *
   * @name GetList
   * @summary Get the List a Notification is on
   * @request GET:/notifications/{id}/list
   * @secure
   */
  public async getList(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: ListFields
    },
    params: IRequestParams = {}
  ): Promise<ITrelloList> {
    return this.client.request<ITrelloList>({
      path: `/notifications/${id}/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the member (not the creator) a notification is about
   *
   * @name GetMember
   * @summary Get the Member a Notification is about (not the creator)
   * @request GET:/notifications/{id}/member
   * @secure
   */
  public async getMember(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<IMember> {
    return this.client.request<IMember>({
      path: `/notifications/${id}/member`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the member who created the notification
   *
   * @name GetMemberCreator
   * @summary Get the Member who created the Notification
   * @request GET:/notifications/{id}/memberCreator
   * @secure
   */
  public async getMemberCreator(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<IMember> {
    return this.client.request<IMember>({
      path: `/notifications/${id}/memberCreator`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the organization a notification is associated with
   *
   * @name GetOrganization
   * @summary Get a Notification's associated Organization
   * @request GET:/notifications/{id}/organization
   * @secure
   */
  public async getOrganization(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: OrganizationFields
    },
    params: IRequestParams = {}
  ): Promise<IOrganization> {
    return this.client.request<IOrganization>({
      path: `/notifications/${id}/organization`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }
}
