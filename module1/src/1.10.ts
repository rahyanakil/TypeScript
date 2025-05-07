{
  //Union and Intersection Types
  //Union Types
  type FrontEndDeveloper = "fakibaj developer" | "junior developer";
  type FullstackDeveloper = "Frontend developer" | "Expert developer";
  type Developer = FrontEndDeveloper | FullstackDeveloper;
  const newDeveloper: Developer = "fakibaj developer";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female" | "other";
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  };
  const user1: User = {
    name: "Rahyan Shamsi Akil",
    gender: "male",
    bloodGroup: "O+",
  };

  //intersection Types(sob eksathe thakbe jodi)
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
  const FullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //End of Union and Intersection Types
}
