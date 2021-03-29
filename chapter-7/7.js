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
    const bottleNumberClass = BottleNumber.registry.find((candidate) =>
      candidate.canHandle(number)
    );
    return new bottleNumberClass(number);
  }

  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
  }

  static canHandle(number) {
    return true;
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

BottleNumber.registry = [BottleNumber];

class BottleNumber0 extends BottleNumber {
  static canHandle(number) {
    return number === 0;
  }

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
BottleNumber.register(BottleNumber0);

class BottleNumber1 extends BottleNumber {
  static canHandle(number) {
    return number === 1;
  }
  container() {
    return "bottle";
  }
  pronoun() {
    return "it";
  }
}
BottleNumber.register(BottleNumber1);

class BottleNumber6 extends BottleNumber {
  static canHandle(number) {
    return number === 6;
  }
  container() {
    return "six-pack";
  }

  quantity() {
    return "1";
  }
}
BottleNumber.register(BottleNumber6);

module.exports = {
  Bottle,
};
