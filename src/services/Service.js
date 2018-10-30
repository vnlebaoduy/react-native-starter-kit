import axios from 'plugins/axios';

export default class Service {
  constructor(uri) {
    this.uri = uri;
    this.$axios = axios;
  }

  getUrl(id) {
    const { uri } = this;

    if (!id) {
      return uri;
    }

    return id.indexOf('/') === 0 ? `${uri}${id}` : `${uri}/${id}`;
  }

  static facade() {
    const { constructor } = this.prototype;
    return new constructor();
  }
}
