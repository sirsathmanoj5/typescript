
function log(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`log Method ${JSON.stringify(propertyKey)} was called.`);
}

function first(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`first decorator called....`);
}

function second(target:any, propertyKey:string, descriptor: PropertyDescriptor) {
    console.log('second decorator called....');
}

class MyClass {
    @log @second @first
    myMethod() {
        console.log("Executing...");
    }
}

const myClass = new MyClass();
myClass.myMethod();