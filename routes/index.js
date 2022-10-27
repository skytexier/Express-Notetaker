const router = require("express").Router();
const path = require("path");

// GET route to index.html // All routes besides notes send to index.html
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

// GET route for notes
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

//Wild card route (fixed my issue with getting notes to display, didnt know you needed a seperate '/' for the route to work, otherwise it wouldnt direct me to /notes)
router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);
module.exports = router;
