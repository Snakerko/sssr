function initMap(){
	var element = document.querySelector('#map .map');
	var options = {
		zoom: 17,	
		center: {lat: 59.932733, lng: 30.326333}
	};

	var myMap = new google.maps.Map(element, options);
	var marker = new google.maps.Marker({
		position: {lat: 59.932733, lng: 30.326333},
		map: myMap
	});
	var infoWindow = new google.maps.InfoWindow({
		content: '<h3 style="color: red; font-weight: 900; text-align: center;">СССР БАР</h3>'
	});

	marker.addListener('click', function(){
		infoWindow.open(myMap, marker);
		
	});
}