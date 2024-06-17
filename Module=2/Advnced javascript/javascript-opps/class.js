
/* what is class ?  
      A class is a group of member and its member function i. called class.
      or
      A class is a blue print of any object.
      or
      A class is nothing whenever we can not create its objects.

      syntax 

       class classname 
       {
        member function()
        {
            statements;
        }
       }
       create an object of class



*/


class A 
{
    constructor(name)
    {
        // constructor is a same name of the class whenever we create an object of class constructor automatically called
        this.name=name;

    }
}

var myobject=new A("Brijesh"); //here new A is an object of class A
console.log(myobject);
