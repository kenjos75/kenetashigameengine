var Stage = function() {
	


	var settings = {
		actors : Array()

	};

	this.settings =settings;


	this.addActor = function(actorGet) {

		settings['actors'].push(actorGet);

	}


	this.act = function() {

		jQuery.each(settings['actors'],function(key,value){
			value.onDraw(value.init());
		});
	}

	return this;
}