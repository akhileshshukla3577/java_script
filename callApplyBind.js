let name1 = {
    firstName : 'Akhilesh',
    lastName : 'Shukla',
}

let name2 = {
    firstName : 'Arpit',
    lastName : 'Shukla',
}

const printfullname =  function(hometown,state) {
    console.log(this.firstName + " " + this.lastName + " " + "from" + " " + hometown + " " + state);
}

printfullname.call(name1,"Pune","Mahrashtra");
printfullname.call(name2,"Nagpur", "Mahrashtra");
//here name1(i.e first parameter will refer to the this.object(parameter) in the function.)

printfullname.apply(name1,["Pune","Maharashtra"])
printfullname.apply(name1,["Pune","Maharashtra"])
//for .apply we use array to refer to th parameter passed in the function.


let print=printfullname.bind(name1,"Pune","Maharashtra.")
let print2=printfullname.bind(name2,"Nagpur","Maharashtra.")
print();
print2();
// .bind will not return directly it should first get assigned to and then invoking it.

