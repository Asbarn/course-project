const inputShape = 100000;
const fs = require("fs");

try {
    let dataR = fs
        .readFileSync("./BD/bands/rgb/bands1r.txt", "utf8")
        .slice(0, inputShape);
    let dataG = fs
        .readFileSync("./BD/bands/rgb/bands1g.txt", "utf8")
        .slice(0, inputShape);
    let dataB = fs
        .readFileSync("./BD/bands/rgb/bands1b.txt", "utf8")
        .slice(0, inputShape);
    const data1 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/bands/rgb/bands2r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/bands/rgb/bands2g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/bands/rgb/bands2b.txt", "utf8")
        .slice(0, inputShape);
    const data2 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/bands/rgb/bands3r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/bands/rgb/bands3g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/bands/rgb/bands3b.txt", "utf8")
        .slice(0, inputShape);
    const data3 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/bands/rgb/bands4r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/bands/rgb/bands4g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/bands/rgb/bands4b.txt", "utf8")
        .slice(0, inputShape);
    const data4 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/bands/rgb/bands5r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/bands/rgb/bands5g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/bands/rgb/bands5b.txt", "utf8")
        .slice(0, inputShape);
    const data5 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/bands/rgb/bands6r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/bands/rgb/bands6g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/bands/rgb/bands6b.txt", "utf8")
        .slice(0, inputShape);
    const data6 = (dataR + dataG + dataB).split("").map(Number);

    dataR = fs
        .readFileSync("./BD/bands/rgb/bands7r.txt", "utf8")
        .slice(0, inputShape);
    dataG = fs
        .readFileSync("./BD/bands/rgb/bands7g.txt", "utf8")
        .slice(0, inputShape);
    dataB = fs
        .readFileSync("./BD/bands/rgb/bands7b.txt", "utf8")
        .slice(0, inputShape);
    const data7 = (dataR + dataG + dataB).split("").map(Number);

    const bandsData = [data1, data2, data3, data4, data5, data6, data7];
    exports.bandsData=bandsData;
} catch (err) {
    console.error(err);
}