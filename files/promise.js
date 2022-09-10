const fs = require("fs");
const fsPromises = require("fs").promises;

// fs.unlink to delete the files

const fileOps = async () => {
  try {
    await fsPromises.writeFile("./newFile.txt", "helllo , creating a new file");
    const data = await fsPromises.readFile("./newFile.txt", "utf-8");
    console.log(data, "reading the new file");
    await fsPromises.writeFile("./newFile.txt", data);
    await fsPromises.appendFile(
      "./newFile.txt",
      "\n\n Nice to meet you again, appending to new file"
    );
    await fsPromises.rename("./newFile.txt", "./newRenamedFile.txt", () => {
      console.log("renaming the new file");
    });
    const newData = await fsPromises.readFile("./newRenamedFile.txt", "utf-8");
    console.log(newData, "reading the renamed file");
  } catch (error) {
    console.error(error);
  }
};

fileOps();
