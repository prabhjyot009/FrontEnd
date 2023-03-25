class Person
{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    //methods
    print(){
        console.log(this.firstname +"," +this.lastname);
    }
}

var p1=new Person("Prabhjyot","Singh");
console.log(p1.firstname);
console.log(p1.lastname);

p1.print();