console.log("AsyncAwait & Fetch API in JavaScript with Examples ");

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

//=====================================================
// Using Promise

// async function getData() {
//     // Simulate getting data from a server

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(4555);
//         }, 4000);
//     });
// }

//============================================================

// fetch API

// async function getData() {
//     //     // Simulate getting data from a server

//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data =  await x.json();
//     return data;
// }

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}



async function main(){

    console.log("Loading modules");

    console.log("Do something else");

    let data = await getData();
    console.log(data);

    console.log("Loading data");

    console.log("Process data");

}
main()





// console.log("Loading modules");

// console.log("Do something else");

// let data = getData();
// console.log(data);

// data.then((params) => {

//     console.log("Loading data");

//     console.log("Process data");

//     console.log('task 2');
    
// }
// )
