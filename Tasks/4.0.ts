{
    //start 


const getDisplayName=(name:string|null|undefined):string=>{
return name??"Anonymous";
}
const name1="Rahyan"
const name2 =null;
const name3 =undefined;
console.log(getDisplayName(name1));
console.log(getDisplayName(name2));
console.log(getDisplayName(name3));

    //end
}