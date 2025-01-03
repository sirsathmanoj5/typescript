import "reflect-metadata";

class Test {
    name: string

    constructor(name: string) {
        this.name = name;
    }
    
    @validate
    print(@required mode: boolean) {
        if(mode) {
            return `name: ${this.name} ......`;
        } else {
            return this.name;
        }
    }
}

const requiredMetadataKey = Symbol("required");
 
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
 
function validate(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;
 
  descriptor.value = function (requiredParameters:any[]) {
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