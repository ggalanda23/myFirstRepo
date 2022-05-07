
/* task1 */


// function task1(number , value){
//     let arr = [];
//     for ( let i = 0 ; i < number ; i++ ) {
//         arr[i] = value;
//     }
//     return arr;
// }
// let res = task1(5,"ghgh");
// console.log(res);


/* task 2

function task2(arr){
    let newArr = [];
    for ( i = arr.length - 1; i >=0 ; i -- ){
        newArr.push(arr[i]);
    }
    return newArr
}
console.log(task2([1,2,3]));  */


/* task 3 

function task3(arr){
    let newArr = []

    for ( let i = 0; i < arr.length ; i ++) {
        if (arr[i]){
            newArr.push(arr[i]);
        }
        return newArr
    }
}
let test = [0, 1, false , 2, undefined ,"asasas", 3,null];
console.log(task3(test));   */


/*task4    */ 

/*function task4(arr){
    let obj = {};
    for ( let i = 0 ; i < arr.length ; i++){
        obj[arr[i][0]] = arr[i][1];
    }
    return obj;
}

let test = [
    ["a", 1],
    ["b", 2],
];
console.log(task4(test));*/



// task 5

// const task5 = (arr) => {
//   return arr.filter((el , index) => {
//       return arr.indexOf(el) == index;
//   });
// }
// console.log(task5([1, 1, 2,4,5,5]));

// another way to remove duplicate //

let arr = [66 , 56 ,56, 77 , 76, 76 , 66 ];
let newArr = [];
for ( let i = 0 ; i < arr.length ; i++ ) {
     if (arr.indexOf(arr[i]) == i) newArr.push(arr[i])
}
console.log(newArr);




// function odd(value){
//     return value % 2;
// }

// let res = [1 ,2 , 3, 4].filter(odd);
// console.log(res);