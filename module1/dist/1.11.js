"use strict";
{
    //Ternary ,optional chaining&Nullish coalescing operator in typescript
    //start
    // //Ternary operator
    const age = 15;
    if (age >= 18) {
        console.log("You are eligible to vote");
    }
    else {
        console.log("You are not eligible to vote");
    }
    //Ternary operator
    const isEligible = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
    //   console.log(isEligible);
    //nullish coalescing operator
    //null /undefined check -->decision making
    const isEligible1 = undefined;
    const result1 = isEligible1 !== null && isEligible1 !== void 0 ? isEligible1 : "Guest";
    console.log("result:", result1); //Guest
    //end
}
