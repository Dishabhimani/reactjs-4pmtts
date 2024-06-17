/*
method overloading :  This is a type of polymorpshim
                      Method overriding meanse if we used same  functions pass with same arguments i.e called method overriding.  

*/

class A 
{
    constructor(a,b)
    {
      this.a=a;
      this.b=b;
      this.c=a+b;
    }
}

class B extends A 
{
    constructor(a,b)
    {
        super(a,b);
        this.res=a*b;
        
    }
}

var obj=new B(10,20);
console.log(obj);