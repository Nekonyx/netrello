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
  BoardFields,
  Export,
  Member,
  Memberships,
  Organization,
  OrganizationFields,
  PluginData,
  Tag,
  TrelloID
} from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Organizations {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Create a new Workspace
   *
   * @name PostOrganizations
   * @summary Create a new Organization
   * @request POST:/organizations
   * @secure
   */
  public async postOrganizations(
    query: {
      /** The name to display for the Organization */
      displayName: string
      /** The description for the organizations */
      desc?: string
      /**
       * A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be substituted.
       * @minLength 3
       */
      name?: string
      /**
       * A URL starting with `http://` or `https://`
       * @format url
       */
      website?: string
    },
    params: IRequestParams = {}
  ): Promise<Organization> {
    return this.client.request<Organization>({
      path: `/organizations`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetOrganizationsId
   * @summary Get an Organization
   * @request GET:/organizations/{id}
   * @secure
   */
  public async getOrganizationsId(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Organization> {
    return this.client.request<Organization>({
      path: `/organizations/${id}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Update an organization
   *
   * @name PutOrganizationsId
   * @summary Update an Organization
   * @request PUT:/organizations/{id}
   * @secure
   */
  public async putOrganizationsId(
    id: TrelloID,
    query?: {
      /** A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique */
      name?: string
      /** A new displayName for the organization. Must be at least 1 character long and not begin or end with a space. */
      displayName?: string
      /** A new description for the organization */
      desc?: string
      /** A URL starting with `http://`, `https://`, or `null` */
      website?: string
      /** The Google Apps domain to link this org to. */
      'prefs/associatedDomain'?: string
      /** Whether non-workspace members can be added to boards inside the Workspace */
      'prefs/externalMembersDisabled'?: boolean
      /**
       * `1` or `2`
       * @format int32
       */
      'prefs/googleAppsVersion'?: number
      /** Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org` */
      'prefs/boardVisibilityRestrict/org'?: string
      /** Who can make private boards. One of: `admin`, `none`, `org` */
      'prefs/boardVisibilityRestrict/private'?: string
      /** Who on the Workspace can make public boards. One of: `admin`, `none`, `org` */
      'prefs/boardVisibilityRestrict/public'?: string
      /** An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`) */
      'prefs/orgInviteRestrict'?: string
      /** Whether the Workspace page is publicly visible. One of: `private`, `public` */
      'prefs/permissionLevel'?: string
    },
    params: IRequestParams = {}
  ): Promise<Organization> {
    return this.client.request<Organization>({
      path: `/organizations/${id}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete an Organization
   *
   * @name DeleteOrganizationsId
   * @summary Delete an Organization
   * @request DELETE:/organizations/{id}
   * @secure
   */
  public async deleteOrganizationsId(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name GetOrganizationsIdField
   * @summary Get field on Organization
   * @request GET:/organizations/{id}/{field}
   * @secure
   */
  public async getOrganizationsIdField(
    id: TrelloID,
    field: OrganizationFields,
    params: IRequestParams = {}
  ): Promise<Organization> {
    return this.client.request<Organization>({
      path: `/organizations/${id}/${field}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * List the actions on a Workspace
   *
   * @name GetOrganizationsIdActions
   * @summary Get Actions for Organization
   * @request GET:/organizations/{id}/actions
   * @secure
   */
  public async getOrganizationsIdActions(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Action[]> {
    return this.client.request<Action[]>({
      path: `/organizations/${id}/actions`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * List the boards in a Workspace
   *
   * @name GetOrganizationsIdBoards
   * @summary Get Boards in an Organization
   * @request GET:/organizations/{id}/boards
   * @secure
   */
  public async getOrganizationsIdBoards(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`
       * @default "all"
       */
      filter?: 'all' | 'open' | 'closed' | 'members' | 'organization' | 'public'
      /**
       * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
       * @default "all"
       */
      fields?: BoardFields
    },
    params: IRequestParams = {}
  ): Promise<Board[]> {
    return this.client.request<Board[]>({
      path: `/organizations/${id}/boards`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Kick off CSV export for an organization
   *
   * @name PostOrganizationsIdExports
   * @summary Create Export for Organizations
   * @request POST:/organizations/{id}/exports
   * @secure
   */
  public async postOrganizationsIdExports(
    id: TrelloID,
    query?: {
      /**
       * Whether the CSV should include attachments or not.
       * @default true
       */
      attachments?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Export> {
    return this.client.request<Export>({
      path: `/organizations/${id}/exports`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Retrieve the exports that exist for the given organization
   *
   * @name GetOrganizationsIdExports
   * @summary Retrieve Organization's Exports
   * @request GET:/organizations/{id}/exports
   * @secure
   */
  public async getOrganizationsIdExports(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Export[]> {
    return this.client.request<Export[]>({
      path: `/organizations/${id}/exports`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * List the members in a Workspace
   *
   * @name GetOrganizationsIdMembers
   * @summary Get the Members of an Organization
   * @request GET:/organizations/{id}/members
   * @secure
   */
  public async getOrganizationsIdMembers(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<Member[]> {
    return this.client.request<Member[]>({
      path: `/organizations/${id}/members`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * No description
   *
   * @name PutOrganizationsIdMembers
   * @summary Update an Organization's Members
   * @request PUT:/organizations/{id}/members
   * @secure
   */
  public async putOrganizationsIdMembers(
    id: TrelloID,
    query: {
      /**
       * An email address
       * @format email
       */
      email: string
      /**
       * Name for the member, at least 1 character not beginning or ending with a space
       * @minLength 1
       */
      fullName: string
      /**
       * One of: `admin`, `normal`
       * @default "normal"
       */
      type?: 'admin' | 'normal'
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/members`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * List the memberships of a Workspace
   *
   * @name GetOrganizationsIdMemberships
   * @summary Get Memberships of an Organization
   * @request GET:/organizations/{id}/memberships
   * @secure
   */
  public async getOrganizationsIdMemberships(
    id: TrelloID,
    query?: {
      /**
       * `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`
       * @default "all"
       */
      filter?: 'all' | 'active' | 'admin' | 'deactivated' | 'me' | 'normal'
      /**
       * Whether to include the Member objects with the Memberships
       * @default false
       */
      member?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Memberships[]> {
    return this.client.request<Memberships[]>({
      path: `/organizations/${id}/memberships`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a single Membership for an Organization
   *
   * @name GetOrganizationsIdMembershipsIdmembership
   * @summary Get a Membership of an Organization
   * @request GET:/organizations/{id}/memberships/{idMembership}
   * @secure
   */
  public async getOrganizationsIdMembershipsIdmembership(
    id: TrelloID,
    idMembership: TrelloID,
    query?: {
      /**
       * Whether to include the Member object in the response
       * @default false
       */
      member?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Memberships> {
    return this.client.request<Memberships>({
      path: `/organizations/${id}/memberships/${idMembership}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get organization scoped pluginData on this Workspace
   *
   * @name GetOrganizationsIdPlugindata
   * @summary Get the pluginData Scoped to Organization
   * @request GET:/organizations/{id}/pluginData
   * @secure
   */
  public async getOrganizationsIdPlugindata(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<PluginData[]> {
    return this.client.request<PluginData[]>({
      path: `/organizations/${id}/pluginData`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * List the organization's collections
   *
   * @name GetOrganizationsIdTags
   * @summary Get Tags of an Organization
   * @request GET:/organizations/{id}/tags
   * @secure
   */
  public async getOrganizationsIdTags(
    id: string | TrelloID,
    params: IRequestParams = {}
  ): Promise<Tag[]> {
    return this.client.request<Tag[]>({
      path: `/organizations/${id}/tags`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Create a Tag in an Organization
   *
   * @name PostOrganizationsIdTags
   * @summary Create a Tag in Organization
   * @request POST:/organizations/{id}/tags
   * @secure
   */
  public async postOrganizationsIdTags(
    id: string | TrelloID,
    params: IRequestParams = {}
  ): Promise<Tag> {
    return this.client.request<Tag>({
      path: `/organizations/${id}/tags`,
      method: 'POST',
      secure: true,
      ...params
    })
  }

  /**
   * Add a member to a Workspace or update their member type.
   *
   * @name PutOrganizationsIdMembersIdmember
   * @summary Update a Member of an Organization
   * @request PUT:/organizations/{id}/members/{idMember}
   * @secure
   */
  public async putOrganizationsIdMembersIdmember(
    id: TrelloID,
    idMember: string | TrelloID,
    query: {
      /** One of: `admin`, `normal` */
      type: 'admin' | 'normal'
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
      path: `/organizations/${id}/members/${idMember}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Remove a member from a Workspace
   *
   * @name DeleteOrganizationsIdMembers
   * @summary Remove a Member from an Organization
   * @request DELETE:/organizations/{id}/members/{idMember}
   * @secure
   */
  public async deleteOrganizationsIdMembers(
    id: TrelloID | string,
    idMember: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/members/${idMember}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Deactivate or reactivate a member of a Workspace
   *
   * @name PutOrganizationsIdMembersIdmemberDeactivated
   * @summary Deactivate or reactivate a member of an Organization
   * @request PUT:/organizations/{id}/members/{idMember}/deactivated
   * @secure
   */
  public async putOrganizationsIdMembersIdmemberDeactivated(
    id: TrelloID,
    idMember: TrelloID | string,
    query: {
      value: boolean
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/members/${idMember}/deactivated`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Set the logo image for a Workspace
   *
   * @name PostOrganizationsIdLogo
   * @summary Update logo for an Organization
   * @request POST:/organizations/{id}/logo
   * @secure
   */
  public async postOrganizationsIdLogo(
    id: TrelloID,
    query?: {
      /**
       * Image file for the logo
       * @format binary
       */
      file?: File
    },
    params: IRequestParams = {}
  ): Promise<Organization> {
    return this.client.request<Organization>({
      path: `/organizations/${id}/logo`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Delete a the logo from a Workspace
   *
   * @name DeleteOrganizationsIdLogo
   * @summary Delete Logo for Organization
   * @request DELETE:/organizations/{id}/logo
   * @secure
   */
  public async deleteOrganizationsIdLogo(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/logo`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Remove a member from a Workspace and from all Workspace boards
   *
   * @name OrganizationsIdMembersIdmemberAll
   * @summary Remove a Member from an Organization and all Organization Boards
   * @request DELETE:/organizations/{id}/members/{idMember}/all
   * @secure
   */
  public async organizationsIdMembersIdmemberAll(
    id: TrelloID,
    idMember: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/members/${idMember}/all`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Remove the associated Google Apps domain from a Workspace
   *
   * @name DeleteOrganizationsIdPrefsAssociateddomain
   * @summary Remove the associated Google Apps domain from a Workspace
   * @request DELETE:/organizations/{id}/prefs/associatedDomain
   * @secure
   */
  public async deleteOrganizationsIdPrefsAssociateddomain(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/prefs/associatedDomain`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Remove the email domain restriction on who can be invited to the Workspace
   *
   * @name DeleteOrganizationsIdPrefsOrginviterestrict
   * @summary Delete the email domain restriction on who can be invited to the Workspace
   * @request DELETE:/organizations/{id}/prefs/orgInviteRestrict
   * @secure
   */
  public async deleteOrganizationsIdPrefsOrginviterestrict(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/prefs/orgInviteRestrict`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Delete an organization's tag
   *
   * @name DeleteOrganizationsIdTagsIdtag
   * @summary Delete an Organization's Tag
   * @request DELETE:/organizations/{id}/tags/{idTag}
   * @secure
   */
  public async deleteOrganizationsIdTagsIdtag(
    id: string,
    idTag: string,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/tags/${idTag}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Used to check whether the given board has new billable guests on it.
   *
   * @name GetOrganizationsIdNewbillableguestsIdboard
   * @summary Get Organizations new billable guests
   * @request GET:/organizations/{id}/newBillableGuests/{idBoard}
   * @secure
   */
  public async getOrganizationsIdNewbillableguestsIdboard(
    id: TrelloID,
    idBoard: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/organizations/${id}/newBillableGuests/${idBoard}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }
}
