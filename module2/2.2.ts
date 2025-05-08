{
    //interface, type vs interface start
    // how to use type
type User1={
    name:string;
    age:number;
};
// declare user1 added  with a new property role 
type UserwithRole1 =User1 &{role:string}
const user1:UserwithRole1={
    name:"Rahyan",
    age:27,
    role:"manager"
}
//how to use interface
interface User2{
    name:string;
    age:number;
}
interface UserwithRole2 extends User2{
    role:string;
}
const user2:UserwithRole2={
    name:"Rahyan",
    age:27,
    role:"manager"
}

//js -->object, array -->object function -->object
//for array declaring type
type Roll1 =number[]
// for array declaring interface
interface Roll2{
    [index:number]:number
}
const rollNumber1 :Roll =[1,2,3]

//for function declaring type (cause it is an object)
type Add1 = (num1:number,num2:number)=>number
interface Add2{
    (num1:number,num2:number):number
}
const add:Add2 =(num1,num2)=>num1+num2



    //interface, type vs interface end
}