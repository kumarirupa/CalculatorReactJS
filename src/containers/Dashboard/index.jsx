import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import './Dashboard.scss'

import MyProfile from './MyProfileForm/Loadable';
import EditableProfile from './EditableProfile/Loadable';
import ProfileImage from '../../components/ProfileImage';
import Privacy from './Privacy/privacy';

import images from '../../images';
import CookieStorage from './../../utils/cookie-storage'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    logout = ($event) => {
        $event.preventDefault();
        this.props.history.push('/login');
        CookieStorage.deleteCookie('Authorization');
    }

    render() {
        console.log('rahul', this.props)
        const { match } = this.props;
        return (
            <div className='dashboard'>
                <div className='container'>
                    <div className='header'>
                        <div className='user'>
                            <ProfileImage imgSrc={images.path.sampleProfile} size='40px' />
                            <div className='user-detail'>
                                <div className='user-status'>
                                    <div className='square'></div><h6>Available</h6>
                                </div>
                                <div className='user-name'>
                                    <h5>User Name</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='actions'>
                        <Link to={`${match.url}/profile`}>Profile </Link>
                        <Link to={`${match.url}/changePassword`}>Change Password</Link>
                        <Link to={`${match.url}/privacy`}>Privacy</Link>
                        <a href="#" onClick={this.logout}>Logout</a>
                    </div>
                    <div className='content'>
                    <Route path={`${match.url}/profile`} component={MyProfile} />
                    <Route path={`/dashboard/edit`} component={EditableProfile} />
                    <Route path={`${match.url}/privacy`} component={Privacy}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;