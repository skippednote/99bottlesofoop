const { capitalize, downTo } = require("./utils");

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(bottleAtStart, bottleAtEnd) {
    return downTo(bottleAtStart, bottleAtEnd)
      .map((bottles) => this.verse(bottles))
      .join("\n");
  }

  verse(bottles) {
    return new Round(bottles).toString();
  }
}

class Round {
  constructor(bottles) {
    console.log("r");
    this.bottles = bottles;
  }

  toString() {
    return this.challenge() + this.response();
  }

  challenge() {
    return (
      capitalize(this.bottlesOfMilk()) +
      " " +
      this.onWall() +
      ", " +
      this.bottlesOfMilk() +
      ".\n"
    );
  }

  response() {
    return (
      this.goToTheStoreOrTakeOneDown() +
      ", " +
      this.bottlesOfMilk() +
      " " +
      this.onWall() +
      ".\n"
    );
  }

  bottlesOfMilk() {
    return (
      this.anglicizedBottleCound() +
      " " +
      this.pluralizedBottleForm() +
      " of " +
      this.milk()
    );
  }

  milk() {
    return "milk";
  }

  onWall() {
    return "on the wall";
  }

  pluralizedBottleForm() {
    return this.isLastMilk() ? "bottle" : "bottles";
  }

  anglicizedBottleCound() {
    return this.isAllOut() ? "no more" : this.bottles.toString();
  }

  goToTheStoreOrTakeOneDown() {
    if (this.isAllOut()) {
      this.bottles = 99;
      return this.buyNewMilk();
    } else {
      const lyrics = this.drinkMilk();
      this.bottles--;
      return lyrics;
    }
  }

  buyNewMilk() {
    return "Go to the store and buy some more";
  }

  drinkMilk() {
    return `Take ${this.itOrOne()} down and pass it around`;
  }

  itOrOne() {
    return this.isLastMilk() ? "it" : "one";
  }

  isAllOut() {
    return this.bottles === 0;
  }

  isLastMilk() {
    return this.bottles === 1;
  }
}

const b = new Bottles();
const s = b.song();
console.log(s);
