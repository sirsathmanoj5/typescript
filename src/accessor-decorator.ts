class Point {
    private _first: string
    private _second: string
    constructor(first: string, second:string) {
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

function configure(val: boolean) {
    return function(target:any, propertyKey:string, descriptor: PropertyDescriptor) {
        descriptor.configurable = val;
    }
}

const point = new Point("First","Second");

console.log(point.first);
console.log(point.second);
