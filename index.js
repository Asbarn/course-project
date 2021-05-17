const { input } = require("@tensorflow/tfjs");
const tf = require("@tensorflow/tfjs");
const inputShape = 100000;
const fs = require("fs");

function onBatchEnd(batch, logs) {
  console.log("Logs", logs);
  console.log("Accuracy", logs.acc);
}

try {
  const dataR = fs
    .readFileSync("./BD/arcs/rgb/arc1r.txt", "utf8")
    .slice(0, inputShape);
  const dataG = fs
    .readFileSync("./BD/arcs/rgb/arc1g.txt", "utf8")
    .slice(0, inputShape);
  const dataB = fs
    .readFileSync("./BD/arcs/rgb/arc1b.txt", "utf8")
    .slice(0, inputShape);
  const data = (dataR + dataG + dataB).split("").map(Number);

  // console.log(data.length)

  const dataRB = fs
    .readFileSync("./BD/bands/rgb/bands1r.txt", "utf8")
    .slice(0, inputShape);
  const dataGB = fs
    .readFileSync("./BD/bands/rgb/bands1g.txt", "utf8")
    .slice(0, inputShape);
  const dataBB = fs
    .readFileSync("./BD/bands/rgb/bands1b.txt", "utf8")
    .slice(0, inputShape);
  const dataBa = (dataRB + dataGB + dataBB).split("").map(Number);

  // console.log(dataBa.length)

  const dataRC = fs
    .readFileSync("./BD/corona/rgb/corona1r.txt", "utf8")
    .slice(0, inputShape);
  const dataGC = fs
    .readFileSync("./BD/corona/rgb/corona1g.txt", "utf8")
    .slice(0, inputShape);
  const dataBC = fs
    .readFileSync("./BD/corona/rgb/corona1b.txt", "utf8")
    .slice(0, inputShape);
  const dataC = (dataRC + dataGC + dataBC).split("").map(Number);

  //console.log(typeof dataC)

  const dataModel = tf.tensor([data, dataBa, dataC]);
  //dataModel.print()
  // dataModel.flatten();
  // const labels = tf.tensor([["arcs"], ["bands"], ["corona"]]); //diffuse,rays
  const labels = tf.tensor([[0], [1], [2]]);
  console.log(dataModel.shape);
  const model = tf.sequential({
    layers: [
      tf.layers.dense({
        inputShape: [3 * inputShape],
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 16,
        activation: "hardSigmoid",
      }),
      tf.layers.dense({
        units: 3,
        activation: "softmax", //softmax
      }),
    ],
  });
  model.compile({
    optimizer: "adam", //adadelta=0.3333333432674408;
    loss: "sparseCategoricalCrossentropy", //sparseCategoricalCrossentropy,meanSquaredError
    metrics: ["accuracy"],
  });
  const data1 = tf.randomNormal([3, 3 * inputShape]);
  const labels1 = tf.randomUniform([3, 3]);
  console.log(labels.shape);
  //console.log(dataModel.toInt());
  //dataModel.print();
  //labels.print();
  // labels1.flatten().print();
  //labels1.print();
  
  model
    .fit(dataModel, labels, {
      epochs: 10,
      batchSize: 32,
      // callbacks: {onBatchEnd},
      shuffle: true,
    })
    .then((info) => {
      console.log("Точность обученной модели:", info.history.acc);
    });
} catch (err) {
  console.error(err);
}
