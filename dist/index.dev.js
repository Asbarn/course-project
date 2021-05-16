"use strict";

var tf = require("@tensorflow/tfjs");

var inputShape = 10;

var fs = require('fs');

try {
  var dataR = fs.readFileSync('./BD/arcs/rgb/arc1r.txt', 'utf8').slice(0, inputShape);
  var dataG = fs.readFileSync('./BD/arcs/rgb/arc1g.txt', 'utf8').slice(0, inputShape);
  var dataB = fs.readFileSync('./BD/arcs/rgb/arc1b.txt', 'utf8').slice(0, inputShape);
  var data = Number.parseInt(dataR + dataG + dataB); // console.log(data.length)

  var dataRB = fs.readFileSync('./BD/bands/rgb/bands1r.txt', 'utf8').slice(0, inputShape);
  var dataGB = fs.readFileSync('./BD/bands/rgb/bands1g.txt', 'utf8').slice(0, inputShape);
  var dataBB = fs.readFileSync('./BD/bands/rgb/bands1b.txt', 'utf8').slice(0, inputShape);
  var dataBa = Number.parseInt(dataRB + dataGB + dataBB); // console.log(dataBa.length)

  var dataRC = fs.readFileSync('./BD/corona/rgb/corona1r.txt', 'utf8').slice(0, inputShape);
  var dataGC = fs.readFileSync('./BD/corona/rgb/corona1g.txt', 'utf8').slice(0, inputShape);
  var dataBC = fs.readFileSync('./BD/corona/rgb/corona1b.txt', 'utf8').slice(0, inputShape);
  var dataC = Number.parseInt(dataRC + dataGC + dataBC); //console.log(typeof dataC)

  var dataModel = tf.tensor([data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC, data, dataBa, dataC]); //dataModel.print()
  // dataModel.flatten();

  var labels = tf.tensor(['arcs', 'bands', 'corona']); //diffuse,rays

  console.log(dataModel.shape);
  var model = tf.sequential({
    layers: [tf.layers.dense({
      inputShape: [784],
      units: 32,
      activation: 'relu'
    }), tf.layers.dense({
      units: 32,
      activation: 'relu'
    }), tf.layers.dense({
      units: 32,
      activation: 'relu'
    }), tf.layers.dense({
      units: 32,
      activation: 'relu'
    }), tf.layers.dense({
      units: 32,
      activation: 'relu'
    }), tf.layers.dense({
      units: 32,
      activation: 'relu'
    }), tf.layers.dense({
      units: 10,
      activation: 'softmax'
    })]
  });
  model.compile({
    optimizer: 'sgd',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });
  var data1 = tf.randomNormal([100, 784]);
  var labels1 = tf.randomUniform([100, 10]);
  console.log(data1.toInt());
  console.log(dataModel.toInt()); // labels1.flatten().print();

  labels1.print();
  model.fit(data1, labels1, {
    epochs: 10,
    batchSize: 32
  }).then(function (info) {
    console.log('Точность обученной модели:', info.history.acc);
  });
} catch (err) {
  console.error(err);
}