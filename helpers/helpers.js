const util = require("util");
// UUID for creating unique ID's
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

//Recreating functions to write and read data from in class work
const readFromFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.log(err) : console.info(`\nDataa written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, `utf8`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

function updateData (id, notesArr) {
  const deleteNote = id;
  for (let i = 0; i < notesArr.length; i++){
    if (deleteNote === notesArr[i].id) {
      notesArr.splice(i, 1);
      writeToFile(__dirname, "../db/db.json");
      JSON.stringify({notes: notesArr}, null, 2), err => {
        if (err) {
          console.log(err)
        }
      }

    }
  }
};

function createNote(body, notesArr) {
  const newNote = body;
  notesArr.push(newNote);
  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArr }, null, 2)
  );
  return newNote;
}

module.exports = {  createNote, updateData };
