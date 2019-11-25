
    document.getElementById("myButton").onclick = function () {
        var c1=document.getElementById("cek1").checked;
        var c2=document.getElementById("cek2").checked;
        if(c1==true & c2==false){
            location.href = "pice.html";
        }
        else if(c2==true & c1==false){
            location.href="hrana.html";
        }
        else if(c2==true & c1==true){
            location.href="hranaipice.html";
        }
        else{
            alert("Morate izabrati neku od opcija");
        }
        
    };
