class DomainController {
  constructor(domainName) {
    this.domainName = domainName;
    this.users = new Map();
  }

  addUser(username, password) {
    if (this.users.has(username)) {
      throw new Error(`User ${username} already exists`);
    }
    this.users.set(username, { password });
  }

  authenticate(username, password) {
    const user = this.users.get(username);
    return Boolean(user && user.password === password);
  }
}

module.exports = DomainController;
