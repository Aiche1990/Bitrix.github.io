/* Mobile Nav Toggle */

var mNav = document.getElementsByClassName("desktop-nav")[0];
var ctr = 0;

function showMobileNav()
{
    if(ctr == 0)
    {
        mNav.style.transform = "scale(1)";
        ctr = 1;
        console.log("hi!");
    }
    else if(ctr == 1)
    {
        mNav.style.transform = "scale(0)";
        ctr = 0;
    }
}


/* Checks if Mobile/Tablet/Desktop view */

function checkRes()
{
    var w = window.innerWidth;
    if(w > 354)
    {
        mNav.style.transform = "scale(1)";
    }
    else if(w <= 354)
    {
        mNav.style.transform = "scale(0 )";
    }
}