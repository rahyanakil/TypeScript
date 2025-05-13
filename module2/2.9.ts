{
    //conditional type start (condition er man ta jodi onno kono man er upor depend kore tokhon take conditional type bole )
    type a1 =number
    type b1 =string
    type x = a1 extends null? true:false//x conditional type 
    type y  = a1 extends null ?true: b1 extends undefined? undefined :any;

    //conditional type start
    //checking bike ache kina /ship ache kina /tractor ache kina 
    type Vehicle ={
        bike:string;
        car:string;
        ship:string;
    }
    type checkVehicle<T> = T extends keyof Vehicle?true:false
    type HasBike =checkVehicle<"bike">

}