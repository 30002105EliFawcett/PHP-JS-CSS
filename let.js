/* let is to declare a variable. const works the same.
Use let if variable going to change. const if its not going to change
5 and "5" are the same as JS doesnt use types.
Use == to check if 5 == "5" is the same and it is.
Use === to check type is the same.
5 === "5" values arent the same
*/


/* = () => { means that the function cant be called until after
    it has been set.
*/
let myhouse = () => {
    let house ="woodenhouse";
    return house;
}

/* writing a function like this means it can be called before the
function has been run. 
*/
function Greeting(){
    var name = "Jeff";
    return name;
}

console.log(myhouse())

console.log(Greeting())


//``=Template string