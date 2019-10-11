import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switch from "react-switch";
import './privacy.scss';

import images from '../../../images';
import Swal from 'sweetalert2';
import { getUserStatus, setUserStatus} from '../../Dashboard/action';


import messages from './../../../messages/language/index';
import CookieStorage from './../../../utils/cookie-storage'
import { async } from 'q';

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
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchUser = this.searchUser.bind(this);
        this.getUserOnlineSatus();
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

    searchUser() {
        let libraries = this.state.arrayCard;
        const searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            libraries = libraries.filter(function (i) {
                return i.name.toLowerCase().match(searchString);
            });
        }
        this.setState({arrayCard:libraries})
        if (libraries.length > 0) {
            this.setState({
                dropdown:true,
                libraries: libraries
            })
        } else {
            this.setState({
                dropdown:false,
                libraries:null
            });
        }
    }

    render() {
        const { dropdown, libraries } = this.state
        return (
            <div className='privacy'>
                <div className='privacy-details'>
                    <div className="online-status">
                        <label>ONLINE STATUS</label>
                        <Switch onChange={(value) => this.setUserOnlineSatus(value)} checked={this.state.onlineVisibility} />
                    </div>
                    <div class="search-blockUser">
                        <input className="search-field" type="text" value={this.state.searchString} onChange={this.handleChange} onKeyUp={this.searchUser} placeholder="Search.." name="searchString" />
                        {console.log("search Text")}
                        {dropdown ?
                        <ul className="searchList">
                            {
                                libraries.map((suggestion, index) => {
                                    console.log("suggetion",suggestion)
                                   return (
                                       <li key={index} className="listName" onClick={() => alert(suggestion.name)}>{suggestion.name}</li>
                                   )
                                })
                            }
                        </ul>
                        : ''}
                    </div>
                    <div className="blockUser-display">
                        {this.state.arrayCard.map((i) => {
                            return <div className="blockUser-info">
                                <div className="user-photo">
                                    <img className="blockUser-img" src={`${images.path.sampleProfile}`} alt='user' />
                                </div>
                                <div className="user-name"><label>Name:{i.name}</label></div>
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
  export default connect(mapStateToProps, { getUserStatus, setUserStatus })(Privacy);
  