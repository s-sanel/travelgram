import React from 'react';
import { withRouter} from 'react-router';
import PostItemModalContainer from '../posts/modal/post_item_modal_container';

class UserProfilePostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <PostItemModalContainer post={this.props.post}/>
    );
  }
}

export default withRouter(UserProfilePostItem);
