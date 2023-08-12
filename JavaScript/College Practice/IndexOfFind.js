let myfavfood=["burger","pizza","pasta"];

//console.log(myfavfood.includes("burger"));

let students=[
    {
        name:"ABC",
        age:15
    },
    {
        name:"DEF",
        age:16
    }
]

const student=students.find(s=>{
    // return s.age=15;
    return s.name=="DEF";
})
console.log(student);

