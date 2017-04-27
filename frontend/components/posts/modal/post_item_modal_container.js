import { connect } from "react-redux";
import { fetchPost } from '../../../actions/posts_actions';
import { createLike, deleteLike } from '../../../actions/likes_actions';
import { createComment, deleteComment } from '../../../actions/comments_actions';
import PostItemModal from './post_item_modal';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return ({
    createLike: (postId) => dispatch(createLike(postId)), 
    deleteLike: (postId) => dispatch(deleteLike(postId)),
    createComment: (postId, body) => dispatch(createComment(postId, body)),
    deleteComment: id => dispatch(deleteComment(id))
  });

};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostItemModal);
