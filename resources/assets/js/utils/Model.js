/* ============
 * Model
 * ============
 *
 * The base model.
 *
 * Model are used to map the data
 * and help in avoiding code repetition
 * For instance,
 * if we need to get user full name by joining first and last name
 * or if we want to manipulate user dates
 * we can write a function
 */
import moment from 'moment'
import _ from 'lodash'

class Model {
  constructor(props) {
    this.initialize(props)
  }
  
  initialize(props) {
    this.id = props.id && Number(props.id) || null
    this.createdAt = props.createdAt && moment(props.createdAt) || null
    this.updatedAt = props.updatedAt && moment(props.updatedAt) || null
    this.deletedAt = props.deletedAt && moment(props.deletedAt) || null
  }
  
  toJson() {
    const props = Object.assign({}, this)
    
    _.forOwn(props, (value, key) => {
      if (value instanceof moment) {
        props[key] = value.format('YYYY-MM-DD HH:mm:ss')
      }
    })
    return props
  }
}

export default Model
