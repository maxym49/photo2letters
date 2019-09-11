import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, ScrollView, Text} from 'react-native';
import Header from "../../../components/start-page/header/header";
import CardModule from "../../../components/main/card-module/cardModule";
import BackgroundContainer from "../../../components/global-components/background-container/backgroundContainer";
import ContentWrapper from "../../../components/global-components/content-wrapper/contentWrapper";
import cardModules from "../../../common/static-data/main/cardModules";
import onModuleCardPress from "../common/commonFunctions";
import Input from "../../../components/global-components/input/input";
import {
    MAIN_EMAILS_PAGE_SELECT_LABEL, MAIN_EMAILS_PAGE_SELECT_PLACEHOLDER,
    MAIN_EMAILS_PAGE_SEND_ON_LABEL,
    MAIN_EMAILS_PAGE_SEND_ON_PLACEHOLDER
} from "../../../common/constant-text/texts";
import {BLACK} from "../../../common/styles-variables/colors";
import SelectBox from "../../../components/global-components/select-box/selectBox";

export default class EmailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardModules,
            itemList: [{
                label: 'item1',
                value: 'item1',
                checked: true,
            }, {
                label: 'item2',
                value: 'item2',
                checked: false,
            }, {
                label: 'item3',
                value: 'item3',
                checked: false,
            },
            ]
        };
    }

    componentDidMount() {
        const {cardModules} = this.state;
        const filteredCardModules = cardModules.map(module => {
            module.isActive = module.name === 'emails';
            return module;
        });
        this.setState({
            cardModules: filteredCardModules
        })
    }

    onCardPress = (name) => {
        onModuleCardPress(name, this.state, this.props.navigation.navigate)
    };

    onSelect = (selectedItem) => {
        const {itemList} = this.state;
        const filteredItemList = itemList.map(item => {
            if (item.value === selectedItem.value)
                item.checked = !item.checked;
            return item;
        });
        this.setState({
            itemList: filteredItemList
        });
    };

    render() {
        const {cardModules, itemList} = this.state;
        return (
            <>
                <BackgroundContainer resizeMode="contain">
                    <ScrollView nestedScrollEnabled={true} style={{
                        flexGrow: 1
                    }}>
                        <Header disabled={true}/>
                        <ContentWrapper style={{
                            flex: 1
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'space-between',
                                flexDirection: 'row'
                            }}>
                                {cardModules.map(module => (
                                    <TouchableWithoutFeedback key={module.name} disabled={module.isActive}
                                                              onPress={() => this.onCardPress(module.name)}>
                                        <View>
                                            <CardModule isActive={module.isActive}
                                                        image={module.image}
                                                        text={module.text}/>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))}
                            </View>
                            <View style={{
                                marginTop: 40,
                                width: '80%',
                            }}>
                                <View style={{
                                    marginBottom: 20,
                                    width: '100%',
                                    alignSelf: 'center',
                                }}>
                                    <Text style={{
                                        color: BLACK,
                                    }}>{MAIN_EMAILS_PAGE_SEND_ON_LABEL}</Text>
                                    <Input placeholder={MAIN_EMAILS_PAGE_SEND_ON_PLACEHOLDER}
                                           styles={{alignSelf: 'flex-start', width: '100%'}}
                                           textContentType="emailAddress"
                                           autoCompleteType="email"
                                           keyboardType="email-address"
                                    />
                                </View>
                                <View style={{
                                    marginBottom: 20,
                                    width: '100%',
                                    alignSelf: 'center',
                                }}>
                                    <Text style={{
                                        color: BLACK,
                                    }}>{MAIN_EMAILS_PAGE_SELECT_LABEL}</Text>
                                <SelectBox action={this.onSelect.bind(this)} itemList={itemList}
                                           text={MAIN_EMAILS_PAGE_SELECT_PLACEHOLDER}/>
                                </View>
                            </View>
                        </ContentWrapper>
                    </ScrollView>
                </BackgroundContainer>
            </>
        )
    }
};
