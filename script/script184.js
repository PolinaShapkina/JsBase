let newobj = {
    func1: function () { return 1 },
    func2: function () { return 2 },
    func3: function () { return 3 },
};
let sum = newobj.func1() + newobj.func2() + newobj.func3();
console.log(sum);
for (let elem in newobj) {
    console.log(newobj[elem]())
};
let arrNum = [1, 2, 3, 4, 5];
const calcArr = {
    sumArr: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem
        }
            return sum;
        },
    sumArrSquare: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += Math.pow(elem, 2)
        }
            return sum;
        },
    sumArrCube: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += Math.pow(elem, 3)
        }
            return sum;
        }
    };
console.log(`Сумма элементов  ${arrNum} = ${ calcArr.sumArr(arrNum) }`);
console.log(`Сумма квадратов  ${arrNum} = ${ calcArr.sumArrSquare(arrNum) }`);
console.log(`Сумма кубов  ${arrNum} = ${ calcArr.sumArrCube(arrNum) }`)