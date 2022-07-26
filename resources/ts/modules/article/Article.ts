import moment, { Moment } from 'moment'
import { ArticleInterface, UserInterface } from '../../types'
import Model, { ModelProps } from '../../utils/Model'
import User from '../user/User'

type Props = {
  id: string,
  slug: string,
  title: string,
  description: string,
  content: string,
  publishedAt: string,
  user: any
} & ModelProps

class Article extends Model implements ArticleInterface {

  slug: null|string
  title: null|string
  description: null|string
  content: null|string
  publishedAt: null|Moment

  user: null|UserInterface

  constructor(props: Props) {
    super(props)

    this.slug = props.slug || ''
    this.title = props.title || ''
    this.description = props.description || ''
    this.content = props.content || ''
    this.publishedAt = props.publishedAt ? moment(props.publishedAt) : null

    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Article
