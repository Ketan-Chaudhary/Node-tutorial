// Path module is used to work with file paths. It provides utilities for working with file and directory paths.

// Example
const path = require("path");

// Separator method is used to get the platform-specific file path separator.
console.log(path.sep);

// Join method is used to join two or more parts of a path.
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// Base name method is used to get the last portion of a path.
const base = path.basename(filePath);
console.log(base);

// Resolve method is used to resolve a sequence of paths or path segments into an absolute path.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
