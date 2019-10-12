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
            userArray: [],
            channelName: '',
            showChannelList: false,
            showDirectMessageList: false,
            show: false,
            show2: false,
            userArray:[],
            channelName:'',
            selectedOption: null,
            userList: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = val => {
        this.setState({ channelName: val });
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

    setNewArray() {
        this.setState({ userArray: this.state.userList })
        console.log('New Array-->>>', this.state.userArray)
    }

    selectedValue = (selectedOption) => {
        let tempUserArray = this.state.userArray
        tempUserArray.push(selectedOption)
        this.setState({ userArray: tempUserArray });
    }

    removeUser(index){
        console.log('index',index)
        let tempUserArray = this.state.userArray
        tempUserArray.splice(index,1)
        this.setState({ userArray: tempUserArray });
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
                    className='addChannel'
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show}
                >
                    <Modal.Header>
                        <Modal.Title><h3>Create a Channel</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='channel-name'>
                            <label>Name </label>
                            <input id='name' name='channel' value={this.state.channelName} onChange={(event) => this.handleChange(event.target.value)} type='text' placeholder='Channel Name' />
                        </div>
                        <div className='select-user'>
                            <label>Add People </label>
                            <Select id="company"
                                placeholder='Add team mates'
                                onInputChange={(value) => { this.usernameChange(value) }}
                                onChange={this.selectedValue}
                                value={this.state.selectedOption}
                                options={this.state.userList}
                                noOptionsMessage={() => `Loading...`}
                            />
                        </div>
                        <div className='user-list'>
                            {this.state.userArray.map((user,i) => {
                                console.log('new array', this.state.userArray)
                                return(
                                <div className='user-box'>
                                    <h4>{user.label}</h4>
                                    <i onClick={(evt)=>this.removeUser(evt.target.id)} id={i} class="fa fa-close"></i>
                                </div>
                                )
                            })}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button id="create" onClick={() => { }}>Create</button>
                        <button id="close" onClick={() => { this.setState({ show: false }) }}>Close</button>
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
                        <Modal.Title>
                            
                            <div>
                            Direct Messages
                            <button class="btn" onClick={()=>{ this.setState({ show2: false }) }}><i class="fa fa-close"></i></button>
                            </div>
                            
                        </Modal.Title>
                        
                    </Modal.Header>
                    <Modal.Body>
                        <div className ='dm-search-bar-main'>
                            <Select className = "dm-search-bar"
                                    placeholder='Search...'
                                    onInputChange={(value)=> { this.usernameChange(value) }}
                                    onChange={(value)=> { console.log(value) }}
                                    options={this.state.userList}
                                    value={this.state.selectedOption}
                                    noOptionsMessage={() => `Loading...`}
                                />
                            <button className="go-button">Go</button>
                        </div>
                    </Modal.Body>
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









