 class TileNode 
	{
		  x:Number;
		  y:Number;
		  f:Number;
		  g:Number;
		  h:Number;
		
		  walkable: Boolean;
          
		  parent:Node;

		  costMultiplier:Number = 1.0;
		

		 // bitmap: egret.Bitmap = null;
		
		constructor(x:number,y:number) 
		{	
			this.x = x;
			this.y = y;
			this.g = 0;
			this.f = 0;
			this.h = 0;
		}
		
        }