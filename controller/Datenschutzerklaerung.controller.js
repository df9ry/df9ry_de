sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (jQuery, Controller, JSONModel) {
	"use strict";
	
	return Controller.extend("ampr.df9ry.controller.Datenschutzerklaerung", {
		
		/**
		 * Lifecycle hook that is called when the controller is instantiated
		 */
		onInit: function () {
		},

		onBeforeRendering: function() {
			var oView = this.getView();
			var oAppController = oView.getModel().getData().oAppController;
			var oPage = oView.byId("page");
			oPage.setCustomHeader(oAppController.getHeader());
			oPage.setFooter(oAppController.getFooter());
		},

	});
});
