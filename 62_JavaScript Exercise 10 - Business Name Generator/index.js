/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub


*/

let adjectives = "Crazy Amazing Fire";
let shopNames = "Engine Foods Garments";
let anotherWords = "Bros Limited hub";

function getRandomElement(words){
    let arr = words.split(" ");

    // checking purpose how it works
    console.log(arr)
    console.log(arr.length)
    let random = Math.random();
    console.log(random)

    return arr[Math.floor(random* arr.length)];
    

}

function generateRandomBusinessName(adjectives, shopNames, anotherWords) {
    let adj = getRandomElement(adjectives);
    let shop = getRandomElement(shopNames);
    let word = getRandomElement(anotherWords);
    return `${adj} ${shop} ${word}`;
}

console.log(generateRandomBusinessName(adjectives, shopNames, anotherWords));