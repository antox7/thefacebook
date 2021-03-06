import * as FriendAPIUtil from '../util/friend_api_util';
import { RECEIVE_CURRENT_USER } from './session_actions';

export const createFriendRequest = (senderId, receiverId) => dispatch => {
    return FriendAPIUtil.createFriendRequest(senderId, receiverId).then(user => {
        return dispatch({type: RECEIVE_CURRENT_USER, user});
    });
};

export const updateFriendRequest = (senderId, receiverId) => dispatch => {
    return FriendAPIUtil.updateFriendRequest(senderId, receiverId).then(user => {
        return dispatch({ type: RECEIVE_CURRENT_USER, user });
    });
};


export const deleteFriendRequest = (senderId, receiverId) => dispatch => {
    return FriendAPIUtil.deleteFriendRequest(senderId, receiverId).then(user => {
        return dispatch({ type: RECEIVE_CURRENT_USER, user });
    });
};