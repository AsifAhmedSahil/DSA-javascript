// checking sum zero - problem 1

// [-5,-4,-3,-2,0,2,4,6,8]  ****Array sorted already*****

// 1st pair of zero
// [*,*] -> output

// [-4,4]

// function sahilGetSumPair(array){
//     for(let number of array){
//         console.log(number);

//     }

// } i = -5
// sahilGetSumPair([-5,-4,-3,-2,0,2,4,6,8])

// function sahilGetSumPair(array){
//     for(let number of array){
//         console.log("outer loop")
//         for(let j = 1; j<array.length; j++){
//             console.log("inner loop")
//             if(number + array[j] == 0){
//                 return [number , array[j]];
//             }
//         }

//     }

// }
// const result = sahilGetSumPair([-5,-4,-3,-2,0,2,4,6,8])
// console.log(result);

// O(n^2) --> time complexity

// [-5,-4,-3,-2,0,2,4,6,8]
// left = -5
// right = 8

// sum = 3
// 0>3>0 == 0
// if else    -5+8 = 3   -5+6 = 1 

function anotherSolutionPair(array){

    let left = 0;
    let right = array.length - 1;

    while(left < right){
        sum = array[left] + array[right];

        if(sum == 0){
            return [array[left] , array[right]];
        }
        else if(sum > 0){
            right --;

        }
        else{
            left++;
        }

    }



}

const result = anotherSolutionPair([-5,-4,-3,-2,0,2,4,6,8])
console.log(result);





