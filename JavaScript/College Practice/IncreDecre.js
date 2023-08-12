var myNum = 42;

// console.log(myNum++);
// console.log(myNum);

// console.log(++myNum);
// console.log(myNum);

// var num1=(++myNum)+(myNum++);
// 43 + 43= 86

// var num1=(myNum++)+(++myNum);
// 42 + 44= 86

// var num1=(--myNum)+(myNum--);
//42+40=82

var num1 = (myNum--) + (--myNum);
//41+41=82
console.log(num1);