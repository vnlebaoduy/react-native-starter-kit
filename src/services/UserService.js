import { AsyncStorage } from 'react-native';
import Service from './Service';

const getIndex = step => `signup-step-${step}`;

export default class UserService extends Service {
  constructor() {
    super('/Usuario');
  }

  static saveStorage(step, object) {
    if (!object) {
      return false;
    }

    const objectJson = JSON.stringify(object);
    return AsyncStorage.setItem(getIndex(step), objectJson);
  }

  static getStorage(step) {
    return AsyncStorage.getItem(getIndex(step));
  }

  static removeStorage(step) {
    return AsyncStorage.removeItem(getIndex(step));
  }

  static clearStorage() {
    return AsyncStorage.clear();
  }

  validateEmail = (email) => {
    const url = this.getUrl('/ValidarEmail');
    const params = {
      params: {
        email,
      },
    };

    return this.$axios.get(url, params);
  };

  validateDocument(documento) {
    const url = this.getUrl('/ValidarDocumento');
    const params = {
      params: {
        documento,
      },
    };

    return this.$axios.get(url, params);
  }

  createUser(userModel) {
    const url = this.getUrl();

    return this.$axios.post(url, userModel);
  }

  getAddresss(zipCode) {
    return this.$axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
  }
}
