// let yourName = prompt("Hãy nhập tên của bạn");
// // document.write("Xin chào " + yourName);

// alert("xin chào" + " " + yourName);

// Declare and use variables
// bài 1

// let i = 10;
// let f = 20.5;
// let b = true;
// let s = "Hà Nội";

// document.write("i=" + i);
// document.write("<br/>")
// document.write("f =" + f);
// document.write("<br/>")
// document.write("b =" + b);
// document.write("<br/>");
// document.write("s=" + s);

// // bài 2:

// let width = 20
// let height = 10
// let area = width * height
// document.write('Area = ' + area)

// bài 3

// let a = +prompt("nhập số a");
// let b = +prompt("nhập số b");

// if (a % b == 0) {
//     alert("a chia hết cho b");
// }
// else {
//     alert ("a không chia hết cho b");
// }

// Using the operator

// let  inputWidth = prompt("Enter the width") ;

// let  inputHeight = prompt("Enter the height");

// let width = parseInt(inputWidth);
// let height = parseInt(inputHeight);
// let area = width * height;

// document.write("result"+" " + area);

// // Display day-month-year

// let dd = +prompt("nhập giá trị ngày");
// let mm  = +prompt("nhập giá trị tháng");
// let yy = +prompt("nhập giá trị năm");

// document.write("hiển thị"+" " + dd + "-" + mm + "-" + yy);

// Formula for circumference of a circle

let r = +prompt("nhập giá trị bán kính hình tròn");
let pi = 3.14159;
let C = Math.ceil (2 * r * pi);

document.write("kết quả chu vi hình tròn" + " " + C);
document.write("<br/>")

// Formula for calculating circle

let R = +prompt("nhập giá trị bán kính hình tròn");
let pii = 3.14159;
let S = Math.ceil (R**2 * pii);

document.write("kết quả diện tích hình tròn" + " " + S);
