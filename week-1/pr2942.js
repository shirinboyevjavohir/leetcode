const findWordsContaining = function (words, x) {
  const findIndex = [];
  words.map((item, index) => {
    if (item.includes(x)) {
      findIndex.push(index);
    }
  });

  return findIndex;
};

const words = ["abc", "bcd", "aaaa", "cbc"],
  x = "a";
findWordsContaining(words, x);
