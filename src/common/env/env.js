const DEV_API_URL = 'http://10.0.2.2:4040';
const DEV_LOGIN_URL = `${DEV_API_URL}/login`;
const DEV_REGISTER_URL = `${DEV_API_URL}/register`;
const DEV_LOGOUT_URL = `${DEV_API_URL}/logout`;
const DEV_FILES_URL = `${DEV_API_URL}/photoFiles`;
const DEV_FILE_URL_SPECIFIC = `${DEV_API_URL}/photoFiles/specific`;
const DEV_EMAIL_SENDER_URL = `${DEV_API_URL}/email`;
const DEV_INFORMATION_PASSWORD_URL = `${DEV_API_URL}/information/user/password`;
const DEV_INFORMATION_EMAIL_URL = `${DEV_API_URL}/information/user/email`;
const DEV_INFORMATION_SAVED_FILES_URL = `${DEV_API_URL}/information/files/saved`;


export {
    DEV_LOGIN_URL,
    DEV_REGISTER_URL,
    DEV_LOGOUT_URL,
    DEV_FILES_URL,
    DEV_FILE_URL_SPECIFIC,
    DEV_EMAIL_SENDER_URL,
    DEV_INFORMATION_PASSWORD_URL,
    DEV_INFORMATION_EMAIL_URL,
    DEV_INFORMATION_SAVED_FILES_URL
}

// to enable connection with localhost API you will need to
// put this command adb reverse tcp:{APPLICATIONPORT} tcp:{APPLICATIONPORT} in the TERMINAL