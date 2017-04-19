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
        {this.props.currentUser.username} <button onClick={this.handleLogout}>Logout!</button>
      <hr/>
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