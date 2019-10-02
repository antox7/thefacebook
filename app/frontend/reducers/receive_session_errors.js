import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/sesssion_actions";

const defaultState = {
  session: []
};

const sessionErrorsReducer = (errorState = defaultState, action) => {
  Object.freeze(errorState);
  switch (action.type) {
    case RECEIVE_ERRORS: {
      let newErrorState = Object.assign({}, errorState);
      newErrorState["session"] = action.errors;
      return newErrorState;
    }
    case RECEIVE_CURRENT_USER:
      return (Object.assign({}, errorState)["session"] = []);
    default:
      return errorState;
  }
};

export default sessionErrorsReducer;