import { isUsernameValid } from "../checkUser"

test('check valid usernames',() => {
  const val1 = "sumit";
  const val2 = "lol";
  const val3 = "rudrax";
  const val4 = "sedan";
  expect(isUsernameValid(val1)).toBeTruthy();
  expect(isUsernameValid(val2)).toBeTruthy();
  expect(isUsernameValid(val3)).toBeTruthy();
  expect(isUsernameValid(val4)).toBeTruthy();

});

test('check too short usernames', () => {
  expect(isUsernameValid("hi")).toBeFalsy();
  expect(isUsernameValid("so")).toBeFalsy();
});

test('check usernames with spaces',() => {
  expect(isUsernameValid("ha ardik")).toBeFalsy();
  expect(isUsernameValid("vi vek")).toBeFalsy();
});

test('check with empty strings',() => {
  expect(isUsernameValid("")).toBeFalsy();
});

test('check for edge length values',() => {
  const longStr = "fsadkflhaskjfhkajshgkjdhagkjhgkjhdakjghakjhgkjlahgkljhagkjhasdkjfkjgfklkasgkskjgkadjsgkjhgkjdasgkjaggjhakjgkjlagkj";
  expect(isUsernameValid(longStr)).toBeFalsy();
});
