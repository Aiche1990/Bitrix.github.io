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

/* toggles the testimonial slider */
var contentOne = document.getElementsByClassName("box-content")[0];
var contentTwo = document.getElementsByClassName("box-content-2")[0];
var contentThree = document.getElementsByClassName("box-content-3")[0];

var btn = document.getElementsByTagName("LI")[0]
var btnTwo = document.getElementsByTagName("LI")[1];
var btnThree = document.getElementsByTagName("LI")[2];

var counter = 1;

function next()
{
    if(counter == 1)
    {
        contentOne.style.opacity = "0";
        contentTwo.style.opacity = "1";
        contentThree.style.opacity = "0";
        counter = 2;
        btnTwo.classList.remove("active");
        btnTwo.classList.add("deactive");

        btn.classList.remove("deactive");
        btn.classList.add("active");

        btnThree.classList.remove("active");
        btnThree.classList.add("deactive");
    }
    else if(counter == 2)
    {
        contentOne.style.opacity = "0";
        contentThree.style.opacity = "1";
        contentTwo.style.opacity = "0";

        btnTwo.classList.remove("active");
        btnTwo.classList.add("deactive");

        btn.classList.remove("active");
        btn.classList.add("deactive");

        btnThree.classList.remove("deactive");
        btnThree.classList.add("active");

        counter = 3;
    }
    else if(counter == 3)
    {
        contentThree.style.opacity = "0";
        contentTwo.style.opacity = "0";
        contentOne.style.opacity = "1";

        btnTwo.classList.remove("deactive");
        btnTwo.classList.add("active");

        btnThree.classList.remove("active");
        btnThree.classList.add("deactive");

        btn.classList.remove("active");
        btn.classList.add("deactive");

        counter = 1;
    }
}

function previous()
{
    if(counter == 2)
    {
        contentThree.style.opacity = "0";
        contentTwo.style.opacity = "0";
        contentOne.style.opacity = "1";
        
        btnTwo.classList.remove("deactive");
        btnTwo.classList.add("active");

        btnThree.classList.remove("active");
        btnThree.classList.add("deactive");

        btn.classList.remove("active");
        btn.classList.add("deactive");

        counter = 1;
    }
    else if(counter == 1)
    {
        contentOne.style.opacity = "0";
        contentThree.style.opacity = "1";
        contentTwo.style.opacity = "0";

        btnTwo.classList.remove("active");
        btnTwo.classList.add("deactive");

        btn.classList.remove("active");
        btn.classList.add("deactive");

        btnThree.classList.remove("deactive");
        btnThree.classList.add("active");

        counter = 3;
    }
    else if(counter == 3)
    {
        contentOne.style.opacity = "0";
        contentTwo.style.opacity = "1";
        contentThree.style.opacity = "0";

        counter = 2;
        btnTwo.classList.remove("active");
        btnTwo.classList.add("deactive");

        btn.classList.remove("deactive");
        btn.classList.add("active");

        btnThree.classList.remove("active");
        btnThree.classList.add("deactive");
    }
}


function activeOne()
{
    contentOne.style.opacity = "0";
    contentTwo.style.opacity = "1";
    counter = 2;
    btnTwo.classList.remove("active");
    btnTwo.classList.add("deactive");

    btn.classList.remove("deactive");
    btn.classList.add("active");

    btnThree.classList.remove("active");
    btnThree.classList.add("deactive");
}


function activeTwo()
{

    contentOne.style.opacity = "1";
    contentTwo.style.opacity = "0";
    contentThree.style.opacity = "0";

    btnTwo.classList.remove("deactive");
    btnTwo.classList.add("active");

    btn.classList.remove("active");
    btn.classList.add("deactive");

    btnThree.classList.remove("active");
    btnThree.classList.add("deactive");

    counter = 3;
}


function activeThree()
{
    contentOne.style.opacity = "0";
    contentThree.style.opacity = "1";
    contentTwo.style.opacity = "0";

    btnTwo.classList.remove("active");
    btnTwo.classList.add("deactive");

    btnThree.classList.remove("deactive");
    btnThree.classList.add("active");

    btn.classList.remove("active");
    btn.classList.add("deactive");

    counter = 1;
    console.log("im no 3");
}