console.log('Hola Mundo');

var lista = [];

var i= 0;

var agregarElemento = prompt('Agregá una actividad en la lista');

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
