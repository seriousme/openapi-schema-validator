# Real world tests

This folder contains `readworld.js` that tests real world API's from https://apis.guru/.
It only tests the latest versions of those API's hence the number of tests is lower than the full number of tests.

The script errors on these into account via [`failed.json`](failed.json). The [`failed.md`](failed.md) contains a human readable report, including relevant links and snippets of the errors in `failed.json`.

Once the script completes it creates a `failed.update.json` which you can diff with `failed.json`.
It also creates a `failed.update.md`.

You can run the script via:
```bash
npm run realWorldTest
npm run realWorldTestAll
npm run realWorldTestFailed
npm run realWorldTestCI
```
- `realWorldTest` takes a random sample from the set of APIs
- `realWorldTestAll` tests all available APIs
- `realworldTestFailed` only tests the APIs listed in failed.json
- `realworldTestCI` tests all available APIs and overwrites `failed.json` and `failed.md`




