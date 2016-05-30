var SpriteBatch = function() {


	this.draw = draw;

	var t = setInterval(function(){
		if(document.getElementsByTagName('canvas').length>0) {

			var c = document.getElementsByTagName('canvas');
			var ctx = c[0].getContext('2d');
			this.ctx =ctx;
			clearInterval(t);
		}
		


	},100);
	


	function draw(resource,x,y) {

			
		ctx.drawImage(resource.settings['img'],x,y);





	}




}