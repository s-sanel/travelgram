import {connect} from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    posts: Object.keys(state.posts).map(id => state.posts[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
