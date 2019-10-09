import React from 'react';
import './EditableProfile.scss';

//Components
import ProfileImage from '../../components/ProfileImage';
import TButton from '../TButton';

//Constants
import images from '../../images';


const EditableProfile = (props) => {
    const { match } = props;
    return (
        <div className='editable-profile'>
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
                            <div className="desc"><input type='text' /></div>
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
                            <TButton id='edit-btn' onClick={() => { }} text={`UPDATE`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditableProfile;