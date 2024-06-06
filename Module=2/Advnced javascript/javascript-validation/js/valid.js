function valid()
{
if(document.frm.name.value=="")
{
alert('Please enter your Name')
document.frm.name.focus();
return false;
} 
// applied regular expressions
var nm=/^[a-zA-Z]+$/;
if(!nm.test(document.frm.name.value))
{
alert('Please enter your Name only alphabetic characters only')
document.frm.name.focus();
return false;
}
if(document.frm.email.value=="")
{
alert('Please enter your Email')
document.frm.email.focus();
return false;
} 
// applied regular expressions
var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(!em.test(document.frm.email.value))
{
alert('Please enter your valid email address')
document.frm.email.focus();
return false;
}
if(document.frm.newtaskname.value=="")
{
alert('Please enter your new task')
document.frm.newtaskname.focus();
return false;
}

if(document.frm.details.value=="")
{
alert('Please enter your task details')
document.frm.details.focus();
return false;
}



}