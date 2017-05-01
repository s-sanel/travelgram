import React from 'react';
import {Link, withRouter} from 'react-router';
import Spinner from '../shared/spinner';
import FollowContainer from '../follow/follow_container';
import FollowsModalContainer from './modal/follows_modal_container';

import Modal from 'react-modal';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.65)'
    }
};

class UserProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePhotoModalIsOpen: false,
      profilePhotoImageFile: this.props.currentUser.profile_photo
    }
    this.redirectToEdit = this.redirectToEdit.bind(this);
    this.openProfilePhotoModal = this.openProfilePhotoModal.bind(this);
    this.closeProfilePhotoModal = this.closeProfilePhotoModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){}
  componentWillReceiveProps(newProps){
    // if(this.props.user.id != newProps.user.id){
    //   this.props.fetchUser(newProps.user.id);
    // }
  }

  redirectToEdit(){
    this.props.router.push(`/users/${this.props.user.id}/edit`);
  }

  followingOrEditButton(){
    if(this.props.currentUser){
      if(this.props.user.id == this.props.currentUser.id){
        return(<button onClick={this.redirectToEdit} className="profile-edit-btn">Edit Profile</button>);
      }else {
        return(<FollowContainer />);
      }
    }
  }

  openProfilePhotoModal(){
    this.setState({profilePhotoModalIsOpen: true});
  }

  closeProfilePhotoModal(){
    this.setState({profilePhotoModalIsOpen: false});
  }

  renderProfilePhoto(){
    if(this.props.currentUser){
      if(this.props.user.id == this.props.currentUser.id) {
        return (
          <button onClick={this.openProfilePhotoModal} className="profile-image-button">
            <img src={this.props.user.profile_photo} width="150px" height="150px" title="profile img"/>
          </button>
        );
      }else {
        return (<img className="profile-image-button" src={this.props.user.profile_photo} width="150px" height="150px" title="profile img"/>);
      }
    }
  }

  handleChange(e) {
   const file = e.currentTarget.files[0];
   this.setState({profilePhotoImageFile: file});
   this.closeProfilePhotoModal();
   setTimeout(this.handleSubmit,0);
 }

 handleSubmit(e) {
   const formData = new FormData();
   formData.append("user[id]", this.props.user.id);
   formData.append("user[image]", this.state.profilePhotoImageFile);
   this.props.updateUser(formData).then(() => this.props.router.push(`/users/${this.props.user.id}`));
 }

  render(){
    let user = this.props.user;
    if (!user.name) return <Spinner />;

    let name = this.props.user ? user.name : "";
    let bio = this.props.user ? user.bio : "";
    let profile_photo = this.props.user ? user.profile_photo : "";

    return(
      <header className="user-profile-header">
        <div className="user-profile-logo">
          <div className="user-profile-img">
            {this.renderProfilePhoto()}
          </div>
        </div>

        <Modal
          isOpen={this.state.profilePhotoModalIsOpen}
          onRequestClose={this.closeProfilePhotoModal}
          className="profile-photo-modal"
          style={customStyles}
          contentLabel="profilephoto">
          <ul className="modal">
            <li className="modal-item">
              <span className="no-click">Change Profile Picture</span>
            </li>
            <li className="modal-item">
              <div className="button-modal">
                <div className="upload-photo-div">
                  Upload Photo
                  <input id='file' type='file' onChange={this.handleChange}/>
                </div>
              </div>
            </li>
            <li className="modal-item">
              <button className="button-modal"
                 onClick={this.closeProfilePhotoModal}>Cancel</button>
            </li>
          </ul>
          <Link className="exit" onClick={this.closeProfilePhotoModal}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </Link>
        </Modal>

        <div className="user-profile-data">
          <div className="profile-data-username">
            <span className="profile-name">{this.props.user.username}</span>
            {this.followingOrEditButton()}
            <Link className="gear"><i className="fa fa-cog" aria-hidden="true"></i></Link>
          </div>

          <div className="profile-data-stats">
            <div className="profile-data-stats-data">
              {this.props.posts.length} posts
            </div>
            <div className="profile-data-stats-data">

              <FollowsModalContainer followersModal={true} />
            </div>
            <div className="profile-data-stats-data">

              <FollowsModalContainer followersModal={false} />
            </div>
          </div>

          <div className="profile-data-stats">
            <div className="profile-data-stats-data">
              {name}
            </div>
            <div className="profile-data-stats-data">
              {bio}
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(UserProfileDetails);




// <img src={profile_photo} width="150px" height="150px" title="profile img"/>
