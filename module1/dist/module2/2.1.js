"use strict";
{
    //start
    //type assertion (developer typescript er cheye better bujhte ba type declare kote parle oi hocche assertion.)
    let anything;
    anything = "Next Level Web Development";
    anything = 222;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //end
}
