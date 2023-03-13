let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let mainArr of arr) {
    for (let elem of mainArr) {
        sum += elem
    };
};
console.log(sum)
let arr1 = [[[1, 2], [3, 4]], [[5, 
	6], [7, 8]]]; 
let sum1 = 0;
for (let mainArr of arr1) {
    for (let SubArr of mainArr) {
        for (let SubMainArr of SubArr) {
            sum1 += SubMainArr
        };
    };
};
let arr3 = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let sum3 = 0;
for (let i = 0; i <= arr3.length - 1; i++) {
    for (let k = 0; k <= arr3[i].length - 1; k++) {
        sum3 += arr3[i][k];
    };
};
console.log(sum3)