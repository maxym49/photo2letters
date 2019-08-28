import React, {Component} from 'react';
import styleSheet from './dots.style';
import RadioButton from './radio-button/radioButton';
import {TouchableOpacity, View} from 'react-native';

const {container} = styleSheet;

export default class Dots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dots: [
                {
                    name: 'start',
                    isActive: true
                },
                {
                    name: 'easy',
                    isActive: false
                },
                {
                    name: 'fast',
                    isActive: false
                }],
            selectedIndex: props.index
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.index !== prevProps.index) {
            const {dots} = this.state;
            this.setState({
                dots: dots.map((element, i) => {
                    element.isActive = i === this.props.index;
                    return element;
                })
            })
        }
    }

    render() {
        const {dots} = this.state;
        return (
            <>
                <View style={container}>
                    {dots.map(el => (
                        <TouchableOpacity key={el.name}>
                            <RadioButton id={el.name} selected={el.isActive}/>
                        </TouchableOpacity>))}
                </View>
            </>
        )
    }

}