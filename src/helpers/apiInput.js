import { airports, timezones } from "./dropdowns";

export default function apiInput(qNum, input1, input2) {
  const inputVal1 =
    qNum === 0
      ? timezones.find((tz) => tz.label === input1).value
      : qNum === 1 || qNum === 3 || qNum === 4
      ? airports.find((ap) => ap.label === input1).value
      : input1;

  const inputVal2 =
    qNum === 3
      ? airports.find((ap) => ap.label === input1).value
      : qNum === 4
      ? airports.find((ap) => ap.label === input2).value
      : qNum === 5
      ? input2
      : "";

  return "/" + inputVal1 + "/" + inputVal2;
}
