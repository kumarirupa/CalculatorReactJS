/*--- Login ---*/

import React from 'react';
import { connect } from 'react-redux';


//Images
import images from '../../images';
//constants
import messages from '../../messages/language';

//action
import { loginUser } from './action';

//Stylesheets
import './Login.scss';

//Utility Libraries
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Validator from '../../utils/Validator';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailMessage:' ',
      passwordMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);

    //Binding methods
    this.handleChange = this.handleChange.bind(this);
    this.formValidaton = this.formValidaton.bind(this);
    this.loginUserData = this.loginUserData.bind(this);
  }
 
  handleChange = evt => {
    console.log("change evnt")
    // Handling value changes on Input and updating state likewise
    this.setState({ [evt.target.name]: evt.target.value });
    this.formValidaton(evt);
  }


  formValidaton = evt => {
    console.log("mail msg")
    // Validating values from Input
    const name= evt.target.name;
    const value = evt.target.value;
    let msg = ``;

    switch (name) {
      case 'email': {
        let isValid = Validator.validateEmail(value);
        msg = value === '' ? `Email Id should not be empty*` : (!isValid ? `Please enter valid Email Id` : ``);
        this.setState({ emailMessage: msg });
        break;
      }
      case 'password': {
        let isValid = Validator.validatePassword(value);
        msg = value === '' ? `Password should not be empty*` : (!isValid ? `Please enter valid password` : ``);
        this.setState({ passwordMessage: msg });
        break;
      }
    }
  }
    isFormValid = () => {
    //Checks if all the Validations are correct and Data is present in the required fields
    //Return a boolean
    const { emailMessage, passwordMessage, password, email } = this.state;
    const validated = _.isEmpty( emailMessage || passwordMessage);
    const dataCheck = !_.isEmpty( password && email);
    return validated && dataCheck ? true : false;
  }
  loginUserData = () => {
    //Submitting Data to Server, from the respective variables
    if (this.isFormValid()) {
      //Checking if the data is valid before sending to Server
      const userData = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.loginUser(userData);
    }
  }
  render() {
    return (
    <div>
      <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
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
            <div className="loginfield-details">
              <div className="signIn-logo">
                <img class="eye-img" src={images.path.realityLogoSm} alt="eye" />
              </div>
              <div className="signIn-heading">
                <h1>The Reality Social</h1>
                <h3>Sign In</h3>
              </div>
              <div class="mail-field">
              <input id="email" name="email" placeholder="Email Id" type="text" onChange={this.handleChange} value={this.state.email} />
               <p class="error-msg">{this.state.emailMessage}</p>
              </div>
              <div class="passSignin-field">
              <input id="password" name="password" placeholder="Password" type="password" onChange={this.handleChange} value={this.state.password} />
                <p class="error-msg">{this.state.passwordMessage}</p>
              </div>
              <div className="register-btn">
                <button className="signin-btn" onClick={this.loginUserData}>Get Started</button>
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
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.loginReducer
  };
}

export default connect(mapStateToProps, { loginUser })(Login);

