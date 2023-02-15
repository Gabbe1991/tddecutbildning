class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

equals(otherUser) {
    return this.username === otherUser.username;
  }
}
