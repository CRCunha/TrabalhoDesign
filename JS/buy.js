function openBuy(){
    document.getElementById("buyBlock").style.display = "flex"

    document.getElementById("main").style.filter = "blur(3px)";
    document.getElementById("header").style.filter = "blur(3px)";
    document.getElementById("caminho").style.filter = "blur(3px)";
    document.getElementById("footer").style.filter = "blur(3px)";
}

function closeBuy(){
    document.getElementById("buyBlock").style.display = "none"

    document.getElementById("main").style.filter = "blur(0px)";
    document.getElementById("header").style.filter = "blur(0px)";
    document.getElementById("footer").style.filter = "blur(0px)";
}
