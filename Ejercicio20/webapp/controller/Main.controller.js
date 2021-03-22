sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "Ejercicio20/Ejercicio20/utils/Services",
    "Ejercicio20/Ejercicio20/utils/Constants"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Services, Constants) {
        "use strict";

        return Controller.extend("Ejercicio20.Ejercicio20.controller.Main", {
            onInit: function () {
                this.loadModel();
            },

            loadModel: async function () {

                const oResponseProductos = await Services.getOrderDetails();

                const oDataProductos = oResponseProductos[0];

                var oModelProductos = new JSONModel();
                oModelProductos.setData(oDataProductos);

                const oComponent = this.getOwnerComponent();
                oComponent.setModel(oModelProductos, Constants.models.MODEL_ORDER.name);
            },

            loadModelOrder: async function (oOrder) {

                const oResponse = await Services.getOrdersById(oOrder);

                const oDataOrder = oResponse[0];

                let oModelOrderSelec = new JSONModel();
                oModelOrderSelec.setData(oDataOrder);

                this.getOwnerComponent().setModel(oModelOrderSelec, Constants.models.MODEL_ORDERSELEC.name);
            },


            onTableItemPress: function (oEvent) {
               
                var sOrderId = oEvent.getSource().getSelectedItem().getBindingContext(Constants.models.MODEL_ORDER.name).getPath();

                let oModel = this.getOwnerComponent().getModel(Constants.models.MODEL_ORDER.name);
                var oOrderSelec = oModel.getProperty(sOrderId + "/OrderID");


                this.loadModelOrder(oOrderSelec);

                this.getOwnerComponent().getRouter().navTo("RouteDetail");

            }
        });
    });
