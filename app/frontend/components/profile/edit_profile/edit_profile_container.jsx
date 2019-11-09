import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditProfile from './edit_profile';
import { updateUser } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
    }
}

const mdp = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(msp, mdp)(EditProfile));