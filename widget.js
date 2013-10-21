(function() {
    var widget = WAF.require('waf-core/widget');
    var SimpleSpreadSheet = widget.create('SimpleSpreadSheet');

    var Event = WAF.require('waf-core/event');
    Event.create('Save');

	SimpleSpreadSheet.prototype.init = function () { 			
        // setup the html template
        this.node.innerHTML = '<div></div><button>Save</button>';

        // create the spreadsheet control
        var spreadnode = $('>div', this.node);
        if(spreadnode.wijspread) {
            spreadnode.wijspread({sheetCount:1}); 

            // save the spread object
            this.spread = spreadnode.wijspread('spread'); 
            this.spread.addSheet(0);

            //click on save button 
            $('>button', this.node).on ('click', function () {	    	   	
                // fire an event telling the the 'value' property is updated (to synchronise the datasources)
                this.fire(new Event.Change('value', { value: this.value() }));
                this.fire(new Event.Save());
            }.bind(this)); 
        }
	}
		
	// adding a property automatically makes the property bindable
    SimpleSpreadSheet.addProperty('value', {
        setter: function(v) {
            console.log('set', v);
            if(v) {
                try {
                    this.spread.fromJSON(JSON.parse(v));
                    return;
                } catch(e) {
                }
            }
            console.log('clear');
            this.spread.clearSheets();
            this.spread.addSheet(0);
        },
        getter: function() {
            console.log('get', JSON.stringify(this.spread));
            return JSON.stringify(this.spread);
        }
    });
})();
