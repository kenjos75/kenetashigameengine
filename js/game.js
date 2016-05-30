var Kenetashi ={

	extends: function(className,args) {


		if(window[className]) {
		 	var c = new window[className];
			jQuery.each(args,function(key,value){
				c[key] = value;
			});
			return c;
		}else{
			console.log('Classname does not exists.');
			return false;
		}
		
						
	}
}

var gOriginal = function(){

	this.setScreen = setScreen;
	this.loadCanvas = loadCanvas;

	var t = setInterval(function(){
		if(document.getElementsByTagName('canvas').length>0){
			var canvas = document.getElementsByTagName('canvas')[0];
			var ctx = canvas.getContext("2d");
			this.canvas = canvas;
			this.ctx = ctx;
			clearInterval(t);
		}
	},100);


	function setScreen(gamescreen) {
		loadCanvas(gamescreen);
	}

	function loadCanvas(gamescreenpass){
		var settings = gamescreenpass.init();
		var t = setInterval(function(){
			
			if(this.canvas){

				this.canvas.height = settings['height'];
				this.canvas.width =  settings['width'];
				this.canvas.style = 'border:1px solid black;';
				clearInterval(t);

				var ts = setInterval(function(){
					this.ctx.clearRect(0, 0,this.canvas.width,this.canvas.height);
					gamescreenpass.render(settings);
				},100);
			 }

		},100);
					
	}

}

var Game = new gOriginal();