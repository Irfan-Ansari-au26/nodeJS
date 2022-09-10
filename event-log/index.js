const logEevents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initializes the object
const myEmitter = new MyEmitter();

// add listener for  the log events
myEmitter.on("log", (msg) => logEevents(msg));

setTimeout(() => {
  //Emiit Event
  myEmitter.emit("log", "log event emitted");
}, 2000);
