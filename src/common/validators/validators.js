import {text, password, email} from './patterns';

const isInputValid = (value, type) => {
  switch (type) {
    case 'text': {
      return value.match(text);
    }
    case 'password': {
      return value.match(password);
    }
    case 'email': {
      return value.match(email);
    }
  }
};

export {isInputValid};
