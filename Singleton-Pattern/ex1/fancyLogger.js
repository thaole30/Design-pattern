
class FancyLogger {
    constructor() {
        //make sure create 1 single instance in constructor
        if(FancyLogger.instance == null) {
            //have not created a fancy logger instance yet
            this.logs = [];
            FancyLogger.instance = this;
        }
        return FancyLogger.instance;
        //! always want to return that single instance every single time from our constructor instead of returning a bunch of different instances every time
    }

    log(message) {
        this.logs.push(message);
        console.log(`my message => ${message}`);
    }

    printLogCount() {
        console.log("logs number", this.logs.length);
    }

}

//create fancy logger instance before export it
const logger = new FancyLogger(); //* instance of singleton

//* make sure to prevent this from being changed in any way
Object.freeze(logger);
export default logger;