"use strict";
{
    //Learning Function in Typescript
    //Normal Function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    const addArrow = (num1, num2) => num1 + num2;
    //object er vitore  -->function  lekhle oita k amra boli -->method
    const RichUser = {
        name: 'Rahyan',
        balance: 10000000000000,
        addBalance(balance) {
            return `My new balance is :${this.balance + balance}`;
        }
    };
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
