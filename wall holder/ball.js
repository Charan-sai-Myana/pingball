
function ball()
{   
	this.x=0;
	this.y=0;
	this.xdash=2;
	this.ydash=2;
	this.xdir = 1; // Left or Right
  this.ydir = 1; // Top to Bottom


 


   
	this.update = function(){
    


    if (score > 10 && score <= 30 && i==0) {
      
   alert("Level 1 Complete.Continue to Level 2?");

      this.xdash=3;
      this.ydash=3;
      i++;

    }

    if (score > 30 && j==0) {
      alert("Level 2 Complete.Continue to Level 3?");
  
      this.xdash=5;
      this.ydash=5;
      j++;

    }



		this.x=this.x+this.xdash * this.xdir;
		this.y=this.y+this.ydash * this.ydir;

        // this.x=constrain(this.x,0,width-rad);
        // this.y=constrain(this.y,0,height-rad); 	

        if (this.x > width - rad || this.x < 0) {
         this.xdir *= -1;
        }

        if (this.y > height - 30 || this.y < 0) {
          this.ydir*= -1;
        }
       
	}

	 this.intersect=function(){
     	this.ydir *=-1;
     }
 

   
	this.show=function(){
    let c = color('white'); 
	fill(c);
    rect(this.x, this.y, rad, rad,20);
    ball_pos_x=this.x+12.5;
    ball_pos_y=this.y;

	}




}