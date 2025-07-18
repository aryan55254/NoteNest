const router = require("express").Router();
const Note = require("../models/note.model");

//get all notes 
router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json("error: " + err));
});
//add notes 
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const newNote = new Note({
    title,
    content,
  });

  newNote
    .save()
    .then(() => res.json("note added"))
    .catch((err) => res.status(400).json("error : " + err));
});
//get specific note 
router.route("/:id").get((req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json("error: " + err));
});
//delete notes by id 
router.route("/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("note deleted"))
    .catch((err) => res.status(400).json("error: " + err));
});
//update note by id
router.route("/update/:id").post((req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      note.title = req.body.title;
      note.content = req.body.content;

      note
        .save()
        .then(() => res.json("note updated"))
        .catch((err) => res.status(400).json("error : " + err));
    })
    .catch((err) => res.status(400).json("error :" + err));
});

module.exports = router;
