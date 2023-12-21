console.log('starting...');
// callback funtion...
var foo = function(fn){
    setTimeout(function(){
        console.log('foo fn');
        fn("foo")
    }, 5000);  
}

// var result = foo();
// console.log(result);
foo(function(result){
    console.log(result);
})

console.log('finish..');