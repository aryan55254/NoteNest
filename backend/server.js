const router = require("express").Router();
const Note = require("../models/note.model");

// GET all notes
router.get("/", (req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json("error: " + err));
});

// POST a new note
router.post("/add", (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  newNote
    .save()
    .then(() => res.json("Note added!"))
    .catch((err) => res.status(400).json("error: " + err));
});


/*
// --- TEMPORARILY COMMENTED OUT FOR DEBUGGING ---

// GET a specific note by ID
router.get("/:id", (req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json("error: " + err));
});

// DELETE a specific note by ID
router.delete("/:id", (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("Note deleted."))
    .catch((err) => res.status(400).json("error: " + err));
});

// POST to update a specific note by ID
router.post("/update/:id", (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      note.title = req.body.title;
      note.content = req.body.content;

      note
        .save()
        .then(() => res.json("Note updated!"))
        .catch((err) => res.status(400).json("error: " + err));
    })
    .catch((err) => res.status(400).json("error: " + err));
});

*/


module.exports = router;