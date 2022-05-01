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
            let numCoches = $("#numParticipantes").val();
            
            numeroJugadores = new Array(parseInt(numCoches));
            if(esNumParticipantes == true){
                $(".coches").css({display: 'none'});
                $(".resultadoCarrera").css({display: 'none'});
                $(".carrera10").css({display: 'none'});
                entraFor = true;

    
    
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
          
    var cocheRecorrido = $("#cars1").width();
    var ventanaWidth = $(window).width();
    var carreteraRecorrido = ventanaWidth - cocheRecorrido;

    var cocheTiempo1 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo2 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo3 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo4 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo5 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo6 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo7 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo8 = Math.floor((Math.random()*10000) + 1);
    var cocheTiempo9 = Math.floor((Math.random()*10000) + 1);

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
    
    var carreraFinalizada1 = false;
    var carreraFinalizada2 = false;
    var carreraFinalizada3 = false;
    var carreraFinalizada4 = false;
    var carreraFinalizada5 = false;
    var carreraFinalizada6 = false;
    var carreraFinalizada7 = false;
    var carreraFinalizada8 = false;
    var carreraFinalizada9 = false;

    var esFinal = false;

    var nPlaza = "1";

    function carreraFinish(){
        $("#reiniciar").prop("disabled", true);

    if(carreraFinalizada1 == false){
        carreraFinalizada1 = true;
        var wonderful = new Audio("mariowonderful.mp3");
        wonderful.play();
    }else if(carreraFinalizada2 == false){
        carreraFinalizada2 = true;
        nPlaza = "2";
       
    }else if(carreraFinalizada3 == false){
        carreraFinalizada3 = true;
        nPlaza = "3";
        
    }else if(carreraFinalizada4 == false){
        carreraFinalizada4 = true;
        nPlaza = "4";
        
    }else if(carreraFinalizada5 == false){
        carreraFinalizada5 = true;
        nPlaza = "5";
        
    }else if(carreraFinalizada6 == false){
        carreraFinalizada6 = true;
        nPlaza = "6";
        
    }else if(carreraFinalizada7 == false){
        carreraFinalizada7 = true;
        nPlaza = "7";
        
    }else if(carreraFinalizada8 == false){
        carreraFinalizada8 = true;
        nPlaza = "8";
        
    }else if(carreraFinalizada9 == false){
        carreraFinalizada9 = true;
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

    for(i=0;i<numeroJugadores.length;i++){     
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

