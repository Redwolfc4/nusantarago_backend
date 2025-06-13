/**
 * Converts a string into a UUID format.
 * If the input string is less than 32 characters, it will be padded using simple hashing.
 * The string is processed to generate a 32-character hexadecimal representation,
 * which is then formatted into the UUID structure (8-4-4-4-12).
 *
 * @param {string} str - The input string to be converted to a UUID.
 * @returns {string} - The formatted UUID string.
 */

async function stringToUUID(str) {
  return Buffer.from(str).toString("base64url"); // base64url lebih aman untuk URL
}

/**
 * Converts a UUID string back into its original string.
 * This function is the reverse of `stringToUUID()`.
 *
 * @param {string} uuid - The UUID string to be converted back into its original string.
 * @returns {string} - The original string.
 */
async function uuidToString(encoded) {
  return Buffer.from(encoded, "base64url").toString("utf-8");
}

module.exports = {
  stringToUUID,
  uuidToString,
};
