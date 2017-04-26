import React from 'react';
import NavBar from '../navigation/nav_bar';
import UserProfileDetails from './user_profile_details';
import UserProfilePosts from './user_profile_posts';
import { Link, withRouter } from 'react-router';


class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {name: "", username: "", website: "", bio: "test bio"};
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
  }

  componentWillReceiveProps(newProps){
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.updateUser(user).then(() => this.props.router.push(`/users/${this.props.user.id}`));
    // change route to user pr
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let profile_photo = this.props.currentUser ? this.props.currentUser.profile_photo : "";

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
                  <img src={profile_photo} width="40px" height="40px" title="profile img"/>
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
