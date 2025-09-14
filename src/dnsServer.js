class DnsServer {
  constructor() {
    this.records = new Map();
  }

  addRecord(hostname, ip) {
    this.records.set(hostname, ip);
  }

  resolve(hostname) {
    return this.records.get(hostname) || null;
  }
}

module.exports = DnsServer;
