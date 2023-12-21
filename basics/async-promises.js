console.log('starting...');
// callback funtion...
var foo = function(){
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            console.log('foo fn');
            resolve("foo")
        }, 5000);  
    })
}

// foo().then(res=> res[0])
// .then(data=> console.log(data))
// .catch(err=> console.log('Err: ', err))
async function test(){
    const res = await foo();
    console.log(res);
}

test();



   

// var result = foo();
// console.log(result);
// foo(function(result){
//     console.log(result);
// })

console.log('finish..');