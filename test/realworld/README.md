# Real world tests

This folder contains `readworld.js` that can test about 2300 real world API's from https://apis.guru/, about 7 of those have known issues. The script takes these into account via `failed.json`.

Once the script completes it creates a `failed.update.json` which you can diff with `failed.json`.
It also creates a `failed.update.md` that contains a human readable report, including relevant links and snippets.

You can run the script via:
```bash
npm run realWorldTest
npm run realWorldTestAll
npm run realWorldTestFailed
```
- `realWorldTest` takes a random sample from the set of APIs
- `realWorldTestAll` tests all available APIs
- `realworldTestFailed` only tests the APIs listed in failed.json




