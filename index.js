//require('@tensorflow/tfjs-node'); 
const tf = require("@tensorflow/tfjs");
const inputShape = 100000;
const fs = require("fs");
const arcData = require("./arcData");
const bandsData = require("./bandsData");
const coronaData = require("./coronaData");
const diffuseData = require("./diffuseData");
const raysData = require("./raysData");

function onBatchEnd(batch, logs) {
  console.log("Logs", logs);
  console.log("Accuracy", logs.acc);
}
const dataModel = tf.tensor([...arcData.arcData, ...bandsData.bandsData, ...coronaData.coronaData, ...diffuseData.diffuseData, ...raysData.raysData]);

// const labels = tf.tensor([["arcs"], ["bands"], ["corona"]]); //diffuse,rays
const labels = tf.tensor([
  [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
  [1], [1], [1], [1], [1], [1], [1],
  [2], [2], [2], [2], [2],
  [3], [3], [3], [3], [3], [3], [3], [3], [3], [3], [3], [3], [3],
  [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4], [4],

]);

const model = tf.sequential({
  layers: [
    tf.layers.dense({
      inputShape: [3 * inputShape],
      units: 512,
      activation: "hardSigmoid",
    }),
    tf.layers.dense({
      units: 256,
      activation: "hardSigmoid",
    }),
    tf.layers.dense({
      units: 256,
      activation: "hardSigmoid",
    }),
    tf.layers.dense({
      units: 128,
      activation: "hardSigmoid",
    }),
    tf.layers.dense({
      units: 128,
      activation: "hardSigmoid",
    }),
    tf.layers.dense({
      units: 128,
      activation: "tanh",
    }),
    tf.layers.dense({
      units: 128,
      activation: "tanh",
    }),
    tf.layers.dense({
      units: 128,
      activation: "tanh",
    }),
    tf.layers.dense({
      units: 128,
      activation: "tanh",
    }),
    tf.layers.dense({
      units: 5,
      activation: "softmax", //softmax
    }),
  ],
});
model.compile({
  optimizer: "sgd", //adadelta=0.3333333432674408;
  loss: "sparseCategoricalCrossentropy", //sparseCategoricalCrossentropy,meanSquaredError
  metrics: ["accuracy"],
});
model
  .fit(dataModel, labels, {
    epochs: 20,
    batchSize: 64,
    // callbacks: {onBatchEnd},
    shuffle: true,
  })
  .then((info) => {
    console.log("Точность обученной модели:", info.history.acc);
    const prediction = model.predict(tf.tensor([
      arcData.arcData[0]
    ]));
    prediction.print();

  });
