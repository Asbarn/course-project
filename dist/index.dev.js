"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//require('@tensorflow/tfjs-node'); 
var tf = require("@tensorflow/tfjs");

var inputShape = 100000;

var fs = require("fs");

var arcData = require("./arcData");

var bandsData = require("./bandsData");

var coronaData = require("./coronaData");

var diffuseData = require("./diffuseData");

var raysData = require("./raysData");

function onBatchEnd(batch, logs) {
  console.log("Logs", logs);
  console.log("Accuracy", logs.acc);
}

var dataModel = tf.tensor([].concat(_toConsumableArray(arcData.arcData), _toConsumableArray(bandsData.bandsData), _toConsumableArray(coronaData.coronaData), _toConsumableArray(diffuseData.diffuseData), _toConsumableArray(raysData.raysData))); // const labels = tf.tensor([["arcs"], ["bands"], ["corona"]]); //diffuse,rays

var labels = tf.tensor([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1], [1], [1], [1], [1], [1], [1], [2], [2], [2], [2], [2], [3], [3], [3], [3], [3], [3], [3], [3], [3], [3], [3], [3], [3], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4]]);
var model = tf.sequential({
  layers: [tf.layers.dense({
    inputShape: [3 * inputShape],
    units: 512,
    activation: "hardSigmoid"
  }), tf.layers.dense({
    units: 256,
    activation: "hardSigmoid"
  }), tf.layers.dense({
    units: 256,
    activation: "hardSigmoid"
  }), tf.layers.dense({
    units: 128,
    activation: "hardSigmoid"
  }), tf.layers.dense({
    units: 128,
    activation: "hardSigmoid"
  }), tf.layers.dense({
    units: 128,
    activation: "tanh"
  }), tf.layers.dense({
    units: 128,
    activation: "tanh"
  }), tf.layers.dense({
    units: 128,
    activation: "tanh"
  }), tf.layers.dense({
    units: 128,
    activation: "tanh"
  }), tf.layers.dense({
    units: 5,
    activation: "softmax" //softmax

  })]
});
model.compile({
  optimizer: "sgd",
  //adadelta=0.3333333432674408;
  loss: "sparseCategoricalCrossentropy",
  //sparseCategoricalCrossentropy,meanSquaredError
  metrics: ["accuracy"]
});
model.fit(dataModel, labels, {
  epochs: 20,
  batchSize: 64,
  // callbacks: {onBatchEnd},
  shuffle: true
}).then(function (info) {
  console.log("Точность обученной модели:", info.history.acc);
  var prediction = model.predict(tf.tensor([arcData.arcData[0]]));
  prediction.print();
});