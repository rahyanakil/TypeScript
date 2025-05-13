{
    //Utility Types start
//pick 
type Person ={
    name:string;
    age:number;
    email?:string;
    contactNo:string;
}
type NameAge =Pick<Person,"name"|"age">
//Omit(bad dewa jai )
type ContactInfo =Omit<Person,"name"|"age">
//required(sob lagbe)
type PersonRequired =Required<Person>
//partial(dorker hoile dilam na dile nai )
type PersonPartial = Partial<Person>
//Read Only
type PersonReadOnly =Readonly<Person>
const  Person1 :Person={
    name:'Mr. x',
    age:200,
    contactNo:"017"
}
Person1.name="Mr Rahyan"
//Record
// type MyObj ={
//     a:string;
//     b:string;

// }
type MyObj =Record<string,string>
const EmptyObj :Record<string,unknown>={}
const obj1:MyObj={
    a:"aa",
    b:'bb',
    c:'cc',
    d:'dd'
};
//Utility Types end
}