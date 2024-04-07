export default class Validator {
    static validateUsername(username) {
        if (
            !/^[a-zA-Z\d]+(?:[_-][a-zA-Z\d]+)*$/.test(username) ||
            /^\d/.test(username) ||
            /[\d_-]{4}$/.test(username)
          ) {
            return false;
          }
          return true;
    }
}
      