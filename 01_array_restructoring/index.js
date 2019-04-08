// Ex 1: Learn the syntax
// syntax
const allIndex = [
  { firstIndex: true },
  { secondIndex: true }
]
const [ firstIndex, secondIndex ] = allIndex;
console.log(firstIndex);
console.log(secondIndex);

// Ex 2: Check understanding
// an array of objects
const getJane = () => {
  return {
    name: "Jane",
    age: 22,
    birthday: "June 4"
  }
}

const info = [
  {
    name: "John",
    age: 20,
    birthday: "May 20"
  },
  getJane()
];

// the array of objects can be broken up into two variables
const [ john, jane ] = info;

// what will we see here?
// console.log(john);

// what will wee see here
// console.log(jane);
