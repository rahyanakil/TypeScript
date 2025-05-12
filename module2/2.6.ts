{
    //constrains in tsc start
    const addCourseToStudent =<T>(student:T)=>{
        const course ="Next Level Web Developer"
        return {
            ...student,
            course
        }
    }
    
    const student3 =addCourseToStudent ({emni:"emni"})
    
    const student4 =addCourseToStudent ({name:"Mr Y",email:"shamsi@gmail.com",hasWatch:"NLWD"})
    //constrains in tsc end
}