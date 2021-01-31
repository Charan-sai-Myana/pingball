var b;
var rad=25;
var bar_speed=50;
var c;
var ball_pos_x;
var ball_pos_y;
var bar_pos_x_front;
var bar_pos_x_rear;
var score=0;
var i=0;
var j=0;



function setup() {
  createCanvas(500, 400);
  background(150);
  b=new ball();
  c=new bar();
  i=0;
  j=0; 
}


function draw() {         
    background(220); 
    b.update();
    b.show();
    c.update();
    c.show();
    


    if (ball_pos_y > 366) {
    alert("Game Over! Your Score Is "+score )
    score=0;
    var result = confirm( "Do you want to start a New Game?" );

           if ( result ) { 

                   setup();
                   
    // the user clicked ok
           }
           else {
                    setup();
                   
           }
     
     } 
    /*The ball should compulory  meet the y position double check with the multiples*/

    if (ball_pos_x >= bar_pos_x_front && ball_pos_x <= bar_pos_x_rear && ball_pos_y==360  ) {
          b.intersect();

          score=score+10;

        
    }

      
}  


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    c.dirleft();
  } else if (keyCode === RIGHT_ARROW) {
    c.dirright();
  }
   	
}
