import React from 'react';
import { Link, withRouter } from 'react-router';
import ErrorList from '../shared/error_list';


class AuthForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {username: "", password: "", email: "", name: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.demoLogin = this.demoLogin.bind(this);
      this.resetState = this.resetState.bind(this);
    }

    componentDidMount(){
      this.props.clearErrors();
    }

    componentWillReceiveProps(newProps){
      if (this.props.formType !== newProps.formType) {
        this.props.clearErrors();
        this.setState({username: "", password: "", email: "", name: ""});
      }
    }

    demoLogin(e){
      e.preventDefault();
      this.props.demoLogin().then(() => this.props.router.push('/'));
    }

    handleSubmit(e){
      e.preventDefault();
      const user = this.state;
      this.props.processForm({user}).then(() => this.props.router.push('/'));
    }

    update(field) {
  		return e => this.setState({
  			[field]: e.currentTarget.value
  		});
  	}

    navText() {
      if (this.props.formType === 'login'){
        return "Don't have an account?";
      }else{
        return "Have an account?";
      }
    }

    resetState(){
      this.setState({username: "", password: "", email: "", name: ""});
    }

    navLink() {
      if (this.props.formType === 'login'){
        return <Link to="/signup">Sign up</Link>;
      }else{
        return <Link to="/login">Log in</Link>;
      }
    }

    formSubmitBtn() {
      if (this.props.formType === 'login'){
        return <button className="demo-login">Log in</button>;
      }else{
        return <button className="demo-login">Sign up</button>;
      }
    }

    renderErrors() {
      if (this.props.errors){
        let keys = Object.keys(this.props.errors);
        return(
          <div className="errors">
            <ul>
              {keys.map((key, i) => (
                <li key={`error-${i}`}>
                  {key}: {this.props.errors[key]}
                </li>
              ))}
            </ul>
          </div>
        );
      }
  	}

    render() {
      // this.props.route.path vs this.props.formType
      if (this.props.formType === "signup") {
        return(
          <article className="landing-page-main">
            <div className="landing-page-img">
            </div>

            <div className="landing-page-intro">
              <div className="login-box">
                <div className="login-box-logo">
                  <h1>Travelgram</h1>
                </div>
                <form className="login-box-form" onSubmit={this.handleSubmit}>
                  <h2>Sign up to see photos and videos from your friends.</h2> <br/>
                  <button type="submit" onClick={this.demoLogin} className="demo-login">Demo Login</button> <br/>
                  <div className="or-separator">
                    <div className="or-separator-line"></div>
                    <div className="or-separator-text"> OR </div>
                    <div className="or-separator-line"></div>
                  </div><br/>
                  <input type="text" onChange={this.update("email")} value={this.state.email} placeholder="Email" /><br/>
                  <input type="text" onChange={this.update("name")} value={this.state.name} placeholder="Full Name"/><br/>
                  <input onChange={this.update("username")} type="text" value={this.state.username} placeholder="Username"/><br/>
                  <input onChange={this.update("password")} type="password" value={this.state.password} placeholder="Password"/><br/>
                  {this.formSubmitBtn()}

                  {this.renderErrors()}
                </form>
              </div>

              <div className="landing-intro-nav">
                <p>{this.navText()} {this.navLink()}</p>
              </div>
            </div>
          </article>
        );

      } else {
        return(
          <article className="landing-page-main">
            <div className="landing-page-img">
            </div>

            <div className="landing-page-intro">
              <div className="login-box">
                <div className="login-box-logo">
                  <h1>Travelgram</h1>
                </div>
                <form className="login-box-form" onSubmit={this.handleSubmit}>
                  <input onChange={this.update("username")} type="text" value={this.state.username} placeholder="Username"/><br/>
                  <input onChange={this.update("password")} type="password" value={this.state.password} placeholder="Password"/><br/>
                  {this.formSubmitBtn()}

                  {this.renderErrors()}
                </form>
              </div>

              <div className="landing-intro-nav">
                <p>{this.navText()} {this.navLink()}</p>
              </div>
            </div>
          </article>
        );
      }

    }

}
// <ErrorList errors={ this.props.errors.username } /><br/>
// <ErrorList errors={ this.props.errors.username } /><br/>
export default withRouter(AuthForm);
