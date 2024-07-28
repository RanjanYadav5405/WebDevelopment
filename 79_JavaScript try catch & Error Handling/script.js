console.log('JavaScript try catch & Error Handling');

let a = parseInt(prompt("Enter first number"))
let b = parseInt(prompt("Enter second number"))

let sum = a + b // you can do also like  parseInt(a) + parseInt(b)

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

// finally mainly used for function where return are given because after return doesn' t allow a next code but only finally are allowed 

function main() {

    let x = 2;

    try {

        console.log('The sum is ', sum * x);
        return true;

    } catch (error) {
        console.log('Error aa gaya bhai');
        return false;

    }
    finally{

        console.log('Files are being closed and db connection is being closed');
    }

}

let c = main()