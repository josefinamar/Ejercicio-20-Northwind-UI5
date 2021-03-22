sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("Ejercicio20.Ejercicio20.controller.Detail", {
			onInit: function () {

            },
            
            onNavBack: function() {
                this.getOwnerComponent().getRouter().navTo("RouteMain");
            }
		});
	});