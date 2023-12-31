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
  IMember,
  IToken,
  IWebhook,
  MemberFields,
  TokenFields,
  TrelloID
} from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Tokens {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Retrieve information about a token.
   *
   * @name GetToken
   * @summary Get a Token
   * @request GET:/tokens/{token}
   * @secure
   */
  public async getToken(
    token: string,
    query?: {
      /**
       * `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`
       * @default "all"
       */
      fields?: TokenFields
      /**
       * Determines whether to include webhooks.
       * @default false
       */
      webhooks?: boolean
    },
    params: IRequestParams = {}
  ): Promise<IToken> {
    return this.client.request<IToken>({
      path: `/tokens/${token}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Retrieve information about a token's owner by token.
   *
   * @name GetMemberToken
   * @summary Get Token's Member
   * @request GET:/tokens/{token}/member
   * @secure
   */
  public async getMemberToken(
    token: string,
    query?: {
      /**
       * `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).
       * @default "all"
       */
      fields?: MemberFields
    },
    params: IRequestParams = {}
  ): Promise<IMember> {
    return this.client.request<IMember>({
      path: `/tokens/${token}/member`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Retrieve all webhooks created with a Token.
   *
   * @name GetWebhooksToken
   * @summary Get Webhooks for Token
   * @request GET:/tokens/{token}/webhooks
   * @secure
   */
  public async getWebhooksToken(
    token: string,
    params: IRequestParams = {}
  ): Promise<IWebhook[]> {
    return this.client.request<IWebhook[]>({
      path: `/tokens/${token}/webhooks`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Create a new webhook for a Token.
   *
   * @name CreateWebhooksToken
   * @summary Create Webhooks for Token
   * @request POST:/tokens/{token}/webhooks
   * @secure
   */
  public async createWebhooksToken(
    token: string,
    query: {
      /** A description to be displayed when retrieving information about the webhook. */
      description?: string
      /**
       * The URL that the webhook should POST information to.
       * @format url
       */
      callbackURL: string
      /** ID of the object to create a webhook on. */
      idModel: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<IWebhook> {
    return this.client.request<IWebhook>({
      path: `/tokens/${token}/webhooks`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Retrieve a webhook created with a Token.
   *
   * @name GetWebhooksTokenIdWebhook
   * @summary Get a Webhook belonging to a Token
   * @request GET:/tokens/{token}/webhooks/{idWebhook}
   * @secure
   */
  public async getWebhooksTokenIdWebhook(
    token: string,
    idWebhook: TrelloID,
    params: IRequestParams = {}
  ): Promise<IWebhook> {
    return this.client.request<IWebhook>({
      path: `/tokens/${token}/webhooks/${idWebhook}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Delete a webhook created with given token.
   *
   * @name DeleteWebhooksTokenIdWebhook
   * @summary Delete a Webhook created by Token
   * @request DELETE:/tokens/{token}/webhooks/{idWebhook}
   * @secure
   */
  public async deleteWebhooksTokenIdWebhook(
    token: string,
    idWebhook: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/tokens/${token}/webhooks/${idWebhook}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Update a Webhook created by Token
   *
   * @name UpdateWebhooksTokenIdWebhook
   * @summary Update a Webhook created by Token
   * @request PUT:/tokens/{token}/webhooks/{idWebhook}
   * @secure
   */
  public async updateWebhooksTokenIdWebhook(
    token: string,
    idWebhook: TrelloID,
    query?: {
      /** A description to be displayed when retrieving information about the webhook. */
      description?: string
      /**
       * The URL that the webhook should `POST` information to.
       * @format url
       */
      callbackURL?: string
      /** ID of the object that the webhook is on. */
      idModel?: TrelloID
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/tokens/${token}/webhooks/${idWebhook}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a token.
   *
   * @name DeleteToken
   * @summary Delete a Token
   * @request DELETE:/tokens/{token}/
   * @secure
   */
  public async deleteToken(
    token: string,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/tokens/${token}/`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }
}
