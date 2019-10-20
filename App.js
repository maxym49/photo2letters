import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StartPage from './src/screens/start-page/startPage';
import LoginPage from './src/screens/login-page/loginPage';
import RegisterPage from './src/screens/register-page/registerPage';
import FilesPage from './src/screens/main-page/files-page/filesPage';
import ImportPage from './src/screens/main-page/import-page/importPage';
import EmailsPage from './src/screens/main-page/emails-page/emailsPage';
import CameraPage from './src/screens/camera/cameraPage';
import FileName from './src/screens/save-file/fileName';
import SendEmail from './src/screens/save-file/sendEmail';
import GalleryPage from './src/screens/gallery/galleryPage';
import ForgotPasswordPage from './src/screens/forgot-password/forgotPassword';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: StartPage},
    Login: {screen: LoginPage},
    Register: {screen: RegisterPage},
    MainImport: {screen: ImportPage},
    MainFiles: {screen: FilesPage},
    MainEmails: {screen: EmailsPage},
    Camera: {screen: CameraPage},
    FileName: {screen: FileName},
    SendEmail: {screen: SendEmail},
    Gallery: {screen: GalleryPage},
    ForgotPassword: {screen: ForgotPasswordPage},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

console.disableYellowBox = true;

const App = createAppContainer(MainNavigator);

export default App;
