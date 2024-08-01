// 13. The Shopping Cart Totalizer:
//   You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.


/**
 * Calculates the total cost of items in the shopping cart.
 * @param {Array} cart - An array of product objects, each with a price and quantity.
 * @returns {number} - The total cost of all items in the cart.
 */



function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);
}

const shoppingCart =[
    {name: "Laptop", price: 999.99, quantity:1},
    {name: "Mouse", price: 25.50, quantity:2},
    {name: "Keyword", price: 75.00, quantity:3},
];

const totalCost = calculateTotal(shoppingCart)

console.log(totalCost)