const mongoose = require("mongoose");
// const joi = require("joi");

// // //validation schema
// export const NoteSchemeValidate = Joi.object({
//   title: Joi.string().required(),
//   description: Joi.string().required(),
// });

const noteScheme = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },
});

//creating a model
module.exports = mongoose.model("Note", noteScheme, "notes");
