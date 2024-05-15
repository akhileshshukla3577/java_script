const jUser= {
    Name : "Akhilesh",
    age : 18,
    location : "Kashmir",
    email : "akhileshshukla2410@gmail.com",
    isLogggedIn : false,
    lastloginDays : ["Monday" ,"Saturday"]
}

jUser.Name= "Arpit";
//Object.freeze(jUser);
// console.log(jUser.lastloginDays);
// console.log(jUser["location"]);
//console.log(`Hello ${jUser.Name}`);

jUser.arpit = function (){
    console.log(`Hello jUser, ${this.Name}`);
}
console.log(jUser.arpit())

// console.log(`Hello jUser, ${this.Name}`);