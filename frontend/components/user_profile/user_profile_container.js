import {connect} from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchUser } from '../../actions/users_actions';
import UserProfile from './user_profile';
import { selectUserPosts } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    posts: selectUserPosts(state, ownProps.params.user_id),
    // posts: Object.keys(state.posts).map(id => state.posts[id])
    user: state.user,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUser: (id) => dispatch(fetchUser(id))
  // fetchUserPosts: (id) => dispatch(fetchUserPosts(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
