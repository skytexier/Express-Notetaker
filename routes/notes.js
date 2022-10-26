const notesrouter = require('express').Router();
const {notes} = require('../db/db.json');

const util = require('util');
// UUID for creating unique ID's
const uuid = require('uuid');
const fs = require('fs')

//Recreating functions to write and read data from in class work
const readFromFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const writeToFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
        err ? console.log(err) : console.info(`\nDataa written to ${destination}`));

const readAndAppend = (content, file) => {
    fs.readFile(file, `utf8`, (err, data) => {
        if (err) {console.log(err)
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData)
        } 
    });
};

//Get Route for notes
notesrouter.get('/notes', (req, res) => {
    readFromFile('./db/db.json', (err, data) => {
        err? console.log(err) :  res.json(JSON.parse(data));
    });
});

//POST Notes
notesrouter.post("/notes", (req, res) => {
    const {name, note, id} = req.body
    req.body.id = uuid();
    
    readAndAppend(data, '../db/db.json');

    res.json(response);
    
})

module.exports = notesrouter;