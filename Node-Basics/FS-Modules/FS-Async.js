// FS Async Module
// FS Async Module is used to read and write files in asynchronous way.
// Asynchronous way means that each operation does not block the execution of the next operation.
// This is the most efficient way to work with files.

// Importing the fs module
const fs = require("fs");

// Reading the file
// Syntax: fs.readFile(file, [options], callback)
// file: It is the file name including the path.
// options: It is an object containing encoding and flag.
// encoding: It is the encoding of the file. Default is null.
// flag: It is the flag used to specify the file system flag. Default is 'r' for read.
// callback: It is a function that is called after reading the file. It takes two arguments: error and data.

fs.readFile("./content/test.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// Writing the file
// Syntax: fs.writeFile(file, data, [options], callback)
// file: It is the file name including the path.
// data: It is the data to write to the file.
// options: It is an object containing encoding and flag.
// flag: It is the flag used to specify the file system flag. Default is 'w' for write.
// callback: It is a function that is called after writing the file. It takes one argument: error.

fs.writeFile(
  "./content/test2.txt",
  `this file contains data to be written`,
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File written successfully");
  }
);

// Deleting the file
// Syntax: fs.unlink(file, callback)
// file: It is the file name including the path.
// callback: It is a function that is called after deleting the file. It takes one argument: error.

// fs.unlink("./content/test2.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File deleted successfully");
// });
