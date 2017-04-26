import React from 'react';
import { Link, withRouter } from 'react-router';
import Spinner from '../shared/spinner';

class Follow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {followed: false};
    this.unfollow = this.unfollow.bind(this);
    this.follow = this.follow.bind(this);
  }

  componentDidMount(){
    if(this.isUserFollowedByCurrentUser()){
      this.setState({followed: true});
    }else {
      this.setState({followed: false});
    }
  }

  componentWillReceiveProps(newProps){}


  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/signup'));
  }

  isUserFollowedByCurrentUser(){
    let currentId = this.props.currentUser.id;
    let res = this.props.user.followers.find( followee => {
      return followee.id == currentId;
    });
    let val = (res) ? true : false;
    return val;
  }

  unfollow(){
    let follower_id = this.props.currentUser.id;
    let following_id = this.props.user.id;
    this.props.deleteFollow(follower_id, following_id);
    this.setState({followed: false});
  }

  follow(){
    let follower_id = this.props.currentUser.id;
    let following_id = this.props.user.id;
    this.props.createFollow(follower_id, following_id);
    this.setState({followed: true});
  }

  renderButton(){
    if (this.isUserFollowedByCurrentUser()){
      return <Link onClick={this.unfollow} className="profile-edit-btn">Following</Link>;
    }else {
      return <Link onClick={this.follow} className="profile-user-follow-btn">Follow</Link>;
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
