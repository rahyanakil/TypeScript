{
    //Mapped Types start
const arrOfNumbers :number[]=[1,2,4];
// const arrOfStrings:string[] =["1","2","3"]
const arrOfStrings :string[] =arrOfNumbers.map((number)=>number.toString())
console.log(arrOfStrings);


type AreaNumber ={
    height:number;
    width:number;

}
// type AreaString ={
//     height:string;
//     width:string;
// }

type AreaString={
    [key in keyof AreaNumber]:string
}

//Mapped Types end 
}
