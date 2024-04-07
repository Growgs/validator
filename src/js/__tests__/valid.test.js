import Validator from "../validator.js";

test.each([
    ["user", true],
    ["user_name", true],
  ])("Valid username: %s", (username, expected) => {
    expect(Validator.validateUsername(username)).toBe(expected);
  });