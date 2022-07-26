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
import { ModelInterface } from '../types'

export type ModelProps = {
  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  deletedAt?: string
}

class Model implements ModelInterface {
  [key: string]: any
  id?: string | number
  createdAt?: null | Moment
  updatedAt?: null | Moment
  deletedAt?: null | Moment

  constructor(props: ModelProps) {
    this.initialize(props)
  }

  initialize(props: ModelProps) {
    this.id = props.id && Number(props.id) || undefined
    this.createdAt = props.createdAt && moment(props.createdAt) || null
    this.updatedAt = props.updatedAt && moment(props.updatedAt) || null
    this.deletedAt = props.deletedAt && moment(props.deletedAt) || null
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
