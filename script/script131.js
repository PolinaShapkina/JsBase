let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; 
let counter = 0;
let counter1 = 0;
for (let elem of arr) {
	if (elem == 3) {
		counter++;
	}
}
console.log(counter);

// 2
let arr1 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; 
let counter2 = 0;
let counter3 = 0;
for (let elem of arr1) {
	if (elem == 3) {
		counter2++;

	}
    if (elem == 2) {
		counter3++;
	}
}
console.log(counter2);
console.log(counter3);