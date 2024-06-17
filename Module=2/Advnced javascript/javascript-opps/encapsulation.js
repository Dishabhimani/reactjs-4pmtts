
/*

encapsulation : encapsulation is a process where we bind a process in a single objects i.e called encapsulations.
                  
                 or 

                 encapsulation is wrapping up data in a single objects i.e called encpasulations. 

*/


class A 
{
    constructor()
    {
        var nm;
        var marks;
    }

    getName()
    {
        return this.nm;
    }

    setName(nm)
    {
        this.nm=nm;
    }
    getMarks()
    {
        return this.marks;
    }
    setMarks(marks)
    {
        this.marks=marks;
    }
  

}

var obj=new A();
obj.setName("Brijesh");
obj.setMarks("0.5");
console.log(obj.getName());
console.log(obj.getMarks());
