angular.module('JyutpingApp')
.directive('fixInitialsVerticalScroll', FixInitialsVerticalScrollDirective)
.directive('fixFinalsHorizontalScroll', FixFinalsHorizontalScrollDirective)
;

function FixInitialsVerticalScrollDirective() {
	return {
		restrict: 'A', 
		link: function(scope, element, attrs) {
			$(document).scroll(function() {
				//	top Jyutping initials row can scroll horizontally but not vertically
				var scrollLeft = $(document).scrollLeft();
				var updatedX = "-" + scrollLeft + "px";
				$("#initials-row").css("left", updatedX);
			});
		}
	}
}

function FixFinalsHorizontalScrollDirective() {
	return {
		restrict: 'A', 
		link: function(scope, element, attrs) {
			$(document).scroll(function() {
				//	Jyutping finals column can scroll vertically but not horizontally
				var scrollTop = $(document).scrollTop();
				var updatedY = "-" + scrollTop + "px";
				$("#jyutping-finals").css("top", updatedY);
			});
		}
	}
}