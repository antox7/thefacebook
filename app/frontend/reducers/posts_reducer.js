import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { merge } from 'lodash';

const PostsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return merge({}, oldState, {[action.post.id]: action.post});
        case RECEIVE_COMMENT: 
            oldState[action.comment.postId].commentIds.push(action.comment.id);
            return oldState;
        case RECEIVE_LIKE:
            if(action.like.likeableType === 'Post'){
                oldState[action.like.likeableId].likerIds.push(action.like.likerId);
                oldState[action.like.likeableId].likeIds.push(action.like.id);
                return oldState;
            } else {
                return oldState;
            }
        case REMOVE_POST:
            let newState = Object.assign({}, oldState);
            delete newState[action.postId];
            return newState;
        case REMOVE_LIKE:
            // 
            if(action.like.likeableType === "Post") {
                let secondNewState = Object.assign({}, oldState);
                // 
                for (let i = 0; i < secondNewState[action.like.likeableId].likeIds.length; i++) {
                    // 
                    if (secondNewState[action.like.likeableId].likeIds[i] === action.like.id) {
                        // 
                        secondNewState[action.like.likeableId].likeIds.splice(i, 1);
                        // 
                    }
                    if (secondNewState[action.like.likeableId].likerIds[i] === action.like.likerId) {
                        // 
                        secondNewState[action.like.likeableId].likerIds.splice(i, 1);
                        // 
                    }
                }
            // 
                return secondNewState;
            } else {
                return oldState;
            }
        default:
            return oldState;
    }
};

export default PostsReducer;
