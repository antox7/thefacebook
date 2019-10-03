import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

//currentUser: state.entities.users[Object.keys(state.entities.users).slice(-1)[0]]
//or just .pop()

const mapStateToProps = state => {
  // debugger
  return { currentUser: state.entities.users[state.session.currentUserId]}
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

// the connected component

// 