const { downTo, capitalize } = require("../chapter-1/utils");

class CountdownSong {
  constructor(verseTemplate, max = 999999, min = 0) {
    this.verseTemplate = verseTemplate;
    this.max = max;
    this.min = min;
  }

  verse(number) {
    return this.verseTemplate.lyrics(number);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join("\n");
  }

  song() {
    return this.verses(this.max, this.min);
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

class BottleVerse {
  static lyrics(number) {
    return new BottleVerse(BottleNumber.for(number)).lyrics();
  }

  constructor(bottleNumber) {
    this.bottleNumber = bottleNumber;
  }

  lyrics() {
    return (
      `${capitalize(`${this.bottleNumber}`)} of milk on the wall, ` +
      `${this.bottleNumber} of milk.\n` +
      this.bottleNumber.action() +
      `${this.bottleNumber.successor()} of milk on the wall.\n`
    );
  }
}

module.exports = {
  CountdownSong,
  BottleNumber,
  BottleNumber0,
  BottleNumber1,
  BottleNumber6,
  BottleVerse,
};
