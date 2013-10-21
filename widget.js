(function() {
    var widget = WAF.require('waf-core/widget');
    var SimpleSpreadSheet = widget.create('SimpleSpreadSheet');
    
    // inheriting from the composed behavior
    SimpleSpreadSheet.inherit(WAF.require('waf-behavior/layout/composed'));       
           
    // creating empty <div> widgets 
    var ss = widget.create('ss');

	//creating button restore 
    var restoreText = widget.create('restore');
    restoreText.addDomHtmlProperty('value', { default_value: 'Load'});    
    var restore = widget.create('restore', restoreText);
    restore.tagname = 'button';
    
    //creating button Save 
    var saveText = widget.create('save'); 
    saveText.addDomHtmlProperty('value', { default_value: 'Save'});
    var save = widget.create('save', saveText);    
    save.tagname = 'button'; 
     
     
    // setting for each part the corresponding widget                       
    SimpleSpreadSheet.setPart('spread', 	ss); 
    SimpleSpreadSheet.setPart('restore', 	restore);
    SimpleSpreadSheet.setPart('save', 		save);  
    
	SimpleSpreadSheet.prototype.init = function () { 			
		//getting all parts
		var restore = this.getPart('restore');
		var save = this.getPart('save');
		var ss = this.getPart('spread');		
		
		//click on restore button
	    $('#' + restore.id).on ('click', function () {   	
			if ( $('#' + ss.node.id + '[data-type="ss"]').length == 1) {       
	    		this.restoreSS();
	    	}
        }.bind(this));  

        
		//click on save button 
	   $('#' + save.id).on ('click', function () {	    	   	
	    	// getting the binded source
	    	if (this.node.getAttributeNode('data-binding-value')) {
		    	var mySource = this.node.getAttributeNode('data-binding-value').value || 'spreadSheet';
		    	var myAttr = this.node.getAttributeNode('data-content').value || 'content' ;
		    	// saving content 
		    	if (sources[mySource]){
		    		
		    		if (! sources[mySource][myAttr])
		    			sources[mySource].addNewElement();
		    			
		    		var elem = $('#' + ss.id);
			    	sources[mySource][myAttr] = JSON.stringify(elem.wijspread("spread"));
					sources[mySource].save({
				        onSuccess: function(event) {
				                // displays success message in a DisplayError area
				            alert('Saved!');
				        },
				        onError: function(error) {
							alert('Error, your sheet was not Saved!');
						}
		    		});
	     		}
	     	} else {
	     		alert ('No datasource for the widget');
	     	}
        }.bind(this)); 
        
	}
		
	//restoring from database	
	SimpleSpreadSheet.prototype.restoreSS = function () { 
		// getting the part
		var ss = this.getPart('spread');
		
		//verify if data source exist
	    if (this.node.getAttributeNode('data-binding-value')) {
			// isolating elem
			var elem = $('#' + ss.id);
			//cleaning up 
			elem.empty();
			// create wijspread control
			elem.wijspread({sheetCount:1}); 
			// get instance of wijspread control
			var spread = elem.wijspread("spread");
			//getting the source defined in Studio
			var mySource = this.node.getAttributeNode('data-binding-value').value || 'spreadSheet';
			var myAttr = this.node.getAttributeNode('data-content').value || 'content' ;   			
			//recovering value
			if (sources[mySource]){
				spread.fromJSON(JSON.parse(sources[mySource].getCurrentElement()[myAttr].getValue()));
				var sheet = spread.getActiveSheet();
	 		}
		} else {
	     	alert ('No datasource for the widget, please attach a datasource to the SpreadSheet');
	    }
	}
	
	//restoring from database	
	SimpleSpreadSheet.prototype.addRowHeader = function () { 
		var ss = this.getPart('spread');
		var elem = $('#' + ss.id);
        var spread = elem.wijspread("spread"); 
        var sheet = spread.getActiveSheet(); 
  
        var count = sheet.getColumnCount($.wijmo.wijspread.SheetArea.rowHeader); 
        sheet.setColumnCount(count + 1, $.wijmo.wijspread.SheetArea.rowHeader); 	
	}; 
	
	
	// adding a property automatically makes the property bindable
    SimpleSpreadSheet.addProperty('value');
	
	
})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
