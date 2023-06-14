const { numbers, name, hometown } = require("./data");
const { sum, avg } = require("./sum");

console.log(numbers);
console.log(`${name} is from ${hometown}`);

console.log(sum(numbers));

console.log(avg(numbers));

const { say, think } = require("cowsay");

console.log(say({ text: "what am i?" }));
