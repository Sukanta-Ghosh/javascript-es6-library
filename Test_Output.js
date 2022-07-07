getName();

console.log(a);

var a = 5;

function getName() {
  console.log("getName() function");
}

testArrowFn(); //Uncaught ReferenceError: Cannot access 'testArrowFn' before initialization
getAnything(); //Uncaught ReferenceError: getAnything is not defined
testFunction(); //Uncaught ReferenceError: Cannot access 'testFunction' before initialization

const testFunction = function getAnything() {
  console.log("getAnything() function");
};

const testArrowFn = () => {
  console.log("getAnArrow() function");
};
