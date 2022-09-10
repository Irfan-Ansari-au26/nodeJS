const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "", "lorem.txt"), "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

console.log("Hello...");

/// writing a file

const pathName = path.join(__dirname, "", "append.txt");

fs.writeFile(pathName, "Nice to meet you.", (err) => {
  if (err) throw err;
  console.log("Write completed successfully");
});

// append the file - modify the content and crate a file if doesn't exist'

fs.appendFile(pathName, "Testing text", (err) => {
  if (err) throw err;
  console.log("append finished successfully");
});

// Write and append the file

fs.writeFile("./newFile.txt", "Hello", (err) => {
  if (err) throw err;
  console.log("new file created successfully");

  fs.appendFile("./newFile.txt", "\n\nI am good.", (err) => {
    if (err) throw err;
    console.log("append finished successfully");
  });
});

// exit on uncaught error

process.on("uncaught error", (err) => {
  console.error("there was an uncaught error", err);
  process.exit(1);
});
