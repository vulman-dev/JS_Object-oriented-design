export default class Truncater {
    static defaultOptions = {
        separator: '...',
        length: 200,
    };

    // BEGIN (write your solution here)
    constructor(options = {}) {
        this.options = { ...this.constructor.defaultOptions, ...options};
    }

    truncate(string, config = {}) {
        const { separator, length } = { ...this.options, ...config };
        const cuttedString = string.slice(0, length);

        return length < string.length ? `${cuttedString}${separator}` : `${string}`; 
    }
    //END
}
