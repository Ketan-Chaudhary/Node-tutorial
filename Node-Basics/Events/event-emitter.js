const EventEmitter = require("events");
// creating a custom class that extends EventEmitter
const customEmitter = new EventEmitter();

// on: listen for an event
// emit: emit an event

customEmitter.on("response", () => {
  console.log("data received");
});
customEmitter.on("response", () => {
  console.log("other logic here");
});
// order matters
customEmitter.emit("response");

// passing arguments
customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id:${id}`);
});

customEmitter.emit("response", "john", 34);
