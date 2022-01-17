

class Dado{
    constructor(){
        this.numero=0;
    }
    tirar(){
        this.numero=Math.floor( Math.random()*6+1);
    }
    ver(){
        text(this.numero,windowWidth/4, windowHeight-100);
    }
		tirarVer(){
			tirar();
			ver();
		}
		pensando(){
				//background(100);
				//fill(0,0,255);
				ellipse(posX, windowHeight/2, 100,50);
				if(posX>windowWidth-50){
					direccionEO=false;
				}else if(posX<=50){
					direccionEO=true;
				}
				if(direccionEO==true){
					posX=posX+100;;
				}else if(direccionEO==false){
					posX=posX-100;
				}
			}
	
}		


let direccionEO=true;
let  posX=50;
let d1;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	textSize(windowHeight/2);
	fill(200,200,20);
	d1= new Dado();
}
let time=0;

function draw() {
	background(100);
	//ellipse(mouseX, mouseY, 20, 20);
	let crono = millis()-time;
	if ( crono > 0 &&  crono < 2000)
    d1.pensando();
	if ( crono >  2000)
		d1.ver();
	//d1.pensando();
}

function mousePressed() {
	time=millis();
	//d1.pensando();
  d1.tirar();
}
	
/*
int crono = millis()-time;
  if ( crono > 0 &&  crono < 2000)
    verde();
  if ( crono > 4000 &&  crono < 5000)
    ambar();
  if ( crono > 5000 &&  crono < 6000)
    rojo();
  if ( crono > 6000 ) 
    time = millis();
	*/
