import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StartPage from "./src/screens/start-page/startPage";
import LoginPage from "./src/screens/login-page/loginPage";
import RegisterPage from "./src/screens/register-page/registerPage";
import FilesPage from "./src/screens/main-page/files-page/filesPage";
import ImportPage from "./src/screens/main-page/import-page/importPage";
import EmailsPage from "./src/screens/main-page/emails-page/emailsPage";

const MainNavigator = createStackNavigator({
        Home: {screen: StartPage},
        Login: {screen: LoginPage},
        Register: {screen: RegisterPage},
        MainFiles: {screen: FilesPage},
        MainImport: {screen: ImportPage},
        MainEmails: {screen: EmailsPage}
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
