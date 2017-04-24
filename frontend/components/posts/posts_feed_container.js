import { connect } from "react-redux";
import { fetchPosts } from '../../actions/posts_actions';
import PostsFeed from './posts_feed';

const mapStateToProps = (state) => {
// debugger
  return {
    // currentUser: state.session.currentUser,
    posts: Object.keys(state.posts).map(id => state.posts[id])
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsFeed);
