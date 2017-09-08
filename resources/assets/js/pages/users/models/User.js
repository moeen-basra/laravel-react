import Model from '../../../utils/Model'

class User extends Model {
  
  name = '';
  email = '';
  
  constructor(props) {
    super(props)
    
    this.initialize(props)
  }
  
  initialize(props) {
    super.initialize(props)
    
    this.name = props.name || ''
    this.email = props.email || ''
  }
}

export default User
