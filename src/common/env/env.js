let API_URL = 'https://photo2letters.herokuapp.com';
if (__DEV__) API_URL = 'http://10.0.2.2:4040';
const LOGIN_URL = `${API_URL}/login`;
const REGISTER_URL = `${API_URL}/register`;
const LOGOUT_URL = `${API_URL}/logout`;
const FILES_URL = `${API_URL}/photoFiles`;
const FILE_URL_SPECIFIC = `${API_URL}/photoFiles/specific`;
const EMAIL_SENDER_URL = `${API_URL}/email`;
const INFORMATION_PASSWORD_URL = `${API_URL}/information/user/password`;
const INFORMATION_EMAIL_URL = `${API_URL}/information/user/email`;
const INFORMATION_SAVED_FILES_URL = `${API_URL}/information/files/saved`;

export {
  LOGIN_URL,
  REGISTER_URL,
  LOGOUT_URL,
  FILES_URL,
  FILE_URL_SPECIFIC,
  EMAIL_SENDER_URL,
  INFORMATION_PASSWORD_URL,
  INFORMATION_EMAIL_URL,
  INFORMATION_SAVED_FILES_URL,
};

// to enable connection with localhost API you will need to
// put this command adb reverse tcp:{APPLICATIONPORT} tcp:{APPLICATIONPORT} in the TERMINAL
