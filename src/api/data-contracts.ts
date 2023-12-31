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

/**
 * @pattern ^[0-9a-fA-F]{32}$
 * @example "0471642aefef5fa1fa76530ce1ba4c85"
 */
export type APIKey = string

/** @example "9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548" */
export type APIToken = string

export interface IAction {
  data?: {
    /** @example "Can never go wrong with bowie" */
    text?: string
    card?: {
      id?: TrelloID
      /** @example "Bowie" */
      name?: string
      /** @example 7 */
      idShort?: number
      /** @example "3CsPkqOF" */
      shortLink?: string
    }
    board?: {
      id?: TrelloID
      /** @example "Mullets" */
      name?: string
      /** @example "3CsPkqOF" */
      shortLink?: string
    }
    list?: {
      id?: TrelloID
      /** @example "Amazing" */
      name?: string
    }
  }
  /**
   * @format date-time
   * @example "2020-03-09T19:41:51.396Z"
   */
  date?: string
  display?: {
    /** @example "action_comment_on_card" */
    translationKey?: string
    entities?: {
      contextOn?: {
        /** @example "translatable" */
        type?: string
        /** @example "action_on" */
        translationKey?: string
        hideIfContext?: boolean
        idContext?: TrelloID
      }
      card?: {
        /** @example "card" */
        type?: string
        hideIfContext?: boolean
        id?: TrelloID
        /** @example "3CsPkqOF" */
        shortLink?: string
        /** @example "Bowie" */
        text?: string
      }
      comment?: {
        /** @example "comment" */
        type?: string
        /** @example "Can never go wrong with bowie" */
        text?: string
      }
      memberCreator?: {
        /** @example "member" */
        type?: string
        id?: TrelloID
        /** @example "bobloblaw" */
        username?: string
        /** @example "Bob Loblaw (World)" */
        text?: string
      }
    }
  }
  id?: TrelloID
  idMemberCreator?: TrelloID
  limits?: {
    reactions?: {
      perAction?: {
        /** @example "ok" */
        status?: string
        /** @example 1000 */
        disableAt?: number
        /** @example 900 */
        warnAt?: number
      }
      uniquePerAction?: {
        /** @example "ok" */
        status?: string
        /** @example 1000 */
        disableAt?: number
        /** @example 900 */
        warnAt?: number
      }
    }
  }
  memberCreator?: {
    /** @example "5b02e7f4e1facdc393169f9d" */
    id?: TrelloID
    /** @example false */
    activityBlocked?: boolean
    /** @example "db2adf80c2e6c26b76e1f10400eb4c45" */
    avatarHash?: string
    /**
     * @format url
     * @example "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45"
     */
    avatarUrl?: string
    /** @example "Bob Loblaw (Trello)" */
    fullName?: string
    /** @example null */
    idMemberReferrer?: TrelloID | null
    /** @example "BL" */
    initials?: string
    /** @example "bobloblaw" */
    username?: string
  }
  /** @example "commentCard" */
  type?: string
}

export enum ActionFields {
  Id = 'id',
  IdMemberCreator = 'idMemberCreator',
  Data = 'data',
  Type = 'type',
  Date = 'date',
  Limits = 'limits',
  Display = 'display',
  MemberCreator = 'memberCreator'
}

export interface IAttachment {
  /** @example null */
  bytes?: string | null
  /**
   * @format date
   * @example "2018-10-17T19:10:14.808Z"
   */
  date?: string
  /** @example null */
  edgeColor?: Color | null
  /** @example "5bc79d4206526d2279c1e6ea" */
  id?: TrelloID
  /** @example "5bc79d4206526d2279c1e6eb" */
  idMember?: TrelloID
  /** @example false */
  isUpload?: boolean
  /** @example "" */
  mimeType?: string
  /** @example "Deprecation Extension Notice" */
  name?: string
  /**
   * @format float
   * @example 1638
   */
  pos?: number
  /** @example [] */
  previews?: string[]
  /**
   * @format url
   * @example "https://admin.typeform.com/form/RzExEM/share#/link"
   */
  url?: string
}

export enum AttachmentFields {
  Id = 'id',
  Bytes = 'bytes',
  Date = 'date',
  EdgeColor = 'edgeColor',
  IdMember = 'idMember',
  IsUpload = 'isUpload',
  MimeType = 'mimeType',
  Name = 'name',
  Previews = 'previews',
  Url = 'url',
  Pos = 'pos'
}

/** @example "notification_comment_card" */
export enum BlockedKey {
  NotificationCommentCard = 'notification_comment_card',
  NotificationAddedADueDate = 'notification_added_a_due_date',
  NotificationChangedDueDate = 'notification_changed_due_date',
  NotificationCardDueSoon = 'notification_card_due_soon',
  NotificationRemovedFromCard = 'notification_removed_from_card',
  NotificationAddedAttachmentToCard = 'notification_added_attachment_to_card',
  NotificationCreatedCard = 'notification_created_card',
  NotificationMovedCard = 'notification_moved_card',
  NotificationArchivedCard = 'notification_archived_card',
  NotificationUnarchivedCard = 'notification_unarchived_card'
}

export interface IBoard {
  /** @example false */
  closed?: boolean
  creationMethod?: string | null
  /** @format date */
  dateLastActivity?: string
  /** @format date */
  dateLastView?: string
  /** @format date */
  datePluginDisable?: string | null
  /** @example "Track changes to Trello's Platform on this board." */
  desc?: string
  descData?: string
  enterpriseOwned?: boolean
  id: TrelloID
  idMemberCreator?: TrelloID
  idOrganization?: TrelloID
  idTags?: string
  ixUpdate?: number
  labelNames?: {
    /** @example "Addition" */
    green?: string
    /** @example "Update" */
    yellow?: string
    /** @example "Deprecation" */
    orange?: string
    /** @example "Deletion" */
    red?: string
    /** @example "Power-Ups" */
    purple?: string
    /** @example "News" */
    blue?: string
    /** @example "Announcement" */
    sky?: string
    /** @example "Delight" */
    lime?: string
    /** @example "REST API" */
    pink?: string
    /** @example "Capabilties" */
    black?: string
  }
  limits?: ILimits
  memberships?: string
  /**
   * The name of the board.
   * @example "Trello Platform Changes"
   */
  name?: string
  /** @example false */
  pinned?: boolean
  powerUps?: string
  prefs?: IPrefs
  shortLink?: string
  /**
   * @format url
   * @example "https://trello.com/b/dQHqCohZ"
   */
  shortUrl?: string
  starred?: boolean
  subscribed?: boolean
  templateGallery?: string | null
  /**
   * @format url
   * @example "https://trello.com/b/dQHqCohZ/trello-platform-changelog"
   */
  url?: string
}

export interface IBoardBackground {
  id?: TrelloID
}

export enum BoardFields {
  Id = 'id',
  Name = 'name',
  Desc = 'desc',
  DescData = 'descData',
  Closed = 'closed',
  IdMemberCreator = 'idMemberCreator',
  IdOrganization = 'idOrganization',
  Pinned = 'pinned',
  Url = 'url',
  ShortUrl = 'shortUrl',
  Prefs = 'prefs',
  LabelNames = 'labelNames',
  Starred = 'starred',
  Limits = 'limits',
  Memberships = 'memberships',
  EnterpriseOwned = 'enterpriseOwned'
}

export interface IBoardStars {
  /** @example "585063850027165010be15a8" */
  id?: TrelloID
  /** @example "57f7df684f1ca8c2877162e0" */
  idBoard?: TrelloID
  /** @example 32768 */
  pos?: number
}

export interface ICFValue {
  number?: string
}

export interface ICard {
  address?: string | null
  badges?: {
    attachmentsByType?: {
      trello?: {
        board?: number
        card?: number
      }
    }
    location?: boolean
    votes?: number
    /** @example false */
    viewingMemberVoted?: boolean
    /** @example false */
    subscribed?: boolean
    fogbugz?: string
    /** @example 0 */
    checkItems?: number
    /** @example 0 */
    checkItemsChecked?: number
    /** @example 0 */
    comments?: number
    /** @example 0 */
    attachments?: number
    description?: boolean
    /** @format date */
    due?: string | null
    /** @format date */
    start?: string | null
    dueComplete?: boolean
  }
  checkItemStates?: string[]
  closed?: boolean
  coordinates?: string | null
  cover?: {
    idAttachment?: TrelloID | null
    color?: Color | null
    idUploadedBackground?: boolean | null
    size?: 'normal'
    brightness?: 'light' | 'dark'
    /** @example false */
    isTemplate?: boolean
  }
  creationMethod?: string | null
  /**
   * @format date-time
   * @example "2019-09-16T16:19:17.156Z"
   */
  dateLastActivity?: string
  /**
   * @example "👋Hey there,
   *
   * Trello's Platform team uses this board to keep developers up-to-date."
   */
  desc?: string
  descData?: {
    emoji?: object
  }
  /** @format date */
  due?: string | null
  dueReminder?: string | null
  /**
   * @format email
   * @example "bentleycook+2kea95u7kchsvqnxkwe+2q0byi6qv4pt9uc7q5m+25qyyohtzg@boards.trello.com"
   */
  email?: string
  id?: TrelloID
  /** @example "5abbe4b7ddc1b351ef961415" */
  idAttachmentCover?: TrelloID | null
  /** @example "5abbe4b7ddc1b351ef961414" */
  idBoard?: TrelloID
  idChecklists?: (IChecklist | TrelloID)[]
  idLabels?: (ILabel | TrelloID)[]
  /** @example "5abbe4b7ddc1b351ef961415" */
  idList?: TrelloID
  idMembers?: TrelloID[]
  idMembersVoted?: TrelloID[]
  idShort?: number
  labels?: TrelloID[]
  limits?: ILimits
  locationName?: string | null
  /** @example false */
  manualCoverAttachment?: boolean
  /** @example "👋 What? Why? How?" */
  name?: string
  /**
   * @format float
   * @example 65535
   */
  pos?: number
  /** @example "H0TZyzbK" */
  shortLink?: string
  /**
   * @format url
   * @example "https://trello.com/c/H0TZyzbK"
   */
  shortUrl?: string
  /** @example false */
  subscribed?: boolean
  /**
   * @format url
   * @example "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how"
   */
  url?: string
}

export enum CardAging {
  Pirate = 'pirate',
  Regular = 'regular'
}

/** The fields on a Card. */
export enum CardFields {
  Id = 'id',
  Address = 'address',
  Badges = 'badges',
  CheckItemStates = 'checkItemStates',
  Closed = 'closed',
  Coordinates = 'coordinates',
  CreationMethod = 'creationMethod',
  DueComplete = 'dueComplete',
  DateLastActivity = 'dateLastActivity',
  Desc = 'desc',
  DescData = 'descData',
  Due = 'due',
  DueReminder = 'dueReminder',
  Email = 'email',
  IdBoard = 'idBoard',
  IdChecklists = 'idChecklists',
  IdLabels = 'idLabels',
  IdList = 'idList',
  IdMembers = 'idMembers',
  IdMembersVoted = 'idMembersVoted',
  IdShort = 'idShort',
  IdAttachmentCover = 'idAttachmentCover',
  Labels = 'labels',
  Limits = 'limits',
  LocationName = 'locationName',
  ManualCoverAttachment = 'manualCoverAttachment',
  Name = 'name',
  Pos = 'pos',
  ShortLink = 'shortLink',
  ShortUrl = 'shortUrl',
  Subscribed = 'subscribed',
  Url = 'url',
  Cover = 'cover',
  IsTemplate = 'isTemplate'
}

/** @example "email" */
export enum Channel {
  Email = 'email'
}

export interface ICheckItem {
  /** @example "5dc9b509f02f4314edc4303a" */
  id?: TrelloID
  /** @example "5dc9b507756e182c76007621" */
  idChecklist?: TrelloID
  name?: string
  /** @example null */
  nameData?: string | null
  /** @example 1673 */
  pos?: string
  /** @example "incomplete" */
  state?: 'complete' | 'incomplete'
}

export interface IChecklist {
  id?: TrelloID
}

export interface IClaimableOrganizations {
  /** @example 2 */
  claimableCount?: number
  organizations?: {
    /** @example "organization_name" */
    name?: string
    /** @example "Organization Name" */
    displayName?: string
    /** @example 5 */
    activeMembershipCount?: number
    idActiveAdmins?: TrelloID[]
    products?: number[]
    /** @example "617abd5995eae45169a11059" */
    id?: TrelloID
    /** @example null */
    logoUrl?: string | null
    /**
     * The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null.
     * @format date
     * @example "2019-08-22T18:15:53.546Z"
     */
    dateLastActive?: string | null
  }[]
}

export enum Color {
  Yellow = 'yellow',
  Purple = 'purple',
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
  Orange = 'orange',
  Black = 'black',
  Sky = 'sky',
  Pink = 'pink',
  Lime = 'lime'
}

export interface ICustomEmoji {
  /** @example "5900ac11ed55d6d2c355c5d6" */
  id?: TrelloID
  /** @example "chorizo" */
  name?: string
  /**
   * @format url
   * @example "https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png"
   */
  url?: string
}

export interface ICustomField {
  display?: {
    /** @example true */
    cardFront?: boolean
    /** @example "Priority 🏔" */
    name?: string
    /** @example "98304," */
    pos?: string
    options?: {
      /** @example "5ab10be237846c43015f1091" */
      id?: TrelloID
      /** @example "5ab10be237846c43015f108e" */
      idCustomField?: TrelloID
      value?: {
        /** @example "High" */
        text?: string
      }
      /** @example "red" */
      color?: string
      /** @example 16384 */
      pos?: number
    }[]
  }
  /** @example "f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955" */
  fieldGroup?: string
  /** @example "5ab10be237846c43015f108e" */
  id?: TrelloID
  /** @example "586e8f681d4fe9b06a928307" */
  idModel?: string
  /** @example "board" */
  modelType?: 'card' | 'board' | 'member'
  /** @example "list" */
  type?: string
}

export interface ICustomFieldItems {
  id?: TrelloID
  /** @example "5b080fd8017bd1653b5480fa" */
  idCustomField?: TrelloID
  /** @example "5b080ff194611b41aaaa9570" */
  idModel?: TrelloID
  /** @example "card" */
  modelType?: 'card' | 'board' | 'member'
  value?: {
    /** @example "true" */
    checked?: string
  }
}

export interface ICustomSticker {
  id?: TrelloID
  scaled?: {
    id?: TrelloID
  }[]
  /** @format url */
  url?: string
}

export interface IEmoji {
  trello?: {
    /** @example "1F600" */
    unified?: string
    /** @example "GRINNING FACE" */
    name?: string
    /** @example "😀" */
    native?: string
    /** @example "grinning" */
    shortName?: string
    shortNames?: string[]
    /** @example ":)" */
    text?: string
    /** @example null */
    texts?: string | null
    /** @example "Smileys & People" */
    category?: string
    /** @example 30 */
    sheetX?: number
    /** @example 24 */
    sheetY?: number
    /** @example "grinning face" */
    tts?: string
    keywords?: string[]
  }[]
}

export interface IEnterprise {
  /**
   * @format date
   * @example "2019-08-22T18:15:53.546Z"
   */
  dateOrganizationPrefsLastUpdated?: string
  /** @example "Bentley's Test Enterprise!" */
  displayName?: string
  domains?: string[]
  enterpriseDomains?: string[]
  /** @example "59c15d19566e197b23665901" */
  id?: TrelloID
  idAdmins?: TrelloID[]
  idOrganizations?: TrelloID[]
  idp?: {
    /** @example false */
    requestSigned?: boolean
    /** @example null */
    certificate?: string | null
    /**
     * @format url
     * @example null
     */
    loginUrl?: string | null
  }
  /** @example true */
  isRealEnterprise?: boolean
  licenses?: {
    /**
     * @format integer
     * @example null
     */
    maxMembers?: number | null
    /**
     * @format integer
     * @example 5
     */
    totalMembers?: number
    relatedEnterprises?: {
      /** @example "enterprise_name" */
      name?: string
      /** @example "My Test Enterprise!" */
      displayName?: string
      /**
       * @format integer
       * @example 5
       */
      count?: number
    }[]
  }
  /** @example null */
  logoHash?: string | null
  /** @example null */
  logoUrl?: string | null
  /** @example "bentley_test" */
  name?: string
  organizationPrefs?: {
    boardVisibilityRestrict?: object
    boardDeleteRestrict?: object
    attachmentRestrictions?: (
      | 'computer'
      | 'trello'
      | 'google-drive'
      | 'box'
      | 'onedrive'
      | 'link'
    )[]
  }
  pluginWhitelistingEnabled?: TrelloID[]
  prefs?: {
    /** @example false */
    ssoOnly?: boolean
    signup?: {
      banner?: string
      /**
       * @example "<p>Hello</p>
       * "
       */
      bannerHtml?: string
    }
    /**
     * @format date
     * @example null
     */
    mandatoryTransferDate?: string | null
    brandingColor?: string
    /** @example false */
    autoJoinOrganizations?: boolean
    notifications?: object
    /** @example null */
    maxMembers?: number | null
  }
  products?: number[]
  ssoActivationFailed?: boolean
}

export interface IEnterpriseAdmin {
  /** @example "Bob Loblaw" */
  fullName?: string
  /** @example "5dced8665015383ed5ca248c" */
  id?: TrelloID
  /** @example "bobloblaw" */
  username?: string
}

export interface IEnterpriseAuditLog {
  /**
   * @format date
   * @example "2018-04-26T17:03:25.155Z"
   */
  date?: string
  /** @example "5dced8665015383ed5ca248c" */
  idAction?: TrelloID
  member?: {
    /** @example "5bc79d4206526d2279c1e6ea" */
    id?: TrelloID
    /** @example "bentleycook" */
    username?: string
    /** @example "Bentley Cook" */
    fullName?: string
  }
  memberCreator?: {
    /** @example "5bc79d4206526d2279c1e6ea" */
    id?: TrelloID
    /** @example "bobloblaw" */
    username?: string
    /** @example "Bob Loblaw (Trello)" */
    fullName?: string
  }
  organization?: {
    enterpriseJoinRequest?: {
      /** @example "617ac9070293e6612650e0ca" */
      idEnterprise?: TrelloID
      /** @example "5bc79d4206526d2279c1e6ea" */
      idMember?: TrelloID
      /**
       * @format date
       * @example "2018-04-26T17:03:25.155Z"
       */
      date?: string
    } | null
    /** @example "617ac9070293e6612650e0ca" */
    id?: TrelloID
    /** @example "organization name" */
    name?: string
  }
  /** @example "addOrganizationToEnterprise" */
  type?: string
}

export interface IError {
  code: string
  message: string
}

export interface IExport {
  /** @example null */
  exportUrl?: string | null
  /** @example "5dced8665015383ed5ca248c" */
  id?: TrelloID
  /** @example null */
  size?: string | null
  /**
   * @format date-time
   * @example "2019-11-15T16:55:02.000Z"
   */
  startedAt?: string
  status?: {
    /** @example 0 */
    attempts?: number
    /** @example false */
    finished?: boolean
    /** @example "Export_queued" */
    stage?: string
  }
}

export interface IImageDescriptor {
  /**
   * The height of the image.
   * @example 64
   */
  height?: number
  /**
   * The URL of the image.
   * @format url
   * @example "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
   */
  url?: string
  /**
   * The width of the image.
   * @example 100
   */
  width?: number
}

export interface ILabel {
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: Color
  /** The ID of the label. */
  id?: TrelloID
  /**
   * The ID of the board the label is on.
   * @example "5abbe4b7ddc1b351ef961414"
   */
  idBoard?: TrelloID
  /**
   * The name displayed for the label.
   * @minLength 0
   * @maxLength 16384
   * @example "Overdue"
   */
  name?: string | null
}

export interface ILimits {
  attachments?: {
    perBoard?: ILimitsObject
  }
}

export interface ILimitsObject {
  /** @example 36000 */
  disableAt?: number
  status?: 'ok' | 'warning'
  /** @example 32400 */
  warnAt?: number
}

export enum ListFields {
  Id = 'id'
}

export interface IMember {
  /**
   * @format email
   * @example null
   */
  aaEmail?: string | null
  /** @example null */
  aaEnrolledDate?: string | null
  /** @example null */
  aaId?: string | null
  /** @example false */
  activityBlocked?: boolean
  /** @example "fc8faaaee46666a4eb8b626c08933e16" */
  avatarHash?: string
  /** @example "gravatar" */
  avatarSource?: 'gravatar' | 'upload'
  /**
   * @format url
   * @example "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16"
   */
  avatarUrl?: string
  /** @example "👋 I'm a developer advocate at Trello!" */
  bio?: string
  bioData?: {
    emoji?: object
  }
  /** @example true */
  confirmed?: boolean
  /** @example "bcook@atlassian.com" */
  email?: string
  /** @example "Bentley Cook" */
  fullName?: string
  /** @example "0a1e804f6e35a65ae5e1f7ef4c92471c" */
  gravatarHash?: string
  id?: TrelloID
  idBoards?: TrelloID[]
  idBoardsPinned?: TrelloID[] | null
  idEnterprise?: TrelloID
  idEnterprisesAdmin?: TrelloID[]
  idEnterprisesDeactivated?: string[]
  /** @example null */
  idMemberReferrer?: TrelloID | null
  idOrganizations?: TrelloID[]
  idPremOrgsAdmin?: TrelloID[]
  /** @example "BC" */
  initials?: string
  /** @example false */
  isAaMastered?: boolean
  /** @example "48427" */
  ixUpdate?: number
  limits?: ILimitsObject
  loginTypes?: ('password' | 'saml')[]
  marketingOptIn?: {
    /** @example false */
    optedIn?: boolean
    /**
     * @format date
     * @example "2018-04-26T17:03:25.155Z"
     */
    date?: string
  }
  /** @example "normal" */
  memberType?: 'normal' | 'ghost'
  messagesDismissed?: {
    /** @example "ad-security-features" */
    name?: string
    /** @example 4 */
    count?: string
    /**
     * @format date
     * @example "2019-03-11T20:19:46.809Z"
     */
    lastDismissed?: string
    /** @example "5995d44573d197eada632a32" */
    _id?: TrelloID
  }
  /**
   * Profile data with restricted visibility. These fields are visible only to members of the
   * same organization. The values here (full name, for example) may differ from the values
   * at the top level of the response.
   */
  nonPublic?: {
    /** @example "Bentley Cook" */
    fullName?: string
    /** @example "BC" */
    initials?: string
    /**
     * A URL that references the non-public avatar for the member
     * @format url
     * @example "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45"
     */
    avatarUrl?: string
    /** @example "db2adf80c2e6c26b76e1f10400eb4c45" */
    avatarHash?: string
  }
  /**
   * Whether the response contains non-public profile data for the member
   * @example false
   */
  nonPublicAvailable?: boolean
  oneTimeMessagesDismissed?: string[]
  prefs?: IMemberPrefs
  premiumFeatures?: string[]
  products?: number[]
  /** @example "disconnected" */
  status?: 'disconnected'
  trophies?: string[]
  /** @example "dac3ad49ff117829dd63a79bb2ea3426" */
  uploadedAvatarHash?: string
  /**
   * @format url
   * @example "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426"
   */
  uploadedAvatarUrl?: string
  /**
   * @format url
   * @example "https://trello.com/bentleycook"
   */
  url?: string
  /** @example "bentleycook" */
  username?: string
}

export enum MemberFields {
  Id = 'id'
}

export interface IMemberPrefs {
  /** @example true */
  colorBlind?: boolean
  /** @example "en-AU" */
  locale?: string
  /** @example 1440 */
  minutesBeforeDeadlineToNotify?: number
  /** @example 60 */
  minutesBetweenSummaries?: number
  privacy?: {
    /** @example "public" */
    fullName?: 'public' | 'private' | 'collaborator'
    /** @example "public" */
    avatar?: 'public' | 'private' | 'collaborator'
  }
  /** @example true */
  sendSummaries?: boolean
  /** @example "America/Chicago" */
  timezone?: string
  timezoneInfo?: {
    /** @example 360 */
    offsetCurrent?: number
    /** @example "CST" */
    timezoneCurrent?: string
    /** @example 300 */
    offsetNext?: number
    /**
     * @format date
     * @example "2020-03-08T08:00:00.000Z"
     */
    dateNext?: string
    /** @example "CDT" */
    timezoneNext?: string
  }
  twoFactor?: {
    /** @example true */
    enabled?: boolean
    /** @example false */
    needsNewBackups?: boolean
  }
}

export interface IMembership {
  admin?: boolean
  collaborator?: boolean
  deactivated?: boolean
  licensed?: boolean
  managed?: boolean
  /** @example {"id":"646e92a0a016198d3cf81e8a","fullname":"Lex Math","username":"amath","dateLastImpression":"2023-05-24T22:41:36.406Z","email":"amath@trello.com","initials":"AM","avatarURL":"trello.com/avatarURL","memberType":"Admin","confirmed":true} */
  member?: {
    id?: string
    fullname?: string
    username?: string
    dateLastImpression?: string
    email?: string
    initials?: string
    avatarURL?: string
    memberType?: string
    confirmed?: boolean
  }
}

export interface IMemberships {
  id?: TrelloID
}

export interface INotification {
  board?: IBoard
  card?: ICard
  /** @example null */
  data?: string
  /** @example "2019-11-08T16:02:52.763Z" */
  date?: string
  /** @example null */
  dateRead?: string
  /** @example "5dc591ac425f2a223aba0a8e" */
  id?: string
  /** @example null */
  idAction?: TrelloID | null
  /** @example null */
  idMemberCreator?: TrelloID | null
  /** @example [] */
  reactions?: any[]
  /** @example "cardDueSoon" */
  type?: 'cardDueSoon'
  /** @example true */
  unread?: boolean
}

export interface INotificationChannelSettings {
  blockedKeys?: BlockedKey[]
  channel?: Channel
  /** @example "5dc591ac425f2a223aba0a8e" */
  id?: string
  /** @example "5589c3ea49b40cedc28cf70e" */
  idMember?: TrelloID
}

export enum NotificationFields {
  Id = 'id',
  Unread = 'unread',
  Type = 'type',
  Date = 'date',
  DateRead = 'dateRead',
  Data = 'data',
  Card = 'card',
  Board = 'board',
  IdMemberCreator = 'idMemberCreator',
  IdAction = 'idAction',
  Reactions = 'reactions'
}

export interface IOrganization {
  id?: TrelloID
}

export enum OrganizationFields {
  Id = 'id',
  Name = 'name'
}

export interface IPendingOrganizations {
  /**
   * @format date
   * @example "2018-10-17T19:10:14.808Z"
   */
  date?: string
  /** @example "Organization Name" */
  displayName?: string
  /** @example "617ac9070293e6612650e0ca" */
  id?: TrelloID
  /** @example "5589c3ea49b40cedc28cf70e" */
  idMember?: TrelloID
  /** @example null */
  logoUrl?: string | null
  memberRequestor?: {
    /** @example "59cd149051aa57a706962996" */
    id?: TrelloID
    /** @example "Bob Loblaw (Trello)" */
    fullName?: string
  }
  /** @example 2 */
  membershipCount?: number
  transferability?: {
    /** @example true */
    transferrable?: boolean
    newBillableMembers?: {
      /** @example "5ab10be237846c43015f1091" */
      id?: TrelloID
      /** @example "Bob Loblaw" */
      fullName?: string
      /** @example "bobloblaw" */
      username?: string
      /** @example "BL" */
      initials?: string
      /** @example "fc8faaaee46666a4eb8b626c08933e16" */
      avatarHash?: string
    }[]
    restrictedMembers?: {
      /** @example "5ab10be237846c43015f1091" */
      id?: TrelloID
      /** @example "Bob Loblaw" */
      fullName?: string
      /** @example "bobloblaw" */
      username?: string
      /** @example "BL" */
      initials?: string
      /** @example "fc8faaaee46666a4eb8b626c08933e16" */
      avatarHash?: string
    }[]
  }
}

export interface IPlugin {
  id?: TrelloID
}

export interface IPluginData {
  /** @example "private" */
  access?: 'private' | 'shared'
  /** @example "5c487f39294cab6ac1d6b305" */
  id?: TrelloID
  /** @example "586e8d7b1af892b26d5b76b1" */
  idModel?: TrelloID
  /** @example "55a5d915446f517774210003" */
  idPlugin?: TrelloID
  /** @example "organization" */
  scope?: 'member' | 'board' | 'organization' | 'card'
  /** @example "{"token":"S=s458:U=bda7cda:E=16fd2e21f55:C=1687b30f2c0:P=185:A=it-team-0604:V=2:H=3b0f3bac9c2a2af766202ebb9530a4a5"}" */
  value?: string
}

export interface IPluginListing {
  /** @example "The [Glitch](https://glitch.com) Power-Up allows you to..." */
  description?: string
  /** @example "5a7cd2f8f99c517f58da1579" */
  id?: TrelloID
  /** @example "en-US" */
  locale?: string
  /** @example "Attachment Section Example" */
  name?: string
  /** @example "" */
  overview?: string
}

export interface IPrefs {
  background?: TrelloID
  /** @example "#1e2e00" */
  backgroundBottomColor?: string
  /** @example "dark" */
  backgroundBrightness?: string
  /** @format uri */
  backgroundImage?: string
  backgroundImageScaled?: IImageDescriptor[]
  backgroundTile?: boolean
  /** @example "#ffffff" */
  backgroundTopColor?: string
  calendarFeedEnabled?: boolean
  canBeEnterprise?: boolean
  canBeOrg?: boolean
  canBePrivate?: boolean
  canBePublic?: boolean
  canInvite?: boolean
  cardAging?: CardAging
  cardCovers?: boolean
  comments?: string
  hideVotes?: boolean
  invitations?: 'admins' | 'members'
  isTemplate?: boolean
  permissionLevel?: 'org' | 'board'
  selfJoin?: boolean
  voting?: 'disabled' | 'enabled'
}

export interface ISavedSearch {
  /** @example "5589b47349b40cedc28ceae2" */
  id?: TrelloID
  /** @example "My Cards" */
  name?: string
  /** @example 1638 */
  pos?: IPosStringOrNumber
  /** @example "@me" */
  query?: string
}

export interface ITag {
  /** @example "58dd6dcaf8b86744d3cb4cde" */
  id?: TrelloID
  /** @example "My Collection" */
  name?: string
}

export interface IToken {
  /**
   * @format date-time
   * @example "2019-10-16T14:27:17.304Z"
   */
  dateCreated?: string
  /**
   * @format date-time
   * @example null
   */
  dateExpires?: string | null
  /** @example "5da728c55235b443c5b97181" */
  id?: TrelloID
  /** @example "5589c3ea49b40cedc28cf70e" */
  idMember?: TrelloID
  /** @example "App Name" */
  identifier?: string
  permissions?: ITokenPermission[]
}

export enum TokenFields {
  Identifier = 'identifier',
  IdMember = 'idMember',
  DateCreated = 'dateCreated',
  DateExpires = 'dateExpires',
  Permissions = 'permissions'
}

export interface ITokenPermission {
  idModel?: TrelloID | '*'
  modelType?: 'board' | 'member' | 'organization' | 'enterprise'
  read?: boolean
  write?: boolean
}

export interface ITransferrableOrganization {
  newBillableMembers?: {
    /** @example "5ab10be237846c43015f1091" */
    id?: TrelloID
    /** @example "Bob Loblaw" */
    fullName?: string
    /** @example "bobloblaw" */
    username?: string
    /** @example "BL" */
    initials?: string
    /** @example "fc8faaaee46666a4eb8b626c08933e16" */
    avatarHash?: string
  }[]
  restrictedMembers?: {
    /** @example "5ab10be237846c43015f1091" */
    id?: TrelloID
    /** @example "Bob Loblaw" */
    fullName?: string
    /** @example "bobloblaw" */
    username?: string
    /** @example "BL" */
    initials?: string
    /** @example "fc8faaaee46666a4eb8b626c08933e16" */
    avatarHash?: string
  }[]
  /** @example true */
  transferrable?: boolean
}

/**
 * @pattern ^[0-9a-fA-F]{24}$
 * @example "5abbe4b7ddc1b351ef961414"
 */
export type TrelloID = string

export interface ITrelloList {
  closed?: boolean
  id?: TrelloID
  idBoard?: string
  limits?: ILimits
  /**
   * The name of the list
   * @example "Things to buy today"
   */
  name?: string
  pos?: number
  softLimit?: string
  subscribed?: boolean
}

export enum ViewFilter {
  All = 'all',
  Closed = 'closed',
  None = 'none',
  Open = 'open'
}

export interface IWebhook {
  /** @example true */
  active?: boolean
  /**
   * @format url
   * @example "https://mywebhookurl.com/?type=board"
   */
  callbackURL?: string
  /** @example 0 */
  consecutiveFailures?: number
  /** @example "Board Webhook" */
  description?: string
  /**
   * @format date
   * @example null
   */
  firstConsecutiveFailDate?: string | null
  /** @example "58dd6dcaf8b86744d3cb4cde" */
  id?: TrelloID
  /** @example "59cd149051aa57a706962996" */
  idModel?: TrelloID
}

export interface ICustomFieldItemValue {
  value?: object
}

export type IPosStringOrNumber = 'top' | 'bottom' | number
