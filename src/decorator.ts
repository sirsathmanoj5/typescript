
function Log(propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Method ${propertyKey} was called.`);
}

class MyClass {
    myMethod() {
        console.log("Executing...");
    }
}