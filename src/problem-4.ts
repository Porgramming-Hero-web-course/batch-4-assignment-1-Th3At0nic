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
    shape: string;
    radius: number;
  };
  type Rectangle = {
    shape: string;
    height: number;
    width: number;
  };

  const calculateShapeArea = (areaType: Circle | Rectangle): number => {
    if (areaType.shape === "circle") {
      return 4;
    } return 4;
  };

  //
}
