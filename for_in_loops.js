//for in loop in caseof Objects.

const insta ={
    username : "akhileshshukla2410",
    Name : "AkhileshShukla",
    password : "SHUkl@ji24",
}

for ( const value in insta) {
   console.log(value, ` : ${insta[value]}`)
}

// console.log(insta["username"]); to print using the bracket notation
// console.log(insta.username); to print using the .(dot) notation.




//for in loop in caseof arrays.

const names =["Akhilesh","Arpit","Ritavrat","Rano"]
for(let index in names){
    console.log(index, names[index]);
}

const a="akhilesh"
for(let value in a){
    console.log(value,a[value]);
}