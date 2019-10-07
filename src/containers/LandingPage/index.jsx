import React, { Component } from 'react';
import './LandingPage.scss';
import axios from 'axios';
import images from '../../images'
import swal from 'sweetalert2';
import _ from 'lodash';

//Custom Utility Fn
import Validator from '../../utils/Validator'


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleArray: [1, 2, 3, 4],
      email: '',
      phone: '',
      emailValidation: '',
      phoneValidation: '',
      formIsValid: false
    }
  }

  handleChange(newValue, id) {
    //Get Values on Input Change
    if (id === 'email') {
      this.setState({ email: newValue })
    }
    else if (id === 'phone') {
      this.setState({ phone: newValue })
    }
  }

  formValidation(value, id) {
    // Validating Form
    let isValid = true;
    if (id === 'email') {
      let test = Validator.validateEmail(value)
      if (value === '') {
        this.setState({
          emailValidation: 'Email Should not be empty*'
        })
        isValid = false;
      }
      else if (!test) {
        this.setState({
          emailValidation: 'Enter valid email*'
        })
        isValid = false;
      }
      else {
        this.setState({
          emailValidation: '',
        })
      }
    }
    if (id === 'phone') {
      if (value === '') {
        this.setState({
          phoneValidation: 'Enter phone number*'
        })
        isValid = false;
      }
      else {
        this.setState({
          phoneValidation: '',
        })
      }
    }
    this.setState({ formIsValid: isValid });
  }

  resetData() {
    this.setState({ email: '', phone: '' })
  }

  saveData() {
    let temp = this;
    axios.post('http://13.233.204.63:4000/saveSubscription', {
      email: temp.state.email,
      mobileNumber: temp.state.phone
    })
      .then(function (response) {
        console.log(response);
        swal({
          title: "You are subscribed Successfully!",
          text: response.data.message,
          icon: "success",
          button: "Ok!",
        })
          .then(function () {
            temp.setState({ email: '', phone: '' });
          });
      })
      .catch(function (error) {
        console.log(error);
        swal({
          title: 'Error',
          text: error.response.data.message,
          icon: "error",
          button: "Ok!",
        })
      });
  }

  redirectToSubscribe() {
    window.location = '#subscribe';
  }
  render() {
    return (
      <div>
      <div className='wrapper'>
        <div className='section-1'>
          <div className='left-part'>
            <div className='top'>
              <h1>THEREALITY.SOCIAL</h1>
            </div>
            <div className='middle'>
              <h1><span id='black'>JOIN WORLD’S FIRST</span> REALITY SOCIAL NETWORK</h1>
            </div>
            <div className='bottom'>
              <div className='vertical-line'></div>
              <div className='list'><div className='circle1'></div></div>
              <div className='list'><div className='circle'></div><h3>Real People</h3></div>
              <div className='list'><div className='circle'></div><h3>Real Game</h3></div>
              <div className='list'><div className='circle'></div><h3>Real Drama</h3></div>
              <button onClick={() => this.redirectToSubscribe()}>Participate Now</button>
            </div>
          </div>
          <div className='right-part'>
            <img className='rotate' src={images.path.logo} alt='' />
          </div>
        </div>
        <div className='section-2'>
          <div className='section-2-left'>
            <div className='heading'>
              <h1>A unique experience that involves the dynamics of social network and a social game. </h1>
            </div>
            <div className='lists'>
              <div className='list-left'>
                <div className='list'><div className='circle'></div><h3>Lies and Conflicts</h3></div>
                <div className='list'><div className='circle'></div><h3>Alliances and Isolation</h3></div>
                <div className='list'><div className='circle'></div><h3>Loyalty and Betrayals </h3></div>
                <div className='list'><div className='circle'></div><h3>Gossips and Backstabs</h3></div>
                <div className='list'><div className='circle'></div><h3>Hate and Love</h3></div>
              </div>
              <div className='list-right'>
                <div className='list'><div className='circle'></div><h3>Challenges and Polls</h3></div>
                <div className='list'><div className='circle'></div><h3>Nominations & Evictions</h3></div>
                <div className='list'><div className='circle'></div><h3>Drama and Showmance</h3></div>
                <div className='list'><div className='circle'></div><h3>Anonymous Players</h3></div>
                <div className='list'><div className='circle'></div><h3>Outrageous Characters</h3></div>
              </div>
            </div>
            <button onClick={() => this.redirectToSubscribe()}> Enroll Now for FREE!</button>
          </div>
          <div className='section-2-right'>
            <img src={images.path.girl} alt='' />
          </div>
        </div>
        <div className='section-3'>
          <div className='section-3-top'>
            <div className='list'><h3>12 Players</h3></div>
            <div className='list'><div className='circle'></div><h3>7 Days</h3></div>
            <div className='list'><div className='circle'></div><h3>1 Winner</h3></div>
          </div>
          <div className='section-3-middle'>
            <div className='circle1'></div>
            <div className='vertical-line'></div>
            <div className='section-3-heading'>
              <h1>PLAY BIG BROTHER GAME ONLINE</h1>
              <h2><span id='black'>How far will you go to win this ultimate social media popularity contest and the cash prize?</span></h2>
            </div>
            <div className='section-3-content'>
              <div className='section-3-middle-left'>
                <div className='list'><div className='circle'></div><img src={images.path.hand} alt='' /><h3>Meet New Friends</h3></div>
                <div className='list'><div className='circle'></div><img src={images.path.home} alt='' /><h3>Nominate and Evict</h3></div>
                <div className='list'><div className='circle'></div><img src={images.path.hand} alt='' /><h3>Chat and Make Alliances</h3></div>
              </div>
              <div className='section-3-middle-right'>
                <div className='vertical-line'></div>
                <div className='list'><div className='circle'></div><img src={images.path.win} alt='' /><h3>Prepare for Drama</h3></div>
                <div className='list'><div className='circle'></div><img id='surprise' src={images.path.suprises} alt='' /><h3>Real Money Earning Games</h3></div>
                <div className='list'><div className='circle'></div><img src={images.path.win} alt='' /><h3>Compete for Popularity</h3></div>
              </div>
            </div>
            <button onClick={() => this.redirectToSubscribe()}>Make Money Playing Games</button>
          </div>
        </div>
        <div className='section-4'>
          <div className='section-4-heading'>
            <h1>Participate in the <span id='black'>world's</span> first reality social network that pays you to be popular! </h1>
          </div>
          <div className='section-4-middle'>
            <div className='section-4-content'>
              <div className='users'>
                <div className='user-content'>
                  <div className='user-details'>
                    <h4>Enroll in a game</h4>
                    <h6>All players are strangers coming from all walks of life, interacting with one another exclusively through social media platform called TheReality.Social (TRS). Be anyone or say anything. There are no boundaries.</h6>
                  </div>
                </div>
                <div className='user-content'>
                  <div className='user-details'>
                    <h4>Decide your gameplay</h4>
                    <h6>Send public messages in the Main Chat to increase your popularity among the audience watching 24/7 live stream and to form friendships with fellow players. Use private messages to form alliances, plan and plot your next moves. You can adopt any persona you wish to propel yourself through the competition.</h6>
                  </div>
                </div>
                <div className='user-content'>
                  <div className='user-details'>
                    <h4>Earn money playing games</h4>
                    <h6>The aim of the game is to survive till the final day of the 7-day game to win TRS dollars which can be converted to real money when it reaches the threshold.</h6>
                  </div>
                </div>
                <div className='user-content'>
                  <div className='user-details'>
                    <h4>Inspired by popular reality TV concepts</h4>
                    <h6>TheReality.Social is an online social experiment game based on popular reality TV concept. Players are made to choose between head and heart, beliefs and conditioning are tested while players have the freedom to say anything as they are given a choice to be anonymous.</h6>
                  </div>
                </div>
                <button onClick={() => this.redirectToSubscribe()}>Play Now</button>
              </div>
            </div>
            <div className='section-4-cup'>
              <img src={images.path.cup} alt='' />
            </div>
          </div>
        </div>
        <div className='section-5'>
          <div className='section-5-left'>
            <div className='section-5-heading'>
              <h1>About <span id='black'>us</span></h1>
            </div>
            <div className='section-5-content'>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>
          </div>
          <div className='section-5-right'>

          </div>
        </div>
        <div className='section-6' id='subscribe'>
          <div className='section-6-heading'>
            <h1>Launching all over the <span id='black'>World</span></h1>
          </div>
          <div className='section-6-content'>
            <div className='section-6-left'>
              <div className='subscribe-details'>
                <h5>SUBSRIBE FOR MORE DETAILS</h5>
                <div className='email'>
                  <label>Email ID:</label>
                  <div className='input-field'>
                    <input type='text'
                      id='email'
                      onChange={(event) => { this.handleChange(event.target.value, event.target.id); this.formValidation(event.target.value, event.target.id) }}
                      value={this.state.email}
                      placeholder='Enter email address' />
                    <p>{this.state.emailValidation}</p>
                  </div>
                </div>
                <div className='phone'>
                  <label>Phone No.:</label>
                  <div className='input-field'>
                    <input type='text'
                      id='phone'
                      onChange={(event) => { this.handleChange(event.target.value, event.target.id); this.formValidation(event.target.value, event.target.id) }}
                      value={this.state.phone}
                      placeholder='Enter phone number' />
                    <p>{this.state.phoneValidation}</p>
                  </div>
                </div>
                <button disabled={!this.state.formIsValid} onClick={() => this.saveData()} id='submit'>SUBMIT</button>
              </div>
            </div>
            <div className='section-6-right'>
              <div className='social-media-img'>
                <img src={images.path.fb} alt='' />
                <img src={images.path.wp} alt='' />
                <img src={images.path.twitter} alt='' />
                <img src={images.path.in} alt='' />
                <img src={images.path.pin} alt='' />
              </div>
              <div>
                <a href=''>All rights reserved</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default LandingPage;

