let myFunc: Function;

myFunc = () => {
  console.log("Hello world");
};

const myFunc1 = () => {
  console.log("Hello world");
};

const myFunc2 = (firstName: string, lastName: string) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

const myFunc3 = (firstName: string, lastName: string, age?: number) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

const add = (number1: number, number2: number): number => {
  return number1 + number2;
};
