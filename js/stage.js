var Stage = function() {
	
	var t = setInterval(function(){
		if(document.getElementsByTagName('canvas').length>0) {
			var c = document.getElementsByTagName('canvas');
			var ctx = c[0].getContext('2d');
			this.ctx =ctx;
			clearInterval(t);
		}
		


	},100);

	var settings = {
		actors : Array()
	};


	this.settings =settings;


	this.addActor = function(actorGet) {

		settings['actors'].push(actorGet);

	}


	this.act = function() {

		jQuery.each(settings['actors'],function(key,actor){
			actor.act();
		});
		
	}

	return this;
}