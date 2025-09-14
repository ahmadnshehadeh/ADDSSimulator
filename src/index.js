const DomainController = require('./domainController');
const DnsServer = require('./dnsServer');
const { DhcpServer } = require('./dhcpServer');
const Client = require('./client');

class Simulator {
  constructor() {
    this.dc = new DomainController('contoso.local');
    this.dns = new DnsServer();
    this.dhcp = new DhcpServer('192.168.1.10', '192.168.1.100');
  }

  addUser(username, password) {
    this.dc.addUser(username, password);
  }

  addHostRecord(hostname, ip) {
    this.dns.addRecord(hostname, ip);
  }

  createClient(name) {
    return new Client(name, this.dhcp, this.dns, this.dc);
  }
}

module.exports = Simulator;
