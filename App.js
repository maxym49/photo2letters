import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StartPage from "./src/screens/start-page/startPage";
import LoginPage from "./src/screens/login-page/loginPage";
import RegisterPage from "./src/screens/register-page/registerPage";

const MainNavigator = createStackNavigator({
        Home: {screen: StartPage},
        Login: {screen: LoginPage},
        Register: {screen: RegisterPage}
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

console.disableYellowBox = true;

const App = createAppContainer(MainNavigator);

export default App;
