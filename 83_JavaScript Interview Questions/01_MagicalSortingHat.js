// 1. The Magical Sorting Hat:
// Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let names = ["Ranjan", "Purvanchal","Raju", "MusharniyaiVillage","Yadav","Nepal","Kathmandu","Mathihani"]
let houses=[];
                
for (const names of names) {
    
    if(names.length < 6){
        houses.push("Gryffindor");
    }
    else if(names.length < 8){
        houses.push("Hufflepuff");
    }
    else if(names.length < 12){
        houses.push("Ravenclaw");
    }
    else{
        houses.push("Slytherin");
    }
}
console.log(houses)