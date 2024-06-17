
/* what is object ?  
      An object is a instance of class i.e called object
      An object is always called through new keyword

      syntax 

       class classname 
       {
        member function()
        {
            statements;
        }
       }
       create an object of class

       var object=new classname;


*/


// class A 
// {
//     constructor(name,age)
//     {
//         // constructor is a same name of the class whenever we create an object of class constructor automatically called
//         this.name=name;
//         this.age=age;

//     }
// }

// var myobject=new A("Brijesh",35); //here new A is an object of class A
// console.log(myobject);



class A 
{
    constructor(name,age)
    {
        // constructor is a same name of the class whenever we create an object of class constructor automatically called
        this.name=name;
        this.age=age;

    }
}

var myobject=new A("Brijesh",35); //here new A is an object of class A
console.log(myobject);
