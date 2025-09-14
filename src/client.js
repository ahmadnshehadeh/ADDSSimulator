class Client {
  constructor(name, dhcp, dns, domainController) {
    this.name = name;
    this.dhcp = dhcp;
    this.dns = dns;
    this.domainController = domainController;
    this.ip = null;
  }

  boot() {
    const leaseNum = this.dhcp.leaseAddress(this.name);
    this.ip = require('./dhcpServer').numberToIp(leaseNum);
  }

  resolve(hostname) {
    return this.dns.resolve(hostname);
  }

  logon(username, password) {
    return this.domainController.authenticate(username, password);
  }
}

module.exports = Client;
