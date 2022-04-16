console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person{
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    
    info(){
        console.log(`Hello my name is ${this.name} and I have ${this.pets} pets. I currently live in ${this.residence}. For fun I like to go ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}, and ${this.hobbies[3]}.`)
    }
    
    soundOff(){

    }

    greeting(){
        console.log("Hello fellow person!")
    }
}

let john = new Person('John', 2, 'Venice Beach', ['biking', 'skiing', 'rollerblading', 'watching football games'])

john.info()
john.greeting()

class Coder extends Person{
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies)

        this.occupation = "Full Stack Web Developer";
    }

    // info(){
    //     console.log(`Hello my name is ${this.name} and I have ${this.pets} pets. I currently live in ${this.residence}. For fun I like to go ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}, and ${this.hobbies[3]}.`)
    // }

    greeting(){
        console.log("Hello fellow Coder!")
    }
}

let tony = new Person('Tony', 2, 'Santa Monica', ['fishing', 'snorkling', 'biking', 'hiking']);

let eric = new Coder('Eric', 3, 'Marina Del Rey', ['hiking', 'rollerblading', 'scuba-diving', 'traveling']);

console.log(tony)
tony.info()
tony.greeting()

console.log(eric)
eric.info()
eric.greeting()