const noteOperations = require("../service/noteService");
const Note = require("../model/note");
const noteObj = new noteOperations();

//add note controller
exports.addNote = async (req, res) => {
  //note data to be saved in database
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
    };

    const note = await noteObj.createNote(data);
    res.status(201).send(note);
  } catch (error) {
    res.status(404).json({ message: "Can not create a new note!" });
  }
};

//get all notes
exports.getNotes = async (req, res) => {
  const notes = await noteObj.getNotes();
  res.send(notes);
};

//get a single note
exports.getNote = async (req, res) => {
  //get id from the parameter
  const id = req.params.id;
  const note = await noteObj.getNote(id);
  res.send(note);
};

//update note
exports.updateNote = async (req, res) => {
  const id = req.params.id;
  const note = await noteObj.updateNote(id, req.body);
  res.send(note);
};

//delete note
exports.deleteNote = async (req, res) => {
  const id = req.params.id;
  await noteObj.deleteNote(id);
  res.send("note deleted");
};
