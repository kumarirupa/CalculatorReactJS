import React, { Component } from 'react';
import './EditableProfile.scss';

//Components
import ProfileImage from '../../../components/ProfileImage';
import TButton from '../../../components/TButton';

//Constants
import images from '../../../images';

//Utility Libraries
import _ from 'lodash';
import Validator from '../../../utils/Validator';


class EditableProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            displayName: '',
            language: '',
            firstNameMessage: '',
            lastNameMessage: '',
            emailMessage: '',
            genderMessage: '',
            displayNameMessage: '',
            languageMessage: '',
        }

        //Binding methods
        this.handleChange = this.handleChange.bind(this);
        this.formValidaton = this.formValidaton.bind(this);
        this.updateUserData = this.updateUserData.bind(this);
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
          case 'firstName': {
            msg = value === '' ? `First Name should not be empty*` : ``;
            this.setState({ firstNameMessage: msg });
            break;
          }
          case 'lastName': {
            msg = value === '' ? `Last Name should not be empty*` : ``;
            this.setState({ lastNameMessage: msg });
            break;
          }
    
          case 'email': {
            let isValid = Validator.validateEmail(value);
            msg = value === '' ? `Email Id should not be empty*` : (!isValid ? `Please enter valid Email Id` : ``);
            this.setState({ emailMessage: msg });
            break;
          }
    
          case 'displayName': {
            msg = value === '' ? `Display Name should not be empty*` : ``;
            this.setState({ displayNameMessage: msg });
            break;
          }
          case 'gender': {
            msg = value === '' ? `Gender should not be empty*` : ``;
            this.setState({ genderMessage: msg });
            break;
          }
          case 'language': {
            msg = value === '' ? `Language should not be empty*` : ``;
            this.setState({ languageMessage: msg });
            break;
          }
        }
      }
    
      isFormValid = () => {
        //Checks if all the Validations are correct and Data is present in the required fields
        //Return a boolean
        const {firstName, lastName, email, gender, displayName, language, firstNameMessage, LastNameMessage, emailMessage, genderMessage, displayNameMessage, languageMessage } = this.state;
        const validated = _.isEmpty(firstNameMessage || LastNameMessage || emailMessage || genderMessage || displayNameMessage || languageMessage);
        const dataCheck = !_.isEmpty(firstName && lastName && email && gender && displayName && language);
        return validated && dataCheck ? true : false;
      }
    
      updateUserData = () => {
        //Updating Data to Server, from the respective variables
    
        if (this.isFormValid()) {
          //Checking if the data is valid before sending to Server
          const userData = {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.email,
            gender: 'male',
            displayName: 'Test',
            language: 'EN'
          };
          this.props.updateUser(userData);
        }
      }
    

    render() {
        return (
            <div className='editable-profile'>
                <div className="profile-section">
                    <div className="profile-header">
                        <div className="profile-header">
                            <ProfileImage imgSrc={images.path.sampleProfile} size='80px' />
                            <img id='camera' src={images.path.camera} alt=''/>
                        </div>
                    </div>
                    <div className="details-section">
                        <div className='details'>
                            <div className="details-block">
                                <div className="title">First Name:</div>
                                <div className="desc">
                                    <input type='text' name='firstName' placeholder='First Name'
                                        onChange={this.handleChange} value={this.state.firstName} />
                                        <p className="errormsg">{this.state.firstNameMessage}</p>
                                </div>
                            </div>
                            <div className="details-block">
                                <div className="title">Last Name:</div>
                                <div className="desc">
                                    <input type='text' name='lastName' placeholder='Last Name'
                                        onChange={this.handleChange} value={this.state.lastName} />
                                        <p className="errormsg">{this.state.lastNameMessage}</p>
                                </div>
                            </div>
                            <div className="details-block">
                                <div className="title">Email:</div>
                                <div className="desc">
                                    <input type='text' name='email' placeholder='Email '
                                        onChange={this.handleChange} value={this.state.email} />
                                        <p className="errormsg">{this.state.emailMessage}</p>
                                </div>
                            </div>
                            <div className="details-block">
                                <div className="title">Dislay Name:</div>
                                <div className="desc">
                                    <input type='text' name='displayName' placeholder='Display Name'
                                        onChange={this.handleChange} value={this.state.displayName} />
                                        <p className="errormsg">{this.state.displayNameMessage}</p>
                                </div>
                            </div>
                            <div className="details-block">
                                <div className="title">Gender:</div>
                                <div className="desc">
                                    <input type='text' name='gender' placeholder='Gender'
                                        onChange={this.handleChange} value={this.state.gender} />
                                        <p className="errormsg">{this.state.genderMessage}</p>
                                </div>
                            </div>
                            <div className="details-block">
                                <div className="title">Language:</div>
                                <div className="desc">
                                    <input type='text' name='language' placeholder='Language'
                                        onChange={this.handleChange} value={this.state.language} />
                                        <p className="errormsg">{this.state.languageMessage}</p>
                                </div>
                            </div>
                            <div id="btn-section">
                                <div className="desc">
                                    <TButton disabled={!this.isFormValid()} id='edit-btn' onClick={this.updateUserData} text={`UPDATE`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default EditableProfile;