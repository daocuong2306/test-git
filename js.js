// Number, String, Array, Object , null , undefined 
// let a = [2,"cường",[1,2,3,4,5,6], {}, null,undefined];
// let b = {
//     // key : value;
//     name : "cường",
// }
// console.log(b.name);
// tổng có 3 kiểu khai báo dữ liệu
// var , let , const
// function :
        // - có giá trị truyền vào và có giá trị trả về
        // - có giá trị truyền vào và không có giá trị trả về
        // - không giá trị truyền vào và có giá trị trả về
        // - không giá trị truyền vào và không có giá trị trả về
        // function default
    // function sum(a=2,b=1) {
    
    //  return a+b; 
    // }
    // console.log(sum())

// for: là vòng lặp để lập đi lập lại 1 công việc nhất định

let arry = [1,2,3];
console.log(arry.length)
console.log(arry[0]);
console.log(arry[1]);
console.log(arry[2]);


// for(1,2,3) {
//     4
// }
// 1: là giá trị bắt đầu chạy của for
// 2 : là điều kiện để có thể chạy được for: nếu điều điện trả 
// ra là true thì công việc thứ 4 được thực hiện
// 3: là bước chạy của for hoặc nó là điều kiện tương tác vào 2 để thoắt vòng lặp
for(let i=0;i<=arry.length;i++) {
    console.log(arry[i]);
    // i=0; i<3; thực hiện công việc ; i++ || i=0+1
    // i=1; i<3=>true ;  thực hiện công việc ; i++ || i=1+1
    // i=2; i<3=>true ; thực hiện công việc ; i++ || i=2+1
    // i=3 ; i<=3=>true : thực hiện công việc ; i++ || i=3+1
    // i=4 ; i<=3 =>false
}
// for of
let arryB = ["cường","kiên"]
for (let item of arryB) {
    console.log(item)
}
// cú pháp for of 
    // for(let 1 of 2) {
    //     3
    // }
    // 1 là tên biến đặt bất kì
    // 2 :là mảng mà dòng for sẽ duyệt qua

// hoisting(để ý khi đi xin việc)

// const c;
// c=10;
