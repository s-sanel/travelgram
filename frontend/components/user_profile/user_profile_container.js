import {connect} from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchUser, updateUser } from '../../actions/users_actions';
import UserProfile from './user_profile';
import { selectUserPosts } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: selectUserPosts(state, ownProps.params.user_id),
    user: state.user,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
