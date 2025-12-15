const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
  title: String,
  steps: [String],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

module.exports = mongoose.model("Guide", guideSchema);
