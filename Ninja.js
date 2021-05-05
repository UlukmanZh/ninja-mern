class Ninja{
    constructor(name, health, speed=3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this);
    }
    drinkShake(){
        console.log("Drinking shake")
        this.health += 10;
    }
}

let ninja = new Ninja("Rafaello", 100);
ninja.sayName();
ninja.showStats();
ninja.drinkShake();
ninja.showStats();

