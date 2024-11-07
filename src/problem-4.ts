{
  //Problem 4:
  // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
  // Sample Input 1:
  // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  // Sample Output 1:---> 78.54;
  // Sample Input 2:
  // const rectangleArea = calculateShapeArea({
  //   shape: "rectangle",
  //   width: 4,
  //   height: 6,
  // });
  // Sample Output 2:--> 24;

  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  type AreaType = Circle | Rectangle;

  const calculateShapeArea = (areaType: AreaType): number => {
    let shapeArea: number = 0;
    if (areaType.shape === "circle") {
      shapeArea = Math.PI * (areaType.radius * areaType.radius); //the rule of getting circle area: (PI * r^2)
    } else if (areaType.shape === "rectangle") {
      shapeArea = areaType.height * areaType.width; //rule of getting rectangle area = height * width
    }
    return shapeArea;
  };

  const circle: Circle = {
    shape: "circle",
    radius: 3,
  };
  const rectangle: Rectangle = {
    shape: "rectangle",
    height: 6,
    width: 5,
  };

  console.log(
    "Output from the conditional Statement:",
    calculateShapeArea(circle)
  );
  console.log(
    "Output from the conditional Statement:",
    calculateShapeArea(rectangle)
  );

  // the above code(conditional statement) is the first one which i have tried first, but in the conditional steatement i got a problem: i couldnt access the radius property in the areaType. I thought this is not the way to solve the issue, so i gave up, made it commented and tried the second block of code below, which is mainly class based. but later on i found out that the i only can access the property of these types there(first code) if i write "literal type" instead of "string" for the shape peoperty to match the condition. then i solved the problem an uncommented it. So judge which one you prefer, i didnt want to remove any of these code as both are the result of my time and effort. Though class based solution is not the efficient way for this problem.

  //Thanks for reading the looooong comment..! <3

  //
  class Parent {
    constructor(public shape: string) {
      this.shape = shape;
    }
  }

  class TheCircle extends Parent {
    constructor(shape: string, public radius: number) {
      super(shape);
      this.radius = radius;
    }
    circleArea() {
      return Math.PI * (this.radius * this.radius);  //the rule of getting circle area: (PI * r^2)
    }
  }

  class TheRectangle extends Parent {
    constructor(shape: string, public height: number, public width: number) {
      super(shape);
      this.height = height;
      this.width = width;
    }
    rectangleArea() {
      return this.height * this.width; //rule of getting rectangle area = height * width
    }//rule of getting rectangle area = height * width
  }

  const circleArea = new TheCircle("circle", 2);
  const rectangleArea = new TheRectangle("rectangle", 4, 5);

  console.log(
    "Printing from the class base solution:",
    circleArea.circleArea()
  );
  console.log(
    "Printing from the class base solution:",
    rectangleArea.rectangleArea()
  );

  //
}
