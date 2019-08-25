import React, {Component} from 'react';
import styleSheet from './dots.style';
import {Text, ImageBackground, TouchableOpacity, View} from 'react-native';

const {container, dot, activeDot} = styleSheet;

export default class Dots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            dotsAmount: 3
        };
    }

    handleClick = () => {
        const {isActive} = this.state;
        console.log("Chuj dupa cycki");
        this.setState({
            isActive: !isActive
        })
    };

    render() {
        const {isActive} = this.state;
        return (
            <>
                <View style={container}>
                    <TouchableOpacity onPress={this.handleClick}>
                        <View style={isActive ? activeDot : dot}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleClick}>
                        <View style={isActive ? activeDot : dot}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleClick}>
                        <View style={isActive ? activeDot : dot}/>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

}