// @ts-check
import { test, expect } from "@playwright/test";
import { addTwoNumbers, multiplyTwoNumbers } from "..";

test(`Add Two numbers Test case`, () => {
  const result = addTwoNumbers(10, 20);
  expect(result).toBe(30);
});

test(`Multiply Two numbers Test case`, () => {
  const result = multiplyTwoNumbers(10, 20);
  expect(result).toBe(200);
});
