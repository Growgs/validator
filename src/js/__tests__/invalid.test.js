import Validator from '../validator';

test.each([
  ["user1234", false],
  ["user---name", false],
  ["-user", false],
  ["user-", false],
  ["_user", false],
  ["user_", false],
  ["user__name", false],
  ["user12345", false],
  ["123user", false],
  ["123", false],
  ["user-123", false],
  ["user_1234", false],
])("Invalid username: %s", (username, expected) => {
  expect(Validator.validateUsername(username)).toBe(expected);
});
