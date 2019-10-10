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



class MyProfileForm extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        let getUserDetails= this.props.getUserDetails();
        console.log('Rahul get user',getUserDetails)
    }

    render() {
        return (
            <div className="profile-section">
                <div className="profile-header">
                    <div className="profile-header">
                        <ProfileImage imgSrc={images.path.sampleProfile} size='80px' />
                    </div>
                </div>
                <div className="details-section">
                    <div className='details'>
                        <div className="details-block">
                            <div className="title">First Name:</div>
                            <div className="desc">{'Rahul'}</div>
                        </div>
                        <div className="details-block">
                            <div className="title">Last Name:</div>
                            <div className="desc">{'Karjavkar'}</div>
                        </div>
                        <div className="details-block">
                            <div className="title">Email:</div>
                            <div className="desc">{'rahul@gmail.com'}</div>
                        </div>
                        <div className="details-block">
                            <div className="title">Dislay Name:</div>
                            <div className="desc">{'Rahul'}</div>
                        </div>
                        <div className="details-block">
                            <div className="title">Gender:</div>
                            <div className="desc">{'Male'}</div>
                        </div>
                        <div className="details-block">
                            <div className="title">Language:</div>
                            <div className="desc">{'English'}</div>
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