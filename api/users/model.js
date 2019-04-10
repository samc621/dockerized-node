import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone_number: Number
});

export default mongoose.model("User", userSchema);
