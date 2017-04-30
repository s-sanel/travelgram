  import { connect } from "react-redux";
  import Search from './search';

  import { fetchSearchResults, removeSearchResults } from '../../actions/search_actions';
  import { fetchUser } from '../../actions/users_actions';

  const mapStateToProps = (state) => {
    return {
      user: state.user,
      searchResults: state.searchResults
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return{
      fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
      removeSearchResults: () => dispatch(removeSearchResults()),
      fetchUser: (id) => dispatch(fetchUser(id))
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);
