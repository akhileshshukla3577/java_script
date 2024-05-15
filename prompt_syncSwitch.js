const prompt = require('prompt-sync')();

const fruit = prompt("Which fruit do you need : ");

switch(fruit){
    case 'Apple':
        console.log("The Apple is 350rs kg");
    break;
    case 'Banana':
        console.log("The Banana is 250rs kg");
    break;
default:
    console.log("The requested fruit is not available");
}
// switch (fruit) {
//     case 'Apple':
//         console.log("The Apple is 350rs kg");
//         break;
//     case 'Banana':
//         console.log("The Banana is 350rs kg");
//         break;
//     default:
//         console.log("The requested fruit is not available");
//         break;
// }