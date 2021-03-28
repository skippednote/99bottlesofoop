const { downTo, capitalize } = require("../chapter-1/utils");

class Bottle {
  verse(number) {
    const bottleNumber = BottleNumber.for(number);

    return (
      `${capitalize(`${bottleNumber}`)} of milk on the wall, ` +
      `${bottleNumber} of milk.\n` +
      bottleNumber.action() +
      `${bottleNumber.successor()} of milk on the wall.\n`
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
  static for(number) {
    let bottleNumberClass;
    switch (number) {
      case 0:
        bottleNumberClass = BottleNumber0;
        break;
      case 1:
        bottleNumberClass = BottleNumber1;
        break;
      case 6:
        bottleNumberClass = BottleNumber6;
        break;
      default:
        bottleNumberClass = BottleNumber;
        break;
    }
    return new bottleNumberClass(number);
  }

  constructor(number) {
    this.number = number;
  }

  container() {
    return "bottles";
  }

  pronoun() {
    return "one";
  }

  quantity() {
    return this.number.toString();
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around, `;
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return "no more";
  }

  action() {
    return "Go to the store and buy some more, ";
  }

  successor() {
    return BottleNumber.for(99);
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return "bottle";
  }
  pronoun() {
    return "it";
  }
}

class BottleNumber6 extends BottleNumber {
  container() {
    return "six-pack";
  }

  quantity() {
    return "1";
  }
}

module.exports = {
  Bottle,
};
