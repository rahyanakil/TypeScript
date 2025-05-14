{
    //start
    const singleString ="hello";
    const reverseString= (input:string):string=>{
        return input.split('').reverse().join("");
    }
    const reversedString =reverseString(singleString);
    console.log(reversedString)
    //end
}