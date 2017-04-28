import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/signup'));
  }


  render() {

      return (
        <div className="search">
          <form className="search-form">
          </form>
        </div>
      );
  }

}

// <input type="text" name="search" placeholder="Search.." />
export default withRouter(Search);
