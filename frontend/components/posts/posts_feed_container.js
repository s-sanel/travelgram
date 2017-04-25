import { connect } from "react-redux";
import { fetchPosts } from '../../actions/posts_actions';
import { createLike, deleteLike } from '../../actions/likes_actions';
import { createComment, deleteComment } from '../../actions/comments_actions';
import PostsFeed from './posts_feed';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    posts: Object.keys(state.posts).map(id => state.posts[id]).reverse()
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPosts: () => dispatch(fetchPosts()),
    createLike: (postId) => dispatch(createLike(postId)),
    deleteLike: (postId) => dispatch(deleteLike(postId)),
    createComment: (postId, body) => dispatch(createComment(postId, body)),
    deleteComment: id => dispatch(deleteComment(id))
  });

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsFeed);
