Modernizr.addTest('ps-pixelratio', function () {
	var ratio = 1;
		// To account for zoom, change to use deviceXDPI instead of systemXDPI
		if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
			// Only allow for values > 1
			var _ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
		}
		else if (window.devicePixelRatio !== undefined) {
			var _ratio = window.devicePixelRatio;
		}
		
		return { ratio:_ratio };

	});