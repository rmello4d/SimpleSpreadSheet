(function() {
    var widget = WAF.require('waf-core/widget');
    var SpreadSheet = widget.create('SpreadSheet');

	//in the Init phase of your widget, bind the code that is fired when the event occurs
	 SpreadSheet.prototype.init = function () { 

		$('#' + this.id).wijspread({sheetCount:1}); // create wijspread control
		var spread = $('#' + this.id).wijspread("spread"); // get instance of wijspread control
		var sheet = spread.getActiveSheet();
	}

})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
