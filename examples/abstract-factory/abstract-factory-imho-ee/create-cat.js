/**
 * creates a cat
 * @param {string} name
 * @return {Animal}
 */
export default function createCat(name) {
    return {
        getGreeting: function() {
            return `Meow! I'm ${name}`;
        }
    };
}
