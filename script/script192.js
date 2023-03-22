!function() {
	console.log('!');
}();
+function() {
	console.log('!');
}();
let result = function() {
	return '!';
}();
console.log(result);
let result1 = function() {
	return '!';
};
console.log(result1);
let result2 = function() {
	return '!';
};
console.log(result2());
let result3 = function() {return 1;}() 
	+ function() {return 2;}(); 
console.log(result3);
let result4 = (function() {
	return '!';
}());
console.log(result4);
let result5 = (function() {
	return '!';
})();
console.log(result5);
let result6 = (function() {
	return '!';
});
console.log(result6);
(function(num1, num2) {
	console.log(num1 + num2);
})(1, 2);
let str = 'str';
(function() {
	console.log(1);
})();