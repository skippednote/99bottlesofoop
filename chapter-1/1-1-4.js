const { downTo } = require("./utils");

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join("\n");
  }

  verse(number) {
    switch (number) {
      case 0:
        return (
          "No more bottles of milk on the wall, " +
          "no more bottles of milk. \n" +
          "Go to the stores and buy some more, " +
          "99 bottles of milk on the wall.\n"
        );

      case 1:
        return (
          "1 bottle of milk on the wall, " +
          "1 bottle of milk. \n" +
          "Take it down and pass it around, " +
          "no more bottles of milk on the wall.\n"
        );

      case 2:
        return (
          "2 bottle of milk on the wall, " +
          "2 bottle of milk. \n" +
          "Take it down and pass it around, " +
          "1 bottle of milk on the wall.\n"
        );

      default:
        return (
          `${number} bottle of milk on the wall, ` +
          `${number} bottle of milk. \n` +
          "Take one down and pass it around, " +
          `${number - 1} bottles of milk on the wall.\n`
        );
    }
  }
}

const b = new Bottles();
const s = b.song();
console.log(s);
