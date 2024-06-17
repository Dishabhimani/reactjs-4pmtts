
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

class Boss extends Hr 
{
    constructor(nm,age,hrname,bossname)
    {
        super(nm,age,hrname,bossname);
        this.bossname=bossname;
    }
}

var obj=new Boss("Divesh","35 years","Divya","Mr jay shah");
console.log(obj);
