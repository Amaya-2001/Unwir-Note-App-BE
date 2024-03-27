const Note = require("../model/note");

class noteOperations {
  //create a note
  async createNote(data) {
    try {
      console.log("Umma kate mara wadeee");
      const newNote = await Note.create(data);
      console.log(newNote);
      return newNote;
    } catch (error) {
      console.log(error);
    }
  }

  //get all notes
  async getNotes() {
    try {
      const notes = await Note.find({});
      return notes;
    } catch (error) {
      console.log(error);
    }
  }

  //get a single note
  async getNote(id) {
    try {
      const note = await Note.findById({ _id: id });
      if (!note) {
        return "note not available";
      }
      return note;
    } catch (error) {
      console.log(error);
    }
  }

  //update a note
  async updateNote(id, data) {
    try {
      const noteUpdate = await Note.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!noteUpdate) {
        return "note not available";
      }
      return noteUpdate;
    } catch (error) {
      console.log(error);
    }
  }

  //delete an note by using the find by id and delete
  async deleteNote(id) {
    try {
      const note = await Note.findByIdAndDelete(id);
      if (!note) {
        return "note not available";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

//export the class
// export const noteOperations = new noteOperations();
module.exports = noteOperations;
