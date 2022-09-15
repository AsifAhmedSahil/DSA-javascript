// checking sum zero - problem 1
// [-5,-4,-3,-2,0,2,4,6,8]  ****Array sorted already*****
// [*,*] -> output
// time complexity quadretic O(n^2)


// !st function to check all the number are exist or not
// function getSumPairZero(array){
//     for(number of array){
//         console.log(number)

//     }
// }

// getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);


function getSumPairZero(array){
    for(let number of array){
        for(let j=1; j<array.length; j++){
            if(number + array[j]  == 0){
                return [number , array[j]];
            }
        }
    }
}

const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);
 



