let poemaActual


let estados = ["instrucciones", "poema"]


let estadoActual


function setup() {
    createCanvas( windowWidth, windowHeight )
    estadoActual = estados[0]
    textAlign( CENTER, CENTER )
}



function draw() {


    switch( estadoActual ) {

        case "instrucciones":
            mostrarInstrucciones()
            break;

        case "poema":
            mostrarPoema()
            break;
            
    }


}



function keyPressed() {

    if( keyCode >= 49 && keyCode <= 52 ) {
        // obtener número presionado, convertido a otro número entre 0 y 3
        const numero = keyCode - 49;

        poemaActual = proyectoTextos.poemas[ numero ]
        estadoActual = "poema"
    }

}