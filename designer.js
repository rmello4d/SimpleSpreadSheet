(function() {
    var SimpleSpreadSheet = Widget.SimpleSpreadSheet.inherit(WAF.require('waf-behavior/studio'));

	// adding attributes
    SimpleSpreadSheet.addAttributes([{
    	'name':'data-width',
    	'description':'Width',
    	'defaultValue': '600px'
    },{
    	'name':'data-height',
    	'description':'Height',
    	'defaultValue': '400px'
    },{
        name: 'data-binding-value',
        description: 'Datasource',
        typeValue: 'datasource'
    },{
		'name':'data-content',
    	'description':'DS Content Attribute',
    	'defaultValue': 'content'
    }]);
  
       
	// defining the action when user resize the widget in the Studio      
    SimpleSpreadSheet.on('Resize', function(event) {
    	this.studioCss('height', event.size.height);
    	this.studioCss('width', event.size.width); 
    	this.studioVal('data-width', event.size.width + 'px');
    	this.studioVal('data-height', event.size.height + 'px');	 	
	 	this.studioPanelRefresh();
    });
    

    // defining the action when widget is displayed/updated in the Studio 
	SimpleSpreadSheet.on('Display', function (attributes) {
		//display width and height
	 	this.studioCss('width', attributes['data-width']); 	
	 	this.studioCss('height', attributes['data-height']); 		  
	 });


})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html