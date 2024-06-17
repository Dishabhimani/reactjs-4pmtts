
/* 
what is inheritance ?
  A parent class properties access by its child class that is called inheritance.

     A => B

  Note : A class access by B via extends keyword
  
    class A 
    {
        constructor()
        {
            statements;
        }
    }

    class B extends A 
    {
        constructor()
        {
            super(); //super() is access a parent class properties 
            statements;
        }

    }

    var obj=new B();

*/

class Pets
{
    constructor(nm,age)
    {
        this.nm=nm;
        this.age=age; 

    }
}

class Owner extends Pets 
{
    
    constructor(nm,age,ownername)
    {
        super(nm,age,ownername);
        this.ownername=ownername;
    }
}

var obj=new Owner("Tiger","10 years","jaylalita sharma");
console.log(obj);
