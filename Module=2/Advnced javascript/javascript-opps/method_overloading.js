
/*
method overloading :  This is a type of polymorpshim
                      Method overloading meanse if we used same  functions pass with diffrent-2 arguments i.e called method oveloading.  

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
    constructor(a,b,c)
    {
        super(a,b,c);
        this.c=30;
        this.res=a*b*c;
        
    }
}

var obj=new B(10,20,30);
console.log(obj);
