import { celsiusTofahrenheit } from "../celsius"

test('testing converter with normal values',() => {
  expect(celsiusTofahrenheit(10)).toBe(50);
});

test('testing converter with decimal values',() => {
  expect(celsiusTofahrenheit(12.5)).toBeCloseTo(54.5);
});

test('testing converter with negative values', () => {
  expect(celsiusTofahrenheit(-30)).toBe(-22);
});

test('testing converter at freezing point',() => {
  expect(celsiusTofahrenheit(0)).toBe(32);
});

test('testing converter at boiling point',() => {
  expect(celsiusTofahrenheit(100)).toBe(212);
});
