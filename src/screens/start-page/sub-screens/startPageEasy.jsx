import React from 'react';
import StartPage from '../../../components/start-page/startPage';
import {easy} from '../../../common/path-extracter/pathExtracter';
import {
  START_PAGE_EASY_TUTORIAL_CONTENT_FIRST_LINE,
  START_PAGE_EASY_TUTORIAL_CONTENT_SECOND_LINE,
  START_PAGE_EASY_TUTORIAL_CONTENT_THIRD_LINE,
  START_PAGE_EASY_TUTORIAL_HEADER,
} from '../../../common/constant-text/texts';

export default class HomeScreen extends React.Component {
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
          centerImage={easy}
          textHeader={START_PAGE_EASY_TUTORIAL_HEADER}
          textContentFirstLine={START_PAGE_EASY_TUTORIAL_CONTENT_FIRST_LINE}
          textContentSecondLine={START_PAGE_EASY_TUTORIAL_CONTENT_SECOND_LINE}
          textContentThirdLine={START_PAGE_EASY_TUTORIAL_CONTENT_THIRD_LINE}
        />
      </>
    );
  }
}
