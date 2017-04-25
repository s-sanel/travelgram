import { connect } from "react-redux";
import { fetchPosts, createPost } from '../../actions/posts_actions';
import UploadPost from './upload_post';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPost);
