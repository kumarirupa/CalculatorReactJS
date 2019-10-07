import React, { Component } from 'react';
import './Chat.scss';
import Header from '../../components/Header';
import UserDetails from '../../components/UserDetails';
import ChatSection from '../../components/ChatSection';


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

