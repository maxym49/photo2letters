import React from "react";
import StartPageEasy from "./sub-screens/startPageEasy";
import StartPageFast from "./sub-screens/startPageFast";
import StartPageStarted from "./sub-screens/startPageStarted";
import Swiper from 'react-native-swiper';
import {View} from "react-native";

export default class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    onSwipe(i) {
        this.setState({
            index: i
        });
    }

    render() {
        const {index} = this.state;
        const {navigate} = this.props.navigation;
        return (
            <>
                <Swiper onIndexChanged={i => this.onSwipe(i)} activeDot={<View/>} dot={<View/>} loop={false}>
                    <StartPageStarted navigate={navigate} index={index}/>
                    <StartPageEasy navigate={navigate} index={index}/>
                    <StartPageFast navigate={navigate} index={index}/>
                </Swiper>
            </>
        );
    }
}
