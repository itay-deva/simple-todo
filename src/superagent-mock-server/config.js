import endpoints from './endpoints';

export default [
  {
    pattern: 'todos-api(.*)',
    fixtures: endpoints,

    /**
     * returns the result of the GET request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    get: function (match, data) {
      return data;
    },

    /**
     * returns the result of the PUT request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    put: function (match, data) {
      return data;
    },

    /**
     * returns the result of the POST request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    post: function (match, data) {
      return data;
    }
  }
];