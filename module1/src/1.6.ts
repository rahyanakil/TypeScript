{
    //Learning Function in Typescript
//Normal Function
function add(num1:number, num2:number=10):number{
    return num1+num2;
}

const addArrow =(num1:number,num2:number):number=>num1+num2

//object er vitore  -->function  lekhle oita k amra boli -->method

const RichUser=  {
 name:'Rahyan',
 balance:10000000000000,
 addBalance(balance:number):string{
    return `My new balance is :${this.balance +balance}`;
 }
}

const arr :number[]=[1,4,10]
const newArray:number[] =arr.map((elem:number):number =>elem*elem)




}