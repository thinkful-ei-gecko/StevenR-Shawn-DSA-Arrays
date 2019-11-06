//5. URLify a string (cheat)
function cheaterUrlify(str) {
  return escape(str);
}

console.log(cheaterUrlify("tauhide parveen"));

//6. Filtering an array
function filterArray(arr) {
  let overFive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      overFive.push(arr[i]);
    }
  }
  return overFive;
}

console.log(filterArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

//7. Max sum in the array
function maxSum(arr) {
  let highestSum = 0;
  let currentSum = 0;
  for (let startIndex = 0; startIndex < arr.length; startIndex++) {
    currentSum = 0;
    for (let i = startIndex; i < arr.length; i++) {
      currentSum = currentSum + arr[i];
      if (currentSum > highestSum) {
        highestSum = currentSum;
      }
    }
    //console.log(`current highest sum is ${highestSum}`);
  }
  return highestSum;
}

let testArray = [4, 6, -3, 5, -2, 1];
console.log(maxSum(testArray));

//8. Merge arrays
function merge(arr1, arr2) {
  let mergedArray = [];
  
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] >= arr2[0]) {
      mergedArray.push(arr1[0]);
      arr1 = arr1.slice(1);
    }
    if (arr2[0] >= arr1[0]) {
      mergedArray.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }
}

let arr1 = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];

console.log(merge(arr1, arr2));

//8. Merge arrays  (cheat)
function cheaterMerge(arr1, arr2){
  let merged = arr1.concat(arr2)
  return merged.sort(function(a, b){return a-b});
}

console.log(cheaterMerge(arr1, arr2));

//9. Remove characters
function removeChar(str, chars){
  let solution = [];
  for(let i = 0; i < str.length; i++){
    for(let x = 0; x < chars.length; x++){
      if(str[i] != chars[x]){
        solution.push(str[i]);
        console.log(`str[${i}] =  ${str[i]}`);
        console.log(`chars[${x}] =  ${chars[x]}`);
      }
    }
  }
  return solution.toString();  
}

let testString = 'Battle of the Vowels: Hawaii vs. Grozny';
let testChars = 'aeiou';

console.log(removeChar(testString, testChars));