function abrirCategorias(){
    document.getElementById("categoriaBlock").style.display = "flex"

    document.getElementById("main").style.filter = "blur(3px)";
    document.getElementById("header").style.filter = "blur(3px)";
    document.getElementById("footer").style.filter = "blur(3px)";
}

function fechar(){
    document.getElementById("categoriaBlock").style.display = "none"

    document.getElementById("main").style.filter = "blur(0px)";
    document.getElementById("header").style.filter = "blur(0px)";
    document.getElementById("footer").style.filter = "blur(0px)";
}