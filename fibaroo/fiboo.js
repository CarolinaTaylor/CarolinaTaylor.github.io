function fib(n) {
  let fibList = [0, 1];
  for (let i = 2; i < n; i++) {
    fibList.push(fibList[i - 1] + fibList[i - 2]);
  }
  return fibList.slice(0, n);
}

let fibonacciNumbers = fib(50);
console.log(fibonacciNumbers);

const numsToStrings = (numbers) => numbers.map(num => `${num}`);

function fib(n) {
  let fibList = [0, 1];
  for (let i = 2; i < n; i++) {
    fibList.push(fibList[i - 1] + fibList[i - 2]);
  }
  return fibList.slice(0, n);
}

console.log(numsToStrings(fib(50)));

const numEvenNums = (numbers) => numbers.filter(num => num % 2 === 0).length;

function fib(n) {
  let fibList = [0, 1];
  for (let i = 2; i < n; i++) {
    fibList.push(fibList[i - 1] + fibList[i - 2]);
  }
  return fibList.slice(0, n);
}

console.log(numEvenNums(fib(50)));




