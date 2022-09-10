const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;
  const logItem = `\n${dateTime}\t${uuid()}\t${message}`;
  console.log(logItem);
  console.log(path.join(__dirname, "logs"));
  try {
    // Not working
    if (!fs.existsSync) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvents;
