
/* 
what is single inheritance ?
  A One parent class properties access by its only one child class that is called single inheritance.

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

class employee
{
    constructor(nm,age)
    {
        this.nm=nm;
        this.age=age; 

    }
}

class Hr extends employee 
{
    
    constructor(nm,age,hrname)
    {
        super(nm,age,hrname);
        this.hrname=hrname;
    }
}

var obj=new Hr("Divesh","35 years","Divya");
console.log(obj);
