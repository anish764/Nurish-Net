const mongoose = require("mongoose");

const DietSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "User Id required"],
    },
    name: {
      type: String,
      required: [true, "Name required"],
    },
    img: {
      type: String,
      required: [true, "Image required"],
    },
    type: {
      type: String,
      required: [true, "Type required"],
    },
    protein: {
      type: Number,
      required: [true, "Protein required"],
    },
    fat: {
      type: Number,
      required: [true, "Fat required"],
    },
    carb: {
      type: Number,
      required: [true, "Carb required"],
    },
    calories: {
      type: Number,
      required: [true, "Calories required"],
    },
    url: {
      type: String,
      required: [true, "URL required"],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("diet", DietSchema);
