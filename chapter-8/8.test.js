const { downTo } = require("../chapter-1/utils");
const { Bottle } = require("./8");
describe("Bottles", () => {
  test("the first verse", () => {
    const expected =
      `99 bottles of milk on the wall, ` +
      `99 bottles of milk.\n` +
      `Take one down and pass it around, ` +
      `98 bottles of milk on the wall.\n`;

    expect(new Bottle().verse(99)).toBe(expected);
  });

  test("7 verse", () => {
    const expected =
      `7 bottles of milk on the wall, ` +
      `7 bottles of milk.\n` +
      `Take one down and pass it around, ` +
      `1 six-pack of milk on the wall.\n`;
    expect(new Bottle().verse(7)).toBe(expected);
  });

  test("6 verse", () => {
    const expected =
      `1 six-pack of milk on the wall, ` +
      `1 six-pack of milk.\n` +
      `Take one down and pass it around, ` +
      `5 bottles of milk on the wall.\n`;
    expect(new Bottle().verse(6)).toBe(expected);
  });

  test("another verse", () => {
    const expected =
      `3 bottles of milk on the wall, ` +
      `3 bottles of milk.\n` +
      `Take one down and pass it around, ` +
      `2 bottles of milk on the wall.\n`;
    expect(new Bottle().verse(3)).toBe(expected);
  });

  test("verse 2", () => {
    const expected =
      `2 bottles of milk on the wall, ` +
      `2 bottles of milk.\n` +
      `Take one down and pass it around, ` +
      `1 bottle of milk on the wall.\n`;
    expect(new Bottle().verse(2)).toBe(expected);
  });

  test("verse 1", () => {
    const expected =
      `1 bottle of milk on the wall, ` +
      `1 bottle of milk.\n` +
      `Take it down and pass it around, ` +
      `no more bottles of milk on the wall.\n`;
    expect(new Bottle().verse(1)).toBe(expected);
  });

  test("verse 0", () => {
    const expected =
      `No more bottles of milk on the wall, ` +
      `no more bottles of milk.\n` +
      `Go to the store and buy some more, ` +
      `99 bottles of milk on the wall.\n`;
    expect(new Bottle().verse(0)).toBe(expected);
  });

  test("a couple verses", () => {
    const expected =
      `99 bottles of milk on the wall, ` +
      `99 bottles of milk.\n` +
      `Take one down and pass it around, ` +
      `98 bottles of milk on the wall.\n` +
      `\n` +
      `98 bottles of milk on the wall, ` +
      `98 bottles of milk.\n` +
      `Take one down and pass it around, ` +
      `97 bottles of milk on the wall.\n`;
    expect(new Bottle().verses(99, 98)).toBe(expected);
  });

  test("a few verses", () => {
    const expected =
      `2 bottles of milk on the wall, ` +
      `2 bottles of milk.\n` +
      `Take one down and pass it around, ` +
      `1 bottle of milk on the wall.\n` +
      `\n` +
      `1 bottle of milk on the wall, ` +
      `1 bottle of milk.\n` +
      `Take it down and pass it around, ` +
      `no more bottles of milk on the wall.\n` +
      `\n` +
      `No more bottles of milk on the wall, ` +
      `no more bottles of milk.\n` +
      `Go to the store and buy some more, ` +
      `99 bottles of milk on the wall.\n`;
    expect(new Bottle().verses(2, 0)).toBe(expected);
  });

  test("the whole song", () => {
    const bottle = new Bottle();
    const expected = downTo(99, 0)
      .map((i) => bottle.verse(i))
      .join("\n");
    expect(bottle.song()).toBe(expected);
  });
});
