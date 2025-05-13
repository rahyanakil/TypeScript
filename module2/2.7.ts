{
  //generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle; //automatically

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = { name: "Mr Rahyan", age: 22, address: "Dhaka" };
  const car = { model: "Toyota", year: 22 };
  const result1 = getPropertyValue(car, "model");
}
