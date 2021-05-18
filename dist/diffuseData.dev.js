"use strict";

var inputShape = 100000;

var fs = require("fs");

try {
  var dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse1r.txt", "utf8").slice(0, inputShape);
  var dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse1g.txt", "utf8").slice(0, inputShape);
  var dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse1b.txt", "utf8").slice(0, inputShape);
  var data1 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse2r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse2g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse2b.txt", "utf8").slice(0, inputShape);
  var data2 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse3r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse3g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse3b.txt", "utf8").slice(0, inputShape);
  var data3 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse4r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse4g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse4b.txt", "utf8").slice(0, inputShape);
  var data4 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse5r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse5g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse5b.txt", "utf8").slice(0, inputShape);
  var data5 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse6r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse6g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse6b.txt", "utf8").slice(0, inputShape);
  var data6 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse7r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse7g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse7b.txt", "utf8").slice(0, inputShape);
  var data7 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse8r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse8g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse8b.txt", "utf8").slice(0, inputShape);
  var data8 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse9r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse9g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse9b.txt", "utf8").slice(0, inputShape);
  var data9 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse10r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse10g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse10b.txt", "utf8").slice(0, inputShape);
  var data10 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse11r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse11g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse11b.txt", "utf8").slice(0, inputShape);
  var data11 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse12r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse12g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse12b.txt", "utf8").slice(0, inputShape);
  var data12 = (dataR + dataG + dataB).split("").map(Number);
  dataR = fs.readFileSync("./BD/diffuse/rgb/diffuse13r.txt", "utf8").slice(0, inputShape);
  dataG = fs.readFileSync("./BD/diffuse/rgb/diffuse13g.txt", "utf8").slice(0, inputShape);
  dataB = fs.readFileSync("./BD/diffuse/rgb/diffuse13b.txt", "utf8").slice(0, inputShape);
  var data13 = (dataR + dataG + dataB).split("").map(Number);
  var diffuseData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13];
  exports.diffuseData = diffuseData;
} catch (err) {
  console.error(err);
}