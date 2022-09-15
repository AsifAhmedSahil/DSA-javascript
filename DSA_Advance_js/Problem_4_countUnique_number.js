// count unique number
// conditions
// i=0 , i=1
// arrray[i] !== array[j]
// i++
// array[i] = array[j]
// i+1 ;

// time complexity is O(n)

function getUniqueNumber(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i]=array[j];
      }
    }
    return i+1;
  }
  else{
    throw new Error("Array is Empty");
  }
}

const result = getUniqueNumber([1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9]);
console.log(result);
