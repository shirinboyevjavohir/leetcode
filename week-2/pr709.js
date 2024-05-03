const toLowerCase = function (s) {
  let n = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) <= 90 && s.charCodeAt(i) >= 65) {
      n += String.fromCharCode(s.charCodeAt(i) + 32);
    } else {
      n += s[i];
    }
  }

  return n;
};
const s = "HellO";
toLowerCase(s);
