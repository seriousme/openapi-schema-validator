# Real world tests

This folder contains `readworld.js` that tests about 2300 real world API's from https://apis.guru/, about 20 of those have known issues. The script takes these into account via `failed.json`.

Once the script completes it creates a `failed.update.json` which you can diff with `failed.json`.

