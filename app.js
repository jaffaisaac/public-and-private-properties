// class person{
//     constructor(name,age =80){
//         this._name = name;
//         this.age =age;
//     }
//     set nameMethod(name){
//         this._name =name;
//     }

// }
// const jaffa = new person('ben' ,20);
// console.log(jaffa._name ='Welcome', jaffa.age=70)
// // const p = new person(50)
// // console.log(p.age)



class StudyGroup {
 constructor(name) {
 this.name = name;
 }
 set name(newName) {
 this.name = newName;
 }
}
const jsGroup = new StudyGroup("js");
// RangeError: Maximum call stack size exceeded

console.log(jsGroup)

// If you try to run the above code snippet, you would see a RangeError stating 
// Maximum call stack size exceeded, which is because of your setter property recursively 
// setting itself, going into an infinite function call. Therefore, you must never have your 
// setter method name the same as that of your property because accessing the property 
// setter by its own name inside the setter creates an infinite recursive function call.