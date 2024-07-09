// OS module is used to interact with the operating system and server.
// It provides a lot of useful methods to interact with the file system, networking, and other OS tasks.

const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  realease: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
