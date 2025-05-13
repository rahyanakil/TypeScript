{//
    // Byusing  generic type we can use data dynamically reuse
    //Array generic type
    type GenericArray<T> =Array<T>
//const rollNumbers:number[]=[3,6,8];
const rollNumbers:GenericArray<number>=[3,6,8];
//const mentors :string[]=["Mr X","Mr Y","Mr Z"]
const mentors :GenericArray<string>=["Mr X","Mr Y","Mr Z"]
//const boolArray :boolean[]=[true,false,true]
const boolArray :GenericArray<boolean>=[true,false,true]

const user :GenericArray<{name:string,age:number}>=[
    {name:"Rahyan",
        age:100
    },
    {
        name:"jhankar",
        age:100
    }
]

//generic tuple(order follow kore)
type GenericTuple<X,Y>=[X,Y]
const manush:GenericTuple<string,string>=["Mr.X","Mr Y"]
const UserWithID:GenericTuple<number,{name:string,email:string}> =[1234,{name:"rahyan",email:"a@gmail.com"}]

//
}