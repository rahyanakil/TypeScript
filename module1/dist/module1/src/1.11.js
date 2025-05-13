"use strict";
var _a, _b;
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
    const result2 = isEligible1 ? isEligible : "Guest";
    console.log("result:", { result1 }, { result2 }); //Guest
    const user = {
        name: "rahyan",
        address: {
            city: "Noakhali",
            road: "07",
            presentaddress: "Dhaka",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Parmanent Address";
    console.log({ permanentAddress });
    //end
}
