{
  //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
  //   Sample Input:
  // sumArray([1, 2, 3, 4, 5]);
  // Sample Output: 15;

  const sumArray = (array: number[]): number => {
    let sumOfNumbers: number = 0;
    for (const number of array) {
      sumOfNumbers += number;
    }
    return sumOfNumbers;
  };

  const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7];

  console.log(sumArray(numbersArray));

  //
}
