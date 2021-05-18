const inputShape = 100000;
const fs = require("fs");

try {
    let dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse1r.txt", "utf8")
        .slice(0, inputShape);
    let dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse1g.txt", "utf8")
        .slice(0, inputShape);
    let dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse1b.txt", "utf8")
        .slice(0, inputShape);
    const data1 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse2r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse2g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse2b.txt", "utf8")
        .slice(0, inputShape);
    const data2 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse3r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse3g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse3b.txt", "utf8")
        .slice(0, inputShape);
    const data3 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse4r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse4g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse4b.txt", "utf8")
        .slice(0, inputShape);
    const data4 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse5r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse5g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse5b.txt", "utf8")
        .slice(0, inputShape);
    const data5 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse6r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse6g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse6b.txt", "utf8")
        .slice(0, inputShape);
    const data6 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse7r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse7g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse7b.txt", "utf8")
        .slice(0, inputShape);
    const data7 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse8r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse8g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse8b.txt", "utf8")
        .slice(0, inputShape);
    const data8 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse9r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse9g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse9b.txt", "utf8")
        .slice(0, inputShape);
    const data9 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse10r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse10g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse10b.txt", "utf8")
        .slice(0, inputShape);
    const data10 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse11r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse11g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse11b.txt", "utf8")
        .slice(0, inputShape);
    const data11 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse12r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse12g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse12b.txt", "utf8")
        .slice(0, inputShape);
    const data12 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/diffuse/rgb/diffuse13r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/diffuse/rgb/diffuse13g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/diffuse/rgb/diffuse13b.txt", "utf8")
        .slice(0, inputShape);
    const data13 = (dataR + dataG + dataB).split("").map(Number);

    const diffuseData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10,data11, data12, data13];
    exports.diffuseData = diffuseData;
} catch (err) {
    console.error(err);
}