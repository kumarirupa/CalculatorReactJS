/*--- Registration ---*/

import React from 'react';
import { connect } from 'react-redux';

//StyleSheets
import './Registration.scss';

//Constants
import messages from '../../messages/language';
import images from '../../images';

//Actions
import { registerUser } from './action';

//Utility Libraries
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Validator from '../../utils/Validator';

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    //Initializing States
    this.state = {
      name: '',
      email: '',
      password: '',
      nameMessage: '',
      emailMessage: ' ',
      passwordMessage: ''
    };

    //Getting Language from Local Storage
    //var lang = localStorage.getItem("lang") || 'EN';
    //messages = language[]

    //Binding methods
    this.handleChange = this.handleChange.bind(this);
    this.formValidaton = this.formValidaton.bind(this);
    this.submitUserData = this.submitUserData.bind(this);
    console.log('Paul props', this.props)
  }

  handleChange = evt => {
    // Handling value changes on Input and updating state likewise
    this.setState({ [evt.target.name]: evt.target.value });
    this.formValidaton(evt);
  }

  formValidaton = evt => {
    // Validating values from Input
    const name = evt.target.name;
    const value = evt.target.value;
    let msg = ``;

    switch (name) {
      case 'name': {
        msg = value === '' ? `Name should not be empty*` : ``;
        this.setState({ nameMessage: msg });
        break;
      }

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
    const { nameMessage, emailMessage, passwordMessage, name, password, email } = this.state;
    const validated = _.isEmpty(nameMessage || emailMessage || passwordMessage);
    const dataCheck = !_.isEmpty(name && password && email);
    return validated && dataCheck ? true : false;
  }
  submitUserData = async () => {
    //Submitting Data to Server, from the respective variables

    if (this.isFormValid()) {
      //Checking if the data is valid before sending to Server
      const userData = {
        firstName: this.state.name,
        lastName: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.password,
        gender: 'male',
        displayName: 'Test',
        language: 'EN'
      };
      
      try{
        let registerUserResponse = await this.props.registerUser(userData);
        console.log('Paul Success ~>',registerUserResponse)
        Swal.fire({
              title: 'Success',
              text: registerUserResponse.message,
              type: 'success',
              confirmButtonText: 'Okay'
            })
      }catch(err){
        console.log('Paul Error ~>',err.response.data.message)
        if(err.response)
        Swal.fire({
              title: 'Error',
              text: err.response.data.message,
              type: 'error',
              confirmButtonText: 'Okay'
            })
            else{
              Swal.fire({
                title: 'Error',
                text: `Something went Wrong`,
                type: 'error',
                confirmButtonText: 'Okay'
              })
            }
      }
    }
  }

  render() {

    return (
      <div>
        <Helmet>
          <title>Register</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        {console.log('Messages paul', messages)}
        <div className="signUp-container">
          <div className="signUp-field">
            <div className="field-details">
              <div className="signUp-logo">
                <img className="eye-img" src={images.path.realityLogoSm} alt="eye" />
              </div>
              <div className="signUp-heading">
                <h1>{messages.messages['DE'].appName}</h1>
                <h3>{'Create an account'}</h3>
              </div>
              <div className="name-field">
                <input id="name" name="name" placeholder="Full Name" type="text" onChange={this.handleChange} value={this.state.name} />
                <p>{this.state.nameMessage}</p>
              </div>
              <div className="mail-field">
                <input id="email" name="email" placeholder="Email Id" type="text" onChange={this.handleChange} value={this.state.email} />
                <p>{this.state.emailMessage}</p>
              </div>
              <div className="password-field">
                <input id="password" name="password" placeholder="Password" type="password" onChange={this.handleChange} value={this.state.password} />
                <p>{this.state.passwordMessage}</p>
              </div>
              <div className="termsConditrion"><input type="checkbox" className="check-terms" name="sameadr"></input><p className="terms-context">I hereby agree all<span className="changeTerms"> terms and conditions</span></p></div>
              <div className="register-btn">
                <button className="start-btn" onClick={this.submitUserData}>{this.props.registeringUser ? <img src={images.path.linearLoader} /> : `Get Started`}</button>
              </div>
              <div className="alreadyUser">
                <p className="redirect-text" >Already have an account?</p><Link to="/login" id="click-login">Log In</Link>
              </div>
            </div>
          </div>

          <div className="reality-brief">
            <div className="opacEye-img">
              <div className="exp-text">

                <div className="reality-details">
                  <h2 >{messages.messages['JP'].tagLine}</h2>
                </div>
                <div className="reality-people">
                  <p className="exp-text">Real People</p>
                  <p className="exp-text">Real Drama</p>
                  <p className="exp-text">Real Game</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sideBar-slider">
            <img className="slider-img" src={images.path.rightSlideArrow} alt="arrow" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.registrationReducer
  };
}

export default connect(mapStateToProps, { registerUser })(Registration);