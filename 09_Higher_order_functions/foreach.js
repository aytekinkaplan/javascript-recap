// forEach - Iterates through each element in the array
const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element); // Outputs each element: 1, 2, 3, 4, 5
});
// Output: 1
// 2
// 3
// 4
// 5

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
countries.forEach((country) => console.log(country.toUpperCase()));
// Output: FINLAND SWEDEN NORWAY DENMARK ICELAND

const capitals = ["Helsinki", "Stockholm", "Oslo", "Copenhagen", "Reykjavik"];
countries.forEach((country, index) =>
  console.log(`${country} - ${capitals[index]}`)
);
// Output: Finland - Helsinki
// Sweden - Stockholm
// Norway - Oslo
// Denmark - Copenhagen
// Iceland - Reykjavik
