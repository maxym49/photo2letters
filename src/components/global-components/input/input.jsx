import React, {Component} from 'react';
import {TextInput} from 'react-native';
import inputStyles from './input.style';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        };
    }

    render() {
        const {textValue} = this.state;
        const {action, text, styles, placeholder, textContentType, autoCompleteType, keyboardType} = this.props;
        return (
            <>
                <TextInput
                    style={[inputStyles.input, styles]}
                    onChangeText={action ? () => action() : null}
                    value={text ? text : textValue}
                    textContentType={textContentType}
                    autoCompleteType={autoCompleteType}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                >
                </TextInput>
            </>
        )
    }
}