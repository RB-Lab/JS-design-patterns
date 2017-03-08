import createCat from './create-cat';
import createDog from './create-dog';

const CAT = 'CAT';
const DOG = 'DOG';

const factories = {
    [CAT]: createCat,
    [DOG]: createDog
};

/**
 * @enum {string}
 */
const types = {
    CAT,
    DOG
};

/**
 * creates abstract animal of given type
 * @param {types} type
 * @param {string} name
 * @return {Animal}
 */
export default function createAnimal(type, name) {
    if (!type in factories) {
        const allowedTypes = Object.keys(factories).join(', ');
        throw new TypeError(
            `${type} is not implemented, implemented types are: ${allowedTypes}`
        );
    }

    return factories[type](name);
}

createAnimal.types = types;

