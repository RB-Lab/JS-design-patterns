// Case one: you want to hide constructor

function Animal() {
	this.sleep = function() {
		console.log('z-z-z..');
	};
	this.greet = function() {
		console.log(`Hi! I'm ${this.name}`);
	};
}

function Cat(name) {
	this.name = name;
	this.say = function() {
		console.log('Meow!');
	};
}

Cat.prototype = new Animal();

function createCat(name) {
	return new Cat(name);
}

// Case two: you don't want to have a constructor
// Sub-case one: inheritance

const Animal = {
	sleep(){
		console.log('z-z-z..');
	},
	greet(){
		console.log(`Hi! I'm ${this.name}`);
	}
}

function createCat(name) {
	return Object.create(Animal, {
		name: {
			writable: true,
			configurable: true,
			value: name
		},
		say: {
			value: function() { console.log('Meow!'); }
		}
	});
}

// Sub-case two: extending

const Animal = {
	sleep(){
		console.log('z-z-z..');
	},
	greet(){
		console.log(`Hi! I'm ${this.name}`);
	}
}

function createCat(name) {
	return Object.assign({}, Animal, {
		name,
		say() {
			console.log('Meow!');
		}
	});
}

// Sub-case three: composition

const Animal = {
	sleep(){
		console.log('z-z-z..');
	},
	greet(){
		console.log(`Hi! I'm ${this.name}`);
	}
}

function createCat(name) {
	const cat = {
		name,
		say() {
			console.log('Meow!');
		}
	};
	cat.sleep = Animal.sleep.bind(cat);
	cat.greet = Animal.greet.bind(cat);

	return cat;
}
