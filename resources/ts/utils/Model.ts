/* ============
 * Model
 * ============
 *
 * The base model.
 *
 * Model are used to map the data and help in avoiding code repetition for instance,
 * if we need to get user full name by joining first and last name or if we want
 * to manipulate user dates we can write a function
 */
import moment, { Moment } from 'moment'
import forOwn from 'lodash-es/forOwn'
import { ModelProps } from '../types'

class Model {
  [key: string]: any
  id?: string | number
  createdAt?: Moment
  updatedAt?: Moment
  deletedAt?: null | Moment = null

  constructor(props: ModelProps) {
    this.id = props.id && Number(props.id) || undefined

    if (props.createdAt) {
      this.createdAt = moment(props.createdAt)
    }

    if (props.updatedAt) {
      this.updatedAt = moment(props.updatedAt)
    }

    if (props.deletedAt) {
      this.deletedAt = moment(props.deletedAt)
    }
  }

  getDateString(date: Moment): string {
    return date.toISOString()
  }

  toJs() {
    const props: Record<string, any> = Object.assign({}, this)

    forOwn(props, (value: any, key: string) => {
      if (value instanceof moment) {
        props[key] = this.getDateString(value as Moment)
      }
    })
    return props
  }
}

export default Model
