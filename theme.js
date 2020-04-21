
var res1=document.getElementById("theme_butm");
var res2=document.getElementById("theme_butm1");
function theme1(){
    var head = document.getElementById("header1") 
    var intr = document.getElementById("intro") 
    var But = document.getElementById("theme_butm")
    var But1 = document.getElementById("theme_butm1")
    var statist = document.getElementById("stat")
    var Team = document.getElementById("team1")   
    var Cont = document.getElementById("contact") 
    var Sect2 = document.getElementById("section2") 
    var Footer = document.getElementById("footer")  
     
    head.style.color = "#1e1c16";
    intr.style.backgroundImage= "url(access/images/darkintro.jpg)";
    intr.style.color="#333";
    But.style.display="block";
    But.style.marginLeft="85vw";
    But.style.backgroundColor="#fff";
    But.style.borderColor="#fff";
    But.style.color="#333";
    But.style.display="none";
    But1.style.display="inline";
    statist.style.background = "#010035";
    statist.style.color = "#fff";  
    Cont.style.background="#010035";
    Cont.style.color="#fff";  
    Sect2.style.background="#333";
    Sect2.style.color="#fff";
    Footer.style.background="linear-gradient(to bottom,#010612, #8691AB)";
    Footer.style.color="#fff";
    
    }


    res1.addEventListener("click",theme1);
      

function theme2(){
        var head = document.getElementById("header1") 
        var intr = document.getElementById("intro") 
        var But = document.getElementById("theme_butm")
        var But1 = document.getElementById("theme_butm1")
        var statist = document.getElementById("stat")
        var Team = document.getElementById("team1")   
        var Cont = document.getElementById("contact") 
        var Sect2 = document.getElementById("section2") 
        var Footer = document.getElementById("footer")  
        head.style.color=null;
        intr.style.backgroundImage=null;
        intro.style.color=null;
        But.style.display=null;
        But.style.marginLeft=null;
        But.style.borderColor=null;
        But.style.backgroundColor=null;
        But.style.color=null;
        But.style.display="inline";
        But1.style.display="none";
        statist.style.color=null;
        statist.style.background=null;
        Cont.style.background=null;
        Cont.style.color=null;
        Sect2.style.background=null;
        Sect2.style.color=null;//+
        Footer.style.background=null;
        Footer.style.color=null;
    }
    
    res2.addEventListener('click',theme2);
  