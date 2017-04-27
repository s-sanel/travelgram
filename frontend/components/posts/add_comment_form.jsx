import React from 'react';
import { Link } from 'react-router';

class AddCommentForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {body: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
      e.preventDefault();
      let postId = this.props.post.id;
      let body = this.state.body;
      this.props.createComment(postId, body).then(() => this.resetState());
    }

    update(field) {
  		return e => this.setState({
  			[field]: e.currentTarget.value
  		});
  	}

    resetState(){
      this.setState({body: ""});
    }

    isDisabledSubmit(){
      if(this.state.body.length === 0) {
        return "disabled";
      }else {
        return "";
      }
    }


    render() {
      let post_id = this.props.post.id;
      let comm = "input-comment-" + post_id;
      let disabled = this.isDisabledSubmit();
      let submitClass ="add-comment-submit " + disabled;

      return (
        <section className="post-footer-items add-comment">
          <form className="add-comment-form" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.update('body')} value={this.state.body} className="input-comment" id={comm} placeholder="Add a comment..."/>
            <input type="submit" value="POST" className={submitClass}/>
          </form>
        </section>
      );

    }

}

export default AddCommentForm;
