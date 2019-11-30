// match only digits and return 'number' type
export const numberParser = str => parseInt(str.match(/\d/g).join(""));
