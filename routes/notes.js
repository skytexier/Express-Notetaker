const router = require("express").Router();
const uuid = require("uuid");
const { createNote, updateData } = require("../helpers/helpers.js");
const { notes } = require("../db/db.json");
const fs = require('fs');

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
})

// // GET "/api/notes" responds with all notes from the database
// router.get("/notes", (req, res) => {
//     fs.readFile("./db/db.json", (err, data) => {
//         err ? console.log(err) : res.json(JSON.parse(data));
//     res.end();
//     });
// });

router.post("/notes", (req, res) => {
  const { title, description, id } = req.body;
  let noteJSON = req.body;
  if (title && description && id) {
    const newPost = {
      title,
      description,
      id: uuid(),
    };
    const getNote = createNote(req.body, notes)
    res.json(dataNote);
  }

  // // Convert data into string
  // const postString = JSON.stringify(newPost);
  // fs.readFile('./db/db.json', 'utf8', (err, data) => {
  //     if (err){console.log(err)} else {
  //         const datafromFile = JSON.parse(data);
  //         datafromFile.push(newPost)
  //         fs.appendFile('./db/db.json', datafromFile, (err) => err ? console.log(err) : console.log("Post added"))
  //     }
  // })
  // }
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id

module.exports = router;
