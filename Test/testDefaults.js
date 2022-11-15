let defaults = require("../defaults");

let testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham',
    villain : undefined
}
let defaultObject = {
    name: 'Bruce',
    age: 36,
    location: 'Gotham',
    superHero : 'IRON MAN',
    superVillain : 'Thanos'
}

console.log(defaults(testObject,defaultObject));
