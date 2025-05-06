{
  //type Alias in TypeScript
  //type
  type Student = {
    name: string; //string
    age: number; //number
    contactNo?: string; //optional string
    gender: string; //string
    address: string; //string
  };

  const student1: Student = {
    name: "Rahyan Shamsi Akil",
    age: 25,
    gender: "Male",
    contactNo: "01811000000",
    address: "Bangladesh",
  };

  const student2: Student = {
    name: "Nibir",
    age: 25,
    gender: "Male",
    address: "Bangladesh",
  };

  //type for string and boolean
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Rahyan Shamsi Akil";
  const isAdmin: IsAdmin = true;
  //type for function
  type Add = (a: number, b: number) => number;
  const add: Add = (a: number, b: number) => a + b;
}
