console.log('starting...');

var foo = function(){
    setTimeout(function(){
        console.log('foo fn');
        return "foo"
    }, 5000);  
}

var result = foo();
console.log(result);

console.log('finish..');