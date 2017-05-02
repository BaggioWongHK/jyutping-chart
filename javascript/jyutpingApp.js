angular.module('JyutpingApp', 		[
									'ui.bootstrap', 
									'ngAnimate',
								])

.controller('JyutpingAppCtrl', JyutpingAppCtrl);

JyutpingAppCtrl.$inject = ['$scope', '$log', 'JyutpingService', 'JyutpingModalService', 'SampleWordsService'];

function JyutpingAppCtrl($scope, $log, JyutpingService, JyutpingModalService, SampleWordsService) {
	$scope.initials = JyutpingService.getInitials();
	$scope.finals = JyutpingService.getFinals();

	$scope.openJyutpingModal = JyutpingModalService.open;

	$scope.jyutpingIsEmpty = SampleWordsService.isEmpty;
}