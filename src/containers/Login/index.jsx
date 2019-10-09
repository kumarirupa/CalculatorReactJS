/*--- Login ---*/

import React from 'react';

//Images
import images from '../../images';

//Stylesheets
import './Login.scss';

//Utility Libraries
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Validator from '../../utils/Validator';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      nameValidation: '',
      emailValidation: ' ',
      passwordValidation: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = evt => {
    // Handling value changes on Input and updating state likewise
    this.setState({ [evt.target.name]: evt.target.value });
    this.formValidaton(evt);
  }

  render() {
    return (
      <div>
        <div className="signIn-container">
          <div className="signIn-brief">
            <div className="opacEye-signin">
              <div className="signin-details">
                <h2>"Lorem ipsum dolor sit amet,
                   consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut"</h2>
                  <p className="user-mains">-User User</p>
              </div>
            </div>
          </div>
          <div className="signIn-field">
            <div className="field-details">
              <div className="signIn-logo">
                <img class="eye-img" src={images.path.realityLogoSm} alt="eye" />
              </div>
              <div className="signIn-heading">
                <h1>The Reality Social</h1>
                <h3>Sign In</h3>
              </div>
              <div class="mail-field">
              <input id="Email" placeholder="Email Id" type="text"
                onKeyUp={(event) => this.formValidaton(event.target.id)}
                onChange={(event) => this.handleChange(event.target.id, event.target.value)}
                value={this.state.email} />
              <p class="error-msg">{this.state.emailValidation}</p>
              </div>
              <div class="passSignin-field">
              <input id="password" placeholder="Password" type="password"
                onKeyUp={(event) => this.formValidaton(event.target.id)}
                onChange={(event) => this.handleChange(event.target.id, event.target.value)}
                value={this.state.password} />
              <p class="error-msg">{this.state.passwordValidation}</p>
              </div>
              <div className="register-btn">
                <button className="signin-btn">Get Started</button>
              </div>
              <div className="redirect-signup">
                <p className="need-text">Need an account?</p>
                <Link to="/register" id="click-signin">Sign UP</Link>
              </div>
            </div>
          </div>
          <div className="signIn-slider">
            <img class="slider-img" src={images.path.leftSlideArrow} alt="arrow" />
          </div>
        </div>
      </div>
    );
  }
}


export default Login;

