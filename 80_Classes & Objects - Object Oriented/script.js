// let obj = {
//     a: 1,
//     b: "Harry"
// }
// console.log(obj);


// let animal = {
//     eats : true
// };

// let rabbit = {
//     jumps : true
// };

// rabbit.__proto__= animal; // sets rabbit.[[prototype]] = animal

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created")
    }
    eats(){
        console.log('kha raha hoon');
        
    }
    jumps(){
        console.log('kood raha hoon');
        
    }
}

class Lion extends Animal {
    constructor(name){
        super(name);
        console.log("Object is created and roar")
    }
    eats(){
        super.eats()
        console.log('kha raha hoon and I am Lion');
    }
    
}

let a  = new Animal("Bunny");
console.log(a)

let l = new Lion("shera")
console.log(l);
