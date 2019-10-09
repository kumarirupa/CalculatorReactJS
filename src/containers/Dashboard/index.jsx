import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

//Stylesheet
import './Dashboard.scss'

//Components
import ProfileImage from '../../components/ProfileImage';

//Constants
import images from '../../images';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const SubView = ({ match }) => (
            <div>
                <h3>Section:{match.params.sectionName}</h3>
            </div>
        );
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
                        <Link to={`${match.url}/logout`}>Logout</Link>
                    </div>
                    <div className='content'>
                        <Route path={`${match.url}/:sectionName`} component={SubView} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;