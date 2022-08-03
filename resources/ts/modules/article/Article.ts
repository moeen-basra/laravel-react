import moment, { Moment } from 'moment'
import { ArticleProps } from '../../types'
import Model from '../../utils/Model'
import User from '../user/User'

export class Article extends Model {

  slug: string
  title: string
  description: string
  content: string
  publishedAt?: Moment

  user?: User

  constructor(props: ArticleProps) {
    super(props)

    this.slug = props.slug
    this.title = props.title
    this.description = props.description
    this.content = props.content

    if (props.publishedAt) {
      this.publishedAt = moment(props.publishedAt)
    }

    // relate user model
    if (props.user) {
      this.user = new User(props.user)
    }
  }
}

export default Article
