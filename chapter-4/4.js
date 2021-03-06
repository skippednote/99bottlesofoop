const { downTo, capitalize } = require("../chapter-1/utils");

class Bottle {
  verse(number) {
    return (
      `${capitalize(this.quantity(number))} ${this.container(
        number
      )} of milk on the wall, ` +
      `${this.quantity(number)} ${this.container(number)} of milk.\n` +
      this.action(number) +
      `${this.quantity(this.successor(number))} ${this.container(
        this.successor(number)
      )} of milk on the wall.\n`
    );
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join("\n");
  }

  song() {
    return this.verses(99, 0);
  }

  container(number) {
    if (number === 1) {
      return "bottle";
    } else {
      return "bottles";
    }
  }

  pronoun(number) {
    if (number === 1) {
      return "it";
    } else {
      return "one";
    }
  }

  quantity(number) {
    if (number === 0) {
      return "no more";
    } else {
      return number.toString();
    }
  }

  action(number) {
    if (number === 0) {
      return "Go to the store and buy some more, ";
    } else {
      return `Take ${this.pronoun(number)} down and pass it around, `;
    }
  }

  successor(number) {
    if (number === 0) {
      return 99;
    } else {
      return number - 1;
    }
  }
}

module.exports = {
  Bottle,
};
