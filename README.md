# ADDSSimulator

Minimal Node.js proof-of-concept for a Microsoft Active Directory Domain Services simulator. It models three core infrastructure components:

- **Domain Controller** – stores users and authenticates credentials.
- **DNS Server** – resolves host names to IP addresses.
- **DHCP Server** – leases IP addresses to clients.

A simple `Simulator` class wires these services together and exposes methods for creating users and clients. The accompanying test demonstrates a client receiving an IP address via DHCP, resolving a DNS record, and authenticating against the domain controller.

## Development

```bash
npm test
```

Running the test executes `test.js`, which exercises the simulator and prints **All tests passed** on success.
