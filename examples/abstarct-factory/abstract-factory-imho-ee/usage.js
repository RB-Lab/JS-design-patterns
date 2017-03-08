import createAnimal from './create-animal';

const names = ['Barky', 'Snarky', 'Tom', 'Tigger', 'Oscar'];

names.forEach((name) => {
    const type = name.slice(-1) === 'y' ? createAnimal.types.DOG : createAnimal.types.CAT;
    const animal = createAnimal(type, name);

    console.log(animal.getGreeting());
});
