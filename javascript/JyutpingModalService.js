angular.module('JyutpingApp')
.service('JyutpingModalService', JyutpingModalService);

JyutpingModalService.$inject = ["$log", "$uibModal"];

function JyutpingModalService($log, $uibModal) {
	this.open = function(jyutping) {
		var modalInstance = $uibModal.open({
			animation: true,
			backdropClass: "disable-backdrop-background",
			templateUrl: "partials/JyutpingModal.html",
			controller: JyutpingModalCtrl,
			resolve: {
				jyutping: function() {return jyutping.trim();}
			}
		}).result.then(function() {}, function() {}); //	Required to dismiss "Possibly unhandled rejection: backdrop click"
	}
}

JyutpingModalCtrl.$inject = ["$uibModalInstance", "$scope", "jyutping", "$log", "SampleWordsService"];

function JyutpingModalCtrl($uibModalInstance, $scope, jyutping, $log, SampleWordsService) {
	$scope.displayIndividual = false;
	$scope.displayWord = true;

	$scope.jyutping = jyutping;

	$scope.jyutpingIsEmpty = SampleWordsService.isEmpty(jyutping);

	/*
	 *	@description
	 *	Get sample word. 
	 */
	$scope.getSampleWord = SampleWordsService.getSampleWord;

	$scope.tone = SampleWordsService.firstAvailableTone(jyutping);
	$scope.tonesMessage = "Disabled buttons mean that there are currently no words found for this tone.";
	$scope.individualMessage = "Please press on the Jyutping to hear its pronunciation.";
	$scope.wordMessage = "Please press on the Chinese word to hear its pronunciation.";

	/**
	 *	@description	
	 */
	$scope.playAudio = function(chineseWord) {
		var audio = new Audio("audio/chinese/" + chineseWord + ".mp3");
		audio.play();
	}
	
	$scope.toggleIndividual = function() {$scope.displayIndividual = true;$scope.displayWord = false;}
	$scope.toggleWord = function() {$scope.displayIndividual = false;$scope.displayWord = true;}
	$scope.toggleTone = function(tone) {$scope.tone = tone;}

	$scope.ok = function() {$uibModalInstance.close('cancel');}
	$scope.cancel = function () {$uibModalInstance.close('cancel');}
}