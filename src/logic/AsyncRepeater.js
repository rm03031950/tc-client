class AsyncRepeater {
    interval;
    asyncFunction;
    _continueToRepeat;

    constructor(interval, asyncFunction) {
        this.interval = interval;
        this.asyncFunction = asyncFunction;
    }

    _sleep() {
        return new Promise(resolve => setTimeout(resolve, this.interval));
    }

    async start() {
        this._continueToRepeat = true;
        while (this._continueToRepeat) {
            await this.asyncFunction();
            await this._sleep();
        }
    }

    stop() {
        this._continueToRepeat = false;
    }
}

export {AsyncRepeater}