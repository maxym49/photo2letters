import React from 'react';
import {View, Text} from 'react-native';
import StartPage from '../../../components/start-page/startPage';
import {timerIcon} from '../../../common/path-extracter/pathExtracter';
import {
  START_PAGE_FAST_TUTORIAL_CONTENT_SECOND_LINE,
  START_PAGE_FAST_TUTORIAL_CONTENT_FIRST_LINE,
  START_PAGE_FAST_TUTORIAL_CONTENT_THIRD_LINE,
  START_PAGE_FAST_TUTORIAL_HEADER,
} from '../../../common/constant-text/texts';

export default class StartPageFast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {index, navigation} = this.props;
    return (
      <>
        <StartPage
          navigation={navigation}
          index={index}
          centerImage={timerIcon}
          textHeader={START_PAGE_FAST_TUTORIAL_HEADER}
          textContentFirstLine={START_PAGE_FAST_TUTORIAL_CONTENT_FIRST_LINE}
          textContentSecondLine={START_PAGE_FAST_TUTORIAL_CONTENT_SECOND_LINE}
          textContentThirdLine={START_PAGE_FAST_TUTORIAL_CONTENT_THIRD_LINE}
        />
      </>
    );
  }
}
