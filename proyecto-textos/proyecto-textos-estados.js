function mostrarInstrucciones() {

    fill( 255 )
    textSize( 30 )
    text( proyectoTextos.textoInstrucciones, width/2, height/2 )

}



function mostrarPoema() {

    if( poemaActual ) {

        const verso = poemaActual.versos[0]

        fill( 255 )
        textSize( 30 )
        text( verso, width/2, height/2 )

    }
}