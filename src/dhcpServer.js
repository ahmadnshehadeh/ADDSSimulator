function ipToNumber(ip) {
  return ip.split('.').reduce((acc, oct) => (acc << 8) + Number(oct), 0);
}

function numberToIp(num) {
  return [24, 16, 8, 0].map(shift => (num >> shift) & 255).join('.');
}

class DhcpServer {
  constructor(startIp, endIp) {
    this.start = ipToNumber(startIp);
    this.end = ipToNumber(endIp);
    this.leases = new Map(); // client -> ip number
  }

  leaseAddress(clientId) {
    if (this.leases.has(clientId)) {
      return this.leases.get(clientId);
    }
    for (let ipNum = this.start; ipNum <= this.end; ipNum++) {
      if (![...this.leases.values()].includes(ipNum)) {
        this.leases.set(clientId, ipNum);
        return ipNum;
      }
    }
    throw new Error('No available IP addresses');
  }

  getLease(clientId) {
    const num = this.leases.get(clientId);
    return num ? numberToIp(num) : null;
  }
}

module.exports = { DhcpServer, ipToNumber, numberToIp };
