import { connect } from "react-redux";
import { fetchUser } from '../../../actions/users_actions';
import FollowsModal from './follows_modal';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  followers: state.user.followers,
  followees: state.user.followees
});

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FollowsModal);
