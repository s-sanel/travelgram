import {connect} from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import UserProfile from './user_profile';
import { selectUserPosts } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: selectUserPosts(state, ownProps.params.user_id)
    // posts: Object.keys(state.posts).map(id => state.posts[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
