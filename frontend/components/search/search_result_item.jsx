import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchResultItem extends React.Component {

  constructor(props) {
    super(props);

    this.profilePage = this.profilePage.bind(this);
  }

  profilePage(){
    let id = this.props.user.id;
    this.props.router.push(`users/${id}`);
    this.props.closeResultsList();
  }

  render() {
    return (
      <li className="search-results-list-item">
        <Link onClick={this.profilePage} className="search-results-item">
          <div className="search-results-item-img">
            <img src={this.props.user.profile_photo} alt="img" className="img-circle" width="40px" height="40px" />
          </div>
          <div className="search-results-item-data">
            <span className="search-results-text-username">{this.props.user.username}</span>
            <span className="search-results-text-name">{this.props.user.name}</span>
          </div>
        </Link>
      </li>
    );
  }

}

export default withRouter(SearchResultItem);
