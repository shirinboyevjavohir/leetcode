const romanToInt = function (s) {
  romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let summ = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanNumber[s[i]] < romanNumber[s[i + 1]]) {
      summ += romanNumber[s[i + 1]] - romanNumber[s[i]];
      i++;
    } else {
      summ += romanNumber[s[i]];
    }
  }
  return summ;
};

const s = "III";
romanToInt(s);
