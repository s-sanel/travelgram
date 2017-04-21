import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.profilePage = this.profilePage.bind(this);
  }

  profilePage(){

    this.props.router.push(`/${this.props.currentUser.id}`);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/signup'));
  }


  render() {

      return (
        <div className="main-nav-links">
          <div className="main-nav-explore">
            <a href="#" title="Discover">
              <i className="fa fa-compass" aria-hidden="true"></i>
            </a>
          </div>
          <div className="upload-photo">
            <a href="#" title="Upload photo">
              <i className="fa fa-upload" aria-hidden="true"></i>
            </a>
          </div>
          <div className="main-nav-user">
            <Link onClick={this.profilePage} title="Profile page">
              <i className="fa fa-user-o" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="main-nav-logout">
            <Link onClick={this.handleLogout} title="Logout"><i className="fa fa-sign-out" aria-hidden="true"></i></Link>
          </div>
        </div>);
    }

}
// {this.props.currentUser.username}
export default withRouter(Greeting);
