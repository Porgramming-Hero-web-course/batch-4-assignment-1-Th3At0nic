"use strict";
{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    //   Sample Input:
    // sumArray([1, 2, 3, 4, 5]);
    // Sample Output: 15;
    const sumArray = (array) => {
        let sumOfNumbers = 0;
        for (const number of array) {
            sumOfNumbers += number;
        }
        return sumOfNumbers;
    };
    const numbersArray = [1, 2, 3, 4];
    console.log(sumArray(numbersArray));
    //
}
