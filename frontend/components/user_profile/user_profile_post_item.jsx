import React from 'react';
import {Link, withRouter} from 'react-router';
// import Modal from 'react-modal';
// import ModalStyle from '../../util/modal_style';
import PostItemModalContainer from '../posts/modal/post_item_modal_container';

class UserProfilePostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.profilePage = this.profilePage.bind(this);
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

  profilePage(){
    let id = this.props.post.user.id;
    this.props.router.push(`/${id}`);
  }

  render(){
    return(
        <PostItemModalContainer post={this.props.post}/>
    );
  }
}

export default withRouter(UserProfilePostItem);


// <Link onClick={this.openModal} className="container-image">
//   <img className="img-wrap" src={this.props.post.url} alt={this.props.post.url} height="100%" width="100%"/>
//   <div className="user-profile-image-holder-data">
//     <i className="fa fa-comment" aria-hidden="true"></i> {this.props.post.comments.length} &nbsp;
//     <i className="fa fa-heart" aria-hidden="true"></i> {this.props.post.likes.length}
//   </div>
// </Link>
//
// <Modal
//   isOpen={this.state.modalOpen}
//   onRequestClose={this.closeModal}
//   style={ModalStyle}
//   onAfterOpen={this.onModalOpen}
//   contentLabel="Modal"
//   >
//     <button onClick={this.closeModal}>close</button>
//     <p>
//       <img className="img-wrap" src={this.props.post.url} alt={this.props.post.url} height="50%" width="50%"/>
//     </p>
//
//     <div>
//         {this.props.post.created_ago}
//     </div>
//     <div>
//         {this.props.post.likes.length} likes
//     </div>
//
//
//  </Modal>
