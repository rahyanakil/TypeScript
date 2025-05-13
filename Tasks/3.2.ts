{
  //generic constraint with keyof operator
  type User = {
    name: string;
    age: number;
    role: "admin" | "user" | "guest";
  };

  const user: User = {
    name: "Mr Rahyan",
    age: 22,
    role: "user",
  };

  const userFunction = <User>(User: User) => {
    console.log(`Name: ${User.name}`);
    console.log(`Age: ${User.age}`);
    console.log(`Role: ${User.role}`);
  };
  userFunction(user);
}
