function mostrarInstrucciones() {

    background(0)

    fill( 255 )
    textSize( 30 )
    text( proyectoTextos.textoInstrucciones, width/2, height/2 )

}



function mostrarPoema() {

    if( poemaActual ) {


        background(
            255 * poemaActual.color.r,
            255 * poemaActual.color.g,
            255 * poemaActual.color.b
        )

        const verso = poemaActual.versos[ 0 ]

        fill( 255 )
        textSize( 30 )
        text( verso, width/2, height/2 )

    }

}