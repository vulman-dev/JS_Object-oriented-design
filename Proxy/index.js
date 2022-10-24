// BEGIN (write your solution here)
class Course {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }
}

function checkProp(target, prop) {
    if (!(prop in target)) {
        throw new Error('Нет такого свойства')
    }
    if (prop[0] === '_') {
        throw new Error('Нельзя');
    }
}

const protectProxy = (target) => {
    const handlers = {
        get(target, prop) {
            checkProp(target, prop);
            if (typeof target[prop] === 'function') {
                return target[prop].bind(target);
            }
            return target[prop];
        },

        set(target, prop, value) {
            checkProp(target, prop);
            target[prop] = value;
            return true;
        }
    }
    return new Proxy(target, handlers);
}

export default protectProxy;
// END

// TEACHER SOLUTION
const validateProperty = (target, name) => {
    if (!(name in target)) {
        throw new Error(`Property "${name}" doesn't exist`);
    }
    if (name.startsWith('_')) {
        throw new Error(`Property "${name}" is protected`);
    }
};

const protect = (obj) => new Proxy(obj, {
    get: (target, name) => {
        validateProperty(target, name);
        const property = target[name];

        return (typeof property === 'function') ? property.bind(obj) : property;
    },
    set: (target, name, value) => {
        validateProperty(target, name);
        target[name] = value;

        return true;
    },
});
// END