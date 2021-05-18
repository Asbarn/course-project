const inputShape = 100000;
const fs = require("fs");

try {
    let dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs1r.txt", "utf8")
        .slice(0, inputShape);
    let dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs1g.txt", "utf8")
        .slice(0, inputShape);
    let dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs1b.txt", "utf8")
        .slice(0, inputShape);
    const data1 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs2r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs2g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs2b.txt", "utf8")
        .slice(0, inputShape);
    const data2 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs3r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs3g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs3b.txt", "utf8")
        .slice(0, inputShape);
    const data3 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs4r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs4g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs4b.txt", "utf8")
        .slice(0, inputShape);
    const data4 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs5r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs5g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs5b.txt", "utf8")
        .slice(0, inputShape);
    const data5 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs6r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs6g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs6b.txt", "utf8")
        .slice(0, inputShape);
    const data6 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs7r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs7g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs7b.txt", "utf8")
        .slice(0, inputShape);
    const data7 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs8r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs8g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs8b.txt", "utf8")
        .slice(0, inputShape);
    const data8 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs9r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs9g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs9b.txt", "utf8")
        .slice(0, inputShape);
    const data9 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/arcs/rgb/arcs10r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/arcs/rgb/arcs10g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/arcs/rgb/arcs10b.txt", "utf8")
        .slice(0, inputShape);
    const data10 = (dataR + dataG + dataB).split("").map(Number);

    const arcData = [data1, data2, data3, data4, data5, data6, data7, data8, data9,data10];
    exports.arcData=arcData;
} catch (err) {
    console.error(err);
}