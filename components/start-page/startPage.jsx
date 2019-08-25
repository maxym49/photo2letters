import React, {Component} from 'react';
import Header from './header/header';
import Content from "./content/content";

export default class StartPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <Content/>
            </>
        )
    }
}