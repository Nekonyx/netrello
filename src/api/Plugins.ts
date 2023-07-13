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

import { Plugin, PluginListing, TrelloID } from './data-contracts'
import { ContentType, HttpClient, IRequestParams } from './http-client'

export class Plugins {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Get plugins
   *
   * @name GetPluginsId
   * @summary Get a Plugin
   * @request GET:/plugins/{id}/
   * @secure
   */
  public async getPluginsId(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Plugin> {
    return this.client.request<Plugin>({
      path: `/plugins/${id}/`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update a Plugin
   *
   * @name PutPluginsId
   * @summary Update a Plugin
   * @request PUT:/plugins/{id}/
   * @secure
   */
  public async putPluginsId(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Plugin> {
    return this.client.request<Plugin>({
      path: `/plugins/${id}/`,
      method: 'PUT',
      secure: true,
      ...params
    })
  }

  /**
   * Create a new listing for a given locale for your Power-Up
   *
   * @name PostPluginsIdpluginListing
   * @summary Create a Listing for Plugin
   * @request POST:/plugins/{idPlugin}/listing
   * @secure
   */
  public async postPluginsIdpluginListing(
    idPlugin: TrelloID,
    data: {
      /** The description to show for the given locale */
      description?: string
      /** The locale that this listing should be displayed for. */
      locale?: string
      /** The overview to show for the given locale. */
      overview?: string
      /** The name to use for the given locale. */
      name?: string
    },
    params: IRequestParams = {}
  ): Promise<PluginListing> {
    return this.client.request<PluginListing>({
      path: `/plugins/${idPlugin}/listing`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetPluginsIdComplianceMemberprivacy
   * @summary Get Plugin's Member privacy compliance
   * @request GET:/plugins/{id}/compliance/memberPrivacy
   * @secure
   */
  public async getPluginsIdComplianceMemberprivacy(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/plugins/${id}/compliance/memberPrivacy`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update an existing listing for your Power-Up
   *
   * @name PutPluginsIdpluginListingsIdlisting
   * @summary Updating Plugin's Listing
   * @request PUT:/plugins/{idPlugin}/listings/{idListing}
   * @secure
   */
  public async putPluginsIdpluginListingsIdlisting(
    idPlugin: TrelloID,
    idListing: TrelloID,
    data: {
      /** The description to show for the given locale */
      description?: string
      /** The locale that this listing should be displayed for. */
      locale?: string
      /** The overview to show for the given locale. */
      overview?: string
      /** The name to use for the given locale. */
      name?: string
    },
    params: IRequestParams = {}
  ): Promise<PluginListing> {
    return this.client.request<PluginListing>({
      path: `/plugins/${idPlugin}/listings/${idListing}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  }
}
