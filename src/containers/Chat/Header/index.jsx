import React, { Component } from 'react';
import images from '../../../images';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='chat-header'>
                <div className='enterprise'>
                    <div className='enterprise-name'>
                        <h5>XYZ Enterprise</h5>
                    </div>
                    <div className='notification-icon'>
                        <img src={images.path.notificationIcon} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;