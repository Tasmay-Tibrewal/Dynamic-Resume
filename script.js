var height = 100;
let Int;
let check = 0;
let check2 = 0;

function Change_Bg()
{
    if(check2 == 0)
    {
        Int = setInterval(Inc_Height,4);
        var el = document.getElementsByClassName("bg");
        el[0].style.backgroundImage = "url('./styles/Thumbnails/milky-way-2.jpg')";
        check = 1;
        check2 = 1;
    }
}

function Change_Bg_2()
{
    if (check == 1)
    {
        Int = setTimeout(a, 300);
    }
}

function a()
{
    var el = document.getElementsByClassName("bg");
    el[0].style.backgroundImage = "url('./styles/Thumbnails/milky-way-5.jpg')";
    check = 2;
}

function Change_Bg_3()
{
    if (check == 2)
    {
        Int = setTimeout(b, 300);
        Int = setInterval(Dec_Height,4);
    
        var el2 = document.getElementsByClassName("mid");
    }
}

function b()
{
    var el = document.getElementsByClassName("bg");
    el[0].style.backgroundImage = "url('./styles/Thumbnails/milky-way-4.jpg')";
    el[0].style.backgroundSize = "";
}

function Inc_Height()
{
    if (height < 1000)
    {
        height = height + 5;
        let str = height.toString();
        str = str.concat("","px");
        
        var element = document.getElementById("BG");

        element.style.height = str;
    }

    else
    {
        clearInterval(Int)
    }
    
}

function Dec_Height()
{
    if (height > 50)
    {
        height = height - 5;
        let str = height.toString();
        str = str.concat("","px");
        
        var element = document.getElementById("BG");

        element.style.height = str;
    }

    else
    {
        check = 3;
        clearInterval(Int)
    }
    
}

function About_Call()
{
    document.getElementsByClassName("mid-txt")[0].scrollIntoView({behavior: 'smooth'});
}

function Skill_Call()
{
    document.getElementsByClassName("mid-txt-low")[0].scrollIntoView({behavior: 'smooth'});
}

function Contact_Call()
{
    document.getElementsByClassName("contact-head")[0].scrollIntoView({behavior: 'smooth'});
}

function Insta_Call()
{
    location.href = "https://www.instagram.com/dark_o_ether/";
}

function Github_Call()
{
    location.href = "https://github.com/Tasmay-Tibrewal";
}

function LinkedIn_Call()
{
    location.href = "https://www.linkedin.com/in/tasmay-tibrewal/";
}

function Facebook_Call()
{
    location.href = "https://www.facebook.com/profile.php?id=100087979943376";
}
