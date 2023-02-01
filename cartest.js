class Car {
    constructor(name, year, speed) {
      this.name = name;
      this.year = year;
      this.speed = speed
    }

    run() {
        console.log(this.name + "is running with this speed!:  " + this.speed);
    }
  }
  
  class Pen {
    constructor(name, color, price){
        this.name = name;
        this.color = color; 
        this.price = price;
    }
    
    showPrice(){
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}
class Person {
  constructor(name, age){
      this.name = name;
      this.age = age; 
  }

  aboutMe(){
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
}
}
class Pokemon {
  constructor(name, type, weakness, nextevol){
      this.name = name;
      this.type = type;
      this.weakness = weakness;
      this.nextevol = nextevol;
  }

  pokemonIntro(){
    console.log(`Hello, I'm ${this.name} and I am a ${this.type} type.I am weak or inefficient against ${this.weakness} pokemon type and my next evolution is ${this.nextevol}`);
}
}

const Pokemon1 = new Pokemon("Bulbasaur", "Grass", "Fire", "Ivysaur" );
Pokemon1.pokemonIntro();
const Pokemon2 = new Pokemon("Salameche", "Fire", "Water", "Charmeleon" );
Pokemon2.pokemonIntro();
const Pokemon3 = new Pokemon("Squirtle", "Water", "Grass", "Wartortle" );
Pokemon3.pokemonIntro();

const Person1 = new Person("John Doe", 30 );
Person1.aboutMe();

const pen1 = new Pen("Marker", "Blue", "$3");
pen1.showPrice();



  let myCarFord = new Car("Ford", 2014, "128 KM/H");
  myCarFord.run();
  let myCarAudi = new Car("Audi", 2019, "150 KM/H");
  myCarAudi.run();

  console.log(myCarAudi.year);
  console.log(myCarFord.name);
  
