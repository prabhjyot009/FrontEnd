// let object={
//     keyname1:'value1',
//     keyname2:'value2'
// };

// console.log(object["keyname1"]);
// console.log(object.keyname1);

// let obj={
//     favsnack:'pizza',
// };
// console.log(obj.favsnack);

// obj.favsnack='burger';
// console.log(obj.favsnack);

// console.log(obj);

const person={
    name:"Mehul",
    channel:"codedamn",
    website:"codedamn.com",
    isHTMLProgrammingLang:true
};
console.log(person);


delete person.isHTMLProgrammingLang;

person.name="singh"
// while using const it does not ensure changing person key value it 
// only ensures changing person value itself
// person="singh" //const value
console.log(person);