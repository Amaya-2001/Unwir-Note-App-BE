const express = require("express");
const NoteController = require("../controller/noteController");
const noteRouter = express.Router();

//add note router
noteRouter.post("/create/note", NoteController.addNote);

//get notes
noteRouter.get("/get/notes", NoteController.getNotes);

//get single note
noteRouter.get("/get/note/:id", NoteController.getNote);

//update note
noteRouter.put("/update/note/:id", NoteController.updateNote);

//delete note
noteRouter.delete("/delete/note/:id", NoteController.deleteNote);

module.exports = noteRouter;
