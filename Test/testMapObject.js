const mapObject = require("../mapObject");

const cb = argument =>{
    if(typeof argument === 'string'){
        return (argument+' '+ 'HEY');
    }
}

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
}

console.log(mapObject(testObject,cb));