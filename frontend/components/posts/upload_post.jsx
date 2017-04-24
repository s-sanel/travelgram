import React from 'react';
import { withRouter } from 'react-router';
import NavBar from '../navigation/nav_bar';

class UploadPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => this.setState({ imageFile: file, imageUrl: fileReader.result });


    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateDescription(e) {
    let description = e.target.value;
    this.setState({
      description
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("post[description]", this.state.description);
    formData.append("post[image]", this.state.imageFile);
    formData.append("post[url]", "test");
    let id = this.props.currentUser.id;
    this.props.createPost(formData).then(() => this.props.router.push(`users/${id}`));
  }

  render() {
    // debugger
    // if(this.props.currentUser.username) {
    //   return <h1>loadin....</h1>;
    // }
    return (
      <div className="data-root">
        <NavBar />
        <div className="upload-post-main">
          <div className="">

          </div>

          <form className="upload-post-article">
            <div className="upload-post-preview">

              <input type="file" onChange={this.updateFile}/> <br /> <br />
              <img src={this.state.imageUrl} className="" width="100%" height="auto"/>
            </div>
            <div className="upload-post-caption">
              <textarea className="description-textarea" onChange={this.updateDescription} placeholder="Description..." rows="3">
              </textarea>
            </div>

            <input type="submit" onClick={this.handleSubmit} value="Submit Post" />
          </form>
        </div>
      </div>
    );
  }

}


export default withRouter(UploadPost);
