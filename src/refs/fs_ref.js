//File System

const fs = require("fs");
const path = require("path");

console.log("=== fs ===");

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw err;

//   console.log("folder was created");
// });

console.log("dirname ===>", __dirname);
fs.writeFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "hellow world !",
  (err) => {
    if (err) throw err;
    console.log("file was created!");
  }
);

console.log("dirname ===>", __dirname);
fs.writeFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "hellow world 12213!",
  (err) => {
    if (err) throw err;
    console.log("file was created!");

    fs.appendFile(
      path.join(__dirname, "notes", "mynotes.txt"),
      " From append file",
      (err) => {
        if (err) throw err;
        console.log("file was updated !");
      }
    );
  }
);
