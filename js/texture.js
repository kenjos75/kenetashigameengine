var Texture = function(resourceGet) {

	var settings = {
		resource: 'smile.png',
		id: 0,
		img: null
	};

	this.settings = settings;



	if(resourceGet) {

		settings['resource'] = resourceGet;
		var par = document.getElementsByTagName('body');
		var img = document.createElement('img');


		var identifier = 0;
		(function generateImage(){
			if(jQuery('#texture-'+identifier).length==0){
				img.src = 'img/' + resourceGet;
				img.id = 'texture-' + identifier;
				img.style = 'display:none;';
				settings['id'] = 'texture-' + identifier;
				settings['img'] = img;
				par[0].appendChild(img);
			}else{
				identifier++;
				generateImage();
			}
		})();
		
	}



	return this;
	

};