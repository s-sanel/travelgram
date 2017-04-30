import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchResultItem from './search_result_item'

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      active: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.closeResultsList = this.closeResultsList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.query) {
      this.setState({ active: false, query: ""});
    }
  }

  componentDidMount() {
    window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.setState({ query: '' });
    }
  }

  handleInput(e) {
    e.preventDefault();
    let query = e.target.value;
    if(query === "") {
      this.props.removeSearchResults();
      this.setState({query: "", active: false});
    }else {
      this.setState({
        query: query,
        active: true },
        () => this.props.fetchSearchResults(this.state.query));
    }
  }

  closeResultsList(){
    this.setState({query: "", active: false});
  }

  renderResults(){
    if(this.props.searchResults.length > 0) {
      return(
        this.props.searchResults.map((user) =>
          <SearchResultItem key={user.id} user={user} closeResultsList={this.closeResultsList}/>)

      )
    }else {
      return <div className="search-no-results"><span>No results found.</span></div>
    }
  }

  render() {



  let resultsList = ""
  if( this.state.active) {
    resultsList =
      <div className="search-results">
        <div className="triangle">
          <div className="empty"></div>
        </div>

        <ul className="search-results-list">
          {this.renderResults()}
        </ul>

      </div>;
    }

  return (
    <div className="search">
      <form className="search-form" autocomplete="off">
        <input type="text" name="search" placeholder="Search.."
          value={this.state.query} onChange={this.handleInput}/>
      </form>

      {resultsList}
      </div>
    );


  }

}

export default withRouter(Search);
