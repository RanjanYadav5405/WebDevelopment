console.log('Ranjan is Hacker');
console.log('Yadav is hecker');

setTimeout(() => {
    console.log('I am inside settimeout');
                  
}, 3000);

setTimeout(() => {
    console.log('I am inside settimeout 2');
    
}, 0);

console.log('The End');


//===========================================================

// call function

const fn =() =>{
    console.log('Nothing');
    
}

const callback = (arg, fn) =>{
    console.log(arg);
    fn();
    
}


const loadScript = (src , callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("RanjanYadav",fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)