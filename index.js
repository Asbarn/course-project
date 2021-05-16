const tf = require("@tensorflow/tfjs")
const inputShape = 10;
const fs = require('fs')

try {
    const dataR = fs.readFileSync('./BD/arcs/rgb/arc1r.txt', 'utf8').slice(0, inputShape);
    const dataG = fs.readFileSync('./BD/arcs/rgb/arc1g.txt', 'utf8').slice(0, inputShape);
    const dataB = fs.readFileSync('./BD/arcs/rgb/arc1b.txt', 'utf8').slice(0, inputShape);
    const data = Number.parseInt(dataR + dataG + dataB);

    // console.log(data.length)

    const dataRB = fs.readFileSync('./BD/bands/rgb/bands1r.txt', 'utf8').slice(0, inputShape);
    const dataGB = fs.readFileSync('./BD/bands/rgb/bands1g.txt', 'utf8').slice(0, inputShape);
    const dataBB = fs.readFileSync('./BD/bands/rgb/bands1b.txt', 'utf8').slice(0, inputShape);
    const dataBa = Number.parseInt(dataRB + dataGB + dataBB);

    // console.log(dataBa.length)

    const dataRC = fs.readFileSync('./BD/corona/rgb/corona1r.txt', 'utf8').slice(0, inputShape);
    const dataGC = fs.readFileSync('./BD/corona/rgb/corona1g.txt', 'utf8').slice(0, inputShape);
    const dataBC = fs.readFileSync('./BD/corona/rgb/corona1b.txt', 'utf8').slice(0, inputShape);
    const dataC = Number.parseInt(dataRC + dataGC + dataBC);

    //console.log(typeof dataC)

    const dataModel = tf.tensor([
        data, dataBa, dataC, data, dataBa, dataC,
        data, dataBa, dataC, data, dataBa, dataC,
        data, dataBa, dataC, data, dataBa, dataC,
        data, dataBa, dataC, data, dataBa, dataC,
        data, dataBa, dataC, data, dataBa, dataC,
        data, dataBa, dataC, data, dataBa, dataC,
        data, dataBa, dataC, data, dataBa, dataC,
    ]);
    //dataModel.print()
    // dataModel.flatten();
    const labels = tf.tensor([
        'arcs', 'bands', 'corona'
    ]);//diffuse,rays
    console.log(dataModel.shape)
    const model = tf.sequential({
        layers: [
            tf.layers.dense({
                inputShape: [784], units: 32,
                activation: 'relu'
            }),
            tf.layers.dense({
                units: 32, activation: 'relu'
            }),
            tf.layers.dense({
                units: 32, activation: 'relu'
            }),
            tf.layers.dense({
                units: 32, activation: 'relu'
            }),
            tf.layers.dense({
                units: 32, activation: 'relu'
            }),
            tf.layers.dense({
                units: 32, activation: 'relu'
            }),
            tf.layers.dense({
                units: 10, activation: 'softmax'
            }),
        ]
    });
    model.compile({
        optimizer: 'sgd',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });
    const data1 = tf.randomNormal([100, 784]);
    const labels1 = tf.randomUniform([100, 10]);
     console.log(data1.toInt());
     console.log(dataModel.toInt());
    // labels1.flatten().print();
     labels1.print()
    model.fit(data1, labels1, {
        epochs: 10,
        batchSize: 32
    }).then(info => {
        console.log('Точность обученной модели:', info.history.acc);
    })
} catch (err) {
    console.error(err)
}
