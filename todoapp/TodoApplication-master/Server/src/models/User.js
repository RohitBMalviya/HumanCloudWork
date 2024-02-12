import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },
  otp: {
    code: {
      type: String,
      default: null,
    },
    expiresAt: {
      type: Date,
      default: null,
    },
  },
  email: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
  data: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
