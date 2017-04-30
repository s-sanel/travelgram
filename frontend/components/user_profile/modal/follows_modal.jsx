import React from 'react';
import {Link, withRouter} from 'react-router';

import Modal from 'react-modal';
import ModalStyle from '../../../util/modal_style';


class FollowsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
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

  componentDidMount(){

  }
  componentWillReceiveProps(newProps){

  }


  render(){
  // const follows = this.props.followersModal ? this.props.followers : this.props.followees;
  if( this.props.followersModal ) {


    return(
      <div className="">
        <Link onClick={this.openModal} className="user-profile-follows">
          {this.props.followers.length} followers
        </Link>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}
          contentLabel="Modal"
          >
          <Link onClick={this.closeModal} className="modal-close-btn"><i className="fa fa-times-circle" aria-hidden="true"></i></Link>
            <ul className="">
              {
              this.props.followers.map( follower => (
                <li key={follower.id}>
                  <img src={follower.profile_photo} width="40px" height="40px"/> {follower.username}
                </li>
              ))
              }
            </ul>
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
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}
          contentLabel="Modal"
          >
          <Link onClick={this.closeModal} className="modal-close-btn"><i className="fa fa-times-circle" aria-hidden="true"></i></Link>
            <ul className="">
              {
              this.props.followees.map( follower => (
                <li key={follower.id}>
                  <img src={follower.profile_photo} width="40px" height="40px"/> {follower.username}
                </li>
              ))
              }
            </ul>
         </Modal>
      </div>
    );
  }

  }
}

export default withRouter(FollowsModal);
