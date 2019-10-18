import React, {Component} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  FlatList,
  ImageStore,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import styles from './gallery.style';
import {navigateTo} from '../../common/router/commonFunctions';
import GalleryImage from '../../components/gallery/gallery-image/galleryImage';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedImage: '',
    };
  }

  componentDidMount() {
    this.askForThePermission();
    this.loadImages();
  }

  loadImages = async () => {
    try {
      const photos = await CameraRoll.getPhotos({
        first: 100,
        assetType: 'Photos',
      });
      this.setState({photos: photos.edges});
    } catch (err) {
      console.log(err);
    }
  };

  askForThePermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    this.setState({permission: granted});
  };

  selectImage = item => {
    this.setState({
      selectedImage: item.node.image,
    });
  };

  navigateToForm = () => {
    const {selectedImage} = this.state;
    ImageStore.getBase64ForTag(
      selectedImage.uri,
      data => {
        const image = {
          base64: data,
          uri: selectedImage.uri,
        };
        const ra = navigateTo('FileName', {image});
        this.props.navigation.dispatch(ra);
      },
      e => console.warn('getBase64ForTag: ', e),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.photos.length ? (
          <FlatList
            numColumns={2}
            data={this.state.photos}
            style={styles.masonry}
            extraData={this.state.selectedImage}
            renderItem={({item}) => (
              <View>
                <GalleryImage
                  item={item}
                  selectedImage={this.state.selectedImage}
                  selectImage={this.selectImage}
                />
              </View>
            )}
            keyExtractor={(item, index) => index}></FlatList>
        ) : null}
        {this.state.permission ? (
          <View style={styles.button}>
            <TouchableOpacity onPress={this.navigateToForm}>
              <View>
                <Text style={styles.buttonText}>Save as document</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}
