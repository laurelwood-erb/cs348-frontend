const fs = require("fs");

function csvScript(fileUrl, headerTwo) {
  const data = fs.readFileSync(fileUrl, "utf-8");
  const lines = data.split("\n");
  const headers = lines.shift().split(",");
  const columnTwo = headers.indexOf(headerTwo);

  const columnValues = lines.map((line, index) => {
    const cells = line.split(",");
    // console.log(cells);
    // console.log(cells[columnOne]);
    return `{value: ${index + 1}, label: "${cells[columnTwo]}"},`;
  });
  return columnValues;
}

function writeColumnDataToFile(columnData, outputPath) {
  const outputData = columnData.join("\n");
  fs.writeFileSync(outputPath, outputData, "utf-8");
  // console.log(`Column data has been written to: ${outputPath}`);
}

const fileUrl =
  "/Users/pauloh/Documents/University of Waterloo/Term 12 - CS 3B/CS 348/project/cs348-frontend/public/data/airplanes.csv";
const outputTxtPath = "./output.txt";
const headerTwo = "Name";

const columnData = csvScript(fileUrl, headerTwo);

if (columnData) {
  writeColumnDataToFile(columnData, outputTxtPath);
}
