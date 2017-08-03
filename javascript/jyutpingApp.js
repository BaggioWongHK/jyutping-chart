angular.module('JyutpingApp', 		[
									'ui.bootstrap', 
									'ngAnimate'
								])

.controller('JyutpingAppCtrl', JyutpingAppCtrl);

JyutpingAppCtrl.$inject = ['$scope', '$log', 'JyutpingService', 'JyutpingModalService', 'SampleWordsService'];

function JyutpingAppCtrl($scope, $log, JyutpingService, JyutpingModalService, SampleWordsService) {
	//	see if we can fix the auto scroll iframe problem
	$('body').bind('touchmove', function(e){e.preventDefault()})

	$scope.initials = JyutpingService.getInitials();
	$scope.finals = JyutpingService.getFinals();

	$scope.openJyutpingModal = JyutpingModalService.open;

	$scope.jyutpingIsEmpty = SampleWordsService.isEmpty;

	/**
	 *	@description
	 *	This is so that ng-repeat can iterate a fixed number of times. 
	 */
	$scope.getNumber = function(num) {
    	return new Array(num);   
	}

	$scope.currentInitial = "";
	$scope.currentFinal = "";

	$scope.changeCurrentInitial = function($event) {
		$scope.currentInitial = angular.element($event.target).attr("initial");
	}

	$scope.changeCurrentFinal = function($event) {
		$scope.currentFinal = angular.element($event.target).attr("final");
	}

	$scope.toggleInitialsDisplay = function() {
		$scope.initialsDisplay = !$scope.initialsDisplay;
	}
}