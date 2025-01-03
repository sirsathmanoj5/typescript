"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, propertyKey, descriptor) {
    console.log(`Method ${JSON.stringify(propertyKey)} was called.`);
}
function first(target, propertyKey, descriptor) {
    console.log(`first decorator called....`);
}
function second(target, propertyKey, descriptor) {
    console.log('second decorator called....');
}
class MyClass {
    myMethod() {
        console.log("Executing...");
    }
}
__decorate([
    first,
    second,
    log
], MyClass.prototype, "myMethod", null);
const myClass = new MyClass();
myClass.myMethod();
