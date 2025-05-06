// How to write object in typescript
//implicit type object(type defined kora nai)
const Implicituser ={
    firstName:"Rahyan",
    MiddleName:"Shamsi",
    LastName:"Akil"
}

//explecit type object (type defined kora thake)
const Explicituser:{
    firstName:string;
    middleName?:string;//optional type
    lastName:string;
} ={
    firstName:"Rahyan",
    middleName:"Shamsi",
    lastName:"Akil"
}