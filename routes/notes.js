const router = require("express").Router();
//Calling in helper functions
const helper = require("../helpers/helpers.js");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", (req, res) => {
  helper
    .getNote()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// POST "/api/notes" route to append our notes to the db
router.post("/notes", (req, res) => {
  helper
    .createNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

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
// });

// DELETE "/api/notes" deletes the note with an id equal to req.params.id

module.exports = router;
