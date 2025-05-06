// How to write object in typescript
//implicit type object(type defined kora nai)
const Implicituser ={
    firstName:"Rahyan",
    MiddleName:"Shamsi",
    LastName:"Akil"
}

//explecit type object (type defined kora thake)
const Explicituser:{
   readonly company:'RSA Corporation Bangladesh';//literal type (value jodi fixed hye jai then amra use korate pari )
    firstName:string;
    middleName?:string;//optional type
    lastName:string;
    isMarried:boolean;
} ={
    company:"RSA Corporation Bangladesh",
    firstName:"Rahyan",
    middleName:"Shamsi",
    lastName:"Akil",
    isMarried:true
}
