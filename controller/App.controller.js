sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Popover",
	"sap/m/Button"
], function (Controller, JSONModel, Popover, Button) {
	"use strict";

	var oPopover;
	var oController;

return Controller.extend("ampr.df9ry.controller.App", {

		onInit: function () {
			var oData = this.getView().getModel().getData();
			oData.oAppController = this;
			oController = this;
		},

		getHeader: function() {
			var oHeader = this.oHeader = sap.ui.xmlfragment("ampr.df9ry.view.Header", this);
			this.getView().addDependent(oHeader);
			return oHeader;
		},

		getFooter: function() {
			var oFooter = this.oFooter = sap.ui.xmlfragment("ampr.df9ry.view.Footer", this);
			this.getView().addDependent(oFooter);
			return oFooter;
		},

		onHome: function(oEvent) {
			if (oPopover) {
				oPopover.close();
			}
			var oRouter = sap.ui.core.UIComponent.getRouterFor(oController);
			oRouter.navTo("home", {}, true);
		},

		onProjectAX25: function(oEvent) {
			if (oPopover) {
				oPopover.close();
			}
			window.open( "https://github.com/df9ry/ax25c/","_blank");
		},

		onProjectDaisy: function(oEvent) {
			if (oPopover) {
				oPopover.close();
			}
			window.open( "https://github.com/df9ry/daisy/","_blank");
		},

		onProjectAll: function(oEvent) {
			if (oPopover) {
				oPopover.close();
			}
			window.open( "https://github.com/df9ry/","_blank");
		},

		onAboutMe: function(oEvent) {
			if (oPopover) {
				oPopover.close();
			}
			window.open( "https://taniahagn.de/","_blank");
		},

		onAboutDARC: function(oEvent) {
			if (oPopover) {
				oPopover.close();
			}
			window.open( "https://www.darc.de/","_blank");
		},

		onAboutOVD20: function(oEvent) {
			if (oPopover) {
				oPopover.close();
			}
			window.open( "https://www.ov-d20.de/","_blank");
		},

		onDatenschutzerklaerung: function() {
			if (oPopover) {
				oPopover.close();
			}
			var oRouter = sap.ui.core.UIComponent.getRouterFor(oController);
			oRouter.navTo("datenschutzerklaerung", {}, true);
		},

		onImpressum: function() {
			if (oPopover) {
				oPopover.close();
			}
			var oRouter = sap.ui.core.UIComponent.getRouterFor(oController);
			oRouter.navTo("impressum", {}, true);
		},

		onHamburger: function(oEvent) {
			var oView = this.getView();
			var oBundle = oView.getModel("i18n").getResourceBundle();
			if (!oPopover) {
				oPopover = new Popover({
					showHeader: false,
					placement: sap.m.PlacementType.Bottom,
					content:[
						new Button({
							type:  sap.m.ButtonType.Transparent,
							text:  oBundle.getText("homePage"),
							press: this.onHome
						}),
						new Button({
							type: sap.m.ButtonType.Transparent,
							text:  oBundle.getText("projects") + " \u2193",
							press: this.onProject
						}),
						new Button({
							type: sap.m.ButtonType.Transparent,
							text:  oBundle.getText("about") + " \u2193",
							press: this.onAbout
						})
					]
				}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
			}
			oPopover.openBy(oEvent.getSource());			
		},

		onProject: function(oEvent) {
			var oView = oController.getView();
			var oBundle = oView.getModel("i18n").getResourceBundle();
			var oPopover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						type: sap.m.ButtonType.Transparent,
						text:  oBundle.getText("projectAX25"),
						press: oController.onProjectAX25
					}),
					new Button({
						type: sap.m.ButtonType.Transparent,
						text:  oBundle.getText("projectDaisy"),
						press: oController.onProjectDaisy
					}),
					new Button({
						type: sap.m.ButtonType.Transparent,
						text:  oBundle.getText("projectAll"),
						press: oController.onProjectAll
					}),
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
			oPopover.openBy(oEvent.getSource());				
		},

		onAbout: function(oEvent) {
			var oView = oController.getView();
			var oBundle = oView.getModel("i18n").getResourceBundle();
			var oPopover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						type: sap.m.ButtonType.Transparent,
						text:  oBundle.getText("aboutMe"),
						press: oController.onAboutMe
					}),
					new Button({
						type: sap.m.ButtonType.Transparent,
						text:  oBundle.getText("aboutDARC"),
						press: oController.onAboutDARC
					}),
					new Button({
						type: sap.m.ButtonType.Transparent,
						text:  oBundle.getText("aboutOVD20"),
						press: oController.onAboutOVD20
					}),
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
			oPopover.openBy(oEvent.getSource());				
		},

	});

});
