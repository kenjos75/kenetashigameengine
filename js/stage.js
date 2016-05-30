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
		actors : Array(),
		mousedown: false
	};


	this.settings =settings;


	this.addActor = function(actorGet) {

		settings['actors'].push(actorGet);

	}


	this.act = function() {

		jQuery.each(settings['actors'],function(key,actor){
			actor.act();
		});
		


		jQuery('canvas').mousedown(function(event){
			jQuery.each(settings['actors'],function(key,actor){
				if(event.clientX>=actor.settings['x'] && event.clientX<=(actor.settings['x'] + actor.settings['width']) && event.clientY>=actor.settings['y'] && event.clientY<=(actor.settings['y'] + actor.settings['height'])){
					settings['mousedown'] = true;
				}else{
					settings['mousedown'] = false;
				}
			});
		});

		jQuery('canvas').mouseup(function(event){
			settings['mousedown'] = false;
		});

		if(settings['mousedown']==true){
			console.log('perform');
		}
	}

	return this;
}