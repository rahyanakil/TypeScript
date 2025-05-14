{
    //start
    const processInput= (input:string|number):number=>{
        if(typeof input==="string"){
            return input.length;
        }
        else if(typeof input ==="number"){
            return input*input;
        }
        return 0;
    }

    const stringInput ="Hey welcome to developer world"
    const numberInput =56;
    console.log(processInput(stringInput));
    console.log(processInput(numberInput))
    

    //end
}