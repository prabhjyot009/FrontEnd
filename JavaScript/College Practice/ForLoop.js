// for loop
//let is a block scope variable
for (var index = 0; index < 10; index++) {
    console.log(index);  
}
console.log(index);
//var is function scope

// step 0: i=0;
// step 1: checking if i<10 -true
// step 2: executing the block
// step 3: i++ = 1
// step 4: checking if i<10 -true
// step 5: executing
// ..
// ..
// ..
// step X- i++=9
// x+1: checking - true
// x+2: executing
// x+3: i++ = 10
// x+4: checking - false
// x+5: get out of the loop