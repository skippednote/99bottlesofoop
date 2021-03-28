const { downTo, capitalize } = require("../chapter-1/utils");

class Bottle {
  verse(number) {
    const bottleNumber = new BottleNumber(number);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());

    return (
      `${capitalize(
        bottleNumber.quantity()
      )} ${bottleNumber.container()} of milk on the wall, ` +
      `${bottleNumber.quantity()} ${bottleNumber.container()} of milk.\n` +
      bottleNumber.action() +
      `${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of milk on the wall.\n`
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
    return new BottleNumber(number).container();
  }

  quantity(number) {
    return new BottleNumber(number).quantity();
  }

  action(number) {
    return new BottleNumber(number).action();
  }

  successor(number) {
    return new BottleNumber(number).successor();
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  container() {
    if (this.number === 1) {
      return "bottle";
    } else {
      return "bottles";
    }
  }

  pronoun() {
    if (this.number === 1) {
      return "it";
    } else {
      return "one";
    }
  }

  quantity() {
    if (this.number === 0) {
      return "no more";
    } else {
      return this.number.toString();
    }
  }

  action() {
    if (this.number === 0) {
      return "Go to the store and buy some more, ";
    } else {
      return `Take ${this.pronoun()} down and pass it around, `;
    }
  }

  successor() {
    if (this.number === 0) {
      return 99;
    } else {
      return this.number - 1;
    }
  }
}

module.exports = {
  Bottle,
};
