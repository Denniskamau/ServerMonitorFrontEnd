import { connect } from 'react-redux'
import { getUser } from '../../actions'
import login from '../login'

// const mapStateToProps = state => {
//     return {
//       user:state.reminders
//     }
//   }
 
  
  const mapDispatchToProps = dispatch => {
    return {
      addUseAction: data => { dispatch(getUser(data)) }
    }
  }
   

// Wire up the state and dispatch methods with the component that displays the UI
const LoginContainer = connect(
    mapDispatchToProps
  )(login)
   
  export default LoginContainer