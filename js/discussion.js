//数组长度变化的影响
//下面代码定义了一个空数组，然后为下标等于 100 的元素赋值，则 length 属性返回 101。因此，length 属性不能体现数组元素的实际个数。
// var a = []; //声明空数组

// a[100分] = 2;

// console.log(a.length); //返回101

//       0, 1, 2
var a = [1, 2, 3];
// a.length = 2
var a1 = a.length
console.log("a数组的长度为：" + a1);
console.log("第二个数组数字为：" + a[2]);

// a.length = 5;  //0,1,2,3,4
// console.log(a[4]);

// a.length = 2; //0,1
// console.log(a[2]);


var arr = ['熊二', 18, 'boy', '喜欢蜂蜜', '有个大哥']

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }
// 获取数组长度
var index = arr.length
// 添加元素
arr[index] = '喜欢翠花'

console.log(arr);


//方法一之 instanceof
console.log('---------方法一---------');
var a = [];
console.log('1类型为：');
console.log(a instanceof Array) //返回true

//方法二之 constructor
console.log('---------方法二---------');
var arr1 = [1, 2, 3]
console.log('2类型为：');
console.log(arr1.constructor == Array);

//方法三之 最简单的方法
console.log('---------方法三---------');
function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}
var arr3 = [1, 2, 3, 1];
console.log('3类型为：');
console.log(isArray(arr3));;// true 

//4.通过Array.isArray()判断

//Array.isArray() 用于确定传递的值是否是一个数组，返回一个布尔值。
console.log('---------方法四---------');
let c = [1, 2, 3]
console.log('4类型为：');
console.log(Array.isArray(c));
//true