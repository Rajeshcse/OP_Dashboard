var mongoose = require("mongoose");

var sjoItbSchema = new mongoose.Schema({
  team: String,
  sjoItbcouts1: String,
  sjoItbcouts2: String,
  sjoItbcouts3: String,
  sjoItbcouts4: String,
  sjoItbcouts5: String,
  sjoItbcouts6: String,
  sjoItbcouts7: String,
  sjoItbcouts8: String,
  sjoItbcouts9: String,
  sjoItbcouts10: String,
  sjoItbcouts11: String,
  sjoItbcouts12: String,
  sjoItb1: Number,
  sjoItb2: Number,
  sjoItb3: Number,
  sjoItb4: Number,
  sjoItb5: Number,
  sjoItb6: Number,
  sjoItb7: Number,
  sjoItb8: Number,
  sjoItb9: Number,
  sjoItb10: Number,
  sjoItb11: Number,
  sjoItb12: Number,
  sjoItb12: Number,
  sjoItb13: Number,
  sjoItb14: Number,
  sjoItb15: Number,
  sjoItb16: Number,
  sjoItb17: Number,
  sjoItb18: Number,
  sjoItb19: Number,
  sjoItb20: Number,
  sjoItb21: Number,
  sjoItb22: Number,
  sjoItb23: Number,
  sjoItb24: Number,
  sjoItb25: Number,
  sjoItb26: Number,
  sjoItb27: Number,
  sjoItb28: Number,
  sjoItb29: Number,
  sjoItb30: Number,

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

  A_CPH1: Number,
  A_CPH2: Number,
  A_CPH3: Number,
  A_CPH4: Number,
  A_CPH5: Number,
  A_CPH6: Number,
  A_CPH7: Number,
  A_CPH8: Number,
  A_CPH9: Number,
  A_CPH10: Number,
  A_CPH11: Number,
  A_CPH12: Number,
  A_CPH13: Number,
  A_CPH14: Number,
  A_CPH15: Number,
  A_CPH16: Number,
  A_CPH17: Number,
  A_CPH18: Number,
  A_CPH19: Number,
  A_CPH20: Number,
  A_CPH21: Number,
  A_CPH22: Number,
  A_CPH23: Number,
  A_CPH24: Number,
  A_CPH25: Number,
  A_CPH26: Number,
  A_CPH27: Number,
  A_CPH28: Number,
  A_CPH29: Number,
  A_CPH30: Number,
  A_CPH31: Number,
  A_CPH32: Number,

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

module.exports = mongoose.model("sjoItb", sjoItbSchema);
