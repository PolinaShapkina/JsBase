function test() {
	let num = 1;
	return function() {
		console.log(num);
		num++;
	}
}
let func = test();
func(); 
func(); 
func(); 
func(); 
func();
function test() {
	let num = 10;
	return function() {
		console.log(num);
		num--;
	};
}
let func1 = test();
func1(); 
func1();
function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}
func()();
func()();
func()();
function func3() {
	let num = 0;
	return function() {
		console.log(num);
		num++;
	};
}
let test3 = func3;
test3()();
test3()();
test3()();
let counter = 0;
		
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
}
let func = test;
let func4 = func();
let func2 = func();
func4();
func2();
func4();
func2();
function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}
let func = test()();
let func5 = func;
let func6 = func;
func5();
func6();
func5();
func6();