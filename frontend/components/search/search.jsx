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
            <input type="text" name="search" placeholder="Search.." />
          </form>
        </div>
      );
  }

}

export default withRouter(Search);
