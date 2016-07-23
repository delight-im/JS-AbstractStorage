/*
 * JS-AbstractStorage (https://github.com/delight-im/JS-AbstractStorage)
 * Copyright (c) delight.im (https://www.delight.im/)
 * Licensed under the MIT License (https://opensource.org/licenses/MIT)
 */

"use strict";

/**
 * Flexible data storage for JavaScript backed by the Web Storage API
 *
 * @param {Storage} [storageProvider] - the optional storage provider to use
 * @constructor
 */
function AbstractStorage(storageProvider) {

	/**
	 * The storage provider backing this instance
	 *
	 * @type {Storage}
	 * @private
	 */
	this._storageProvider = storageProvider || window.localStorage || window.sessionStorage;

}

/**
 * Inserts or updates the specified key in the storage so that it has the given value
 *
 * Saving a value may fail if the client uses outdated software, the user is in private mode or the storage is full
 *
 * @param {string} key - the key to insert or update the value for
 * @param {string} value - the value to insert or update
 * @return {boolean} whether the value has been saved successfully or not
 */
AbstractStorage.prototype.setString = function (key, value) {
	try {
		this._storageProvider.setItem(key, value);

		return true;
	}
	catch (e) {
		return false;
	}
};

/**
 * Retrieves the value with the specified key from the storage
 *
 * If the given key does not exist, the supplied default value or `null` will be returned
 *
 * Loading a value from storage may fail if the client uses outdated software or the user is in private mode
 *
 * @param {string} key - the key to retrieve the value for
 * @param {string} [defaultValue] - the optional default value to return
 * @return {string|null} the value (if found) and otherwise the default value (if defined) or `null`
 */
AbstractStorage.prototype.getString = function (key, defaultValue) {
	defaultValue = defaultValue || null;

	try {
		var value = this._storageProvider.getItem(key);

		if (value === null) {
			return defaultValue;
		}
		else {
			return value;
		}
	}
	catch (e) {
		return defaultValue;
	}
};

/**
 * Inserts or updates the specified key in the storage so that it has the given value
 *
 * Saving a value may fail if the client uses outdated software, the user is in private mode or the storage is full
 *
 * @param {string} key - the key to insert or update the value for
 * @param {object} value - the value to insert or update
 * @return {boolean} whether the value has been saved successfully or not
 */
AbstractStorage.prototype.setObject = function (key, value) {
	return this.setString(key, JSON.stringify(value));
};

/**
 * Retrieves the value with the specified key from the storage
 *
 * If the given key does not exist, the supplied default value or `null` will be returned
 *
 * Loading a value from storage may fail if the client uses outdated software or the user is in private mode
 *
 * @param {string} key - the key to retrieve the value for
 * @param {object} [defaultValue] - the optional default value to return
 * @return {object|null} the value (if found) and otherwise the default value (if defined) or `null`
 */
AbstractStorage.prototype.getObject = function (key, defaultValue) {
	defaultValue = defaultValue || null;

	var value = this.getString(key);

	if (value === null) {
		return defaultValue;
	}

	try {
		return JSON.parse(value);
	}
	catch (e) {
		return defaultValue;
	}
};

/**
 * Removes the value with the specified key from the storage
 *
 * @param {string} key - the key to remove
 * @return {boolean} whether the entry has been removed successfully or not
 */
AbstractStorage.prototype.remove = function (key) {
	try {
		this._storageProvider.removeItem(key);

		return true;
	}
	catch (e) {
		return false;
	}
};

/**
 * Returns the number of values currently saved in the storage
 *
 * @return {number} the number of values
 */
AbstractStorage.prototype.count = function () {
	return this._storageProvider.length;
};

/**
 * Removes all values from the storage
 *
 * @return {boolean} whether all entries have been removed successfully or not
 */
AbstractStorage.prototype.clear = function () {
	try {
		this._storageProvider.clear();

		return true;
	}
	catch (e) {
		return false;
	}
};
