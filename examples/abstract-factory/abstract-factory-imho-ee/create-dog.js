/**
 * creates a dog
 * @param {string} name
 * @return {Animal}
 */
export default function createDog(name) {
    return {
        getGreeting: function() {
            return `Woof! I'm ${name}`;
        }
    };
}
