import { connect } from "react-redux";
import { logout  } from "../../actions/session_actions";
import NavLinks from './nav_links';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NavLinks);
