function travelController($scope, $routeParams, travelService){

	var travelId = $routeParams.id;
	travelService.getTravelById(travelId,function(travel){

		$scope.travel = travel;
	});

}