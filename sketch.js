const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particle ;
var plinko = [] ;
var divisions = [];
var divisionHeight = 200 ;
var score = 0 ;
var count = 0 ;
var gameState;
gameState = "play" ;
var bgm;

function preload(){
    bgm = loadSound("y2mate.com - Alan Walker  Faded Lyrics_360p.mp4")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,595,1200,10)

    for (var k = 0; k <= width; k = k + 80){
        divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 40 ; j <= width ; j = j + 80){
        plinko.push(new Plinko(j,120,20))
    }
    
    for (var j = 15 ; j <= width-10 ; j = j + 80){
        plinko.push(new Plinko(j,220,20))
    }
    for (var j = 40 ; j <= width ; j = j + 80){
        plinko.push(new Plinko(j,320,20))
    }

    bgm.play();
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    ground.display();

    for (var k = 0; k < divisions.length; k++){
        divisions[k].display();
      }   
      
    for (var j = 0; j < plinko.length ; j++){
        plinko[j].display();
    }

    if (particle != null){
        particle.display();
        if (particle.body.position.y > 400){
            if (particle.body.position.x < 350){
                score=score+500 ;
                particle = null ;
                if (count >= 5) gameState = "end" ;
            }
        }
    }

    if (particle != null){
        particle.display();
        if (particle.body.position.y > 400){
            if (particle.body.position.x < 800){
                score=score+100 ;
                particle = null ;
                if (count >= 5){ 
                    gameState = "end" ;
                }
            }
        }
    }

    if (particle != null){
        particle.display();
        if (particle.body.position.y > 400){
            if (particle.body.position.x < 1200){
                score=score+200 ;
                particle = null ;
                if (count >= 5){ 
                    gameState = "end" ;
                }
            }
        }
    }

    if (count >= 5){

        stroke("black")
        strokeWeight(1)
        fill("white")
        textSize(30)
        textFont("Aclonica")
        text("Game Over", 540,180)

        stroke("black")
        strokeWeight(1)
        fill("white")
        textSize(30)
        textFont("Aclonica")
        text("Score : " + score , 540,230)

        stroke("black")
        strokeWeight(1)
        fill("white")
        textSize(30)
        textFont("Aclonica")
        text("Press 'Ctrl + r' to restart ", 500,280)

    }

    stroke("black")
    strokeWeight(1)
    fill("white")
    textSize(25)
    textFont("Aclonica")
    text("Score : " + score, 1000,50)

    for (var i = 20 ; i < 350 ; i = i+80){
      stroke("black")
      strokeWeight(1)
      fill("white")
      textSize(25)
      textFont("Aclonica")
      text("500",i,480)
    }

    for (var s = 420 ; s < 800 ; s = s+80){
        stroke("black")
        strokeWeight(1)
        fill("white")
        textSize(25)
        textFont("Aclonica")
        text("100",s,480)
      }
  
    for (var p = 820 ; p < 1200 ; p = p+80){
        stroke("black")
        strokeWeight(1)
        fill("white")
        textSize(25)
        textFont("Aclonica")
        text("200",p,480)
    }
  
}

function mousePressed(){
    if (gameState != "end"){
        count++ ;
        particle = new Particle (mouseX ,10,20,20)
    }
}