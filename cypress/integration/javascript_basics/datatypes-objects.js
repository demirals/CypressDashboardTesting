var name = "Selami"
var age = 44
var name_object = {firstName:"Selami", lastName:"Demiral"}
var truth = true
var sheets = ["HTML", "CSS", "JS"]
var a = null;

//object

var student = {
firstName:"Selami",
lastName:"Demiral",
age:44,
height:174,

fullName : function(){
    return this.firstName + " " + this.lastName 
 }

}

const ageValue = student.age

console.log(ageValue)
console.log(student.fullName())