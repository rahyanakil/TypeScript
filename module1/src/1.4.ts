//Basic Typescript(define explecitely)
//string
let firstName:string ='mezba'
//Numberr
let roll:number =123
//boolean 
let isAdmin :boolean =true;
//undefined 
let x : undefined =undefined
//null 
let y :null =null 
//any type (not recommended to use in typescript)
//define implecitely anytype data which deactivate the typescript functionality
let d;

let friends :string[] =['rachel','monica']
let eligibleRollList:number[]=[1,2,3]
eligibleRollList.push(3)  

//tuple -->array -->order -->type of values
let coordinates:[number,number] =[1,5]
let ageName:[number,string,boolean]=[50,'Mr.X',true]
ageName[0] =67
