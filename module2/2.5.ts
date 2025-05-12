//function with generics start 
const createArray =(param:string):string[]=>{
    return [param]
}

const createArrayWithGeneric=<T>(param:T):T[]=>{
    return [param]
}

interface User {
    id:number;
    name:string}
const res1 =createArray('Bangladesh')
const res2 =createArrayWithGeneric<string>("National")
const restGenericObj =<User>({
    id:222,
    name:"Mr Rahyan"
})











const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
    return [param1,param2]
}

interface User1 {
    id:number;
    name:string
}
const res10 =createArrayWithTuple<string,number>('Bangladesh',222)

const res20 = createArrayWithTuple<string,{name:string}>("Bangladesh",{name:"Asia"})






const addCourseToStudent =<T>(student:T)=>{
    const course ="Next Level Web Developer"
    return {
        ...student,
        course
    }
}

const student1 =addCourseToStudent ({name:"Mr X",email:"rahyan@gmail.com",devType:"NLWD"})

const student2 =addCourseToStudent ({name:"Mr Y",email:"shamsi@gmail.com",hasWatch:"NLWD"})
//function with generics end


