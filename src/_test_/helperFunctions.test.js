import { validResponse } from "../components/shared/helperFunctions";

describe("Test for validResponse function", () => {
  it("return true if every item in the array contains at least on non-whitespace character", () => {
    expect(validResponse(["  1", "2", " 3", "A ", "b", "c "])).toBe(true);
  });
  it("returns false if there is an empty string", () => {
    expect(validResponse([""])).toBe(false);
  });
  it("returns false if one item in the array is just a space", () => {
    expect(validResponse(["a", " "])).toBe(false);
  });
  it("return false", () => {
    const questions = [
      ["", "a", "yes"],
      ["a", "b", "", "d"],
      ["a", "b", "\t"],
      ["a", "b", "\n"]
    ];
    const SUCCESS = [false, false, false, false];
    expect(questions.map(question => validResponse(question))).toEqual(SUCCESS);
  });
});
