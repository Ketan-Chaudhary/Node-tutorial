// Stream module
// Stream module is used to read and write data from the streams. It is an abstract interface for working with streaming data in Node.js. Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
// There are four types of streams in Node.js:
// Readable: Stream which is used for read operation.
// Writable: Stream which is used for write operation.
// Duplex: Stream which can be used for both read and write operation.
// Transform: A type of duplex stream where the output is computed based on input.
// Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are:
// data: This event is fired when there is data is available to read.
// end: This event is fired when there is no more data to read.
// error: This event is fired when there is any error receiving or writing data.

// Default size of stream is 16kb

const { createReadStream } = require("fs");
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000});
const stream = createReadStream("./content/big.txt", { encoding: "utf8" });

// const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
