"use strict";
//factory decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function firstFun() {
    console.log("Evaluation of factory method first()...");
    return function (target, propertyKey, descriptor) {
        console.log(`first() decorator called with value: ${descriptor.value}`);
        // console.log(`argument value: ${value}`);
    };
}
function secondFun() {
    console.log("Evaluation of factory method second()...");
    return function (target, propertyKey, descriptor) {
        console.log(`second() decorator called with value: ${descriptor.value}`);
        // console.log(`argument value: ${value}`);
    };
}
function splitString() {
    return function (target, propertyKey, descriptor) {
        const originalFun = descriptor.value;
        descriptor.value = function (...args) {
            const [str] = args;
            const splittedString = str.split('');
            originalFun.call(this, splittedString);
        };
    };
}
class MyDecoratorFactory {
    myFirstMethod(args) {
        console.log(args);
    }
    splitStringMethod(str) {
        console.log(str);
    }
}
__decorate([
    firstFun(),
    secondFun()
], MyDecoratorFactory.prototype, "myFirstMethod", null);
__decorate([
    splitString()
], MyDecoratorFactory.prototype, "splitStringMethod", null);
const myDecoratorFactory = new MyDecoratorFactory();
myDecoratorFactory.myFirstMethod(10);
myDecoratorFactory.splitStringMethod("Hello");
