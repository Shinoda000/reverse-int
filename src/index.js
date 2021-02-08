module.exports = function reverse (n) {
  if (n >= 0) {
    return Number(String(n).split('').reverse().join(''));
  } else {
    return Number(String(Math.abs(n)).split('').reverse().join(''));
  }
}
