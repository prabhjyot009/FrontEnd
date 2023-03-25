function a(x){
    function b(y){
        return b;
    }
}
console.log(a(1)(2));

const add(function(){
    let counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
});

console.log(a(1)(2));