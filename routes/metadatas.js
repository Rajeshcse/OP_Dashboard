var express = require("express");
var router = express.Router();
var metadata = require("../models/metadata");
var middleware = require("../middleware");

//INDEX - show all campgrounds
router.get("/", function(req, res) {
  // Get all campgrounds from DB
  metadata.find({}, function(err, allmetadata) {
    if (err) {
      console.log(err);
    } else {
      res.render("metadata/index", { metadata: allmetadata });
    }
  });
});

// metadata routes here
router.get("/metadatacreate", middleware.isLoggedIn, function(req, res) {
  metadata.find({}, function(err, allmetadata) {
    if (err) {
      console.log(err);
    } else {
      console.log(allmetadata);
      res.render("metadata/metadatacreate", { metadata: allmetadata });
    }
  });
});

router.post("/", function(req, res) {
  // get data from form and add to campgrounds array

  var team = req.body.team;
  var week = req.body.week;

  var accuracy1 = req.body.accuracy1,
    accuracy2 = req.body.accuracy2,
    accuracy3 = req.body.accuracy3,
    accuracy4 = req.body.accuracy4,
    accuracy5 = req.body.accuracy5,
    accuracy6 = req.body.accuracy6,
    accuracy7 = req.body.accuracy7,
    accuracy8 = req.body.accuracy8,
    accuracy9 = req.body.accuracy9,
    accuracy10 = req.body.accuracy10,
    accuracy11 = req.body.accuracy11,
    accuracy12 = req.body.accuracy12,
    accuracy13 = req.body.accuracy13,
    accuracy14 = req.body.accuracy14,
    accuracy15 = req.body.accuracy15,
    accuracy16 = req.body.accuracy16,
    accuracy17 = req.body.accuracy17,
    accuracy18 = req.body.accuracy18,
    accuracy19 = req.body.accuracy19,
    accuracy20 = req.body.accuracy20,
    accuracy21 = req.body.accuracy21,
    accuracy22 = req.body.accuracy22,
    accuracy23 = req.body.accuracy23,
    accuracy24 = req.body.accuracy24,
    accuracy25 = req.body.accuracy25,
    accuracy26 = req.body.accuracy26,
    accuracy27 = req.body.accuracy27,
    accuracy28 = req.body.accuracy28,
    accuracy29 = req.body.accuracy29,
    accuracy30 = req.body.accuracy30,
    accuracy31 = req.body.accuracy31,
    accuracy32 = req.body.accuracy32;

  var Planned_v1 = req.body.Planned_v1,
    Planned_v2 = req.body.Planned_v2,
    Planned_v3 = req.body.Planned_v3,
    Planned_v4 = req.body.Planned_v4,
    Planned_v5 = req.body.Planned_v5,
    Planned_v6 = req.body.Planned_v6,
    Planned_v7 = req.body.Planned_v7,
    Planned_v8 = req.body.Planned_v8,
    Planned_v9 = req.body.Planned_v9,
    Planned_v10 = req.body.Planned_v10,
    Planned_v11 = req.body.Planned_v11,
    Planned_v12 = req.body.Planned_v12,
    Planned_v13 = req.body.Planned_v13,
    Planned_v14 = req.body.Planned_v14,
    Planned_v15 = req.body.Planned_v15,
    Planned_v16 = req.body.Planned_v16,
    Planned_v17 = req.body.Planned_v17,
    Planned_v18 = req.body.Planned_v18,
    Planned_v19 = req.body.Planned_v19,
    Planned_v20 = req.body.Planned_v20,
    Planned_v21 = req.body.Planned_v21,
    Planned_v22 = req.body.Planned_v22,
    Planned_v23 = req.body.Planned_v23,
    Planned_v24 = req.body.Planned_v24,
    Planned_v25 = req.body.Planned_v25,
    Planned_v26 = req.body.Planned_v26,
    Planned_v27 = req.body.Planned_v27,
    Planned_v28 = req.body.Planned_v28,
    Planned_v29 = req.body.Planned_v29,
    Planned_v30 = req.body.Planned_v30,
    Planned_v31 = req.body.Planned_v31,
    Planned_v32 = req.body.Planned_v32,
    Planned_v33 = req.body.Planned_v33,
    Planned_v34 = req.body.Planned_v34,
    Planned_v35 = req.body.Planned_v35,
    Planned_v36 = req.body.Planned_v36,
    Planned_v37 = req.body.Planned_v37,
    Planned_v38 = req.body.Planned_v38,
    Planned_v39 = req.body.Planned_v39;

  var Planned_hc1 = req.body.Planned_hc1,
    Planned_hc2 = req.body.Planned_hc2,
    Planned_hc3 = req.body.Planned_hc3,
    Planned_hc4 = req.body.Planned_hc4,
    Planned_hc5 = req.body.Planned_hc5,
    Planned_hc6 = req.body.Planned_hc6,
    Planned_hc7 = req.body.Planned_hc7,
    Planned_hc8 = req.body.Planned_hc8,
    Planned_hc9 = req.body.Planned_hc9,
    Planned_hc10 = req.body.Planned_hc10,
    Planned_hc11 = req.body.Planned_hc11,
    Planned_hc12 = req.body.Planned_hc12,
    Planned_hc13 = req.body.Planned_hc13,
    Planned_hc14 = req.body.Planned_hc14,
    Planned_hc15 = req.body.Planned_hc15,
    Planned_hc16 = req.body.Planned_hc16,
    Planned_hc17 = req.body.Planned_hc17,
    Planned_hc18 = req.body.Planned_hc18,
    Planned_hc19 = req.body.Planned_hc19,
    Planned_hc20 = req.body.Planned_hc20,
    Planned_hc21 = req.body.Planned_hc21,
    Planned_hc22 = req.body.Planned_hc22,
    Planned_hc23 = req.body.Planned_hc23,
    Planned_hc24 = req.body.Planned_hc24,
    Planned_hc25 = req.body.Planned_hc25,
    Planned_hc26 = req.body.Planned_hc26,
    Planned_hc27 = req.body.Planned_hc27,
    Planned_hc28 = req.body.Planned_hc28,
    Planned_hc29 = req.body.Planned_hc29,
    Planned_hc30 = req.body.Planned_hc30,
    Planned_hc31 = req.body.Planned_hc31,
    Planned_hc32 = req.body.Planned_hc32,
    Planned_hc33 = req.body.Planned_hc33,
    Planned_hc34 = req.body.Planned_hc34,
    Planned_hc35 = req.body.Planned_hc35,
    Planned_hc36 = req.body.Planned_hc36,
    Planned_hc37 = req.body.Planned_hc37,
    Planned_hc38 = req.body.Planned_hc38,
    Planned_hc39 = req.body.Planned_hc39;

  var A_Vol1 = req.body.A_Vol1,
    A_Vol2 = req.body.A_Vol2,
    A_Vol3 = req.body.A_Vol3,
    A_Vol4 = req.body.A_Vol4,
    A_Vol5 = req.body.A_Vol5,
    A_Vol6 = req.body.A_Vol6,
    A_Vol7 = req.body.A_Vol7,
    A_Vol8 = req.body.A_Vol8,
    A_Vol9 = req.body.A_Vol9,
    A_Vol10 = req.body.A_Vol10,
    A_Vol11 = req.body.A_Vol11,
    A_Vol12 = req.body.A_Vol12,
    A_Vol13 = req.body.A_Vol13,
    A_Vol14 = req.body.A_Vol14,
    A_Vol15 = req.body.A_Vol15,
    A_Vol16 = req.body.A_Vol16,
    A_Vol17 = req.body.A_Vol17,
    A_Vol18 = req.body.A_Vol18,
    A_Vol19 = req.body.A_Vol19,
    A_Vol20 = req.body.A_Vol20,
    A_Vol21 = req.body.A_Vol21,
    A_Vol22 = req.body.A_Vol22,
    A_Vol23 = req.body.A_Vol23,
    A_Vol24 = req.body.A_Vol24,
    A_Vol25 = req.body.A_Vol25,
    A_Vol26 = req.body.A_Vol26,
    A_Vol27 = req.body.A_Vol27,
    A_Vol28 = req.body.A_Vol28,
    A_Vol29 = req.body.A_Vol29,
    A_Vol30 = req.body.A_Vol30,
    A_Vol31 = req.body.A_Vol31,
    A_Vol32 = req.body.A_Vol32,
    A_Vol33 = req.body.A_Vol33,
    A_Vol34 = req.body.A_Vol34,
    A_Vol35 = req.body.A_Vol35,
    A_Vol36 = req.body.A_Vol36,
    A_Vol37 = req.body.A_Vol37,
    A_Vol38 = req.body.A_Vol38,
    A_Vol39 = req.body.A_Vol39;

  var A_HCount1 = req.body.A_HCount1,
    A_HCount2 = req.body.A_HCount2,
    A_HCount3 = req.body.A_HCount3,
    A_HCount4 = req.body.A_HCount4,
    A_HCount5 = req.body.A_HCount5,
    A_HCount6 = req.body.A_HCount6,
    A_HCount7 = req.body.A_HCount7,
    A_HCount8 = req.body.A_HCount8,
    A_HCount9 = req.body.A_HCount9,
    A_HCount10 = req.body.A_HCount10,
    A_HCount11 = req.body.A_HCount11,
    A_HCount12 = req.body.A_HCount12,
    A_HCount13 = req.body.A_HCount13,
    A_HCount14 = req.body.A_HCount14,
    A_HCount15 = req.body.A_HCount15,
    A_HCount16 = req.body.A_HCount16,
    A_HCount17 = req.body.A_HCount17,
    A_HCount18 = req.body.A_HCount18,
    A_HCount19 = req.body.A_HCount19,
    A_HCount20 = req.body.A_HCount20,
    A_HCount21 = req.body.A_HCount21,
    A_HCount22 = req.body.A_HCount22,
    A_HCount23 = req.body.A_HCount23,
    A_HCount24 = req.body.A_HCount24,
    A_HCount25 = req.body.A_HCount25,
    A_HCount26 = req.body.A_HCount26,
    A_HCount27 = req.body.A_HCount27,
    A_HCount28 = req.body.A_HCount28,
    A_HCount29 = req.body.A_HCount29,
    A_HCount30 = req.body.A_HCount30,
    A_HCount31 = req.body.A_HCount31,
    A_HCount32 = req.body.A_HCount32,
    A_HCount33 = req.body.A_HCount33,
    A_HCount34 = req.body.A_HCount34,
    A_HCount35 = req.body.A_HCount35,
    A_HCount36 = req.body.A_HCount36,
    A_HCount37 = req.body.A_HCount37,
    A_HCount38 = req.body.A_HCount38,
    A_HCount39 = req.body.A_HCount39;

  var prod1 = req.body.prod1;
  var prod2 = req.body.prod2;
  var prod3 = req.body.prod3;

  var couts1 = req.body.couts1;
  var couts2 = req.body.couts2;
  var couts3 = req.body.couts3;
  var couts4 = req.body.couts4;
  var couts5 = req.body.couts5;
  var couts6 = req.body.couts6;
  var couts7 = req.body.couts7;
  var couts8 = req.body.couts8;
  var couts9 = req.body.couts9;
  var couts10 = req.body.couts10;
  var couts11 = req.body.couts11;
  var couts12 = req.body.couts12;
  var couts13 = req.body.couts13;
  var couts14 = req.body.couts14;
  var couts15 = req.body.couts15;
  var couts16 = req.body.couts16;
  var couts17 = req.body.couts17;
  var couts18 = req.body.couts18;
  var couts19 = req.body.couts19;
  var couts20 = req.body.couts20;
  var couts21 = req.body.couts21;
  var couts22 = req.body.couts22;
  var couts23 = req.body.couts23;
  var couts24 = req.body.couts24;
  var couts25 = req.body.couts25;
  var couts26 = req.body.couts26;
  var couts27 = req.body.couts27;
  var couts28 = req.body.couts28;
  var couts29 = req.body.couts29;
  var couts30 = req.body.couts30;
  var couts31 = req.body.couts31;
  var couts32 = req.body.couts32;
  var couts33 = req.body.couts33;
  var couts34 = req.body.couts34;

  var A_CPH1 = req.body.A_CPH1;
  var A_CPH2 = req.body.A_CPH2;
  var A_CPH3 = req.body.A_CPH3;
  var A_CPH4 = req.body.A_CPH4;
  var A_CPH5 = req.body.A_CPH5;
  var A_CPH6 = req.body.A_CPH6;
  var A_CPH7 = req.body.A_CPH7;
  var A_CPH8 = req.body.A_CPH8;
  var A_CPH9 = req.body.A_CPH9;
  var A_CPH10 = req.body.A_CPH10;
  var A_CPH11 = req.body.A_CPH11;
  var A_CPH12 = req.body.A_CPH12;
  var A_CPH13 = req.body.A_CPH13;
  var A_CPH14 = req.body.A_CPH14;
  var A_CPH15 = req.body.A_CPH15;
  var A_CPH16 = req.body.A_CPH16;
  var A_CPH17 = req.body.A_CPH17;
  var A_CPH18 = req.body.A_CPH18;
  var A_CPH19 = req.body.A_CPH19;
  var A_CPH20 = req.body.A_CPH20;
  var A_CPH21 = req.body.A_CPH21;
  var A_CPH22 = req.body.A_CPH22;
  var A_CPH23 = req.body.A_CPH23;
  var A_CPH24 = req.body.A_CPH24;
  var A_CPH25 = req.body.A_CPH25;
  var A_CPH26 = req.body.A_CPH26;
  var A_CPH27 = req.body.A_CPH27;
  var A_CPH28 = req.body.A_CPH28;
  var A_CPH29 = req.body.A_CPH29;
  var A_CPH30 = req.body.A_CPH30;
  var A_CPH31 = req.body.A_CPH31;
  var A_CPH32 = req.body.A_CPH32;

  var author = {
    id: req.user._id,
    username: req.user.username
  };

  var newMetrics = {
    week: week,
    author: author,
    team: team,
    prod2: prod2,
    prod1: prod1,
    prod3: prod3,

    Planned_v1: Planned_v1,
    Planned_v2: Planned_v2,
    Planned_v3: Planned_v3,
    Planned_v4: Planned_v4,
    Planned_v5: Planned_v5,
    Planned_v6: Planned_v6,
    Planned_v7: Planned_v7,
    Planned_v8: Planned_v8,
    Planned_v9: Planned_v9,
    Planned_v10: Planned_v10,
    Planned_v11: Planned_v11,
    Planned_v12: Planned_v12,
    Planned_v13: Planned_v13,
    Planned_v14: Planned_v14,
    Planned_v15: Planned_v15,
    Planned_v16: Planned_v16,
    Planned_v17: Planned_v17,
    Planned_v18: Planned_v18,
    Planned_v19: Planned_v19,
    Planned_v20: Planned_v20,
    Planned_v21: Planned_v21,
    Planned_v22: Planned_v22,
    Planned_v23: Planned_v23,
    Planned_v24: Planned_v24,
    Planned_v25: Planned_v25,
    Planned_v26: Planned_v26,
    Planned_v27: Planned_v27,
    Planned_v28: Planned_v28,
    Planned_v29: Planned_v29,
    Planned_v30: Planned_v30,
    Planned_v31: Planned_v31,
    Planned_v32: Planned_v32,
    Planned_v33: Planned_v33,
    Planned_v34: Planned_v34,
    Planned_v35: Planned_v35,
    Planned_v36: Planned_v36,
    Planned_v37: Planned_v37,
    Planned_v38: Planned_v38,
    Planned_v39: Planned_v39,

    Planned_hc1: Planned_hc1,
    Planned_hc2: Planned_hc2,
    Planned_hc3: Planned_hc3,
    Planned_hc4: Planned_hc4,
    Planned_hc5: Planned_hc5,
    Planned_hc6: Planned_hc6,
    Planned_hc7: Planned_hc7,
    Planned_hc8: Planned_hc8,
    Planned_hc9: Planned_hc9,
    Planned_hc10: Planned_hc10,
    Planned_hc11: Planned_hc11,
    Planned_hc12: Planned_hc12,
    Planned_hc13: Planned_hc13,
    Planned_hc14: Planned_hc14,
    Planned_hc15: Planned_hc15,
    Planned_hc16: Planned_hc16,
    Planned_hc17: Planned_hc17,
    Planned_hc18: Planned_hc18,
    Planned_hc19: Planned_hc19,
    Planned_hc20: Planned_hc20,
    Planned_hc21: Planned_hc21,
    Planned_hc22: Planned_hc22,
    Planned_hc23: Planned_hc23,
    Planned_hc24: Planned_hc24,
    Planned_hc25: Planned_hc25,
    Planned_hc26: Planned_hc26,
    Planned_hc27: Planned_hc27,
    Planned_hc28: Planned_hc28,
    Planned_hc29: Planned_hc29,
    Planned_hc30: Planned_hc30,
    Planned_hc31: Planned_hc31,
    Planned_hc32: Planned_hc32,
    Planned_hc33: Planned_hc33,
    Planned_hc34: Planned_hc34,
    Planned_hc35: Planned_hc35,
    Planned_hc36: Planned_hc36,
    Planned_hc37: Planned_hc37,
    Planned_hc38: Planned_hc38,
    Planned_hc39: Planned_hc39,

    A_Vol1: A_Vol1,
    A_Vol2: A_Vol2,
    A_Vol3: A_Vol3,
    A_Vol4: A_Vol4,
    A_Vol5: A_Vol5,
    A_Vol6: A_Vol6,
    A_Vol7: A_Vol7,
    A_Vol8: A_Vol8,
    A_Vol9: A_Vol9,
    A_Vol10: A_Vol10,
    A_Vol11: A_Vol11,
    A_Vol12: A_Vol12,
    A_Vol13: A_Vol13,
    A_Vol14: A_Vol14,
    A_Vol15: A_Vol15,
    A_Vol16: A_Vol16,
    A_Vol17: A_Vol17,
    A_Vol18: A_Vol18,
    A_Vol19: A_Vol19,
    A_Vol20: A_Vol20,
    A_Vol21: A_Vol21,
    A_Vol22: A_Vol22,
    A_Vol23: A_Vol23,
    A_Vol24: A_Vol24,
    A_Vol25: A_Vol25,
    A_Vol26: A_Vol26,
    A_Vol27: A_Vol27,
    A_Vol28: A_Vol28,
    A_Vol29: A_Vol29,
    A_Vol30: A_Vol30,
    A_Vol31: A_Vol31,
    A_Vol32: A_Vol32,
    A_Vol33: A_Vol33,
    A_Vol34: A_Vol34,
    A_Vol35: A_Vol35,
    A_Vol36: A_Vol36,
    A_Vol37: A_Vol37,
    A_Vol38: A_Vol38,
    A_Vol39: A_Vol39,

    A_HCount1: A_HCount1,
    A_HCount2: A_HCount2,
    A_HCount3: A_HCount3,
    A_HCount4: A_HCount4,
    A_HCount5: A_HCount5,
    A_HCount6: A_HCount6,
    A_HCount7: A_HCount7,
    A_HCount8: A_HCount8,
    A_HCount9: A_HCount9,
    A_HCount10: A_HCount10,
    A_HCount11: A_HCount11,
    A_HCount12: A_HCount12,
    A_HCount13: A_HCount13,
    A_HCount14: A_HCount14,
    A_HCount15: A_HCount15,
    A_HCount16: A_HCount16,
    A_HCount17: A_HCount17,
    A_HCount18: A_HCount18,
    A_HCount19: A_HCount19,
    A_HCount20: A_HCount20,
    A_HCount21: A_HCount21,
    A_HCount22: A_HCount22,
    A_HCount23: A_HCount23,
    A_HCount24: A_HCount24,
    A_HCount25: A_HCount25,
    A_HCount26: A_HCount26,
    A_HCount27: A_HCount27,
    A_HCount28: A_HCount28,
    A_HCount29: A_HCount29,
    A_HCount30: A_HCount30,
    A_HCount31: A_HCount31,
    A_HCount32: A_HCount32,
    A_HCount33: A_HCount33,
    A_HCount34: A_HCount34,
    A_HCount35: A_HCount35,
    A_HCount36: A_HCount36,
    A_HCount37: A_HCount37,
    A_HCount38: A_HCount38,
    A_HCount39: A_HCount39,

    couts1: couts1,
    couts2: couts2,
    couts3: couts3,
    couts4: couts4,
    couts5: couts5,
    couts6: couts6,
    couts7: couts7,
    couts8: couts8,
    couts9: couts9,
    couts10: couts10,
    couts11: couts11,
    couts12: couts12,
    couts13: couts13,
    couts14: couts14,
    couts15: couts15,
    couts16: couts16,
    couts17: couts17,
    couts18: couts18,
    couts19: couts19,
    couts20: couts20,
    couts21: couts21,
    couts22: couts22,
    couts23: couts23,
    couts24: couts24,
    couts25: couts25,
    couts26: couts26,
    couts27: couts27,
    couts28: couts28,
    couts29: couts29,
    couts30: couts30,
    couts31: couts31,
    couts32: couts32,
    couts33: couts33,
    couts34: couts34,

    accuracy1: accuracy1,
    accuracy2: accuracy2,
    accuracy3: accuracy3,
    accuracy4: accuracy4,
    accuracy5: accuracy5,
    accuracy6: accuracy6,
    accuracy7: accuracy7,
    accuracy8: accuracy8,
    accuracy9: accuracy9,
    accuracy10: accuracy10,
    accuracy11: accuracy11,
    accuracy12: accuracy12,
    accuracy13: accuracy13,
    accuracy14: accuracy14,
    accuracy15: accuracy15,
    accuracy16: accuracy16,
    accuracy17: accuracy17,
    accuracy18: accuracy18,
    accuracy19: accuracy19,
    accuracy20: accuracy20,
    accuracy21: accuracy21,
    accuracy22: accuracy22,
    accuracy23: accuracy23,
    accuracy24: accuracy24,
    accuracy25: accuracy25,
    accuracy26: accuracy26,
    accuracy27: accuracy27,
    accuracy28: accuracy28,
    accuracy29: accuracy29,
    accuracy30: accuracy30,
    accuracy31: accuracy31,
    accuracy32: accuracy32,

    A_CPH1: A_CPH1,
    A_CPH2: A_CPH2,
    A_CPH3: A_CPH3,
    A_CPH4: A_CPH4,
    A_CPH5: A_CPH5,
    A_CPH6: A_CPH6,
    A_CPH7: A_CPH7,
    A_CPH8: A_CPH8,
    A_CPH9: A_CPH9,
    A_CPH10: A_CPH10,
    A_CPH11: A_CPH11,
    A_CPH12: A_CPH12,
    A_CPH13: A_CPH13,
    A_CPH14: A_CPH14,
    A_CPH15: A_CPH15,
    A_CPH16: A_CPH16,
    A_CPH17: A_CPH17,
    A_CPH18: A_CPH18,
    A_CPH19: A_CPH19,
    A_CPH20: A_CPH20,
    A_CPH21: A_CPH21,
    A_CPH22: A_CPH22,
    A_CPH23: A_CPH23,
    A_CPH24: A_CPH24,
    A_CPH25: A_CPH25,
    A_CPH26: A_CPH26,
    A_CPH27: A_CPH27,
    A_CPH28: A_CPH28,
    A_CPH29: A_CPH29,
    A_CPH30: A_CPH30,
    A_CPH31: A_CPH31,
    A_CPH32: A_CPH32
  };

  // Create a new campground and save to DB
  metadata.create(newMetrics, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to campgrounds page
      console.log(newlyCreated);
      res.redirect("/metadata");
    }
  });
});

router.get("/showmetadata_month", function(req, res) {
  res.render("metadata/showmetadata_month");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res) {
  //find the campground with provided ID
  metadata
    .findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundCampground) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundCampground);
        //render show template with that campground
        res.render("metadata/show", { metadata: foundCampground });
      }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkmetadataTeamOwnership, function(
  req,
  res
) {
  metadata.findById(req.params.id, function(err, foundmetadata) {
    res.render("metadata/edit", { metadata: foundmetadata });
  });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkmetadataTeamOwnership, function(req, res) {
  // find and update the correct campground
  metadata.findByIdAndUpdate(req.params.id, req.body.campground, function(
    err,
    updatedCampground
  ) {
    if (err) {
      res.redirect("/metadata");
    } else {
      //redirect somewhere(show page)
      res.redirect("/metadata/" + req.params.id);
    }
  });
});

// DESTROY CAMPGROUND ROUTE:
router.delete("/:id", middleware.checkmetadataTeamOwnership, function(
  req,
  res
) {
  metadata.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect("/metadata");
    } else {
      res.redirect("/metadata");
    }
  });
});

module.exports = router;
