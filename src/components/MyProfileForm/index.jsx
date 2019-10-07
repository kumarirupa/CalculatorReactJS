import React from 'react';
import './MyProfileForm.scss';
import TButton from '../TButton';

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
                <div className="profile-header-txt">{`My Profile`}</div>
            </div>
            <div className="details-section">
                <div className="details-block">
                    <div className="title">Name:</div>
                    <div className="desc">{profileData.name || ''}</div>
                </div>
                <div className="details-block">
                    <div className="title">Title:</div>
                    <div className="desc">{profileData.title || ''}</div>
                </div>
                <div className="details-block">
                    <div className="title">Company:</div>
                    <div className="desc">{profileData.companyId && profileData.companyId.companyName ? profileData.companyId.companyName : ''}</div>
                </div>
                <div className="details-block">
                    <div className="title">Email:</div>
                    <div className="desc">{profileData.emailAddress || ''}</div>
                </div>
                <div className="details-block">
                    <div className="title">Mobile:</div>
                    <div className="desc">{profileData.mobile || ''}</div>
                </div>
                <div className="details-block">
                    <div className="title">Office:</div>
                    <div className="desc">{profileData.office || ''}</div>
                </div>
                <div id="btn-section">
                    <div className="desc">
                        <TButton id='edit-btn' onClick={() => props.onEditClick()} text={`EDIT`} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MyProfileForm;