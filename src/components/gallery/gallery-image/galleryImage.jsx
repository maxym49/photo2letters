import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './galleryImage.style';

export default class GalleryImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item, selectImage, selectedImage} = this.props;
    return (
      <>
        <View style={styles.masonryWrapper}>
          <TouchableOpacity onPress={() => selectImage(item)}>
            <Image
              style={styles.masonryImage}
              resizeMode="cover"
              source={{uri: item.node.image.uri}}></Image>
            {selectedImage.filename === item.node.image.filename ? (
              <View style={styles.overlay}>
                <Text style={styles.tick}>✓</Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
