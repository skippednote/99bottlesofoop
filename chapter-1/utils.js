exports.downTo = (max, min) => {
  const numbers = [];
  for (let n = max; n >= min; n--) {
    numbers.push(n);
  }
  return numbers;
};

exports.capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
