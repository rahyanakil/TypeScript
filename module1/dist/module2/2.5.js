"use strict";
//function with generics start 
const createArray = (param) => {
    return [param];
};
const createArrayWithGeneric = (param) => {
    return [param];
};
const res1 = createArray('Bangladesh');
const res2 = createArrayWithGeneric("National");
const restGenericObj = ({
    id: 222,
    name: "Mr Rahyan"
});
const createArrayWithTuple = (param1, param2) => {
    return [param1, param2];
};
const res10 = createArrayWithTuple('Bangladesh', 222);
const res20 = createArrayWithTuple("Bangladesh", { name: "Asia" });
const addCourseToStudent = (student) => {
    const course = "Next Level Web Developer";
    return Object.assign(Object.assign({}, student), { course });
};
const student1 = addCourseToStudent({ name: "Mr X", email: "rahyan@gmail.com", devType: "NLWD" });
const student2 = addCourseToStudent({ name: "Mr Y", email: "shamsi@gmail.com", hasWatch: "NLWD" });
//function with generics end
