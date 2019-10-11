import React, { Component } from 'react';
import { connect } from 'react-redux';

//Stylesheets
import './EditableProfile.scss';

//Components
import ProfileImage from '../../../components/ProfileImage';
import TButton from '../../../components/TButton';

//Constants
import images from '../../../images';

//Actions
import { getUserDetails, updateUserDetails } from '../../Dashboard/action';

//Utility Libraries
import _ from 'lodash';
import Validator from '../../../utils/Validator';
import Swal from 'sweetalert2';


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

        this.getUserData();
    }

    getUserData = async () => {
      try {
          let getUserDetails = await this.props.getUserDetails();
          this.setState({
            firstName: getUserDetails.result.firstName,
            lastName: getUserDetails.result.lastName,
            email: getUserDetails.result.email,
            displayName: getUserDetails.result.displayName,
            gender: getUserDetails.result.gender,
            language: getUserDetails.result.language
          })
      } catch (err) {
          if (err.response)
              Swal.fire({
                  title: 'Error',
                  text: err.response.data.message,
                  type: 'error',
                  confirmButtonText: 'Okay'
              })
          else {
              Swal.fire({
                  title: 'Error',
                  text: `Something went Wrong`,
                  type: 'error',
                  confirmButtonText: 'Okay'
              })
          }
      }
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
    
      updateUserData = async () => {
        //Updating Data to Server, from the respective variables
    
        if (this.isFormValid()) {
          //Checking if the data is valid before sending to Server
          const userData = {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.email,
            gender: this.state.gender,
            displayName: this.state.displayName,
            language: this.state.language
          };
          
          try{
            let updateUserResponse = await this.props.updateUserDetails(userData);
            console.log('Paul Success ~>',updateUserResponse)
            Swal.fire({
                  title: 'Success',
                  text: updateUserResponse.message,
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
            <div className='editable-profile'>
                <div className="profile-section">
                {this.props.gettingUserDetails  ? <img id='loader' src={images.path.circularLoader} alt='' /> :<div>
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
                                        onChange={this.handleChange} value={this.state.email} readOnly/>
                                        <p className="errormsg">{this.state.emailMessage}</p>
                                </div>
                            </div>
                            <div className="details-block">
                                <div className="title">Dislay Name:</div>
                                <div className="desc">
                                    <input type='text' name='displayName' placeholder='Display Name'
                                        onChange={this.handleChange} value={this.state.displayName} readOnly />
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
                                    <TButton id='edit-btn' onClick={this.updateUserData} text={`UPDATE`} />
                                </div>
                            </div>
                        </div>
                    </div></div>}
                </div>
            </div>
        );

    }
}


function mapStateToProps(state) {
  return {
      ...state.DashboardReducer
  };
}
export default connect(mapStateToProps, { getUserDetails, updateUserDetails })(EditableProfile);
