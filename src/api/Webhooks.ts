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

import { TrelloID, Webhook } from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Webhooks {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Create a new webhook.
   *
   * @name PostWebhooks
   * @summary Create a Webhook
   * @request POST:/webhooks/
   * @secure
   */
  public async postWebhooks(
    query: {
      /**
       * A string with a length from `0` to `16384`.
       * @minLength 0
       * @maxLength 16384
       */
      description?: string
      /**
       * A valid URL that is reachable with a `HEAD` and `POST` request.
       * @format url
       */
      callbackURL: string
      /** ID of the model to be monitored */
      idModel: TrelloID
      /** Determines whether the webhook is active and sending `POST` requests. */
      active?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Webhook> {
    return this.client.request<Webhook>({
      path: `/webhooks/`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or else you will encounter a 'webhook does not belong to token' error.
   *
   * @name GetWebhooksId
   * @summary Get a Webhook
   * @request GET:/webhooks/{id}
   * @secure
   */
  public async getWebhooksId(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Webhook> {
    return this.client.request<Webhook>({
      path: `/webhooks/${id}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update a webhook by ID.
   *
   * @name PutWebhooksId
   * @summary Update a Webhook
   * @request PUT:/webhooks/{id}
   * @secure
   */
  public async putWebhooksId(
    id: TrelloID,
    query?: {
      /**
       * A string with a length from `0` to `16384`.
       * @minLength 0
       * @maxLength 16384
       */
      description?: string
      /**
       * A valid URL that is reachable with a `HEAD` and `POST` request.
       * @format url
       */
      callbackURL?: string
      /** ID of the model to be monitored */
      idModel?: TrelloID
      /** Determines whether the webhook is active and sending `POST` requests. */
      active?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Webhook> {
    return this.client.request<Webhook>({
      path: `/webhooks/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a webhook by ID.
   *
   * @name DeleteWebhooksId
   * @summary Delete a Webhook
   * @request DELETE:/webhooks/{id}
   * @secure
   */
  public async deleteWebhooksId(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/webhooks/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Get a field on a Webhook
   *
   * @name Webhooksidfield
   * @summary Get a field on a Webhook
   * @request GET:/webhooks/{id}/{field}
   * @secure
   */
  public async webhooksidfield(
    id: TrelloID,
    field:
      | 'active'
      | 'callbackURL'
      | 'description'
      | 'idModel'
      | 'consecutiveFailures'
      | 'firstConsecutiveFailDate',
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/webhooks/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }
}
