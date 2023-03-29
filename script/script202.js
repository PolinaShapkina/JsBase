let arr1 = [-2, 4, -6, -8];
let result1 = arr1.some(elem => elem > 0); 
console.log(result1);
// 2
let arr2 = [2, 4, 6, 8, 30, 50, 29];
let result2 = arr2.some((elem, index) => elem * index < 30);
console.log(result2);