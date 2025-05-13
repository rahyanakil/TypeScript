"use strict";
//Learning Spread and Rest Operator
{
    //learn Spread Operator
    const bros1 = ['NIBIR', 'Jahangir', 'Rahyan'];
    const bros2 = ['Ahsun', 'Bijoy', 'Junaed'];
    bros1.push(...bros2);
    const mentors = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    };
    const mentorsList = Object.assign(Object.assign({}, mentors), mentors2);
    //Learn Rest Operator & how to use this dynamically
    const greetFriends = (...friends) => {
        // console.log(`Hi${friend1} ${friend2} ${friend3}`)
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Rahyan", "Shamsi", "Akil", "Engineer", "Dept", "CSE");
}
