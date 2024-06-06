// take input from users after click on btn inside of result
function UserValue(val)
{
document.getElementById("result").value+=val;
}

// clear the input values 
function clr()
{
document.getElementById("result").value="";
}
// slice a values after click on back button
function bck()
{
var back=document.getElementById("result").value;
var res=back.slice(0,-1);
document.getElementById("result").value=res;
}
//all airthmatic concepts + , - , + , / , *
function finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}

// square
function sq()
{
    var num=document.getElementById("result").value;
    var res=Math.pow(num,2);
    document.getElementById("result").value=res;
} 
// square root
function sqr()
{
    var num=document.getElementById("result").value;
    var res=Math.sqrt(num);
    document.getElementById("result").value=res;
} 