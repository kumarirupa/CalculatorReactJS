import React, { Component } from 'react';
import ProfileImage from '../../components/ProfileImage';
import images from '../../images';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleArray: [1, 2, 3, 4, 5],
            showChannelList: false,
            showDirectMessageList: false,
        }
    }
    render() {
        return (
            <div className='user-details-section'>
                <div className='user'>
                    <ProfileImage imgSrc={images.path.sampleProfile} size='4x0px' />
                    <div className='user-detail'>
                        <div className='user-status'>
                            <div className='square'></div><h6>Available</h6>
                        </div>
                        <div className='user-name'>
                            <h5>User Name</h5>
                        </div>
                    </div>
                </div>
                <div className='message-details'>
                    <div className='unreads-main'>
                        <div className='unreads'>
                            <img src={images.path.unreads} />
                            <h6>All unreads</h6>
                        </div>
                        <div className='count'>5</div>
                    </div>
                    <div className='threads-main'>
                        <div className='threads'>
                            <img src={images.path.threads} />
                            <h6>All threads</h6>
                        </div>
                        <div className='count'>5</div>
                    </div>
                </div>
                <div className='channels-main'>
                    <h6>CHANNELS</h6>
                    <img onClick={() => this.setState({ showChannelList: !this.state.showChannelList })} src={images.path.plus} />
                </div>
                {this.state.showChannelList ? this.state.sampleArray.map((ele, index) => {
                    return (
                        <div className='channels'>
                            <ul>
                                <li>#design</li>
                            </ul>
                        </div>
                    )
                }) : ''}
                <div className='direct-messages-main'>
                    <h6>DIRECT MESSAGES</h6>
                    <img onClick={() => this.setState({ showDirectMessageList: !this.state.showDirectMessageList })} src={images.path.plus} />
                </div>
                {this.state.showDirectMessageList ? this.state.sampleArray.map((ele, index) => {
                    return (
                        <div className='direct-messages'>
                            <ul>
                                <li>#design</li>
                            </ul>
                        </div>
                    )
                }) : ''}
            </div>
        )
    }
}

export default UserDetails;










