/*--- Login ---*/

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Validator from '../../utils/Validator';
import images from '../../images';
import './Login.scss';

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
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        login page here
        </div>
    );
  }
}


export default Login;

