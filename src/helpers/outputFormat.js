/** @format */

export default function outputFormat(qNum, data) {
  switch (qNum) {
    case 0:
      return data[0]["count(*)"];
    case 1:
      return data.map((ap) => ap["name"]).join(", ");
    case 2:
      return data[0]["COUNT(DISTINCT Airline_Id)"];
    case 3:
      return (
        "\n" +
        data.map((al, index) => `${index + 1}. ${al["name"]}`).join("\r\n")
      );
    case 4:
      return data.map((al) => JSON.stringify(al)).join("\n");
    case 5:
      return data.map((al) => al["name"]).join(", ");
    default:
      return "";
  }
}
