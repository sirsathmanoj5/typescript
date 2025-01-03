"use strict";
class Point {
    constructor(first, second) {
        this._first = first;
        this._second = second;
    }
    get first() {
        return this._first;
    }
    get second() {
        return this._second;
    }
}
function configure(val) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = val;
    };
}
const point = new Point("First", "Second");
console.log(point.first);
console.log(point.second);
