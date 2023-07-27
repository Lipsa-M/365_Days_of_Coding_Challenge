// Write a function create HelloWorld. It should return a new fumction that 
// always returns "Hello World" 

function createHelloWorld(){
    function helloWorld(){
        return "Hello World";
    }
    return helloWorld;
}
const sayHello = createHelloWorld();
console.log(sayHello());