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

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onLoginPress() {
        const {navigate} = this.props.navigation;
        navigate('MainFiles');
    }

    onForgotPasswordPress() {

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <>
                <BackgroundContainer>
                    <Header navigate={navigate}/>
                    <ContentWrapper>
                        <LoginHeader headerText={LOGIN_PAGE_HEADER} subHeaderText={LOGIN_PAGE_SUB_HEADER}/>
                        <Input placeholder={EMAIL_INPUT_PLACEHOLDER}/>
                        <Input placeholder={PASSWORD_INPUT_PLACEHOLDER}/>
                        <Button action={this.onLoginPress.bind(this)} shadow
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