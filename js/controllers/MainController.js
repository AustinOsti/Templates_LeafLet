app.controller('MainController', ['$scope', 'coordinates', 'myCoordinates', function($scope, coordinates, myCoordinates) {
	
	$scope.mapCenter = {
		lat: coordinates.lat,
		lng: coordinates.lng,
		zoom: 14
	}

}])