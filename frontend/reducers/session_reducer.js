import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash/merge';

let defaultState = { currentUser: null, errors: [] };


const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return Object.assign({}, defaultState, {currentUser});

    case RECEIVE_ERRORS:
      let errors = action.errors;
      return Object.assign({}, defaultState, { errors } );

    default:
      return state;
  }
};


export default SessionReducer;
