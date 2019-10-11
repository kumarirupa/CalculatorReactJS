import React, { Component } from 'react';
import ProfileImage from '../../../components/ProfileImage';
import './UserDetails.scss'
import images from '../../../images';
import Modal from 'react-bootstrap-modal';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleArray: [1, 2, 3, 4, 5],
            showChannelList: false,
            showDirectMessageList: false,
            show: false,
            show2: false
        }
    }
    render() {
        return (
            <div className='user-details-section'>
                <a href='/dashboard'><div className='user'>
                    <ProfileImage imgSrc={images.path.sampleProfile} size='40px' />
                    <div className='user-detail'>
                        <div className='user-status'>
                            <div className='square'></div><h6>Available</h6>
                        </div>
                        <div className='user-name'>
                            <h5>User Name</h5>
                        </div>
                    </div>
                </div></a>
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
                    <img onClick={() => this.setState({ show: true })} src={images.path.plus} />
                </div>
                {this.state.sampleArray.map((ele, index) => {
                    return (
                        <div className='channels'>
                            <ul>
                                <li>#design</li>
                            </ul>
                        </div>
                    )
                })}
                <div className='direct-messages-main'>
                    <h6>DIRECT MESSAGES</h6>
                    <img onClick={() => this.setState({ show2: true })} src={images.path.plus} />
                </div>
                {this.state.sampleArray.map((ele, index) => {
                    return (
                        <div className='direct-messages'>
                            <ul>
                                <li>#design</li>
                            </ul>
                        </div>
                    )
                })}

                <Modal
                    id='addChannel'
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show}
                >
                    <Modal.Header>
                        <Modal.Title>Add Channel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Hiii
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => { this.setState({ show: false }) }}>Close</button>
                    </Modal.Footer>
                </Modal>


                <Modal
                    className='directMessage'
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show2}
                >
                    <Modal.Header>
                        <Modal.Title>Direct Messages</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className ='dm-search-bar-main'>
                        <img alt='' src={images.path.search}/>
                        <input className='dm-search-bar' type="text" name="search" placeholder="Search.."></input>
                        <button className="go-button">Go</button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => { this.setState({ show2: false }) }}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UserDetails;











