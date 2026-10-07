# kern-live-demo

Live demonstration of **Kern** — admission control for AI-written code — by Jaya Krishna J.

An AI agent proposes a change to `index.js`. Kern independently verifies the exact
commit (tests, change contract, capability diff), signs an in-toto attestation, and a
GitHub required check (`kern-verified`) re-verifies that proof against the pull request.

- Valid Kern proof -> `kern-verified` passes -> the PR can merge.
- Tampered or missing proof -> `kern-verified` fails -> merge is blocked.

The sample module `clamp(value, min, max)` and its tests are intentionally tiny so the
gate runs in seconds. The point of this repo is the gate, not the module.
