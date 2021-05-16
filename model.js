const tf = require("@tensorflow/tfjs")
const model = tf.sequential({
    layers: [
        tf.layers.dense({
            inputShape: [784], units: 512,
            activation: 'relu'
        }),
        tf.layers.dense({
            units: 256, activation: 'relu'
        }),
        tf.layers.dense({
            units: 10, activation: 'softmax'
        }),
    ]
}).compile({
    optimizer: 'sgd',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
});



// Компилируем модель (подготавливаем к тренировке)
// model.compile({
//     optimizer: 'sgd',
//     loss: 'categoricalCrossentropy',
//     metrics: ['accuracy']
// });

exports.model = model;