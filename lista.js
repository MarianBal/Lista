console.log('Hola Mundo');

var lista = [];

var i= 0;

var agregarElemento = prompt('Agregá un elemento a la lista');

if(agregarElemento ==''){
   
    for(i; i <= lista.length -1; i++) {

        var resultado = lista[i];
    
        document.write(i+1 + ': ' + resultado + '<br>');
    
    }

} else if (agregarElemento != ''){

    lista.push(agregarElemento)

    for(i; i <= lista.length -1; i++) {

        var resultado = lista[i];
    
        document.write(i+1 + ': ' + resultado + '<br>');
    
    }

}
