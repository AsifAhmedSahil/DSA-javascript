// string Anagram
// sahil --> lihas
// Asif --> fisA


// Conditions
// Lenght check 1st (both string)
// string Sahil
// {S:1 , a:1 , h:1 , i:1 ,l:1}
// compare 2nd string and decrement the number of the word which is mapped by 1st string


function isAnagram(string1 , string2){
    if(string1.length != string2.length){
        return false
    }

    // let counter = {}
    // for(let letter of string1){
    //     counter[letter] = counter[letter];
    //     console.log(counter[letter]);
    // } --> for this code here output is undefined for 5 times loops...bcoz solution below


    // let counter = {}
    // for(let letter of string1){
    //     counter[letter] = counter[letter] || 0; 
    //     console.log(counter[letter]);
    // } --> here || 0 for ternery bcoz of undefined or null check

    let counter = {}
    for(let letter of string1){
        counter[letter] = (counter[letter] || 0) + 1; 
        console.log(counter[letter]);
    }

    for(let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items]-=1;

    }
    return true;
}
const result=isAnagram('sahil' , 'lihas');
console.log(result);


// time comploxity O(n)  **************