{
  //  Problem 3:
  // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
  // Sample Input:
  // countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
  // Sample Output: 2;
  //

  const countWordOccurrences = (sentence: string, word: string): number => {
    const targetWord = new RegExp(`\\b${word}\\b`, "gi"); // here that \\b for words boundery,g for global srch, i for case-insensitivity.
    const matchedCount = sentence.match(targetWord);
    return matchedCount ? matchedCount.length : 0;
  };

  const sampleSentese: string = "TypeScript is great. I love TypeScript. TypeSCrIpt is not typescriptssssss! Do you love TypeScript??";
  const sampleWord: string = "typescRIpt";
  
  console.log(countWordOccurrences(sampleSentese, sampleWord))

  //
}
