import {connect} from 'react-redux';
import { fetchUser, updateUser } from '../../actions/users_actions';
import EditProfile from './edit_profile';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
