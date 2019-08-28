import React from "react";
import StartPage from "../../../components/start-page/startPage";
import {
    START_PAGE_STARTED_TUTORIAL_CONTENT_FIRST_LINE,
    START_PAGE_STARTED_TUTORIAL_CONTENT_SECOND_LINE, START_PAGE_STARTED_TUTORIAL_CONTENT_THIRD_LINE,
    START_PAGE_STARTED_TUTORIAL_HEADER,
} from "../../../common/constant-text/texts";
import {clouds} from "../../../common/path-extracter/pathExtracter";

export default class StartPageStarted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const {index} = this.props;
        return (
            <>
                <StartPage
                    index={index}
                    centerImage={clouds}
                    textHeader={START_PAGE_STARTED_TUTORIAL_HEADER}
                    textContentFirstLine={START_PAGE_STARTED_TUTORIAL_CONTENT_FIRST_LINE}
                    textContentSecondLine={START_PAGE_STARTED_TUTORIAL_CONTENT_SECOND_LINE}
                    textContentThirdLine={START_PAGE_STARTED_TUTORIAL_CONTENT_THIRD_LINE}
                />
            </>
        );
    }
}
