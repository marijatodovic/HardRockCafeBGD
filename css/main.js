console.log("test iz drugog fajla");

function imeFunkcije(){
console.log("Poziv iz funkcije");
}
imeFunkcije();

function drugaFunkcija(){
    console.log("drugaFunkcija");
    alert("Kliknuo si na header");

}
var meniIkonica=document.querySelector("#meni-ikonica");

var meniVidljiv=false;
var meni=document.querySelector(".meni");
meniIkonica.addEventListener('click', prikaziMeni);
var closeIcon=document.querySelector("#zatvori");
closeIcon.addEventListener('click', prikaziMeni);
 function prikaziMeni(){
     
    if(!meniVidljiv){
        
        console.log("Meni je vidljiv");
        meni.style.display="block";
       
        closeIcon.style.display="block";
        meniVidljiv=true;
    }
   
    else{
        
        meni.style.display="none";
        
        meniVidljiv=false;
        closeIcon.style.display="none";
    }}
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
      var myWindow;
      var open;
      opn = document.getElementById("meni");
      opn.addEventListener('click', openCenovnik);
      opn1 = document.getElementById("kontakt1");
      opn1.addEventListener('click', openKontakt);
      opn2 = document.getElementById("kontakt2");
      opn2.addEventListener('click', openKontakt);
      opn3 = document.getElementById("kontakt3");
      opn3.addEventListener('click', openKontakt);
      opn4 = document.getElementById("kontakt4");
      opn4.addEventListener('click', openKontakt);
      opn5 = document.getElementById("inst");
      opn5.addEventListener('click', openInst);
       
        
         
     
function openCenovnik(){
    myWindow = window.open("cenovnik.html");
}
function openKontakt(){
    myWindow = window.open("kontakt.html");
}
function openInst(){
    myWindow = window.open("https://www.instagram.com/hrcpodgorica/?hl=sr");
}
       