import aes from "crypto-js/aes";
import { enc } from "crypto-js/core";

/**
 * Encrypt text with key. Uses AES encryption.
 *
 * @param text plaintext to encrypt
 * @param key secret key used for encryption
 */
export function encrypt(text, key) {
    return aes.encrypt(text, key).toString()
}

/**
 * Decrypt text with key. Uses AES encryption.
 *
 * @param text cipher text to decrypt
 * @param key secret key used for decryption
 */
export function decrypt(text, key) {
    return aes.decrypt(text, key).toString(enc.Utf8)
}