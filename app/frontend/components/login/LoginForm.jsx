import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleLogin(e) {
    // debugger
    e.preventDefault();
    // debugger
    return this.props.login(this.state);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.setState({email: "demouser@gmail.com", password: "000000"})
    return this.props.login(this.state);
  }

  updateEmail(e) {
    // debugger
    e.preventDefault();
    return this.setState({ email: e.target.value })
  }

  updatePassword(e) {
    // debugger
    e.preventDefault();
    return this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className="login_container">
        <form className="login_form">
            <table>
              <tbody>
                <tr> 
                  <td>
                    <span>
                      <p>Email or Phone</p> 
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Password</p>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="email" id="email" className="login_input_email" onChange={this.updateEmail} value={this.state.email}/>
                  </td>
                  <td>
                    <input type="password" name="password" id="password" className="login_input_password" onChange={this.updatePassword} value={this.state.password}/>
                  </td>
                  <td>
                    <input type="submit" id="login_button" value="Log In" className="login_button" onClick={this.handleLogin}/>
                  </td>
                  <td>
                  <input type="submit" id="demo_button" value="Demo" className="login_button" onClick={this.handleDemoLogin} />
                  </td>
                </tr>
                <tr>
                  <td className="login_form_label_field"></td>
                  <td className="login_form_label_field">
                    <div>
                      <a href="#">Forgot account?</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);