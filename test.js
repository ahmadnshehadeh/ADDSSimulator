const assert = require('assert');
const Simulator = require('./src/index');

const sim = new Simulator();
sim.addUser('alice', 'password123');
sim.addHostRecord('dc1.contoso.local', '192.168.1.10');

const client = sim.createClient('CLIENT1');
client.boot();

assert.strictEqual(client.ip, '192.168.1.10');
assert.strictEqual(client.resolve('dc1.contoso.local'), '192.168.1.10');
assert.strictEqual(client.logon('alice', 'password123'), true);
assert.strictEqual(client.logon('alice', 'wrong'), false);

console.log('All tests passed');
