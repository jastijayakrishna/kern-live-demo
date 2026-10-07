const assert = require('assert');
const clamp = require('./index.js');
assert.strictEqual(clamp(5, 0, 10), 5);
assert.strictEqual(clamp(-3, 0, 10), 0);
assert.strictEqual(clamp(99, 0, 10), 10);
assert.strictEqual(clamp('x', 0, 10), 0);
console.log('ok');
