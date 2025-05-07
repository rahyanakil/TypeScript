{
  //Ternary ,optional chaining&Nullish coalescing operator in typescript
  //start
  // //Ternary operator
  const age: number = 15;
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }
  //Ternary operator
  const isEligible =
    age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
  //   console.log(isEligible);
  //nullish coalescing operator
  //null /undefined check -->decision making
  const isEligible1 = undefined;
  const result1 = isEligible1 ?? "Guest";
  const result2 = isEligible1 ?isEligible: "Guest";
  console.log("result:",{result1},{result2}); //Guest
  //optional chaining
  type User={
    name:string;
    address:{
      city:string;
      road:string;
      presentaddress:string;
      parmanentAddress?:string;
    };
    
  }
  const user:User={
    name:"rahyan",
    address:{
      city:"Noakhali",
      road:"07",
      presentaddress:"Dhaka"
    }
  }
  const parmanentAddress =user?.address?.parmanentAddress??"No Parmanent Address";
  console.log({parmanentAddress})
  //end
}
