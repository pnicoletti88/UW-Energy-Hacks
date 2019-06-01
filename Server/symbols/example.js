/* eslint-disable no-underscore-dangle */
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let User = null; // defintino needed to be used in functions, populated at end of file

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  daysAway: {
    type: [Date],
    default: [],
  },
  birthday: {
    type: Date,
    required: true,
  },
  numberOfCompletedTasks: {
    type: Number,
    default: 0,
  },
  numberOfMissedTasks: {
    type: Number,
    default: 0,
  },
  workSpaces: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  tokens: {
    type: [String],
    default: [],
  },
});

UserSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "assignedTo",
});

UserSchema.methods.toJSON = function toJSON() {
  const userObj = this.toObject();

  delete userObj.password;
  delete userObj.tokens;

  return userObj;
};

UserSchema.statics.findUserByCredentials = async (email, password) => {
  console.log(`e${email}`);
  const user = await User.findOne({ email });
  if (!user) {
    console.log("username");
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    console.log("pword");
    throw new Error("Unable to login");
  }

  return user;
};

// remeber that this function will return a promise - await needs to be used to get value
UserSchema.methods.generateAuthToken = async function () {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

  user.tokens.push(token);

  await user.save();

  return token;
};

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8); // also do one on the client side!
  }

  next();
});

User = mongoose.model("users", UserSchema);

module.exports = User;
