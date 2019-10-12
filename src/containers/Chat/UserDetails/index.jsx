import React, { Component } from 'react';
import Modal from 'react-bootstrap-modal';
import Select from 'react-select';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import _ from 'lodash';

import { searchUserData } from '../../Chat/action';
import ProfileImage from '../../../components/ProfileImage';
import './UserDetails.scss'
import images from '../../../images';


class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleArray: [1, 2, 3, 4, 5],
            userArray:[],
            channelName:'',
            selectedOption: null,
            show: false,
            userList: [],
        }
        this.handleChange=this.handleChange.bind(this);
    }


    handleChange = val => {
        this.setState({channelName : val});
    };

    usernameChange = _.debounce(username => {
        this.searchByUserName(username);
      }, 800);

    searchByUserName = async (username) => {
        if (username === null || username === undefined || username === '') {
            this.setState({
                userList: []
            });
            return;
        }
        try {
            const searchedUserData = await this.props.searchUserData(username);
            this.setState({
                userList: searchedUserData
            });
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
                    <img onClick={() => this.setState({ showDirectMessageList: !this.state.showDirectMessageList })} src={images.path.plus} />
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
                    className='addChannel'
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    style={{ display: 'block' }}
                    show={this.state.show}
                >
                    <Modal.Header>
                        <Modal.Title><h3>Create a Channel</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='channel-name'>
                            <label>Name </label>
                            <input id='name' name='channel' value={this.state.channelName} onChange={(event)=>this.handleChange(event.target.value)} type='text' placeholder='Channel Name' />
                        </div>
                        <div className='select-user'>
                            <label>Add People </label>
                            <Select id="company"
                                placeholder='Add team mates'
                                onInputChange={(value)=> { this.usernameChange(value) }}
                                onChange={(value)=> { console.log(value) }}
                                value={this.state.selectedOption}
                                options={this.state.userList}
                                noOptionsMessage={() => `Loading...`}
                            />
                        </div>
                        <div className='user-list'>
                            <div className='user-box'>
                                <h4>Rahul</h4>
                                <img alt='' src={images.path.setting}/>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button id="create" onClick={() => { }}>Create</button>
                        <button id="close" onClick={() => { this.setState({ show: false }) }}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.chatReducer
    };
}

export default connect(mapStateToProps, { searchUserData })(UserDetails);









