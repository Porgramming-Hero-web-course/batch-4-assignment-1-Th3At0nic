{
  //  Problem 3:
  // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
  // Sample Input:
  // countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
  // Sample Output: 2;
  //
  //solution:

  const countWordOccurrences = (sentence: string, word: string): number => {
    const targetWord = new RegExp(`\\b${word}\\b`, "gi"); //that \\b at both side is for word boundery,no partial match count. g for global srch,i for case-insensitivity,
    const matchedCount = sentence.match(targetWord);
    return matchedCount ? matchedCount.length : 0;
  };

  const sampleSentese: string =
    "TypeScript is great. I love TypeScript. TypeSCrIpt is not typescriptsss! Do you love TypeScript or tttttypescript or tyPEscriPT??";
  const sampleWord: string = "typescRIpt";

  console.log(countWordOccurrences(sampleSentese, sampleWord));

  //
}
