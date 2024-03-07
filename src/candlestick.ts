export default class CandleStick {

    #open: number;
    #close: number;
    #high: number;
    #low: number;
    #volume: number;

    constructor(
        open: number,
        close: number,
        high: number,
        low: number,
        volume: number
    ) {
        this.#open = open;
        this.#close = close;
        this.#high = high;
        this.#low = low;
        this.#volume = volume;
    }

    static width(): number {
        return 8;
    }

    get open(): number {
        return this.#open
    }

    get close(): number {
        return this.#close;
    }

    get high(): number {
        return this.#high;
    }

    get low(): number {
        return this.#low;
    }

    get volume(): number {
        return this.#volume;
    }

    isBear(): boolean {
        return this.#open > this.#close;
    }

    highLowWidth(): number {
        return 1;
    }

    height(): number {
        return this.isBear()
            ? this.#open - this.#close
            : this.#close - this.#open;
    }

    highLowHeight(): number {
        return this.#high - this.#low;
    }
}

