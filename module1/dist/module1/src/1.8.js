"use strict";
//destructuring in typescript
//object destructuring
const user = {
    id: 345,
    name: { firstName: "Rahyan", middleName: "Shamsi", lastName: "Akil" },
    contactNo: "01811000000",
    address: "Bangladesh",
};
const { contactNo, name: { middleName }, } = user;
//array destructuring
const myFriends = ["Nibir", "Jahangir", "Rahyan", "Shamsi", "Akil"];
const [friend1, friend2, ...rest] = myFriends;
