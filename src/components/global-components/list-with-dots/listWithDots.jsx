import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import listStyle from './listWithDots.style';
import ListItem from './list-item/listItem';

export default class ListWithDots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
    };
  }

  onSelectItem = item => {
    const {setItemsToRemove, itemsList} = this.props;
    const filteredList = itemsList.map(listItem => {
      if (listItem._id === item._id) {
        listItem.isSelected = !item.isSelected;
      }
      return listItem;
    });
    setItemsToRemove(filteredList);
  };

  render() {
    const {itemsList} = this.props;
    return (
      <>
        {itemsList.length ? (
          <View style={listStyle.listContainer}>
            <FlatList
              data={itemsList}
              renderItem={({item, index}) => (
                <ListItem
                  item={item}
                  action={() => this.onSelectItem(item)}
                  isLastItem={itemsList.length - 1 === index}
                />
              )}
              keyExtractor={item => item._id}
            />
          </View>
        ) : null}
      </>
    );
  }
}
