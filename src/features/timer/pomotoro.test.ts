import { describe, expect, it } from "vitest";
import { pomodoro } from "./pomodoro";

describe("isWorkTime", () => {
  it("returns true when the time is between 00 and 25 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 0, 0);
    expect(pomodoro.isWorkTime(datetime)).toBe(true);
  });

  it("returns true when the time is between 00 and 25 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 24, 59, 999);
    expect(pomodoro.isWorkTime(datetime)).toBe(true);
  });

  it("returns false when the time is between 25 and 30 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 25, 0);
    expect(pomodoro.isWorkTime(datetime)).toBe(false);
  });

  it("returns false when the time is between 25 and 30 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 29, 59, 999);
    expect(pomodoro.isWorkTime(datetime)).toBe(false);
  });
});

describe("isBreakTime", () => {
  it("returns false when the time is between 00 and 25 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 0, 0);
    expect(pomodoro.isBreakTime(datetime)).toBe(false);
  });

  it("returns false when the time is between 00 and 25 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 24, 59, 999);
    expect(pomodoro.isBreakTime(datetime)).toBe(false);
  });

  it("returns true when the time is between 25 and 30 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 25, 0);
    expect(pomodoro.isBreakTime(datetime)).toBe(true);
  });

  it("returns true when the time is between 25 and 30 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 29, 59, 999);
    expect(pomodoro.isBreakTime(datetime)).toBe(true);
  });
});

describe("detectRemainingSeconds", () => {
  it("returns remaining seconds when the time is between 00 and 25 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 0, 0);
    expect(pomodoro.detectRemainingSeconds(datetime)).toBe(25 * 60);
  });

  it("returns remaining seconds when the time is between 00 and 25 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 24, 59, 999);
    expect(pomodoro.detectRemainingSeconds(datetime)).toBe(1);
  });

  it("returns remaining seconds when the time is between 25 and 30 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 25, 0);
    expect(pomodoro.detectRemainingSeconds(datetime)).toBe(5 * 60);
  });

  it("returns remaining seconds when the time is between 25 and 30 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 29, 59, 999);
    expect(pomodoro.detectRemainingSeconds(datetime)).toBe(1);
  });

  it("returns remaining seconds when the time is between 30 and 55 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 30, 0);
    expect(pomodoro.detectRemainingSeconds(datetime)).toBe(25 * 60);
  });

  it("returns remaining seconds when the time is between 30 and 55 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 54, 59, 999);
    expect(pomodoro.detectRemainingSeconds(datetime)).toBe(1);
  });

  it("returns remaining seconds when the time is between 55 and 60 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 55, 0);
    expect(pomodoro.detectRemainingSeconds(datetime)).toBe(5 * 60);
  });

  it("returns remaining seconds when the time is between 55 and 60 minutes", () => {
    const datetime = new Date(2024, 12, 31, 0, 59, 59, 999);
    expect(pomodoro.detectRemainingSeconds(datetime)).toBe(1);
  });
});
