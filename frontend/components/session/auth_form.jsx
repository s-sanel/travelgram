import React from 'react';
import { Link, withRouter } from 'react-router';
import ErrorList from '../shared/error_list';


class AuthForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {username: "", password: "", email: "", name: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      this.props.clearErrors();
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

    navLink() {
      if (this.props.formType === 'login'){
        return <Link to="/signup">signup</Link>;
      }else{
        return <Link to="/login">login</Link>;
      }
    }

    renderErrors() {
      if (this.props.errors){
        let keys = Object.keys(this.props.errors);
// erros are passed as an array now - changed controller/api from @user.errors to @user.errors.full_messages
// now errors are passed as an array, before it was an object!!
//change this
        return(
          <ul>
            {keys.map((key, i) => (
              <li key={`error-${i}`} className="red-text">
                {key}:{this.props.errors[key]}
              </li>
            ))}
          </ul>
        );
      }
  	}

    render() {
      // this.props.route.path vs this.props.formType
      if (this.props.formType === "signup") {
        return(
          <article className="landing-page-main">
            <div className="landing-page-img">
              img
            </div>

            <div className="landing-page-intro">
              <div className="login-box">
                <h1>Instagram</h1>
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                  <h2>Sign up to see photos and videos from your friends.</h2> <br/>
                  <button type="submit" className="demo-login">Demo Login</button> <br/>
                  <input type="text" onChange={this.update("email")} value={this.state.email} placeholder="Email" /><br/>
                  <input type="text" onChange={this.update("name")} value={this.state.name} placeholder="Full Name"/><br/>
                  <input onChange={this.update("username")} type="text" value={this.state.username} placeholder="Username"/>
                  <ErrorList errors={ this.props.errors.username } /><br/>
                  <input onChange={this.update("password")} type="password" value={this.state.password} placeholder="Password"/><br/>

                  <input className="demo-login" type="submit" name="Submit"/>
                  {this.renderErrors()}
                </form>
              </div>

              <div className="landing-intro-footer">
                <p>{this.navText()} {this.navLink()}</p>
              </div>
            </div>
          </article>
        );

      } else {
        return(
          <article className="landing-page-main">
            <div className="landing-page-img">
              img
            </div>

            <div className="landing-page-intro">
              <div className="login-box">
                <h1>Instagram</h1>
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                  <input onChange={this.update("username")} type="text" value={this.state.username} placeholder="Username"/>
                  <ErrorList errors={ this.props.errors.username } /><br/>
                  <input onChange={this.update("password")} type="password" value={this.state.password} placeholder="Password"/><br/>

                  <input className="demo-login" type="submit" name="Submit"/>
                  {this.renderErrors()}
                </form>
              </div>

              <div className="landing-intro-footer">
                <p>{this.navText()} {this.navLink()}</p>
              </div>
            </div>
          </article>
        );
      }

    }

}
export default withRouter(AuthForm);
