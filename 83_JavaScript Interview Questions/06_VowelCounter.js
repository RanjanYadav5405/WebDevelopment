// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str){

    const vowelRegx = /[aeiouAEIOU]/g;

    const matches = str.match(vowelRegx)

    return matches ? matches.length : 0;
}

const str = "Ranjan Kumar Yadav"
console.log(countVowels(str));
