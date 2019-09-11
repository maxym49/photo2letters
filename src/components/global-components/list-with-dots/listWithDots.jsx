import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import listStyle from './listWithDots.style';
import ListItem from "./list-item/listItem";

export default class ListWithDots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsList: [
                {title: 'Devin', date: 'Today at 12.00 PM', isSelected: true, _id: '931da2312'},
                {title: 'Dan', date: 'Today at 05.00 PM', isSelected: false, _id: '22da57312'},
                {title: 'Dominic', date: 'May 23 at 02.00 PM', isSelected: true, _id: '3!da2312'},
                {title: 'Jackson', date: 'May 13 at 02.00 PM', isSelected: false, _id: '64da2312'},
                {title: 'James', date: 'May 23 at 02.00 PM', isSelected: false, _id: '32dadt312'},
                {title: 'Joel', date: 'May 13 at 02.00 PM', isSelected: true, _id: '32da231#@2'},
            ]
        }
    }

    onSelectItem(item) {
        const {itemsList} = this.state;
        const filteredList = itemsList.map(listItem => {
            if (listItem._id === item._id) {
                listItem.isSelected = !item.isSelected;
            }
            return listItem;
        });
        this.setState({
            itemsList: filteredList
        })
    }


    render() {
        const {itemsList} = this.state;
        const {} = this.props;
        return (
            <>
                <View style={listStyle.listContainer}>
                    <FlatList
                        data={itemsList}
                        renderItem={({item, index}) => <ListItem item={item} action={() => this.onSelectItem(item)}
                                                                 isLastItem={itemsList.length - 1 === index}/>}
                    />
                </View>
            </>
        )
    }
}