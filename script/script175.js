let num = 1;
function func() {
	num = 2;
}
func();
console.log(num);
let num1 = 1;
function func1() {
	num1 = 2;
}
console.log(num1);
let num2 = 1;
function func2() {
	let num2 = 2;
}
func2();
console.log(num2);
let num3 = 1;
function func3() {
	let num3 = 2;
}
console.log(num3);
func3();
let num4 = 1;
function func4() {
	num4 = 2;
}
console.log(num4);
func4();
let num5 = 1;
function func5() {
	num5++;
}
func5();
func5();
func5();
console.log(num5);
function func6() {
	num6 = 2;
}
let num6 = 1;
console.log(num6);
func6();