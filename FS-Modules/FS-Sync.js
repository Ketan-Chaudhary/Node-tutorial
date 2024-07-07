// FS Sync Module
// FS Sync Module is used to read and write files in synchronous way.
// Synchronous way means that each operation blocks the execution of the next operation until it finishes.
// This is the simplest way to work with files.

// Importing the fs module
const fs = require("fs");

// Reading the file
// Syntax: fs.readFileSync(file, [options])
// file: It is the file name including the path.
// options: It is an object containing encoding and flag.
// encoding: It is the encoding of the file. Default is null.
// flag: It is the flag used to specify the file system flag. Default is 'r' for read.

const data = fs.readFileSync("./content/test.txt", "utf8");
console.log(data);

// Writing the file
// Syntax: fs.writeFileSync(file, data, [options])
// file: It is the file name including the path.
// data: It is the data to write to the file.
// options: It is an object containing encoding and flag.
// flag: It is the flag used to specify the file system flag. Default is 'w' for write.

fs.writeFileSync(
  "./content/test2.txt",
  `this file contains data of file test.txt : ${data}`
);

// Appending the file
fs.writeFileSync("./content/test2.txt", "This is appended data", { flag: "a" });

// Deleting the file
// Syntax: fs.unlinkSync(file)
// file: It is the file name including
// fs.unlinkSync('./content/test2.txt');
