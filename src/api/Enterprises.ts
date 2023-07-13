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
  ClaimableOrganizations,
  Enterprise,
  EnterpriseAdmin,
  EnterpriseAuditLog,
  Member,
  MemberFields,
  Membership,
  Organization,
  OrganizationFields,
  PendingOrganizations,
  TransferrableOrganization,
  TrelloID
} from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Enterprises {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Get an enterprise by its ID.
   *
   * @name GetEnterprisesId
   * @summary Get an Enterprise
   * @request GET:/enterprises/{id}
   * @secure
   */
  public async getEnterprisesId(
    id: TrelloID,
    query?: {
      /**
       * Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`
       * @default "all"
       */
      fields?: string
      /**
       * One of: `none`, `normal`, `admins`, `owners`, `all`
       * @default "none"
       */
      members?: string
      /**
       * One of: `avatarHash`, `fullName`, `initials`, `username`
       * @default "avatarHash, fullName, initials, username"
       */
      member_fields?: string
      /**
       * Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.
       * @default "none"
       */
      member_filter?: string
      /** This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
      member_sort?: string
      /**
       * Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](/cloud/trello/scim/). Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.
       * @default "none"
       */
      member_sortBy?: string
      /**
       * Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`
       * @default "id"
       */
      member_sortOrder?: string
      /**
       * Any integer between 0 and 100.
       * @format int32
       * @default "1"
       */
      member_startIndex?: number
      /**
       * 0 to 100
       * @format int32
       * @default "10"
       */
      member_count?: number
      /**
       * One of: `none`, `members`, `public`, `all`
       * @default "none"
       */
      organizations?: string
      /**
       * Any valid value that the [nested organization field resource]() accepts.
       * @default "none"
       */
      organization_fields?: string
      /**
       * Whether or not to include paid account information in the returned workspace objects
       * @default false
       */
      organization_paid_accounts?: boolean
      /**
       * Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`
       * @default "none"
       */
      organization_memberships?: string
    },
    params: IRequestParams = {}
  ): Promise<Enterprise> {
    return this.client.request<Enterprise>({
      path: `/enterprises/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route. NOTE: For enterprises that have opted in to user management via AdminHub, the auditlog will will contain actions taken in AdminHub, but may not contain the source for those actions.
   *
   * @name GetEnterprisesIdAuditlog
   * @summary Get auditlog data for an Enterprise
   * @request GET:/enterprises/{id}/auditlog
   * @secure
   */
  public async getEnterprisesIdAuditlog(
    id: TrelloID,
    params: IRequestParams = {}
  ): Promise<EnterpriseAuditLog[]> {
    return this.client.request<EnterpriseAuditLog[]>({
      path: `/enterprises/${id}/auditlog`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get an enterprise's admin members.
   *
   * @name GetEnterprisesIdAdmins
   * @summary Get Enterprise admin Members
   * @request GET:/enterprises/{id}/admins
   * @secure
   */
  public async getEnterprisesIdAdmins(
    id: TrelloID,
    query?: {
      /**
       * Any valid value that the [nested member field resource]() accepts.
       * @default "fullName, userName"
       */
      fields?: string
    },
    params: IRequestParams = {}
  ): Promise<EnterpriseAdmin> {
    return this.client.request<EnterpriseAdmin>({
      path: `/enterprises/${id}/admins`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the signup URL for an enterprise.
   *
   * @name GetEnterprisesIdSignupurl
   * @summary Get signupUrl for Enterprise
   * @request GET:/enterprises/{id}/signupUrl
   * @secure
   */
  public async getEnterprisesIdSignupurl(
    id: TrelloID,
    query?: {
      /** @default false */
      authenticate?: boolean
      /** @default false */
      confirmationAccepted?: boolean
      /**
       * Any valid URL.
       * @format url
       * @default null
       */
      returnUrl?: string | null
      /**
       * Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.
       * @default false
       */
      tosAccepted?: boolean
    },
    params: IRequestParams = {}
  ): Promise<{
    signupUrl?: string
  }> {
    return this.client.request<{
      signupUrl?: string
    }>({
      path: `/enterprises/${id}/signupUrl`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * [BETA] - Get an enterprise's users. You can choose to retrieve licensed members, board guests, etc.
   *
   * @name GetUsersId
   * @summary Get Users of an Enterprise
   * @request GET:/enterprises/{id}/members/query
   * @secure
   */
  public async getUsersId(
    id: TrelloID,
    query?: {
      /**
       * When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.
       * @default false
       */
      licensed?: boolean
      /**
       * When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.
       * @default false
       */
      deactivated?: boolean
      /**
       * When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned.
       * @default false
       */
      collaborator?: boolean
      /**
       * When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.
       * @default "none"
       */
      managed?: boolean
      /**
       * When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.
       * @default false
       */
      admin?: boolean
      /**
       * Returns only Trello users active since this date (inclusive).
       * @default "none"
       */
      activeSince?: string
      /**
       * Returns only Trello users active since this date (inclusive).
       * @default "none"
       */
      inactiveSince?: string
      /**
       * Returns members with email address or full name that start with the search value.
       * @default "none"
       */
      search?: string
      /**
       * Cursor to return next set of results
       * @default "none"
       */
      startIndex?: string
    },
    params: IRequestParams = {}
  ): Promise<Membership[]> {
    return this.client.request<Membership[]>({
      path: `/enterprises/${id}/members/query`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the members of an enterprise.
   *
   * @name GetEnterprisesIdMembers
   * @summary Get Members of Enterprise
   * @request GET:/enterprises/{id}/members
   * @secure
   */
  public async getEnterprisesIdMembers(
    id: TrelloID,
    query?: {
      /**
       * A comma-seperated list of valid [member fields](/cloud/trello/guides/rest-api/object-definitions/#member-object).
       * @default "avatarHash, fullName, initials, username"
       */
      fields?: string
      /** Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated. */
      filter?: string | null
      /** This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
      sort?: string
      /** Deprecated: Please use `sort` instead. This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
      sortBy?: string
      /**
       * Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.
       * @default null
       */
      sortOrder?: 'ascending' | 'descending' | 'asc' | 'desc' | null
      /**
       * Any integer between 0 and 9999.
       * @format int32
       * @min 0
       * @max 9999
       */
      startIndex?: number
      /**
       * [SCIM-style filter](/cloud/trello/scim/).
       * @default "none"
       */
      count?: string
      /**
       * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
       * @default "displayName"
       */
      organization_fields?: string
      /**
       * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
       * @default "name"
       */
      board_fields?: string
    },
    params: IRequestParams = {}
  ): Promise<Member[]> {
    return this.client.request<Member[]>({
      path: `/enterprises/${id}/members`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get a specific member of an enterprise by ID.
   *
   * @name GetEnterprisesIdMembersIdmember
   * @summary Get a Member of Enterprise
   * @request GET:/enterprises/{id}/members/{idMember}
   * @secure
   */
  public async getEnterprisesIdMembersIdmember(
    id: TrelloID,
    idMember: TrelloID,
    query?: {
      /**
       * A comma separated list of any valid values that the [nested member field resource]() accepts.
       * @default "avatarHash, fullName, initials, username"
       */
      fields?: string
      /**
       * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
       * @default "displayName"
       */
      organization_fields?: string
      /**
       * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
       * @default "name"
       */
      board_fields?: string
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
      path: `/enterprises/${id}/members/${idMember}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get whether an organization can be transferred to an enterprise.
   *
   * @name GetEnterprisesIdTransferrableOrganizationIdOrganization
   * @summary Get whether an organization can be transferred to an enterprise.
   * @request GET:/enterprises/{id}/transferrable/organization/{idOrganization}
   * @secure
   */
  public async getEnterprisesIdTransferrableOrganizationIdOrganization(
    id: TrelloID,
    idOrganization: TrelloID,
    params: IRequestParams = {}
  ): Promise<TransferrableOrganization> {
    return this.client.request<TransferrableOrganization>({
      path: `/enterprises/${id}/transferrable/organization/${idOrganization}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Get a list of organizations that can be transferred to an enterprise when given a bulk list of organizations.
   *
   * @name GetEnterprisesIdTransferrableBulkIdOrganizations
   * @summary Get a bulk list of organizations that can be transferred to an enterprise.
   * @request GET:/enterprises/{id}/transferrable/bulk/{idOrganizations}
   * @secure
   */
  public async getEnterprisesIdTransferrableBulkIdOrganizations(
    id: TrelloID,
    idOrganizations: Organization[],
    params: IRequestParams = {}
  ): Promise<TransferrableOrganization[]> {
    return this.client.request<TransferrableOrganization[]>({
      path: `/enterprises/${id}/transferrable/bulk/${idOrganizations}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }

  /**
   * Decline enterpriseJoinRequests from one organization or bulk amount of organizations
   *
   * @name PutEnterprisesIdEnterpriseJoinRequestBulk
   * @summary Decline enterpriseJoinRequests from one organization or a bulk list of organizations.
   * @request PUT:/enterprises/${id}/enterpriseJoinRequest/bulk
   * @secure
   */
  public async putEnterprisesIdEnterpriseJoinRequestBulk(
    id: TrelloID,
    query: {
      /** An array of IDs of an Organization resource. */
      idOrganizations: Organization[]
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/enterprises/$${id}/enterpriseJoinRequest/bulk`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the Workspaces that are claimable by the enterprise by ID. Can optionally query for workspaces based on activeness/ inactiveness.
   *
   * @name GetEnterprisesIdClaimableOrganizations
   * @summary Get ClaimableOrganizations of an Enterprise
   * @request GET:/enterprises/{id}/claimableOrganizations
   * @secure
   */
  public async getEnterprisesIdClaimableOrganizations(
    id: TrelloID,
    query?: {
      /** Limits the number of workspaces to be sorted */
      limit?: number
      /** Specifies the sort order to return matching documents */
      cursor?: string
      /** Name of the enterprise to retrieve workspaces for */
      name?: string
      /** Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace */
      activeSince?: string
      /** Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace */
      inactiveSince?: string
    },
    params: IRequestParams = {}
  ): Promise<ClaimableOrganizations> {
    return this.client.request<ClaimableOrganizations>({
      path: `/enterprises/${id}/claimableOrganizations`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Get the Workspaces that are pending for the enterprise by ID.
   *
   * @name GetEnterprisesIdPendingOrganizations
   * @summary Get PendingOrganizations of an Enterprise
   * @request GET:/enterprises/{id}/pendingOrganizations
   * @secure
   */
  public async getEnterprisesIdPendingOrganizations(
    id: TrelloID,
    query?: {
      /** Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace */
      activeSince?: string
      /** Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace */
      inactiveSince?: string
    },
    params: IRequestParams = {}
  ): Promise<PendingOrganizations[]> {
    return this.client.request<PendingOrganizations[]>({
      path: `/enterprises/${id}/pendingOrganizations`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Create an auth Token for an Enterprise.
   *
   * @name PostEnterprisesIdTokens
   * @summary Create an auth Token for an Enterprise.
   * @request POST:/enterprises/{id}/tokens
   * @secure
   */
  public async postEnterprisesIdTokens(
    id: string,
    query?: {
      /**
       * One of: `1hour`, `1day`, `30days`, `never`
       * @default "none"
       */
      expiration?: string
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/enterprises/${id}/tokens`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Transfer an organization to an enterprise. NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in the organization being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.
   *
   * @name PutEnterprisesIdOrganizations
   * @summary Transfer an Organization to an Enterprise.
   * @request PUT:/enterprises/{id}/organizations
   * @secure
   */
  public async putEnterprisesIdOrganizations(
    id: TrelloID,
    query: {
      /** ID of Organization to be transferred to Enterprise. */
      idOrganization: string
    },
    params: IRequestParams = {}
  ): Promise<Organization[]> {
    return this.client.request<Organization[]>({
      path: `/enterprises/${id}/organizations`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. Revoking a license will deactivate a Member of an Enterprise. NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.
   *
   * @name PutEnterprisesIdMembersIdmemberLicensed
   * @summary Update a Member's licensed status
   * @request PUT:/enterprises/{id}/members/{idMember}/licensed
   * @secure
   */
  public async putEnterprisesIdMembersIdmemberLicensed(
    id: TrelloID,
    idMember: TrelloID,
    query: {
      /** Boolean value to determine whether the user should be given an Enterprise license (true) or not (false). */
      value: boolean
    },
    params: IRequestParams = {}
  ): Promise<Member> {
    return this.client.request<Member>({
      path: `/enterprises/${id}/members/${idMember}/licensed`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Deactivate a Member of an Enterprise. NOTE: Deactivation is not possible for enterprises that have opted in to user management via AdminHub.
   *
   * @name EnterprisesIdMembersIdMemberDeactivated
   * @summary Deactivate a Member of an Enterprise.
   * @request PUT:/enterprises/{id}/members/{idMember}/deactivated
   * @secure
   */
  public async enterprisesIdMembersIdMemberDeactivated(
    id: TrelloID,
    idMember: TrelloID,
    query: {
      /** Determines whether the user is deactivated or not. */
      value: boolean
      /**
       * A comma separated list of any valid values that the [nested member field resource]() accepts.
       * @default "avatarHash, fullName, initials, username"
       */
      fields?: MemberFields
      /**
       * Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
       * @default "displayName"
       */
      organization_fields?: OrganizationFields
      /**
       * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
       * @default "name"
       */
      board_fields?: BoardFields
    },
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/enterprises/${id}/members/${idMember}/deactivated`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Make Member an admin of Enterprise. NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
   *
   * @name PutEnterprisesIdAdminsIdmember
   * @summary Update Member to be admin of Enterprise
   * @request PUT:/enterprises/{id}/admins/{idMember}
   * @secure
   */
  public async putEnterprisesIdAdminsIdmember(
    id: TrelloID,
    idMember: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/enterprises/${id}/admins/${idMember}`,
      method: 'PUT',
      secure: true,
      ...params
    })
  }

  /**
   * Remove a member as admin from an enterprise. NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
   *
   * @name EnterprisesIdOrganizationsIdmember
   * @summary Remove a Member as admin from Enterprise.
   * @request DELETE:/enterprises/{id}/admins/{idMember}
   * @secure
   */
  public async enterprisesIdOrganizationsIdmember(
    id: TrelloID,
    idMember: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/enterprises/${id}/admins/${idMember}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Remove an organization from an enterprise.
   *
   * @name DeleteEnterprisesIdOrganizationsIdorg
   * @summary Delete an Organization from an Enterprise.
   * @request DELETE:/enterprises/{id}/organizations/{idOrg}
   * @secure
   */
  public async deleteEnterprisesIdOrganizationsIdorg(
    id: TrelloID,
    idOrg: TrelloID,
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/enterprises/${id}/organizations/${idOrg}`,
      method: 'DELETE',
      secure: true,
      ...params
    })
  }

  /**
   * Accept an array of organizations to an enterprise. NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in organizations being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.
   *
   * @name GetEnterprisesIdOrganizationsBulkIdOrganizations
   * @summary Bulk accept a set of organizations to an Enterprise.
   * @request GET:/enterprises/{id}/organizations/bulk/{idOrganizations}
   * @secure
   */
  public async getEnterprisesIdOrganizationsBulkIdOrganizations(
    id: TrelloID,
    idOrganizations: Organization[],
    params: IRequestParams = {}
  ): Promise<void> {
    return this.client.request<void>({
      path: `/enterprises/${id}/organizations/bulk/${idOrganizations}`,
      method: 'GET',
      secure: true,
      ...params
    })
  }
}
