angular.module('JyutpingApp')
.service('JyutpingService', JyutpingService);

JyutpingService.$inject = ["$log"];

function JyutpingService($log) {
	var initials = [' ', ' ', 'b', 'c', 'd', 'f', 'g', 'gw', 'h', 'j', 'k', 'kw', 'l', 'm', 'n', 'ng', 'p', 's', 't', 'w', 'z'];
	var finals = 	[	
						' ', 'aa', 'aai', 'aau', 'aam', 'aan', 'aang', 'aap', 'aat', 'aak', 'ai', 'au', 'am', 'an', 'ang', 'ap', 'at',
						'ak', 'e', 'ei', 'eu', 'em', 'eng', 'ep', 'ek', 'i', 'iu', 'im', 'in', 'ing', 'ip', 'it', 'ik', 'o', 'oi',
						'ou', 'on', 'ong', 'ot', 'ok', 'oe', 'oeng', 'oek', 'oei', 'eon', 'eot', 'u', 'ui', 'un', 'ung', 'ut', 'uk',
						'yu', 'yun', 'yut'
					];

	this.getInitials = function() {
		return initials;
	}

	this.getFinals = function() {
		return finals;
	}
}