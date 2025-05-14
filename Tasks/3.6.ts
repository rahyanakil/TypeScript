{
    //start
    const number=[1,2,3]

    const Operators =(...numbers:number[]):number=>{
        const [first ,second,...rest]=numbers;
        return numbers.reduce((Accumulator,currentValue)=>
            Accumulator+currentValue,0)
        }
    const total1 =Operators(...number)
    
    console.log(total1)   

    
    
    //end
}