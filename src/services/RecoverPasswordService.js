import Service from './Service';

export default class RecoverPasswordService extends Service {
  constructor() {
    super('v1/Usuario/RecuperarSenha');
  }

  byEmail(email) {
    const recoverPasswordModel = {
      email,
    };

    const url = this.getUrl();
    return this.$axios.patch(url, recoverPasswordModel);
  }

  sendCode(email) {
    const recoverPasswordModel = {
      email,
    };

    const url = this.getUrl();
    return this.$axios.patch(url, recoverPasswordModel);
  }
}
