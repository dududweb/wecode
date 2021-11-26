const arr = [];
const searchEven = () => {
  for (let num = 1; num <= 50; num++) {
    if (num % 2 == 0) {
      arr.push(num);
    }
  }
  return arr;
};

searchEven();
