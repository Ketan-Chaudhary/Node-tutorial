// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// require is used to import moudules in CommonJS
// but now we are using ES6 modules so we use import instead of require
// and export instead of module.exports
// but we can still use require and module.exports in ES6 modules

const sayHello = require("./ModuleFunction");
const data = require("./Data");

// import * as data from "./Data.js";
// import sayHello from "./ModuleFunction.js";

// to use import and export in node.js we need to add "type": "module" in package.json

console.log(data);
sayHello(data.John);
sayHello(data.Peter);
