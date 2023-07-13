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

import { Board, Card, Member, Organization, TrelloID } from './data-contracts'
import { HttpClient, IRequestParams } from './http-client'

export class Search {
  protected readonly client: HttpClient

  public constructor(client: HttpClient) {
    this.client = client
  }

  /**
   * Find what you're looking for in Trello
   *
   * @name GetSearch
   * @summary Search Trello
   * @request GET:/search
   * @secure
   */
  public async getSearch(
    query: {
      /**
       * The search query with a length of 1 to 16384 characters
       * @minLength 1
       * @maxLength 16834
       */
      query: string
      /** `mine` or a comma-separated list of Board IDs */
      idBoards?: 'mine' | TrelloID
      /** A comma-separated list of Organization IDs */
      idOrganizations?: string
      /** A comma-separated list of Card IDs */
      idCards?: string
      /**
       * What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`
       * @default "all"
       */
      modelTypes?: string
      /**
       * all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`
       * @default "name,idOrganization"
       */
      board_fields?: string
      /**
       * The maximum number of boards returned. Maximum: 1000
       * @max 1000
       * @default 10
       */
      boards_limit?: number
      /**
       * Whether to include the parent organization with board results
       * @default false
       */
      board_organization?: boolean
      /**
       * all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `email`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`
       * @default "all"
       */
      card_fields?: string
      /**
       * The maximum number of cards to return. Maximum: 1000
       * @max 1000
       * @default 10
       */
      cards_limit?: number
      /**
       * The page of results for cards. Maximum: 100
       * @max 100
       * @default 0
       */
      cards_page?: number
      /**
       * Whether to include the parent board with card results
       * @default false
       */
      card_board?: boolean
      /**
       * Whether to include the parent list with card results
       * @default false
       */
      card_list?: boolean
      /**
       * Whether to include member objects with card results
       * @default false
       */
      card_members?: boolean
      /**
       * Whether to include sticker objects with card results
       * @default false
       */
      card_stickers?: boolean
      /**
       * Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.
       * @default "false"
       */
      card_attachments?: string
      /**
       * all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website
       * @default "name,displayName"
       */
      organization_fields?: string
      /**
       * The maximum number of Workspaces to return. Maximum 1000
       * @format int32
       * @default "10"
       */
      organizations_limit?: number
      /**
       * all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
       * @default "avatarHash,fullName,initials,username,confirmed"
       */
      member_fields?: string
      /**
       * The maximum number of members to return. Maximum 1000
       * @format int32
       * @default "10"
       */
      members_limit?: number
      /**
       * By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled "My Development Status Report", by default you would need to search for "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment".
       * @default false
       */
      partial?: boolean
    },
    params: IRequestParams = {}
  ): Promise<(Member | Card | Board | Organization)[]> {
    return this.client.request<(Member | Card | Board | Organization)[]>({
      path: `/search`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }

  /**
   * Search for Trello members.
   *
   * @name GetSearchMembers
   * @summary Search for Members
   * @request GET:/search/members/
   * @secure
   */
  public async getSearchMembers(
    query: {
      /**
       * Search query 1 to 16384 characters long
       * @minLength 1
       * @maxLength 16394
       */
      query: string
      /**
       * The maximum number of results to return. Maximum of 20.
       * @format int32
       * @max 20
       * @default 8
       */
      limit?: number
      idBoard?: TrelloID
      idOrganization?: TrelloID
      /** @default false */
      onlyOrgMembers?: boolean
    },
    params: IRequestParams = {}
  ): Promise<Member[]> {
    return this.client.request<Member[]>({
      path: `/search/members/`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  }
}
