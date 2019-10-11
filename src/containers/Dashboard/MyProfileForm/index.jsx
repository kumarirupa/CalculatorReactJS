import React, { Component } from 'react';
import { connect } from 'react-redux';


//Stylesheets
import './MyProfileForm.scss';

//Actions
import { getUserDetails } from '../../Dashboard/action';

//Components
import ProfileImage from '../../../components/ProfileImage';
import TButton from '../../../components/TButton';

//Constants
import images from '../../../images';

//Utilities
import Swal from 'sweetalert2';

class MyProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            displayName: '',
            language: '',
        }
        this.getUserData();
        console.log('prop', this.props)
    }

    getUserData = async () => {
        try {
            let getUserDetails = await this.props.getUserDetails();
            console.log('prop', this.props)
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

    render() {
        return (
            <div className='my-profile'>
                <div className="profile-section">
                    {this.props.gettingUserDetails  ? <img id='loader' src={images.path.circularLoader} alt='' /> : <div><div className="profile-header">
                        <div className="profile-header">
                            <ProfileImage imgSrc={images.path.sampleProfile} size='80px' />
                        </div>
                    </div>
                        <div className="details-section">
                            <div className='details'>
                                <div className="details-block">
                                    <div className="title">First Name:</div>
                                    <div className="desc">{this.state.firstName || ''}</div>
                                </div>
                                <div className="details-block">
                                    <div className="title">Last Name:</div>
                                    <div className="desc">{this.state.lastName || ''}</div>
                                </div>
                                <div className="details-block">
                                    <div className="title">Email:</div>
                                    <div className="desc">{this.state.email || ''}</div>
                                </div>
                                <div className="details-block">
                                    <div className="title">Display Name:</div>
                                    <div className="desc">{this.state.displayName || ''}</div>
                                </div>
                                <div className="details-block">
                                    <div className="title">Gender:</div>
                                    <div className="desc">{this.state.gender || ''}</div>
                                </div>
                                <div className="details-block">
                                    <div className="title">Language:</div>
                                    <div className="desc">{this.state.language || ''}</div>
                                </div>
                                <div id="btn-section">
                                    <div className="desc">
                                        <TButton id='edit-btn' onClick={() => {
                                            this.props.history.push('/dashboard/edit')
                                        }}
                                            text={`EDIT`} />
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
export default connect(mapStateToProps, { getUserDetails })(MyProfileForm);