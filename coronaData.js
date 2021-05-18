const inputShape = 100000;
const fs = require("fs");

try {
    let dataR = fs
        .readFileSync("./BD/corona/rgb/corona1r.txt", "utf8")
        .slice(0, inputShape);
    let dataG = fs
        .readFileSync("./BD/corona/rgb/corona1g.txt", "utf8")
        .slice(0, inputShape);
    let dataB = fs
        .readFileSync("./BD/corona/rgb/corona1b.txt", "utf8")
        .slice(0, inputShape);
    const data1 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/corona/rgb/corona2r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/corona/rgb/corona2g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/corona/rgb/corona2b.txt", "utf8")
        .slice(0, inputShape);
    const data2 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/corona/rgb/corona3r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/corona/rgb/corona3g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/corona/rgb/corona3b.txt", "utf8")
        .slice(0, inputShape);
    const data3 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/corona/rgb/corona4r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/corona/rgb/corona4g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/corona/rgb/corona4b.txt", "utf8")
        .slice(0, inputShape);
    const data4 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/corona/rgb/corona5r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/corona/rgb/corona5g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/corona/rgb/corona5b.txt", "utf8")
        .slice(0, inputShape);
    const data5 = (dataR + dataG + dataB).split("").map(Number);

    const coronaData = [data1, data2, data3, data4, data5];
    exports.coronaData=coronaData;
} catch (err) {
    console.error(err);
}