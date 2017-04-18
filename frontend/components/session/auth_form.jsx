import React from 'react';
import { Link, withRouter } from 'react-router';
import ErrorList from '../shared/error_list';


class AuthForm extends React.Component {

    constructor(props) {
      // debugger
      super(props);
      this.state = {username: "", password: "", email: "", name: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.handleUser = this.handleUser.bind(this);
      // this.handlePassword = this.handlePassword.bind(this);
    }

    componentDidMount(){
      this.props.clearErrors();
    }

    handleSubmit(e){
      e.preventDefault();
      const user = this.state;
      this.props.processForm({user});
    }

    // handleUser(e) {
    //   this.setState({username: e.currentTarget.value});
    // }
    //
    // handlePassword(e) {
    //   this.setState({password: e.currentTarget.value});
    // }

    update(field) {
  		return e => this.setState({
  			[field]: e.currentTarget.value
  		});
  	}

    navLink() {
      if (this.props.formType === 'login'){
        return <Link to="/signup">signup</Link>;
      }else{
        return <Link to="/login">login</Link>;
      }
    }

    renderErrors() {
      // debugger
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

      return(
        <div className="login-box">
          form! <br/>
          Please {this.props.formType} or {this.navLink()} instead

          <form className="login-form-box" onSubmit={this.handleSubmit}>

            <input type="text" onChange={this.update("email")} value={this.state.email} placeholder="Email" /><br/>
            <input type="text" onChange={this.update("name")} value={this.state.name} placeholder="Full Name"/><br/>

            <input onChange={this.update("username")} type="text" value={this.state.username} placeholder="Username"/>
            <ErrorList errors={ this.props.errors.username } />
            <br/>


            <input onChange={this.update("password")} type="password" value={this.state.password} placeholder="Password"/>
            <br/>

            <input type="submit" name="Submit"/>
          </form>
          {this.renderErrors()}
        </div>
      );
    }

}
export default withRouter(AuthForm);
