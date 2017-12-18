angular.module('JyutpingApp')
.service('SampleWordsService', SampleWordsService);

SampleWordsService.$inject = ["$log", "sampleWords"];

function SampleWordsService($log, sampleWords) {
	/**
	 *	@description
	 *	Get all sample words.
	 */
	this.getAllSampleWords = function() {
		return sampleWords;
	}

	/**
	 *	@return {Object} Word object if exists, false if not. (see structure below)
	 *	@description
	 *	Get single sample word based on jyutping + tone combination.
	 *
	 *	Return object structure: {"chinese": "", "jyutping": "", "english": ""}
	 */
	this.getSampleWord = function(jyutping, tone) {
		//	check if the "jyutping + tone" combination exists
		var sampleWord = sampleWords[jyutping][tone];

		//	return object if it does, false if not
		if (angular.equals(sampleWord, {}) || sampleWord["chinese"] == "")
			return false;
		else
			return sampleWord;
	}

	/**
	 *	@description
	 *	If there's one jyutping + tone combo, return false, else true.
	 */
	this.isEmpty = function(jyutping) {
		var sampleWord = sampleWords[jyutping.trim()];

		for (tone in sampleWord) {
			if (sampleWord[tone]["chinese"] != "") {
				return false;
			}
		}

		return true;
	}

	/**
	 *	@description
	 *	Some words can have empty tones. Displaying a sample word in the modal
	 *	requires us to know which tones aren't empty to use as a default tone
	 *	value.
	 *
	 *	-1 should never be reached, because all the jyutping should have at
	 *	least one non-empty entry.
	 */
	this.firstAvailableTone = function(jyutping) {
		var sampleWord = sampleWords[jyutping];

		for (tone in sampleWord) {
			if (sampleWord[tone]["chinese"] != "")
				return tone;
		}

		return -1;
	}
}
