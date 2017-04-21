import React from 'react';
import {Link} from 'react-router';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
// debugger
    return(

        <article className="post-box">
          <header className="post-header">
            <Link to="">
              <img src="" alt="img" className="img-circle" width="30px" height="30px" />
            </Link> &nbsp;
            <Link to="">
              {this.props.post.user.username}
            </Link>
          </header>

          <div className="post-image-holder">
            <img className="responsive-image" src={this.props.post.url} alt={this.props.post.url} height="300px" width="100%"/>
          </div>

          <div>
            <div>{this.props.post.user.username}: {this.props.post.description}</div>
            comments..
          </div>

          <div>
            <input type="text" placeholder="Add a comment..."/>
          </div>

        </article>


    );

  }
}

export default PostItem;
