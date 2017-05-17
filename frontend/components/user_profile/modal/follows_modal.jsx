import React from 'react';
import {Link, withRouter} from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../../util/modal_style';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.65)'
    }
};

class FollowsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.profilePage = this.profilePage.bind(this);
  }

  profilePage(){
    let id = this.props.user.id;
    this.props.router.push(`users/${id}`);
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  closeModal(){
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }

  onModalOpen(){
    ModalStyle.content.opacity = 100;
  }

  componentDidMount(){}

  componentWillReceiveProps(newProps){}


  render(){
    if( this.props.followersModal ) {
      return(
        <div className="">
          <Link onClick={this.openModal} className="user-profile-follows">
            {this.props.followers.length} followers
          </Link>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            onAfterOpen={this.onModalOpen}
            className="profile-photo-modal"
            contentLabel="Modal"
            >
            <div className="follows-modal">
              <div className="follows-list-header">Followers</div>
              <ul className="follows-list">
                {
                this.props.followers.map( follower => (
                  <li key={follower.id} className="follows-list-item">
                    <Link className="search-results-item">
                      <div className="search-results-item-img">
                        <img src={follower.profile_photo} alt="img" className="img-circle" width="40px" height="40px" />
                      </div>
                      <div className="search-results-item-data">
                        <span className="search-results-text-username">{follower.username}</span>
                        <span className="search-results-text-name">{follower.name}</span>
                      </div>
                    </Link>
                  </li>
                ))
                }
              </ul>
            </div>
            <Link onClick={this.closeModal} className="exit">
              <i className="fa fa-times" aria-hidden="true"></i>
            </Link>
           </Modal>
        </div>
      );

    } else {
      return(
        <div className="">
          <Link onClick={this.openModal} className="user-profile-follows">
            {this.props.followees.length} following
          </Link>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            onAfterOpen={this.onModalOpen}
            className="profile-photo-modal"
            contentLabel="Modal"
            >
            <div className="follows-modal">
              <div className="follows-list-header">Following</div>
              <ul className="follows-list">
                {
                this.props.followees.map( follower => (
                  <li key={follower.id} className="follows-list-item">
                    <Link className="search-results-item">
                      <div className="search-results-item-img">
                        <img src={follower.profile_photo} alt="img" className="img-circle" width="40px" height="40px" />
                      </div>
                      <div className="search-results-item-data">
                        <span className="search-results-text-username">{follower.username}</span>
                        <span className="search-results-text-name">{follower.name}</span>
                      </div>
                    </Link>
                  </li>
                ))
                }
              </ul>
            </div>
            <Link onClick={this.closeModal} className="exit">
              <i className="fa fa-times" aria-hidden="true"></i>
            </Link>
           </Modal>
        </div>
      );
    }
  }

}

export default withRouter(FollowsModal);
