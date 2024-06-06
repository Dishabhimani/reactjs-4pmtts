
var myloader;
function load()
{
    // myloader=setTimeout(callbackfunction,"3000");
    myloader=setTimeout(display,"1500");
}

function display()
{
    document.getElementById("loader").style="display:none";
    document.getElementById("main-section").style="display:block";
}
