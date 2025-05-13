"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = { name: "Mr Rahyan", age: 22, address: "Dhaka" };
    const car = { model: "Toyota", year: 22 };
    const result1 = getPropertyValue(car, "model");
}
