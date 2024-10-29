// Базовый класс Animal
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    makeSound() {
      console.log("Some generic animal sound");
    }
  
    describe() {
      console.log(`${this.name} is ${this.age} years old.`);
    }
  }
  
  // Класс Dog, наследующий Animal
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Woof! Woof!");
    }
  
    fetch() {
      console.log(`${this.name} is fetching the ball!`);
    }
  }
  
  // Класс Cat, наследующий Animal
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
  
    makeSound() {
      console.log("Meow! Meow!");
    }
  
    scratch() {
      console.log(`${this.name} is scratching!`);
    }
  }
  
  // Класс Bird, наследующий Animal
  class Bird extends Animal {
    constructor(name, age, species) {
      super(name, age);
      this.species = species;
    }
  
    makeSound() {
      console.log("Chirp! Chirp!");
    }
  
    fly() {
      console.log(`${this.name} is flying high!`);
    }
  }
  
  // Пример использования классов
  const dog = new Dog("Buddy", 3, "Golden Retriever");
  dog.describe();
  dog.makeSound();
  dog.fetch();
  
  const cat = new Cat("Whiskers", 2, "Gray");
  cat.describe();
  cat.makeSound();
  cat.scratch();
  
  const bird = new Bird("Tweety", 1, "Canary");
  bird.describe();
  bird.makeSound();
  bird.fly();
  