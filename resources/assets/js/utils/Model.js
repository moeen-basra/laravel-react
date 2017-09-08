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

class Model {
  
  id
  createdAt
  updatedAt
  
  constructor(props) {
    this.initialize(props)
  }
  
  initialize(props) {
    this.id = props.id && Number(props.id) || null
    this.createdAt = props.createdAt && moment(props.createdAt) || null
    this.updatedAt = props.updatedAt && moment(props.updatedAt) || null
  }
}

export default Model
