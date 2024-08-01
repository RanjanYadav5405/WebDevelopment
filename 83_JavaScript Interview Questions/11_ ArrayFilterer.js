// 11. The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products,criterion){
    return products.filter(product =>{
        for (const key in criterion) {
           if( product[key] !== criterion[key]){
            return false;
           }
        }
        return true;
    })
}

const products = [
    {id: 1, name:'Laptop', category:"Electronics",price:9999},
    {id: 2, name:'Shirt', category:"Apparel",price:34},
    {id: 3, name:'Coffee Maker', category:"Home Appliances",price:45},
    {id: 4, name:'Phone', category:"Electronics",price:7856},
];

const criterion = {name:'Coffee Maker'}
const filteredProduct = filterProducts(products,criterion)
console.log(filteredProduct)