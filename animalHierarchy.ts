abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
        
    }

    abstract makeSound() : void;
}

class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    makeSound(): void {
        console.log(`${this.name} says Woof!`)

    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    makeSound(): void {
        console.log(`${this.name} says Meow!`)
        
    }
}

const animals: Animal[] = [
    new Dog("Buddy"),
    new Cat("Whiskers")
]
animals.forEach(animal => animal.makeSound())
