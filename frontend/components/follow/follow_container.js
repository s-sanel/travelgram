import { connect } from "react-redux";
import { createFollow, deleteFollow } from "../../actions/follows_actions";
import Follow from './follow';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.user
  };
};


const mapDispatchToProps = (dispatch) => ({
  createFollow: (follower_id, following_id) => dispatch(createFollow(follower_id, following_id)),
  deleteFollow: (follower_id, following_id) => dispatch(deleteFollow(follower_id, following_id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Follow);
