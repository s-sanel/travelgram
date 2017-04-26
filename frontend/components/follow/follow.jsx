import React from 'react';
import { Link, withRouter } from 'react-router';
import Spinner from '../shared/spinner';

class Follow extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);

  }


  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/signup'));
  }

  isUserFollowedByCurrentUser(){
    let currentId = this.props.user.id;
    let res = this.props.currentUser.followees.find( followee => {
      return followee.id == currentId;
    });
    let val = (res) ? true : false;
    return val;
  }

  renderButton(){
    if (this.isUserFollowedByCurrentUser()){
      return <Link className="profile-edit-btn">Following</Link>;
    }else {
      return <Link className="profile-user-follow-btn">Follow</Link>;
    }
  }

  render() {
    if (!this.props.user.name) return <Spinner />;
      return (
        <div>
          {this.renderButton()}
        </div>
      );
  }

}
export default Follow;
