import React from 'react';
import { Link, withRouter } from 'react-router';
import NavLinksContainer from './nav_links_container';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.homePageNav = this.homePageNav.bind(this);
  }

  homePageNav(){
    this.props.router.push("/");
  }

  profilePageNav(){
    this.props.router.push(`/${this.props.currentUser.id}`);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/signup'));
  }


  render() {
      return (
        <div className="nav-bar">
          <div className="main-nav-bar-max-width">
            <nav className="main-nav-bar">
              <div className="main-nav-logo">
                <Link onClick={this.homePageNav}><i className="fa fa-instagram" aria-hidden="true"></i></Link>
              <Link onClick={this.homePageNav}>
                <div className="main-nav-logo-text">Travelgram</div>
            </Link>
              </div>
              <SearchContainer />
              <NavLinksContainer />
            </nav>
          </div>
        </div>
      );
    }

}

export default withRouter(NavBar);
