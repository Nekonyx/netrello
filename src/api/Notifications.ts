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
  Board,
  BoardFields,
  Card,
  CardFields,
  ListFields,
  Member,
  MemberFields,
  Notification,
  NotificationFields,
  Organization,
  OrganizationFields,
  TrelloID,
  TrelloList
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
   * @name GetNotificationsId
   * @summary Get a Notification
   * @request GET:/notifications/{id}
   * @secure
   */
  public async getNotificationsId(
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
  ): Promise<Notification> {
    return this.client.request<Notification>({
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
   * @name PutNotificationsId
   * @summary Update a Notification's read status
   * @request PUT:/notifications/{id}
   * @secure
   */
  public async putNotificationsId(
    id: TrelloID,
    query?: {
      /** Whether the notification should be marked as read or not */
      unread?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Notification> {
    return this.client.request<Notification>({
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
   * @name GetNotificationsIdField
   * @summary Get a field of a Notification
   * @request GET:/notifications/{id}/{field}
   * @secure
   */
  public async getNotificationsIdField(
    id: TrelloID,
    field: NotificationFields,
    params: IRequestParams = {}
  ): Promise<Notification> {
    return this.client.request<Notification>({
      path: `/notifications/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Mark all notifications as read
   *
   * @name PostNotificationsAllRead
   * @summary Mark all Notifications as read
   * @request POST:/notifications/all/read
   * @secure
   */
  public async postNotificationsAllRead(
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
  ): Promise<Notification> {
    return this.client.request<Notification>({
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
   * @name PutNotificationsIdUnread
   * @summary Update Notification's read status
   * @request PUT:/notifications/{id}/unread
   * @secure
   */
  public async putNotificationsIdUnread(
    id: TrelloID,
    query?: {
      value?: string
    },
    params: IRequestParams = {}
  ): Promise<Notification> {
    return this.client.request<Notification>({
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
   * @name GetNotificationsIdBoard
   * @summary Get the Board a Notification is on
   * @request GET:/notifications/{id}/board
   * @secure
   */
  public async getNotificationsIdBoard(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: BoardFields
    },
    params: IRequestParams = {}
  ): Promise<Board> {
    return this.client.request<Board>({
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
   * @name GetNotificationsIdCard
   * @summary Get the Card a Notification is on
   * @request GET:/notifications/{id}/card
   * @secure
   */
  public async getNotificationsIdCard(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: CardFields
    },
    params: IRequestParams = {}
  ): Promise<Card> {
    return this.client.request<Card>({
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
   * @name GetNotificationsIdList
   * @summary Get the List a Notification is on
   * @request GET:/notifications/{id}/list
   * @secure
   */
  public async getNotificationsIdList(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: ListFields
    },
    params: IRequestParams = {}
  ): Promise<TrelloList> {
    return this.client.request<TrelloList>({
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
   * @name Notificationsidmember
   * @summary Get the Member a Notification is about (not the creator)
   * @request GET:/notifications/{id}/member
   * @secure
   */
  public async notificationsidmember(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
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
   * @name GetNotificationsIdMembercreator
   * @summary Get the Member who created the Notification
   * @request GET:/notifications/{id}/memberCreator
   * @secure
   */
  public async getNotificationsIdMembercreator(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
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
   * @name GetNotificationsIdOrganization
   * @summary Get a Notification's associated Organization
   * @request GET:/notifications/{id}/organization
   * @secure
   */
  public async getNotificationsIdOrganization(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: OrganizationFields
    },
    params: IRequestParams = {}
  ): Promise<Organization> {
    return this.client.request<Organization>({
      path: `/notifications/${id}/organization`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }
}
