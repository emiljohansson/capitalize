'use strict';

/**
 * Validates `string` is a string.
 *
 * @param  {*}  string
 * @return {boolean}
 */
function isString(string) {
    return typeof string === 'string' && string.length > 0;
}

/**
 * Iterates each word in the `array`, capitalize them and returns a new array.
 *
 * @param  {Array} array
 * @return {Array}
 */
function capitalizeArray(array) {
    return array
        .map(word => {
            if (!isString(word)) {
                return word;
            };
            return word[0].toUpperCase() + word.slice(1);
        });
}

/**
 * Iterates each word in the `string`, capitalize them and merge it back to a string.
 *
 * @param  {string} string
 * @return {string}
 */
function capitalizeString(string) {
    const array = string.split(' ');
    return capitalizeArray(array).join(' ');
}

/**
 * Capitalize each word in a string or array.
 *
 * @param  {string || Array} words
 * @return {string || Array}
 */
function capitalize(words) {
    if (isString(words)) {
        return capitalizeString(words);
    }
    if (Array.isArray(words)) {
        return capitalizeArray(words);
    }
    return words;
}

module.exports = capitalize;
