function bar(){
	this.m=0;
	this.n=350;
	this.mdash=1;
	this.ndash=0;
	this.mdir = 1; // Left or Right
    this.ndir = 1;

	this.update=function(){
		this.m=this.m+this.mdash*this.mdir*speed;
		this.n=this.n+this.ndash*this.ndir*speed;

		 // this.m=constrain(this.m,0,width-50);
   //       this.n=constrain(this.n,0,height-15); 

        if (this.m > width - 50 || this.m < 0) {
         this.mdir *= -1;
        }

        
	}

	this.show=function(){
		fill(151);
		rect(this.m,this.n,50,15)
	}

}