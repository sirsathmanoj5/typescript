
import "reflect-metadata";
const formatMetadataKey = Symbol("format");


class HelloWord {
    @format("Hello, %s")
    message: string;
    constructor(message: string) {
        this.message = message
    }

    greetMessage() {
        let format = getFormat(this, "message");
        return format.replace("%s", this.message);
    }
}


function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target:any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

const helloWord = new HelloWord("User-1");
console.log(helloWord.greetMessage());