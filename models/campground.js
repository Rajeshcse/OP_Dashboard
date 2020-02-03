var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
  team: String,
  couts1: String,
  couts2: String,
  couts3: String,
  couts4: String,
  couts5: String,
  couts6: String,
  couts7: String,
  couts8: String,
  couts9: String,
  couts10: String,
  couts11: String,
  couts12: String,
  couts13: String,
  couts14: String,
  couts15: String,
  couts16: String,
  couts17: String,
  couts18: String,
  couts19: String,
  couts20: String,
  couts21: String,
  couts22: String,
  couts23: String,
  couts24: String,
  couts25: String,
  couts26: String,
  couts27: String,
  couts28: String,
  couts29: String,
  couts30: String,
  couts31: String,
  couts32: String,
  couts33: String,
  couts34: String,
  couts35: String,
  couts36: String,
  couts37: String,
  couts38: String,
  couts39: String,

  P_Vol1: Number,
  P_Vol2: Number,
  P_Vol3: Number,
  P_Vol4: Number,
  P_Vol5: Number,
  P_Vol6: Number,
  P_Vol7: Number,
  P_Vol8: Number,
  P_Vol9: Number,
  P_Vol10: Number,
  P_Vol11: Number,
  P_Vol12: Number,
  P_Vol13: Number,
  P_Vol14: Number,
  P_Vol15: Number,
  P_Vol16: Number,
  P_Vol17: Number,
  P_Vol18: Number,
  P_Vol19: Number,
  P_Vol20: Number,
  P_Vol21: Number,
  P_Vol22: Number,
  P_Vol23: Number,
  P_Vol24: Number,
  P_Vol25: Number,
  P_Vol26: Number,
  P_Vol27: Number,
  P_Vol28: Number,
  P_Vol29: Number,
  P_Vol30: Number,
  P_Vol31: Number,
  P_Vol32: Number,
  P_Vol33: Number,
  P_Vol34: Number,
  P_Vol35: Number,
  P_Vol36: Number,
  P_Vol37: Number,
  P_Vol38: Number,
  P_Vol39: Number,

  P_HCount1: Number,
  P_HCount2: Number,
  P_HCount3: Number,
  P_HCount4: Number,
  P_HCount5: Number,
  P_HCount6: Number,
  P_HCount7: Number,
  P_HCount8: Number,
  P_HCount9: Number,
  P_HCount10: Number,
  P_HCount11: Number,
  P_HCount12: Number,
  P_HCount13: Number,
  P_HCount14: Number,
  P_HCount15: Number,
  P_HCount16: Number,
  P_HCount17: Number,
  P_HCount18: Number,
  P_HCount19: Number,
  P_HCount20: Number,
  P_HCount21: Number,
  P_HCount22: Number,
  P_HCount23: Number,
  P_HCount24: Number,
  P_HCount25: Number,
  P_HCount26: Number,
  P_HCount27: Number,
  P_HCount28: Number,
  P_HCount29: Number,
  P_HCount30: Number,
  P_HCount31: Number,
  P_HCount32: Number,
  P_HCount33: Number,
  P_HCount34: Number,
  P_HCount35: Number,
  P_HCount36: Number,
  P_HCount37: Number,
  P_HCount38: Number,
  P_HCount39: Number,

  A_Vol1: Number,
  A_Vol2: Number,
  A_Vol3: Number,
  A_Vol4: Number,
  A_Vol5: Number,
  A_Vol6: Number,
  A_Vol7: Number,
  A_Vol8: Number,
  A_Vol9: Number,
  A_Vol10: Number,
  A_Vol11: Number,
  A_Vol12: Number,
  A_Vol13: Number,
  A_Vol14: Number,
  A_Vol15: Number,
  A_Vol16: Number,
  A_Vol17: Number,
  A_Vol18: Number,
  A_Vol19: Number,
  A_Vol20: Number,
  A_Vol21: Number,
  A_Vol22: Number,
  A_Vol23: Number,
  A_Vol24: Number,
  A_Vol25: Number,
  A_Vol26: Number,
  A_Vol27: Number,
  A_Vol28: Number,
  A_Vol29: Number,
  A_Vol30: Number,
  A_Vol31: Number,
  A_Vol32: Number,
  A_Vol33: Number,
  A_Vol34: Number,
  A_Vol35: Number,
  A_Vol36: Number,
  A_Vol37: Number,
  A_Vol38: Number,
  A_Vol39: Number,

  A_HCount1: Number,
  A_HCount2: Number,
  A_HCount3: Number,
  A_HCount4: Number,
  A_HCount5: Number,
  A_HCount6: Number,
  A_HCount7: Number,
  A_HCount8: Number,
  A_HCount9: Number,
  A_HCount10: Number,
  A_HCount11: Number,
  A_HCount12: Number,
  A_HCount13: Number,
  A_HCount14: Number,
  A_HCount15: Number,
  A_HCount16: Number,
  A_HCount17: Number,
  A_HCount18: Number,
  A_HCount19: Number,
  A_HCount20: Number,
  A_HCount21: Number,
  A_HCount22: Number,
  A_HCount23: Number,
  A_HCount24: Number,
  A_HCount25: Number,
  A_HCount26: Number,
  A_HCount27: Number,
  A_HCount28: Number,
  A_HCount29: Number,
  A_HCount30: Number,
  A_HCount31: Number,
  A_HCount32: Number,
  A_HCount33: Number,
  A_HCount34: Number,
  A_HCount35: Number,
  A_HCount36: Number,
  A_HCount37: Number,
  A_HCount38: Number,
  A_HCount39: Number,

  accuracy1: Number,
  accuracy2: Number,
  accuracy3: Number,
  accuracy4: Number,
  accuracy5: Number,
  accuracy6: Number,
  accuracy7: Number,
  accuracy8: Number,
  accuracy9: Number,
  accuracy10: Number,
  accuracy11: Number,
  accuracy12: Number,
  accuracy13: Number,
  accuracy14: Number,
  accuracy15: Number,
  accuracy16: Number,
  accuracy17: Number,
  accuracy18: Number,
  accuracy19: Number,
  accuracy20: Number,
  accuracy21: Number,
  accuracy22: Number,
  accuracy23: Number,
  accuracy24: Number,
  accuracy25: Number,
  accuracy26: Number,
  accuracy27: Number,
  accuracy28: Number,
  accuracy29: Number,
  accuracy30: Number,
  accuracy31: Number,
  accuracy32: Number,

  created: { type: Date, default: Date },
  week: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Campground", campgroundSchema);
