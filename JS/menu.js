function abrir(){

    var el = document.getElementById('menu')
    
    console.log(el.style.display)

    if (el.style.display == 'none' || el.style.display == ''){
        el.style.display = 'flex';
    }
    else{
        el.style.display = 'none';
    }
}
