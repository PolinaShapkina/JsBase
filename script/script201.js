let arr1 = [-1, 0, 2, -4, 6, -8];
let result1 = arr1.every(elem => elem > 0); 
console.log(result1);
//2
let arr2 = [-1, 0, 2, -4, 6, -8, 45, 27, 31];
let result2 = arr2.every((elem, index) => elem * index < 30);
console.log(result2);