const url = "http://localhost:8080/api/";

export const questions = [
  {
    question: "How many airports are in this timezone?",
    instruction: "Enter timezone:",
    api: url + "first",
  },
  {
    question: "Which airports does this airport fly to?",
    instruction: "Enter airport name:",
    api: url + "second",
  },
  {
    question: "How many airlines operate in this country?",
    instruction: "Enter country:",
    api: url + "third",
  },
  {
    question:
      "What are the top 10 airlines that has the most routes in this airport?",
    instruction: "Enter airport name:",
    api: url + "fourth",
  },
  {
    question:
      "Given origin and destination airport, find all flights between two airports which are ordered by its date",
    instruction: "Enter origin airport:",
    api: url + "fifth",
  },
  {
    question:
      "Given two airports, origin and departure airports, display airlines that operate on routes chosen by the user where its origin and destination airports match to user input",
    instruction: "Enter origin country:",
    api: url + "sixth",
  },
];
