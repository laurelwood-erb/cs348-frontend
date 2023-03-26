const fs = require("fs");

function csvScript(fileUrl, headerTwo) {
  const data = fs.readFileSync(fileUrl, "utf-8");
  const lines = data.split("\n");
  const headers = lines.shift().split(",");
  const columnTwo = headers.indexOf(headerTwo);

  const columnValues = lines.map((line) => {
    const cells = line.split(",");
    // console.log(cells[columnOne]);
    return `"${cells[columnTwo]}",`;
  });
  // console.log(columnValues);
  const refined = [...new Set(columnValues)].sort();
  return refined;
}

function writeColumnDataToFile(columnData, outputPath) {
  const outputData = columnData.join("\n");
  fs.writeFileSync(outputPath, outputData, "utf-8");
  // console.log(`Column data has been written to: ${outputPath}`);
}

const fileUrl = "../public/data/airlines.csv";
const outputTxtPath = "./output.txt";
const headerTwo = "Country";

const columnData = csvScript(fileUrl, headerTwo);

if (columnData) {
  writeColumnDataToFile(columnData, outputTxtPath);
}
