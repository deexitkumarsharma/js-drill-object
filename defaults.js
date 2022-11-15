function defaults(object, defautPropperties) {
    for(let property in defautPropperties){
        if(object[property] === undefined){
            object[property] = defautPropperties[property];
        }
    }
    return object;
}

module.exports = defaults;