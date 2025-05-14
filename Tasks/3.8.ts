{
    //start
    type User ={
        name:string;
        email:string;
    }
    type Admin={
        adminLevel: number;
    }
    type AdminUser =User&Admin;
    const AdminUser:AdminUser={
        name:"rahyan",
        email:"rahyanakil89@gmail.com",
        adminLevel:90,
    }
    const describeAdmin =(user:AdminUser):string=>{
        return `${user.name} ${user.email} ${user.adminLevel}`;
    }
    const showAdmin =describeAdmin(AdminUser

    )
    console.log(showAdmin);
    
    //end
}