//factory decorators

function firstFun() {
    console.log("Evaluation of factory method first()...");
    return function(target:any, propertyKey:string, descriptor: PropertyDescriptor) {
        console.log(`first() decorator called with value: ${descriptor.value}`);
        // console.log(`argument value: ${value}`);
    }
}


function secondFun() {
    console.log("Evaluation of factory method second()...");
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor) {
        console.log(`second() decorator called with value: ${descriptor.value}`);
        // console.log(`argument value: ${value}`);
    }
}

function splitString() {
    return function(target:any, propertyKey:string, descriptor: PropertyDescriptor) {
        const originalFun = descriptor.value;
        
        descriptor.value = function(...args: any[]) {
            const [str] = args;
            const splittedString = str.split('');
            originalFun.call(this, splittedString);
        }
    }
}

class MyDecoratorFactory {
    @firstFun()
    @secondFun()
    myFirstMethod(args:any) {
        console.log(args)
    }

    @splitString()
    splitStringMethod(str: string) {
        console.log(str);
    }
}

const myDecoratorFactory = new MyDecoratorFactory();
myDecoratorFactory.myFirstMethod(10);
myDecoratorFactory.splitStringMethod("Hello");