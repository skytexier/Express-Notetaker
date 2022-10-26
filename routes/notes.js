const notes = require('express').Router();

//Get Route for notes
notes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './routes/notes.html'))
    console.info(`${req.methtod} request recieved for note addition!`);

});

// Post Route for new note
notes.post('/', (req, res) =>{

})

module.exports = notes;