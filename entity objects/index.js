// BEGIN (write your solution here)
import { URL } from 'url';

export default class Url {
    constructor(httpAddress) {
        this.httpAddress = httpAddress;
    }

    getScheme() {
        return new URL(this.httpAddress).protocol.slice(0, -1);
    }

    getHostName() {
        return new URL(this.httpAddress).hostname;
    }

    getQueryParams() {
        const params1 = new URLSearchParams(new URL(this.httpAddress).search);
        const obj = Object.fromEntries(params1);
        return obj;
    }

    getQueryParam(name, defaultValue = null) {
        return new URLSearchParams(new URL(this.httpAddress).search).get(name) ?? defaultValue;
    }

    equals(url) {
        return this.httpAddress === url.httpAddress;
    }
}
// END

const url = new Url('http://yandex.ru:80?key=value&key2=value2');
console.log(url.getScheme());
console.log(url.getHostName());
console.log(url.getQueryParams());
console.log(url.getQueryParam('key'))
console.log(url.getQueryParam('key2', 'lala'));
console.log(url.getQueryParam('new', 'ehu'));
console.log(url.getQueryParam('new'));
console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')))