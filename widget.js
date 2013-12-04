WAF.define('SimpleSpreadSheet', function() {
	
    var widget = WAF.require('waf-core/widget');
    var SimpleSpreadSheet = widget.create('SimpleSpreadSheet');

	SimpleSpreadSheet.prototype.init = function () { 			
        // setup the html template
        this.node.innerHTML = '<div></div><button>Save</button>';

        // create the spreadsheet control
        var spreadnode = $('>div', this.node);
        if(spreadnode.wijspread) {
            spreadnode.wijspread({sheetCount:1}); 

            // save the spread object
            this.spread = spreadnode.wijspread('spread'); 
            //this.spread.addSheet(0);

            //click on save button 
            $('>button', this.node).on ('click', function () {	    	   	
                // fire an event telling the the 'value' property is updated (to synchronise the datasources)
                this.value(JSON.stringify(this.spread));
            }.bind(this)); 
        }
	};
		
	// adding a property automatically makes the property bindable
    SimpleSpreadSheet.addProperty('value', {
        onChange: function(v) {
            if(v) {

                    this.spread.fromJSON(JSON.parse(v));
                    return;

            } 
            console.log('clear');
            this.spread.clearSheets();
            this.spread.addSheet(0);
        }
    });
    
    return SimpleSpreadSheet;
});
