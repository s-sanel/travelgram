import { RECEIVE_SEARCH_RESULTS, REMOVE_SEARCH_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const _nullSearchResults = [];

const SearchResultsReducer = (oldState = [], action) => {
  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    case REMOVE_SEARCH_RESULTS:
      return _nullSearchResults;
    default:
      return oldState;
  }
};

export default SearchResultsReducer;
