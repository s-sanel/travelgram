import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/signup'));
  }


  render() {
    if (this.props.currentUser) {
      return (
        <div>
        <h3> Hello, {this.props.currentUser.username}</h3>
        <button onClick={this.handleLogout}>Logout!</button>
        </div>);
    }
    else {
      return (
        <div>
          <nav>
            <p>Not logged</p>
          </nav>
        </div>
      );
    }
  }

}

export default withRouter(Greeting);
