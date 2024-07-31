class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }
    set name(value) { 
        if(value.length < 4){
            console.log('Name is too shortt.');
            return;
            
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name); // John

user.name = "Harry" // Name is to shor.
console.log(user.name);

