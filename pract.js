// // function xyz(a,b) {
// //     let result = a+b
// //     display(result)
// // }

// // function display(result){
// //     console.log(result)
// // }
// // xyz(3, 5);

// // setTimeout(() => {
// //     console.log("timer");
// // }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });



// console.log("Start");

// setTimeout(function c(){
//     console.log("Callback")
// },5000);

// console.log("End")

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000){
//     endDate=new Date().getTime
// }
// console.log("Start")

// setTimeout(function c(){
//     console.log("Callback");
// },5000)

// console.log("End")


const cart =["Pants","Shirts","gloves"]

api.createOrder(cart,function() {
    api.proceedToPayment(function (){
        api.orderSummary();
    });
})

