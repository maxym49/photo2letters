import React, {Component} from 'react';
import Header from "../../components/start-page/header/header";
import LoginHeader from "../../components/login-register-page/header/header";
import BackgroundContainer from "../../components/global-components/background-container/backgroundContainer";
import ContentWrapper from "../../components/global-components/content-wrapper/contentWrapper";
import Input from "../../components/global-components/input/input";
import {
    EMAIL_INPUT_PLACEHOLDER,
    LOGIN_PAGE_HEADER,
    LOGIN_PAGE_SUB_HEADER,
    PASSWORD_INPUT_PLACEHOLDER,
    START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT,
    LOGIN_PAGE_FORGOT_PASSWORD,
} from "../../common/constant-text/texts";
import Button from "../../components/global-components/buttons/button";
import {PRIMARY, WHITE_GREY} from "../../common/styles-variables/colors";
import {DEV_LOGIN_URL} from "../../common/env/env";
import {getToken, setToken} from "../../common/auth/token";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        if (getToken()) {
            this.navigateToApp();
        }
    }

    navigateToApp = () => {
        const {navigate} = this.props.navigation;
        navigate('MainFiles');
    };

    onLoginPress() {
        const {email, password} = this.state;
        fetch(DEV_LOGIN_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => {
                if (response.ok)
                    return (response.json())
            })
            .then((responseJson) => {
                if (responseJson) {
                    console.log(responseJson.token);
                    setToken(responseJson.token);
                    this.navigateToApp();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onEmailChange = (t) => {
        this.setState({
            email: t
        })
    };

    onPassChange = (t) => {
        this.setState({
            password: t
        })
    };

    onForgotPasswordPress() {

    }

    render() {
        const {navigate} = this.props.navigation;
        const {email, password} = this.state;
        return (
            <>
                <BackgroundContainer>
                    <Header navigate={navigate}/>
                    <ContentWrapper>
                        <LoginHeader headerText={LOGIN_PAGE_HEADER} subHeaderText={LOGIN_PAGE_SUB_HEADER}/>
                        <Input text={email} action={this.onEmailChange} placeholder={EMAIL_INPUT_PLACEHOLDER}/>
                        <Input security text={password} action={this.onPassChange}
                               placeholder={PASSWORD_INPUT_PLACEHOLDER}/>
                        <Button disabled={!email.length && !password.length} action={this.onLoginPress.bind(this)}
                                shadow
                                text={START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT}
                                btnStyle={{
                                    backgroundColor: PRIMARY,
                                    marginTop: 30
                                }}/>
                        <Button action={this.onForgotPasswordPress.bind(this)} text={LOGIN_PAGE_FORGOT_PASSWORD}
                                btnStyle={{
                                    backgroundColor: WHITE_GREY
                                }} textStyle={{
                            color: PRIMARY
                        }}/>
                    </ContentWrapper>
                </BackgroundContainer>
            </>
        )
    }
}