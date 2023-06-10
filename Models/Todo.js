import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  title: String,
  status: {
    type: Boolean,
    default: false,
  },
  dueDate: Date,
});
export default mongoose.model("Todo", todoSchema, "todos");
