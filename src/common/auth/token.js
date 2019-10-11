let token = "";

const setToken = (tokenData) => token = tokenData;

const getToken = () => token;

const removeToken = () => token = "";

export {setToken, getToken, removeToken};