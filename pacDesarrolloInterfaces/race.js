//let participantes =  document.getElementById('numParticipantes').options[document.getElementById('numParticipantes').selectedIndex].dataset.valor;

//let contenidoFotos = document.getElementById('fotos_content');

/*let imgCoches = [
    {src:"pacDesarrolloInterfaces\car1.png",
    width : 320,
    height : 320
    },
    {src:"pacDesarrolloInterfaces\car2.png",
    width : 320,
    height : 320
    },
    {src:"pacDesarrolloInterfaces\car3.png",
    width : 320,
    height : 320
    },
    {src:"pacDesarrolloInterfaces\car4.png",
    width : 320,
    height : 320
    },
    {src:"pacDesarrolloInterfaces\car5.png",
    width : 320,
    height : 320
    },
    {src:"pacDesarrolloInterfaces\car6.png",
    width : 320,
    height : 320
    },
    {src:"pacDesarrolloInterfaces\car7.png",
    width : 320,
    height : 320
    },
    {src:"pacDesarrolloInterfaces\car8.png",
    width : 320,
    height : 320
    }];*/

    

function nParticipantes(){

    let imgCoches = new Array();

imgCoches [0] = ['car1.png'];
imgCoches [1] = ['car2.png'];    
imgCoches [2] = ['car3.png'];
imgCoches [3] = ['car4.png'];
imgCoches [4] = ['car5.png'];
imgCoches [5] = ['car6.png'];
imgCoches [6] = ['car7.png'];
imgCoches [7] = ['car8.png'];

//var imgCoches = new Array("car1.png","car2.png", "car3.png", "car4.png", "car5.png", "car6.png", "car7.png", "car8.png");

    //para capturar la opción escogida en el option value, en el id="numParticipantes"
    
    //picture = document.getElementById("numCoches");
    
    //cocheFoto = picture.options[picture.selectedIndex].imgCoches[i];
    
    /*imgCoches = [
        {src:"car1.png",
        width : 150,
        height : 100
        },
        {src:"car2.png",
        width : 150,
        height : 100
        },
        {src:"car3.png",
        width : 150,
        height : 100
        },
        {src:"car4.png",
        width : 150,
        height : 100
        },
        {src:"car5.png",
        width : 150,
        height : 100
        },
        {src:"car6.png",
        width : 150,
        height : 100
        },
        {src:"car7.png",
        width : 150,
        height : 100
        },
        {src:"car8.png",
        width : 150,
        height : 100
        }];*/

    partic = document.getElementById("numParticipantes");
    num = partic.options[partic.selectedIndex].text;
    var picCoches = document.getElementById("numCoches");
    //var imgCoches, 
    var count, info_coches;
    //imgCoches = ["src:car1.png","src:car2.png","src:car3.png","src:car4.png","src:car5.png","src:car6.png","src:car7.png","src:car8.png"];
        count = 1;
    
    info_coches = "<ul class='ul'>";
    for(i=0;i<num;i++){

        info_coches+="<li>" + "<img src= imgCoches[i]"+ "</li>";
        /*let creaDiv = document.createElement('div');
        let creaImg = document.createElement('img');
        creaDiv.setAttribute('class','imagen');
        creaDiv.innerHTML = imgCoches [i];
        creaImg.setAttribute('src',imgCoches[i]);*/
        

        /*var html = "<img src= imgCoches[i]";
        
            var html_fotos = document.getElementById("numCoches").innerHTML += html;

            var definitivo = document.getElementById("numCoches").src = imgCoches[i];*/
            //var definitivo = document.getElementById("numCoches").src = html.src;
            //document.getElementById("coches").src=imgCoches[cont];


/* cars = document.createElement("img");
img.src = "imgCoches[i]";

//var div = document.getElementById("numCoches");
var definitivo = document.body.appendChild(img);*/
//block.setAttribute("style", "text-align:center");

/*var img = document.createElement("img"); 
     
img.src = "imgCoches[i]"; 
var src = document.getElementById("numCoches"); 
 
src.appendChild(img); */


            document.write(count + " " + info_coches + "<br>");
    
        count++;

}

info_coches+="<ul";

picCoches.innerHTML = info_coches;

}