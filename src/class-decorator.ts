@lock
class TestReport {
    type ="dashboard";
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

//decorator rules
function lock(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

const testReport = new TestReport("ABC");

console.log(testReport.name)
console.log(testReport.type)

//property can not be extensiable due to sealed in lock decorator
TestReport.prototype.name = "test"

console.log(testReport.name)