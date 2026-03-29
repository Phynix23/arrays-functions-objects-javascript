function processWord() {
  const words = [
    { word: "hello"},
    { word: "world"},
    { word: "javascript"},
    { word: "programming"},
    { word: "language"},
    { word: "array"},
    { word: "processing"},
    { word: "function"},
    { word: "code"},
    { word: "development"}
  ];

  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  console.log("Words and their vowel counts:");
  for (let i = 0; i < words.length; i++) {
    const word = words[i].word;
    let wordVowelCount = 0;
    for (let j = 0; j < word.length; j++) {
      if (vowels.includes(word[j].toLowerCase())) {
        vowelCount++;
        wordVowelCount++;
      }
    }
    console.log(`${word}: ${wordVowelCount} vowels`);
  }
  console.log(`\nTotal vowels in all words: ${vowelCount}`);
}
processWord();