{
  //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
  //   Sample Input:
  // removeDuplicates([1, 2, 2, 3, 4, 4, 5])[
  //     Sample Output:
  //     (1, 2, 3, 4, 5)
  //   ];

  const removeDuplicates = (array: number[]): number[] => {
    const uniqueArray = [...new Set(array)];
    return uniqueArray;
  };

  const numbersArray: number[] = [1, 2, 3, 1, 3, 4, 6, 7, 5, 4, 6, 5, 12, 12, 12];

  console.log(removeDuplicates(numbersArray));

  //
}
