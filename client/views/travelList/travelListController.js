function travelListController($scope, $location, travelService) {

	$scope.goToTravel = function(item){
		$location.url('travel/' + item.travel.id)
	}

	travelService.getTravelList(function(travelList){
		$scope.travelList = travelList;
	});
	
}