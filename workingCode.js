// print sum of natural number (n)

// let n = n
const sum = (n) => {
  let sumOfn = 0;
  let num = 1;
  if (num < n) {
    for (let i = 1; i <= n; i++) {
      sumOfn += num;
      num++;
    }
    console.log(sumOfn);
  } else {
    sumOfn = num;
    console.log(sumOfn);
  }
};
sum(5);
