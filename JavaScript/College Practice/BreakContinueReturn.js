// for (let i = 0; i < 10 ; i++) {
//     // console.log(i);
//     if(i==5){
//         continue;
//     }    
//     console.log('Done');
// }
function myLoop() {

    for (let i = 0; i < 10 ; i++) {
        // console.log(i);
        if(i==5){
            return;
        }    
        console.log(i);
    } 
    console.log('Loop ended!');
}

myLoop();
