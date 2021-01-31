function bar(){
	this.m=0;
	this.n=385;
	this.mdash=1;
	this.ndash=0;




	this.update=function(){
		// this.m=this.m+this.mdash*speed;
		// this.n=this.n+this.ndash*speed;

		 this.m=constrain(this.m,0,width-50);
		  
         // this.n=constrain(this.n,0,height-15); 

       this.dirleft=function(){
    	this.m=this.m-this.mdash*bar_speed;

        }

       this.dirright=function(){
    	this.m=this.m+this.mdash*bar_speed;

       }
    

	}
    

	this.show=function(){
		fill(151);
		rect(this.m,this.n,50,15)
		bar_pos_x_front=this.m;
		temp=this.m+50;
		bar_pos_x_rear=temp;

	}         
}