## Custom Widget for [Wakanda](http://wakanda.org)
The __SimpleSpreadShehet__ widget is an example using the Wijmo widgets. Please refer to http://wijmo.com/ for further details. 


### Properties
This __SimpleSpreadShehet__ widget has the following properties: 

* __value__: The string attribute binding  the content of the spreadSheet 


### Goals
The __SimpleSpreadShehet__ simulates an Excel spread sheet inside a Wakanda page. 
The user can then load or save the content of the spread sheet. 


### package.json
Adding external libraries : 
```
	{"id": "SimpleSpreadSheet/jsLibs/jquery-1.9.1.min.js", "runtimeOnly": true, "path": "WIDGETS_CUSTOM"},
  	{"id": "SimpleSpreadSheet/jsLibs/jquery-ui.min.js", "runtimeOnly": true, "path": "WIDGETS_CUSTOM"},
   	{"id": "SimpleSpreadSheet/jsLibs/jquery-wijmo.css", "runtimeOnly": true, "path": "WIDGETS_CUSTOM"},
   	{"id": "SimpleSpreadSheet/jsLibs/jquery.wijmo.wijspread.all.1.20132.5.min.js", "runtimeOnly": true,  "path": "WIDGETS_CUSTOM"},
   	{"id": "SimpleSpreadSheet/jsLibs/jquery.wijmo.wijspread.1.20132.5.css", "runtimeOnly": true, "path": "WIDGETS_CUSTOM"},
```

__IMPORTANT__ to avoid conflicts with the Studio, we added the following : "runtimeOnly": true, so these libraries will not be used by the Wakanda Studio. 


### Wakanda Studio

Model
```
1. Create a datasource with two string attribute 

```

Wakanda Widgets (optional)
```
1. Drag a grid and add the created datasource on it 
(for reasons of jquery compatibility, just leave the first string attribute in the grid)

```


Custom Widget
```
1. Drag the widget to your Wakanda page. 
2. A gray box should be available with a save button 
	(The SpreadSheet will not be available in the Studio)
3. Drop the second datasource string attribute inside the widget or change the property's panel Datasource value
4. Add some values and click button save 
5. Close and open your page, click the Load button, values are restored. 
```

### CSS
The __SimpleSpreadShehet__ CSS will define the background color of the widget.  
You can adjust its color by changing directly in the Studio OR by changing the /css/widget.css file.  


### Compatibility
You may experience some rendering problems if you combine other widgets in the same page. The standard Wakanda widget use an older version of jquery. 


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.

