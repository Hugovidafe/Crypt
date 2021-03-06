'use strict';

const crypto = require('crypto');
const { isObject } = require('util');

/**
 * Easy encryption and decryption.
 * @param {string} algorithm Algorithm to use at the encryptation.
 * @param {string} password Password for use at the encryptation.
 * 
 * @author Created by arsandev (Upgraded by Hugovidafe)
 * @copyright https://www.npmjs.com/package/json-encrypt
 * @license http://opensource.org/licenses/MIT
 */

class Crypt {
	constructor(algorithm, password) {
		this.algorithm = algorithm;
		this.password = password;
	}

	/**
	 * Encrypt data.
	 * @param {object} toEncrypt Object to encrypt.
	 * @returns {string} Returns the object encrypted.
	 */

	encrypt(toEncrypt) {
		const text = toEncrypt !== null && typeof toEncrypt === 'object'? JSON.stringify(toEncrypt): toEncrypt;
		const cipher = crypto.createCipher(this.algorithm, this.password)
		var crypted = cipher.update(text, 'utf8', 'hex')
		crypted += cipher.final('hex')
		return crypted
	}

	/**
	 * Decrypt data.
	 * @param {string} toDecrypt Object to decrypt.
	 * @returns {object} Returns the object decrypted.
	 */

	decrypt(toDecrypt) {
		const decipher = crypto.createDecipher(this.algorithm, this.password)
		var dec = decipher.update(toDecrypt, 'hex', 'utf8')
		dec += decipher.final('utf8')
		return dec
	}
}

module.exports = Crypt;