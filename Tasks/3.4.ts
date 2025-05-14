{
    //start
interface Book{
    title:string;
    author:string;
    pages:number;
    genre:string;
    issue:number;
    frequency:string;
}

interface Magazine{
    title:string;
    author:string;
    pages:number;
    genre:string;
    issue:number;
    frequency:string;
}

type applyUnion =Book|Magazine; //using union  
type applyIntersection =Book &Magazine; //using intersection

const readingMaterial1:applyUnion={
    title:"the beautiful mind",
    author:"john Doe",
    pages:45,
    genre:"thriller",
    issue:2007,
    frequency:"most fav"
}
const readingMaterial2:applyIntersection={
    title:"the beautiful mind",
    author:"john Doe",
    pages:45,
    genre:"thriller",
    issue:2007,
    frequency:"most fav"
}
console.log("Reading Material 1 (Book):", readingMaterial1);
console.log("Reading Material 2 (Magazine):", readingMaterial2);

    //end
}