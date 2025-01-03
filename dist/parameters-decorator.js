"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
class Test {
    constructor(name) {
        this.name = name;
    }
    print(mode) {
        if (mode) {
            return `name: ${this.name} ......`;
        }
        else {
            return this.name;
        }
    }
}
__decorate([
    validate,
    __param(0, required)
], Test.prototype, "print", null);
const requiredMetadataKey = Symbol("required");
function required(target, propertyKey, parameterIndex) {
    let existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
function validate(target, propertyName, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (requiredParameters) {
        if (requiredParameters) {
            if (requiredParameters.length > 0) {
                throw new Error("Missing required argument.");
            }
        }
        return originalMethod.apply(this, requiredParameters);
    };
}
const test = new Test("User-1");
test.print(false);
