import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {createFriendRequest} from './util/friend_api_util';
import {createPost} from './util/post_api_util';

document.addEventListener("DOMContentLoaded", () => {

  window.createFriendRequest = createFriendRequest;
  window.createPost = createPost;
  let preLoadedState = undefined;
  // debugger
  if(window.currentUser) {
    // debugger
    preLoadedState = {
      session: {
        currentUserId: window.currentUser.id
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    }
  }
  
  const store = configureStore(preLoadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

})