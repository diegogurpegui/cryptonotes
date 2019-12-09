const crypto = require('crypto')
const config = require('../config')

module.exports = function () {
    let module = {}

    /**
     * Encrypt content based on a key.
     * Optionally define the encryption algorithm.
     * @param {string} content 
     * @param {string} key 
     * @param {string} algorithm 
     * @param {string} outputEncoding 
     */
    module.encrypt = function (content, key, algorithm = config.algorithm, outputEncoding = config.encrypt_encoding) {
        // process the key
        let preparedKey = prepareKey(key)
        // create the cipher
        let cipher = crypto.createCipheriv(algorithm, preparedKey.encodedKey, preparedKey.iv)

        // encrypt the data from "utf8" input to (configurable) output
        let encryptedData = cipher.update(content, 'utf8', outputEncoding)
        encryptedData += cipher.final(outputEncoding)
        return encryptedData
    }

    /**
     * Decrypt content based on a key.
     * Optionally define the decryption algorithm.
     * @param {string} content 
     * @param {string} key 
     * @param {string} algorithm 
     * @param {string} inputEncoding 
     */
    module.decrypt = function (content, key, algorithm = config.algorithm, inputEncoding = config.encrypt_encoding) {
        // process the key
        let preparedKey = prepareKey(key)
        // create the decipher
        var decipher = crypto.createDecipheriv(algorithm, preparedKey.encodedKey, preparedKey.iv)

        var decryptedData = decipher.update(content, inputEncoding, 'utf8')
        decryptedData += decipher.final('utf8')
        return decryptedData
    }

    /**
     * Prepares the Key (password) and generates the encoded key and IV
     * @param {string} key
     */
    function prepareKey(key) {
        // encode the key (password)
        let encodedKey = crypto.createHash("sha256").update(key, "utf8").digest();
        // create the IV from the key (take the first 16 bytes)
        let iv = encodedKey.slice(0, 16)

        // console.log("Encoded pass: " + encodedKey.toString('hex'))
        // console.log("IV: " + iv.toString('hex'))
        return {
            iv: iv,
            encodedKey: encodedKey
        }
    }

    return module
}

