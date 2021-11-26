function setup() {
    createCanvas( windowWidth, windowHeight )
    console.log("Hola mundo")
}



function draw() {

    background(100)
    ellipse(100,100,100);

}



function keyPressed() {

    if( keyCode >= 49 && keyCode <= 52 ) {
        const numero = keyCode - 48;        
    }

}