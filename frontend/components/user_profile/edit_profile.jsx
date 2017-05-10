import React from 'react';
import NavBar from '../navigation/nav_bar';
import UserProfileDetails from './user_profile_details';
import UserProfilePosts from './user_profile_posts';
import { Link, withRouter } from 'react-router';


class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_photo: this.props.user.profile_photo,
      name: this.props.user.name,
      username: this.props.user.username,
      bio: this.props.user.bio,
      website: this.props.user.website,
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
      // this.props.fetchUser(parseInt(this.props.params.user_id));
  }

  componentWillReceiveProps(newProps){
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => this.setState({ imageFile: file, imageUrl: fileReader.result });

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e){
    let formData = new FormData();
    formData.append("user[id]", this.props.user.id);
    formData.append("user[name]", this.state.name);
    formData.append("user[username]", this.state.username);
    formData.append("user[bio]", this.state.bio);
    formData.append("user[website]", this.state.website);
    formData.append("user[image]", this.state.imageFile);
    this.props.updateUser(formData).then(() => this.props.router.push(`/users/${this.props.user.id}`));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    // let profile_photo = this.props.currentUser ? this.props.currentUser.profile_photo : "";
    let profile_photo = this.state.profile_photo;

    return (
      <div className="data-root">
        <NavBar />
        <div className="edit-profile-main">
          <article className="border edit-profile-article">
            <div className="edit-profile-navigation">
              <div className="edit-profile-navigation-item">
                Edit Profile
              </div>
            </div>
            <div className="edit-profile-data">

              <div className="edit-profile-form-header">

                <aside className="edit-profile-header-img">

                    <div className="edit-profile">
                      <input className="input-file" type="file" onChange={this.updateFile} name="change photo"/>

                      <img src={profile_photo} width="45px" height="45px" title="profile img"/>
                      <img src={this.state.imageUrl} className="" width="45px" height="45px" />
                    </div>
                </aside>
                <div className="edit-profile-header-name">
                  {this.props.currentUser.username}
                </div>

              </div>

              <form className="edit-profile-form" onSubmit={this.handleSubmit}>

                <div className="edit-profile-data-row">
                  <aside className="edit-profile-field-title">Name</aside>
                  <div className="edit-profile-field-input-holder">
                    <input type="text" onChange={this.update('name')} value={this.state.name} />
                  </div>
                </div>

                <div className="edit-profile-data-row">
                  <aside className="edit-profile-field-title">Username</aside>
                  <div className="edit-profile-field-input-holder">
                    <input type="text" onChange={this.update('username')} value={this.state.username} />
                  </div>
                </div>

                <div className="edit-profile-data-row">
                  <aside className="edit-profile-field-title">Website</aside>
                  <div className="edit-profile-field-input-holder">
                    <input type="text" onChange={this.update('website')} value={this.state.website} />
                  </div>
                </div>

                <div className="edit-profile-data-row">
                  <aside className="edit-profile-field-title">Bio</aside>
                  <div className="edit-profile-field-input-holder">
                    <textarea onChange={this.update('bio')} value={this.state.bio} className="edit-bio-textarea"></textarea>
                  </div>
                </div>

                <div className="edit-profile-data-row">
                  <aside className="edit-profile-field-title"></aside>
                  <div className="edit-profile-field-input-holder">
                    <input type="submit" className="edit-user-submit"/>
                  </div>
                </div>

              </form>

            </div>
          </article>
        </div>
      </div>
    );
  }

}


export default EditProfile;
