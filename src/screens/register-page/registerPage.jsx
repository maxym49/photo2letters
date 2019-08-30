import React, {Component} from 'react';
import Header from "../../components/start-page/header/header";
import LoginHeader from "../../components/login-register-page/header/header";
import BackgroundContainer from "../../components/global-components/background-container/backgroundContainer";
import ContentWrapper from "../../components/global-components/content-wrapper/contentWrapper";
import Input from "../../components/global-components/input/input";
import {
    EMAIL_INPUT_PLACEHOLDER,
    REGISTER_PAGE_HEADER,
    REGISTER_PAGE_SUB_HEADER,
    PASSWORD_INPUT_PLACEHOLDER,
    START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT,
    RE_TYPE_PASSWORD_INPUT_PLACEHOLDER
} from "../../common/constant-text/texts";
import Button from "../../components/global-components/buttons/button";
import {PRIMARY } from "../../common/styles-variables/colors";

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onRegisterPress() {

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <>
                <BackgroundContainer>
                    <Header navigate={navigate}/>
                    <ContentWrapper style={{
                        marginTop: 40
                    }}>
                        <LoginHeader headerText={REGISTER_PAGE_HEADER} subHeaderText={REGISTER_PAGE_SUB_HEADER}/>
                        <Input placeholder={EMAIL_INPUT_PLACEHOLDER}/>
                        <Input placeholder={PASSWORD_INPUT_PLACEHOLDER}/>
                        <Input placeholder={RE_TYPE_PASSWORD_INPUT_PLACEHOLDER}/>
                        <Button action={this.onRegisterPress.bind(this)} shadow text={START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT}
                                btnStyle={{
                                    backgroundColor: PRIMARY,
                                    marginTop: 30
                                }}/>
                    </ContentWrapper>
                </BackgroundContainer>
            </>
        )
    }
}