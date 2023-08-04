function getSumOfAnArray(numbers) {
  for (const i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element);
  }
  return sum;
}

function getOddNumbersOfAnArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];

    if (element % 2 === 0) {
      console.log(index, element);
    }
  }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumber = getSumOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getOddNumbersOfAnArray(oddNumbers);

console.log("odd number sum", oddNumberSum);
