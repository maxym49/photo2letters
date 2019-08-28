import React from "react";
import StartPageEasy from "./sub-screens/starPageEasy";
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
        return (
            <>
                <Swiper onIndexChanged={i => this.onSwipe(i)} activeDot={<View/>} dot={<View/>} loop={false}>
                    <StartPageStarted index={index}/>
                    <StartPageEasy index={index}/>
                    <StartPageFast index={index}/>
                </Swiper>
            </>
        );
    }
}
