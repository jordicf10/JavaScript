function playAudio() {           //Para activar el sonido (quitar el mute)
    $("#introJuego").prop('muted', false);
} 

function stopAudio() { 
    $("#introJuego").prop('muted', true);    //Para desactivar el sonido (poner el mute)
} 

var participantes = $('#numParticipantes');       //Con estas dos líneas, al reiniciar ponemos el selector de participantes a 0
participantes.val(participantes.children('option:first').val());
var entraFor = false;
$("#start").prop("disabled", true);           //Tenemos deshabilitado el botón start para que no se active hasta que seleccionemos el número de participantes
$("#reiniciar").css({visibility: 'hidden'});

var esNumParticipantes = false;    

$("#numParticipantes").on("change", function(){
    var hoohoo = new Audio("mariohoo.mp3");
    hoohoo.play();
        $("#start").prop("disabled", false);
        $("#reiniciar").prop("disabled", true);
            /*var partic = document.getElementById("numParticipantes");
            var num = partic.value;*/

            let numCoches = $("#numParticipantes").val();
            
            numeroJugadores = new Array(parseInt(numCoches));
            if(esNumParticipantes == true){
                $(".coches").css({display: 'none'});
                $(".resultadoCarrera").css({display: 'none'});
                $(".carrera10").css({display: 'none'});
                entraFor = true;

                for (i=0;i<numeroJugadores.length;i++) {

                numeroJugadores[i] = 
                    $("#cars"+(i+1)).css(
                        {display: 'flex'}),
                    $(".carrera"+(i+1)).css(
                        {display: 'flex'}),
                    $(".resultadoCoche"+(i+1)).css(
                        {display: 'block'}),
                    $(".carrera10").css(
                        {display: 'flex'});                  
                }
                
                $(".resultadoCarrera").css(
                    {display: 'flex'});
                $("#start").css(
                    {visibility: 'visible'});

    
    
    $("#start").css({visibility: 'visible'});
    numCoches = $("#numParticipantes").val();
            
    numeroJugadores = new Array(parseInt(numCoches));
    for (i=0;i<numeroJugadores.length;i++) {

                numeroJugadores[i] = 
                    $("#cars"+(i+1)).css(
                        {display: 'flex'}),
                    $(".carrera"+(i+1)).css(
                        {display: 'flex'}),
                    $(".resultadoCoche"+(i+1)).css(
                        {display: 'block'}),
                    $(".carrera10").css(
                        {display: 'flex'});                  
                }
                
                $(".resultadoCarrera").css(
                    {display: 'flex'});
                $("#start").css(
                    {visibility: 'visible'});

                    esNumParticipantes = true;

    

                entraFor = true;
        
        }
            
        if(esNumParticipantes == false){
            /*numCoches = $("#numParticipantes").val();
            numeroJugadores = new Array(parseInt(numCoches));*/
            for (i=0;i<numeroJugadores.length;i++) {

                numeroJugadores[i] = $("#cars"+(i+1)).css(
                        {display: 'flex'}),
                    $(".carrera"+(i+1)).css(
                        {display: 'flex'}),
                    $(".resultadoCoche"+(i+1)).css(
                        {display: 'block'}),
                    $(".carrera10").css(
                        {display: 'flex'});                  
                }
                $(".resultadoCarrera").css(
                    {display: 'flex'});
                $("#start").css(
                    {visibility: 'visible'});

                    esNumParticipantes = true;

    

                entraFor = true;
        }
                /*var participantes = $('#numParticipantes');       //Con estas dos líneas, al reiniciar ponemos el selector de participantes a 0
                participantes.val(participantes.arrayParticipantes.prop("reset", true));*/
})

$("#start").on("click",function(){
    
    $("#numParticipantes").prop("disabled", true);
    var herewego = new Audio("herewego.mp3");
    herewego.play();
    $("#start").prop("disabled", true);
    $("#start").css({visibility: 'hidden'});
    $("#reiniciar").css({visibility: 'visible'});
    $("#reiniciar").prop("disabled", true);
    
    /*var cocheRecorrido = [];
    var ventanaWidth = [];
    var carreteraRecorrido = [];
    for(i=0;i<num;i++){
        cocheRecorrido[i] = $("#cars"+(i+1)).width();
        ventanaWidth[i] = $(window).width();
        carreteraRecorrido[i] = ventanaWidth[i] - cocheRecorrido[i];
    }*/
          
    var cocheRecorrido = $("#cars1").width();   //AIXÒ S'HA DE REVISAR
    var ventanaWidth = $(window).width();
    var carreteraRecorrido = ventanaWidth - cocheRecorrido;
    var cocheTiempo1 = Math.floor((Math.random()*10000) + 1);   //10000 para que sea entre 1 y 10 segundos
    var cocheTiempo2 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo3 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo4 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo5 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo6 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo7 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo8 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo9 = Math.floor((Math.random()*10000) + 1);
    /*var cocheTiempo = [];
    for(i=0;i<num;i++){
        //$("#cochetiempo"(i+1)).append(cocheTiempo+i);
        cocheTiempo[i]= Math.floor((Math.random()*10000) + 1);  //aquesta podria funcionar
    }
    var cocheTiempoSeg = [];*/
    

    /*if (num > 0 && num <= 9) {
        while (num < arrayParticipantes.length) {
            let corredores = arrayParticipantes.pop(); //Quito los coches sobrantes del array
            document.write(corredores);
        }
    } //end if cantidad
    else { //Si le dan erroneamente al botón seleccionar
        alert("No has seleccionado una cantidad \n de participantes")
        location.reload(2500);
    };*/

     

    /*for(i=0;i<num;i++){
        arrayParticipantes[i] = $("#cars"+(i+1)).animate({left: carreteraRecorrido},  //Potser falta posar al principi un arrayParticipantes[i]
        cocheTiempo[i]= Math.floor((Math.random()*10000) + 1),
        function(){carreraFinish();
        $("#posicionCoche"+(i+1)).text(nPlaza);
        cocheTiempoSeg[i] = cocheTiempo[i] / 1000;
        $("#tiempoCoche"+(i+1)).text(cocheTiempoSeg[i]  + "s");
        $('.resultadoCoche'+(i+1)).css(  //Pinta de verde el primero que llega, y así sucesivamente
            {background: 'green'}
            );
    });
};*/
/*for(i=0;i<num;i++){*/
    numeroJugadores[0] = $("#cars1").animate({
        left: carreteraRecorrido
    }, cocheTiempo1, function(){
        carreraFinish();
        $("#posicionCoche1").text(nPlaza);
        var cocheTiempo1Seg = cocheTiempo1 / 1000;
        $("#tiempoCoche1").text(cocheTiempo1Seg  + "s");
        $('.resultadoCoche1').css(  //Pinta de verde el primero que llega, y así sucesivamente
            {background: 'green'}
            );
    });
    numeroJugadores[1] = $("#cars2").animate({
        left: carreteraRecorrido
    }, cocheTiempo2, function(){
        carreraFinish();
        $("#posicionCoche2").text(nPlaza);
        var cocheTiempo2Seg = cocheTiempo2 / 1000;
        $("#tiempoCoche2").text(cocheTiempo2Seg + "s");
        $('.resultadoCoche2').css(  
            {background: 'green'}
        );
    });
    numeroJugadores[2] = $("#cars3").animate({
        left: carreteraRecorrido
    }, cocheTiempo3, function(){
        carreraFinish();
        $("#posicionCoche3").text(nPlaza);
        var cocheTiempo3Seg = cocheTiempo3 / 1000;
        $("#tiempoCoche3").text(cocheTiempo3Seg + "s");
        $('.resultadoCoche3').css(  
            {background: 'green'}
        );
    });
    numeroJugadores[3] = $("#cars4").animate({
        left: carreteraRecorrido
    }, cocheTiempo4, function(){
        carreraFinish();
        $("#posicionCoche4").text(nPlaza);
        var cocheTiempo4Seg = cocheTiempo4 / 1000;
        $("#tiempoCoche4").text(cocheTiempo4Seg + "s");
        $('.resultadoCoche4').css(  
            {background: 'green'}
        );
    });
    numeroJugadores[4] = $("#cars5").animate({
        left: carreteraRecorrido
    }, cocheTiempo5, function(){
        carreraFinish();
        $("#posicionCoche5").text(nPlaza);
        var cocheTiempo5Seg = cocheTiempo5 / 1000;
        $("#tiempoCoche5").text(cocheTiempo5Seg + "s");
        $('.resultadoCoche5').css(  
            {background: 'green'}
        );
    });
    numeroJugadores[5] = $("#cars6").animate({
        left: carreteraRecorrido
    }, cocheTiempo6, function(){
        carreraFinish();
        $("#posicionCoche6").text(nPlaza);
        var cocheTiempo6Seg = cocheTiempo6 / 1000;
        $("#tiempoCoche6").text(cocheTiempo6Seg + "s");
        $('.resultadoCoche6').css(  
            {background: 'green'}
        );
    });
    numeroJugadores[6] = $("#cars7").animate({
        left: carreteraRecorrido
    }, cocheTiempo7, function(){
        carreraFinish();
        $("#posicionCoche7").text(nPlaza);
        var cocheTiempo7Seg = cocheTiempo7 / 1000;
        $("#tiempoCoche7").text(cocheTiempo7Seg + "s");
        $('.resultadoCoche7').css(  
            {background: 'green'}
        );
    });
    numeroJugadores[7] = $("#cars8").animate({
        left: carreteraRecorrido
    }, cocheTiempo8, function(){
        carreraFinish();
        $("#posicionCoche8").text(nPlaza);
        var cocheTiempo8Seg = cocheTiempo8 / 1000;
        $("#tiempoCoche8").text(cocheTiempo8Seg + "s");
        $('.resultadoCoche8').css(  
            {background: 'green'}
        );
        
    });
    numeroJugadores[8] = $("#cars9").animate({
        left: carreteraRecorrido
    }, cocheTiempo9, function(){
        carreraFinish();
        $("#posicionCoche9").text(nPlaza);
        var cocheTiempo9Seg = cocheTiempo9 / 1000;
        $("#tiempoCoche9").text(cocheTiempo9Seg + "s");
        $('.resultadoCoche9').css(  
            {background: 'green'}
        ); 
    });

//}
    
    /*document.write("Este es el tamaño de arrayParticipantes después de añadir todos los objetos: " + arrayParticipantes.length + "<br/>");
    document.write("Este es el valor de num: " + num + "<br/>");
    arrayParticipantes = [];
    document.write("Este es el tamaño de arrayParticipantes después de hacer un 'arrayParticipantes = [];' : " + arrayParticipantes.length + "<br/>");*/

    /*arrayParticipantes = [];

    for(i=0;i<num;i++){
        arrayParticipantes[i] = arr1;
    }*/

    /*for(i=0;i<num;i++){   AQUEST ÉS EL QUE FUNCIONA
        arrayParticipantes[i];
    }*/

    //document.write("Este es el tamaño de arrayParticipantes después de hacer un bucle for añadiendo 'arrayParticipantes[i]' : " + arrayParticipantes.length + "<br/>");


    //arrayPartipantes.length = arrayParticipantes.length - 1;

    /*var partic = document.getElementById("numParticipantes");
    var num = partic.value;*/

    /*var suma = 0;

    for(i=0;i<num;i++){
        
        var tamaño = arrayParticipantes[i].length;

        suma+=tamaño    
    }
    
    document.write(num);
    document.write(suma);*/

    var carreraFinalizada1 = false;
    var carreraFinalizada2 = false;
    var carreraFinalizada3 = false;
    var carreraFinalizada4 = false;
    var carreraFinalizada5 = false;
    var carreraFinalizada6 = false;
    var carreraFinalizada7 = false;
    var carreraFinalizada8 = false;
    var carreraFinalizada9 = false; /*AIXÒ FUNCIONA!!!*/

    //var carreraFinalizada = [];

    //var nPlaza = "1";
    var esFinal = false;

    var nPlaza = "1";
    /*$("#posicionCoche"+(i+1)).text(nPlaza) = "2";
    document.write(nPlaza);*/

    function carreraFinish(){
        $("#reiniciar").prop("disabled", true);

        /*do {
            for (let i = 0; i < carrera.length; i++) {
        if (carrera[i].pxRecorridos >= meta) {
            ganador = carrera[i];
            fin = true;

        } //end if meta

    }
    while (!fin);*/

/*do{
    for(i=0;i<num;i++){
        if((cocheRecorrido + cocheTiempo[i]) >= carreteraRecorrido){  //(cocheRecorrido + cocheTiempo[i] >= carreteraRecorrido)
            esFinal = true;
            nPlaza += i;
        }else if((cocheRecorrido + cocheTiempo[i]) >= carreteraRecorrido){
            esFinal = true;
            nPlaza += i;
    }
    if(nPlaza == "1"){
        var wonderful = new Audio("mariowonderful.mp3");
        wonderful.play();
    }
    if(nPlaza == "9"){
        var mammamia = new Audio("mammamia.mp3");
        mammamia.play();
    }
}
    
    
}while(!esFinal);

if(esFinal){   //Si ha llegado al final, se activa el botón de reiniciar
    $("#reiniciar").prop("disabled", false);
    esFinal = false;
}*/

/*do{
    for(i=0;i<num;i++){

    }
    if(nPlaza == "1"){
        var wonderful = new Audio("mariowonderful.mp3");
        wonderful.play();
    }
    if(nPlaza == "9"){
        var mammamia = new Audio("mammamia.mp3");
        mammamia.play();
    }
}while(!esFinal);*/
/*if((ventanaWidth - cocheRecorrido)-carreteraRecorrido){

}*/
    if(carreraFinalizada1 == false){
        carreraFinalizada1 = true;
        //$("#posicionCoche1").text(nPlaza) = "1";
        var wonderful = new Audio("mariowonderful.mp3");
        wonderful.play();
    }else if(carreraFinalizada2 == false){
        carreraFinalizada2 = true;
        //$("#posicionCoche2").text(nPlaza) = "2";
        nPlaza = "2";
       
    }else if(carreraFinalizada3 == false){
        carreraFinalizada3 = true;
        //$("#posicionCoche3").text(nPlaza) = "3";
        nPlaza = "3";
        
    }else if(carreraFinalizada4 == false){
        carreraFinalizada4 = true;
        //$("#posicionCoche4").text(nPlaza) = "4";
        nPlaza = "4";
        
    }else if(carreraFinalizada5 == false){
        carreraFinalizada5 = true;
        //$("#posicionCoche5").text(nPlaza) = "5";
        nPlaza = "5";
        
    }else if(carreraFinalizada6 == false){
        carreraFinalizada6 = true;
        //$("#posicionCoche6").text(nPlaza) = "6";
        nPlaza = "6";
        
    }else if(carreraFinalizada7 == false){
        carreraFinalizada7 = true;
        //$("#posicionCoche7").text(nPlaza) = "7";
        nPlaza = "7";
        
    }else if(carreraFinalizada8 == false){
        carreraFinalizada8 = true;
        //$("#posicionCoche8").text(nPlaza) = "8";
        nPlaza = "8";
        
    }else if(carreraFinalizada9 == false){
        carreraFinalizada9 = true;
        //$("#posicionCoche9").text(nPlaza) = "9";
        nPlaza = "9";
        var mammamia = new Audio("mammamia.mp3");
        mammamia.play();
        esFinal = true;  //Para fijar el final de la carrera y así reiniciar
    }
    
    if(esFinal){   //Si ha llegado al final, se activa el botón de reiniciar
        $("#reiniciar").prop("disabled", false);
        esFinal = false;
    }
}
    
        
        
    //}

} )



$("#reiniciar").on("click", function(){
    $("#reiniciar").prop("disabled", true);
    $("#reiniciar").css({visibility: 'hidden'});
    $(".coches").css({left: 0});
    $(".coches").css({display: 'none'});
    $("#numParticipantes").prop("disabled", false);
    $("#start").prop("disabled", true);
    $("#start").css({visibility: 'hidden'});
    $(".coches").css({left: 0});
    $(".carrera10").css({display: 'none'});
    entraFor = true;

    for(i=0;i<numeroJugadores.length;i++){     //AIXÒ S'HA DE CORREGIR, NO POT SER QUE POSI UN 9 ENLLOC D'UN LENGTH
        $("#posicionCoche"+(i+1)).text("-");
        $("#tiempoCoche"+(i+1)).text("-");
        $("#cars"+(i+1)).css({display: 'none'});
        $(".carrera"+(i+1)).css({display: 'none'});
        $(".resultadoCoche"+(i+1)).css({background: 'black'});
        $(".resultadoCarrera").css({display: 'none'});
        $(".resultadoCoche"+(i+1)).css({display: 'none'});
    }

    var participantes = $('#numParticipantes');       //Con estas dos líneas, al reiniciar ponemos el selector de participantes a 0
    participantes.val(participantes.children('option:first').val());

})  

