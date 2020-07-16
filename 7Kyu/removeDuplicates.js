// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]);  => [4, 6, 3]

const isPresent = (element, array, i) => {
  for (let index = i + 1; index < array.length; index++) {
    //if element found at any index, return true
    if (array[index] === element) return true;
  }
  //if element not found at any index, return false
  return false;
};

function solve(arr) {
  //loop through the array
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    //for each element, check if it has a duplicate
    const element = arr[index];
    if (!isPresent(element, arr, index)) {
      //if no duplicate, include in the result
      result.push(element);
    }
    //if it has a duplicate,do not include in the result
  }
  return result;
}

console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);
