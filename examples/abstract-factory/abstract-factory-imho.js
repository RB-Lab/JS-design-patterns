function dogFactory(name) {
    return {
        getGreeting: function() {
            return `Woof! I'm ${name}`;
        }
    };
}

function catFactory(name) {
    return {
        getGreeting: function() {
            return `Meow! I'm ${name}`;
        }
    };
}

// This constant and maybe concrete factories are private, only animalFactory is in interface
const factories = {
    cat: catFactory,
    dog: dogFactory
};

// This one is an Abstract factory
function animalFactory(type, name) {
    return factories[type](name);
}

const names = ['Barky', 'Snarky', 'Tom', 'Tigger', 'Oscar'];

names.forEach((name) => {
    const type = name.slice(-1) === 'y' ? 'dog' : 'cat';
    const animal = animalFactory(type, name);

    console.log(animal.getGreeting());
});


/**
 *
 * WHY YOU SHOULDN'T USE THIS CODE IN PRODUCTION
 *
 * 1) first of all, animalFactory should perform some kind of check on type existence,
 *    because type it gets actually is just a string, e.g.:
 *
 *        if (!type in factories) {
 *            const allowedTypes = Object.keys(factories).join(', ');
 *            throw new TypeError(
 *                `${type} is not implemented, implemented types are: ${allowedTypes}`
 *            );
 *        }
 *
 * 2) usually it's better to name functions as verbs; in JS community factory functions
 *    are usually named like `createSomething` or `makeSomething`
 *
 * 3) for user of your API it is better to supply somehow constants with names of supported
 *    types, so that they can list it static code intelligence or in browser console. E.g.
 *    you can put them into function's fields (aka static fields):
 *
 *    animalFactory.types = {cat, dog};
 *
 * see abstract-factory-imho-ee.js for more details
 */
