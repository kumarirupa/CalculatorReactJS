import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switch from "react-switch";
import Select from 'react-select';
import _ from 'lodash';

import './privacy.scss';

import images from '../../../images';
import Swal from 'sweetalert2';
import { getUserStatus, setUserStatus, searchUserData, getBlockUser } from '../../Dashboard/action';


import messages from './../../../messages/language/index';
import CookieStorage from './../../../utils/cookie-storage'

const language = CookieStorage.getCookie('language');
const CONSTANTS = messages.messages[language];

class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            arrayCard: [{ name: "james" }, { name: "preeti" }, { name: "pari" }],
            searchString: '',
            dropdown: '',
            userList:[],
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.getUserOnlineSatus();
        this.getBlockUser();
    }

    getUserOnlineSatus = async () => {
        try {
            const userStatus = await this.props.getUserStatus();
            this.setState({
                onlineVisibility: userStatus.onlineVisibility
            })
        } catch (err) {
            if (err.message) {
                Swal.fire({
                    text: err.message,
                    type: 'error',
                    confirmButtonText: CONSTANTS.common.SWEET_ALERT_OKAY_TEXT
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: CONSTANTS.common.SOMETHING_WENT_WRONG_ERROR,
                    type: 'error',
                    confirmButtonText: CONSTANTS.common.SWEET_ALERT_OKAY_TEXT
                })
            }
        }
    }

    setUserOnlineSatus = async (onlineStatus) => {
        try {
            const userSet = await this.props.setUserStatus(onlineStatus);
            this.setState({
                onlineVisibility: onlineStatus
            })
        } catch (err) {
            if (err.message) {
                Swal.fire({
                    text: err.message,
                    type: 'error',
                    confirmButtonText: CONSTANTS.common.SWEET_ALERT_OKAY_TEXT
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: CONSTANTS.common.SOMETHING_WENT_WRONG_ERROR,
                    type: 'error',
                    confirmButtonText: CONSTANTS.common.SWEET_ALERT_OKAY_TEXT
                })
            }
        }
    }

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
     
    blockUserClose(index){
            console.log('close',index)
            let tempUserArray = this.state.arrayCard
            tempUserArray.splice(index,1)
            this.setState({ arrayCard: tempUserArray });
    }

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
    
    getBlockUser = async () => {
        try {
            const userStatus = await this.props.getBlockUser();
            console.log('block user',userStatus)
            this.setState({
                onlineVisibility: userStatus.onlineVisibility
            })
        } catch (err) {
            if (err.message) {
                Swal.fire({
                    text: err.message,
                    type: 'error',
                    confirmButtonText: CONSTANTS.common.SWEET_ALERT_OKAY_TEXT
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: CONSTANTS.common.SOMETHING_WENT_WRONG_ERROR,
                    type: 'error',
                    confirmButtonText: CONSTANTS.common.SWEET_ALERT_OKAY_TEXT
                })
            }
        }
    }

    render() {
       
        return (
            <div id='privacy'>
                <div className='privacy-details'>
                    <div className="online-status">
                        <label>ONLINE STATUS</label>
                        <Switch onChange={(value) => this.setUserOnlineSatus(value)} checked={this.state.onlineVisibility} />
                    </div>
                    <div className='select-user'>
                        <label>Block People </label>
                        <Select id="company"
                            placeholder='Search'
                            onInputChange={(value) => { this.usernameChange(value) }}
                            onChange={(value) => { console.log(value) }}
                            value={this.state.selectedOption}
                            options={this.state.userList}
                            noOptionsMessage={() => `Loading...`}
                        />
                    </div>
                    <div className="blockUser-display">

                        {this.state.arrayCard.map((element,i) => {
                            return <div className="blockUser-info">
                                <div className="user-photo">
                             <i onClick={(evt)=>this. blockUserClose(evt.target.id)} id={i} class="fa fa-close"></i>
                                    <img className="blockUser-img" src={`${images.path.sampleProfile}`} alt='user' />
                                </div>
                                <div className="user-name"><label>Name:{element.name}</label></div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.DashboardReducer
    };
}
export default connect(mapStateToProps, { getUserStatus, setUserStatus, searchUserData, getBlockUser })(Privacy);
