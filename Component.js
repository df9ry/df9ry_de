sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	   "use strict";
	   
	   return UIComponent.extend("ampr.df9ry.Component", {
		   metadata : {
			   manifest: "json"
		   },
		   
		   constructor: function(sId, mSettings) {
		       UIComponent.call(this, "ampr.df9ry", mSettings);
		   },
		   
		   init : function () {
		       // call the init function of the parent
		       UIComponent.prototype.init.apply(this, arguments);
		       // set data model
		       var oData = {
				   oAppController: null // Application controller
		       };
		       var oModel = new JSONModel(oData);
		       this.setModel(oModel);
		       // create the views based on the url/hash
		       this.getRouter().initialize();
		   }
	   });
});
