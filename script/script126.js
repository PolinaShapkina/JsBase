let arr = [];
for (let i = 1; i <= 10; i++) {
	arr.push(i);
}
console.log(arr);
let arr1 = [];
for (let i = 1; i <= 10; i++) {
	arr1.push('x');
}
console.log(arr1);
let arr3 = [7, -9, 7, 53, -2, -4, 9, 10, -2];
let Arr = [];
for (let key in arr3) {
    if (arr3[key] > 0) {
        Arr.push(arr3[key]);
    } else {
        continue;
    }
}
console.log(arr3); 
console.log(Arr);