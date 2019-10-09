import React from 'react';
import './MyProfileForm.scss';
import TButton from '../TButton';

//Components
import ProfileImage from '../../components/ProfileImage';

//Constants
import images from '../../images';

//Dummy Data
// const details = {
//     name: 'Lisa Deo',
//     title: 'Project Manager',
//     comapny: 'Rejolut',
//     email: 'lisadeao@rejolut.com',
//     mobileNo: '+9876543213',
//     office: '+98765432345'
// }

const MyProfileForm = (props) => {
    const { profileData } = props;
    return (
        <div className="profile-section">
            <div className="profile-header">
                <div className="profile-header">
                <ProfileImage imgSrc={images.path.sampleProfile} size='80px' />
                </div>
            </div>
            <div className="details-section">
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
                    <div className="title">Dislay name:</div>
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
                        <TButton id='edit-btn' onClick={()=>{}} text={`EDIT`} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MyProfileForm;