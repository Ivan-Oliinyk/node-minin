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
  "hellow world1 !",
  (err) => {
    if (err) throw err;
    console.log("file was created1!");
  }
);

console.log("dirname ===>", __dirname);

fs.writeFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "hellow world 2!",
  (err) => {
    if (err) throw err;
    console.log("file was created2!");
  }
);

fs.appendFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  " From append file",
  (err) => {
    if (err) throw err;
    console.log("file was updated !");
  }
);

fs.readFile(path.join(__dirname, "notes", "mynotes.txt"), (err, data) => {
  if (err) throw err;

  console.log("data readFile ===> ", Buffer.from(data).toString());
});

fs.rename(
  path.join(__dirname, "notes", "mynotes.txt"),
  path.join(__dirname, "notes", "notes.txt"),
  (err) => {
    if (err) throw err;

    console.log("file was rename");
  }
);
