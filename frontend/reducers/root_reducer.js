import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import UsersReducer from './users_reducer';
import FetchingReducer from './fetching_reducer';
import SearchResultsReducer from './search_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  user: UsersReducer,
  searchResults: SearchResultsReducer,
  fetching: FetchingReducer
});

export default rootReducer;
