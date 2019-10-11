import React, { Component } from 'react';
import './Chat.scss';
import Header from './Header';
import UserDetails from './UserDetails';
import ChatSection from './ChatSection';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='chat'>
                <div className='wrapper'>
                    <Header />
                    <div className='page-content'>
                        <UserDetails />
                        <ChatSection />
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;

