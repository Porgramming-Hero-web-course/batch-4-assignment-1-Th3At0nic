{
  //     Problem 7:
  // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
  // Sample Input 1:
  // const car = new Car("Honda", "Civic", 2018);
  // car.getCarAge();
  // Sample Output 1:
  // 6 (assuming current year is 2024)
  //
  //solution:

  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge() {
      return new Date().getFullYear() - this.year; //extracting only year number from Date func
    }
  }

  const carAge = new Car("Toyota", "Premio", 2011);

  console.log(carAge.getCarAge());

  //
}
