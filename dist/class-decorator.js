"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TestReport = class TestReport {
    constructor(name) {
        this.type = "dashboard";
        this.name = name;
    }
};
TestReport = __decorate([
    lock
], TestReport);
//decorator rules
function lock(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
const testReport = new TestReport("ABC");
console.log(testReport.name);
console.log(testReport.type);
//property can not be extensiable due to sealed in lock decorator
TestReport.prototype.name = "test";
console.log(testReport.name);
