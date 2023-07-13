import { Actions } from './api/Actions'
import { Applications } from './api/Applications'
import { Batch } from './api/Batch'
import { Boards } from './api/Boards'
import { Cards } from './api/Cards'
import { Checklists } from './api/Checklists'
import { CustomFields } from './api/CustomFields'
import { Emoji } from './api/Emoji'
import { Enterprises } from './api/Enterprises'
import { HttpClient, IHttpClientOptions } from './api/http-client'
import { Labels } from './api/Labels'
import { Lists } from './api/Lists'
import { Members } from './api/Members'
import { Notifications } from './api/Notifications'
import { Organizations } from './api/Organizations'
import { Plugins } from './api/Plugins'
import { Search } from './api/Search'
import { Tokens } from './api/Tokens'
import { Webhooks } from './api/Webhooks'

export interface ITrelloClientOptions extends IHttpClientOptions {}

export class TrelloClient extends HttpClient {
  public readonly actions = new Actions(this)
  public readonly application = new Applications(this)
  public readonly batch = new Batch(this)
  public readonly boards = new Boards(this)
  public readonly cards = new Cards(this)
  public readonly checklists = new Checklists(this)
  public readonly customFields = new CustomFields(this)
  public readonly emoji = new Emoji(this)
  public readonly enterprises = new Enterprises(this)
  public readonly labels = new Labels(this)
  public readonly lists = new Lists(this)
  public readonly members = new Members(this)
  public readonly notifications = new Notifications(this)
  public readonly organizations = new Organizations(this)
  public readonly plugins = new Plugins(this)
  public readonly search = new Search(this)
  public readonly tokens = new Tokens(this)
  public readonly webhooks = new Webhooks(this)

  public constructor(opts: ITrelloClientOptions) {
    super(opts)
  }
}
