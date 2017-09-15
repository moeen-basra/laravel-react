import Model from './Model'
import Article from './Article'

class User extends Model {
  constructor(props) {
    super(props)
    
    this.initialize(props)
  }
  
  initialize(props) {
    super.initialize(props)
    
    this.name = props.name || ''
    this.email = props.email || ''
    this.phone = props.phone || ''
    this.about = props.about || ''
    
    // relate article
    this.article = props.article ? new Article(props.article) : null
  }
}

export default User
