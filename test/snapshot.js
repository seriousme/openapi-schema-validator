// simple snapshot handling utility for testing, nothing fancy

import { readFileSync, writeFileSync } from "fs";

export class Snapshot {
	/**
	 * @param {string} fileName file that contains the snapshot data
	 * @param {boolean} [update] update the snapshot file if true
	 */
	constructor(fileName, update) {
		this.fileName = fileName;
		this.update = update;
	}

	/**
	 * @param {*} data data to compare to the snapshot
	 * @param {string} label label to use for the snapshot
	 * @returns {boolean}
	 */
	match(data, label) {
		const snapshotData = this._load();
		if (this.update) {
			snapshotData[label] = data;
			writeFileSync(this.fileName, JSON.stringify(snapshotData, null, 2));
		}
		return snapshotData[label] === data;
	}

	_load() {
		try {
			return JSON.parse(readFileSync(this.fileName));
		} catch (e) {
			return {};
		}
	}
}
