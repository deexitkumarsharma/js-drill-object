function pairs(object) {
    let keyValue = [];

    for (let keys in object) {
        let pair = [keys,object[keys]];
        keyValue.push(pair);
    }

    return keyValue;
}

module.exports = pairs;