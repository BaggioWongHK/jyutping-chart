angular.module('JyutpingApp')
.directive('highlightRowCol', HighlightRowColDirective);

function HighlightRowColDirective() {
	return {
		restrict: 'A', 
		link: function(scope, element, attrs) {
			element.bind('mouseenter', MouseEnters);
			
			element.bind('mouseleave', MouseLeaves);

			function MouseEnters() {
				//	color cells in the same row and col single gray
				var col = $(this).attr("col");
				var row = $(this).attr("row");

				$("#jyutping-body tr:nth-child(" + row + ") td").css("background-color", "#bfbdbd");
				$("#jyutping-body td:nth-child(" + col + ")").css("background-color", "#bfbdbd");

				$("#jyutping-body tr:nth-child(" + row + ") td").find('a').css("color", "white");
				$("#jyutping-body td:nth-child(" + col + ")").find('a').css("color", "white");

				//	color this cell double gray
				$(this).css("background-color", "gray");
				$(this).find('a').css("color", "white");
			}

			function MouseLeaves() {
				//	revert the column, row and cell's background and text colors to original
				$(this).css("background-color", "white");
				$(this).find('a').css("color", "#887d7e");
				
				var col = $(this).attr("col");
				var row = $(this).attr("row");

				$("#jyutping-body tr:nth-child(" + row + ") td").css("background-color", "white");
				$("#jyutping-body td:nth-child(" + col + ")").css("background-color", "white");		

				$("#jyutping-body tr:nth-child(" + row + ") td").find('a').css("color", "#887d7e");
				$("#jyutping-body td:nth-child(" + col + ")").find('a').css("color", "#887d7e");
			}
		}
	}
}