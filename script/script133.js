let arr1 = [1, 2, 3, 4, 5];
for (let i = 1; i < arr1.length; 
	i++) { 
	console.log(arr1[i + 1] + arr1[i]);
}
let arr2 = [1, 2, 3, 4, 5];
for (let i = 2; i < arr2.length; 
	i++) { 
	console.log(arr2[i - 2]);
	console.log(arr2[i - 1]);
}
let arr3 = [1, 2, 3, 4, 5];
for (let i = 2; i < arr3.length; 
	i++) { 
	console.log(arr3[i - 1] + arr3[i - 2] + arr3[i]);
}