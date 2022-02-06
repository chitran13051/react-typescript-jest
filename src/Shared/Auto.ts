export class Auto {
  //access modifiers : public, private, protected
  name: string;
  year: number;
  hello = function () {
    return "hehe";
  };
  hello1() {
    return "qwqw1";
  }

  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;

    console.log("constructor is triggered");
  }

  static start() {
    console.log(`${this.name} is starting`);
  }
}
