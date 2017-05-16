import React from 'react';
import {Link, withRouter} from 'react-router';
import CommentItem from '../comment_item';
import AddCommentForm from '../add_comment_form';
import PostItemModalData from './post_item_modal_data';

import Modal from 'react-modal';
import ModalStyle from '../../../util/modal_style';


class PostItemModal extends React.Component {
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

  componentDidMount(){}
  componentWillReceiveProps(){}

  render(){
    return(
      <div className="user-profile-image-holder">
        <Link onClick={this.openModal} className="container-image">
          <img className="img-wrap" src={this.props.post.url} alt={this.props.post.url} height="100%" width="100%"/>
          <div className="user-profile-image-holder-data">
            <i className="fa fa-comment" aria-hidden="true"></i> {this.props.post.comments.length} &nbsp;
            <i className="fa fa-heart" aria-hidden="true"></i> {this.props.post.likes.length}
          </div>
        </Link>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}
          contentLabel="Modal">
          <Link onClick={this.closeModal} className="modal-close-btn"><i className="fa fa-times-circle" aria-hidden="true"></i></Link>
          <PostItemModalData
            key={this.props.post.id}
            post={this.props.post}
            currentUser={this.props.currentUser}
            user={this.props.user}
            createLike={this.props.createLike}
            deleteLike={this.props.deleteLike}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
            closeModal={this.closeModal} />
         </Modal>
      </div>
    );
  }
}

export default withRouter(PostItemModal);
