import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StartPage from "./src/screens/start-page/startPage";

const MainNavigator = createStackNavigator({
        Home: {screen: StartPage},
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });


const App = createAppContainer(MainNavigator);

export default App;
