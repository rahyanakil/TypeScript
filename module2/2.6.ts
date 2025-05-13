{
  //constrains in tsc start
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Developer";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 44,
    name: "Mr Z",
    email: "akil@gmail.com",
    akil: "akil",
  });

  const student4 = addCourseToStudent({
    id: 45,
    name: "Mr Y",
    email: "shamsi@gmail.com",
    hasWatch: "NLWD",
  });
  //constrains in tsc end
}
