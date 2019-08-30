import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text, Animated} from 'react-native';
import buttonStyles from './button.style';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatePress: new Animated.Value(1)
        };
    }

    animateIn() {
        const {animatePress} = this.state;
        const {action} = this.props;
        Animated.timing(animatePress, {
            toValue: 0.8,
            duration: 500
        }).start();
        action();
    };

    animateOut() {
        const {animatePress} = this.state;
        Animated.timing(animatePress, {
            toValue: 1,
            duration: 500
        }).start();
    };

    render() {
        const {animatePress} = this.state;
        const {text, btnStyle, disabled, shadow, textStyle} = this.props;
        return (
            <>
                <TouchableWithoutFeedback onPressIn={() => this.animateIn()} onPressOut={() => this.animateOut()}
                                          disabled={disabled}>
                    <Animated.View style={[buttonStyles.button, btnStyle,
                        {
                            transform: [{
                                scale: animatePress
                            }]
                        },
                        shadow ? buttonStyles.buttonWithShadow : null]}
                    >
                        <Text style={[buttonStyles.buttonText, textStyle]}>
                            {text}
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </>
        )
    }
}