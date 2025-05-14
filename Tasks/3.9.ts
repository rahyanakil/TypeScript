{
    //start
type Employee ={
    name:string;
    address?:string;
    city?:string;
    country?:string;
}
    
    const getEmployeeCity=(employee:Employee)=>{
        return employee.address;
    }
const Employee1:Employee={
        name:"John Doe",
        address:"ctg",
        city:"noakhali",
        country:"bangladesh"
    }
    const showCity =getEmployeeCity(Employee1)
    console.log(showCity)
    //end
}