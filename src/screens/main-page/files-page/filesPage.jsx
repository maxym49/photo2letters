import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, ScrollView, Text} from 'react-native';
import CardModule from "../../../components/main/card-module/cardModule";
import BackgroundContainer from "../../../components/global-components/background-container/backgroundContainer";
import ContentWrapper from "../../../components/global-components/content-wrapper/contentWrapper";
import cardModules from "../../../common/static-data/main/cardModules";
import onModuleCardPress from "../common/commonFunctions";
import ListWithDots from "../../../components/global-components/list-with-dots/listWithDots";
import {MAIN_FILES_PAGE_REMOVE_BUTTON, MAIN_FILES_PAGE_SAVED_FILES} from "../../../common/constant-text/texts";
import {BLACK, PRIMARY, WHITE_GREY} from "../../../common/styles-variables/colors";
import Button from "../../../components/global-components/buttons/button";
import Header from "../../../components/start-page/header/header";

export default class FilesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardModules
        };
    }

    componentDidMount() {
        const {cardModules} = this.state;
        const filteredCardModules = cardModules.map(module => {
            module.isActive = module.name === 'files';
            return module;
        });
        this.setState({
            cardModules: filteredCardModules
        })
    }

    onCardPress = (name) => {
        onModuleCardPress(name, this.state, this.props.navigation.navigate)
    };

    onRemove = () => {
        console.log('Items have been removed');
    };

    render() {
        const {cardModules} = this.state;
        return (
            <>
                <BackgroundContainer resizeMode="contain">
                    <ScrollView nestedScrollEnabled={true} style={{
                        flexGrow: 1
                    }}>
                        <Header disabled={true}/>
                        <ContentWrapper>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'space-between',
                                flexDirection: 'row'
                            }}>
                                {cardModules.map(module => (
                                    <TouchableWithoutFeedback disabled={module.isActive} key={module.name}
                                                              onPress={() => this.onCardPress(module.name)}>
                                        <View>
                                            <CardModule isActive={module.isActive}
                                                        image={module.image}
                                                        text={module.text}/>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))}
                            </View>
                            <Text style={{
                                color: PRIMARY,
                                fontSize: 18,
                                alignSelf: 'flex-start',
                                marginTop: 50
                            }}>{MAIN_FILES_PAGE_SAVED_FILES}</Text>
                            <ListWithDots/>
                            <Button action={this.onRemove.bind(this)} text={MAIN_FILES_PAGE_REMOVE_BUTTON} btnStyle={{
                                backgroundColor: WHITE_GREY, borderColor: PRIMARY, borderWidth: 2
                            }} textStyle={{
                                color: BLACK
                            }}/>
                            <Button text={MAIN_FILES_PAGE_REMOVE_BUTTON}/>
                        </ContentWrapper>
                    </ScrollView>
                </BackgroundContainer>
            </>
        )
    }
};
