import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchLogin from '../api/loginApi';
import {Alert} from 'react-bootstrap';
import { isNullOrUndefined } from 'util';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUsername = (event) => {
        const username = event.target.value;
        this.setState(
            {
                ...this.state,
                username: username
            }
        );
    }
    
    onChangePassword = (event) => {
        const password = event.target.value;
        this.setState(
            {
                ...this.state,
                password: password
            }
        );
    }

    onClickSignIn = async () => {
        const {fetchLogin} = this.props;
        const {username, password} = this.state;
        await fetchLogin(username, password);
        const {user, token, message} = this.props.state;
        // Login success
        if (isNullOrUndefined(user) === false && isNullOrUndefined(token) === false) {
            this.props.history.push('/game-menu');
            console.log('redirect menu');
        } else {
            console.log('allert');
            return <Alert variant = "danger">{message}</Alert>
        }
    }

    renderErrorMessage = (message) => {
        if (isNullOrUndefined(message) === false) {
            return <Alert className="text-center" show = {true} variant = "danger">{message}</Alert>
        } else {
            return null;
        }
    }
    render() {

        const {message} = this.props.state;
        return (
            <div>
                {this.renderErrorMessage(message)}
                <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Username</label>
                            <input id="user" type="text" className="input"  onChange = {(event)=> this.onChangeUsername(event)}/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" onChange = {(event)=> this.onChangePassword(event)}/>
                        </div>
                        <div className="group">
                            <input id="check" type="checkbox" className="check" defaultChecked />
                            <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                        </div>
                        <div className="group">
                            <input type="button" className="button" value="Sign In" onClick = {()=> this.onClickSignIn()}/>
                        </div>
                        <div className="hr" />
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Username</label>
                            <input id="user" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Repeat Password</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email Address</label>
                            <input id="pass" type="text" className="input" />
                        </div>
                        <div className="group">
                            <input type="button" className="button" value="Sign Up"/>
                        </div>
                        <div className="hr" />
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">Already Member?</label>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  state: state.userLogin
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchLogin: fetchLogin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);