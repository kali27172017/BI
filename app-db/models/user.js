class User {
  constructor(user, password) {
    this.user = user;
    this.password = password;
  }

  getUser() {
    return this.user;
  }

  getPassword() {
    return this.password;
  }

  setUser(user) {
    this.user = user;
  }

  setPassword(password) {
    this.password = password;
  }
}

module.exports = User;
