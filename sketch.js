var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var speed1,speed2,speed3,speed4;
var weight1,weight2,weight3,weight3,weight4;
var deformation1,deformation2,deformation3,deformation4;

function setup() {
  createCanvas(800,500);

  speed1=random(35,90);
  weight1=random(300,1600);

  speed2=random(55,90);
  weight2=random(400,1500);

  speed3=random(45,100);
  weight3=random(400,1000);

  speed4=random(80,200);
  weight4=random(200,1800);

  car1=createSprite(50,100,20,20);
  wall1=createSprite(700,100,10,70);
  wall1.shapeColor="brown";

  car2=createSprite(50,200,20,20);
  wall2=createSprite(700,200,10,70);
  wall2.shapeColor="brown";

  car3=createSprite(50,300,20,20);
  wall3=createSprite(700,300,10,70);
  wall3.shapeColor="brown";

  car4=createSprite(50,400,20,20);
  wall4=createSprite(700,400,10,70);
  wall4.shapeColor="brown";

  car1.velocityX=speed1;
  car2.velocityX=speed2;
  car3.velocityX=speed3;
  car4.velocityX=speed4;

}

function draw() {
  background("black");  
  drawSprites();

  for(var d=0; d <800 ; d=d+20){
    stroke("yellow");
    strokeWeight(3);
    line(d,50,d+5,50)
  }

  for(var a=0; a <800 ; a=a+20){
    stroke("yellow");
    strokeWeight(3);
    line(a,150,a+5,150)
  }

  for(var b=0; b <800 ; b=b+20){
    stroke("yellow");
    strokeWeight(3);
    line(b,250,b+5,250)
  }

  for(var c=0; c <800 ; c=c+20){
    stroke("yellow");
    strokeWeight(3);
    line(c,350,c+5,350)
  }

  for(var e=0; e <800 ; e=e+20){
    stroke("yellow");
    strokeWeight(3);
    line(e,450,e+5,450)
  }


  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
   car1.velocityX=0;
    deformation1=0.5*weight1*speed1*speed1/22500;
   if(deformation1<100){
   car1.shapeColor="green";
   }
   if(deformation1 >100 && deformation1 <180){
     car1.shapeColor="yellow";
   }
   if(deformation1>180){
     car1.shapeColor="red";
   }
  }

  if(wall2.x-car2.x < (car2.width+wall2.width)/2){
    car2.velocityX=0;
    deformation2=0.5*weight2*speed2*speed2/22500;
    if(deformation2<100){
    car2.shapeColor="green";
    }
    if(deformation2>100 && deformation2 <180){
      car2.shapeColor="yellow";
    }
    if(deformation2>180){
      car2.shapeColor="red";
    }
   }

   if(wall3.x-car3.x < (car3.width+wall3.width)/2){
    car3.velocityX=0;
    deformation3=0.5*weight3*speed3*speed3/22500;
    if(deformation3<100){
    car3.shapeColor="green";
    }
    if(deformation3 >100 && deformation3 <180){
      car3.shapeColor="yellow";
    }
    if(deformation3>180){
      car3.shapeColor="red";
    }
   }

   if(wall4.x-car4.x < (car4.width+wall4.width)/2){
    car4.velocityX=0;
    var deformation4=0.5*weight4*speed4*speed4/22500;
    if(deformation4<100){
    car4.shapeColor="green";
    }
    if(deformation4 >100 && deformation4 <180){
      car4.shapeColor="yellow";
    }
    if(deformation4>180){
      car4.shapeColor="red";
    }
   }
   //console.log(car1.deformation);
}