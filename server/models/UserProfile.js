import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    trim: true,
  },
  designation: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: String,
    required: true,
  },
});

const data = mongoose.model("Profile", userSchema);
export default data;
