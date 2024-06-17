/*
Abstract class
   An abstraction is a data hidding process for some users 
   or
   An abstractions is a process where we hide some data from some users i.e called abstractions 
   or
   An abstractions is a process where internal data will be hide form some users users will see only external process i.e also called abstractions.
   
   
   Note : if we create any class as abstract class we never create an object of abstract class.
          abstract class always will be access by inheritance.



*/ 

abstract class A 
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;

    }
}

class B extends A 
{
    constructor(name,age,address)
    {
        super(name,age,address);
        this.address=address;
    }
}
var obj=new B("brijesh","35","150 feet ring road rajkot");
console.log(obj);
