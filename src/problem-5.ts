{
  //Problem 5:
  // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
  // Sample Input:
  // const person = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name"));
  // Sample Output: Alice;

  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  const person = { name: "rahatttttt", age: 2222 };
  const car = { name: "Toyota", model: 3333333, isNew: true };
  const numArray = [2, 3, 45, 5]; //this is just for my own curiousity to check array and access elements by index number works same way. yeah it works! :D

  console.log("Printing Person info:", getProperty(person, "age"));
  console.log("Printing Car info:", getProperty(car, "isNew"));

  //
}
