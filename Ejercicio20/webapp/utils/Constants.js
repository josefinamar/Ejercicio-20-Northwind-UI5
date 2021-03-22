sap.ui.define([],
    function () {
        "use strict";

        return {
            models: {
                SERVICES: {
                    getOrderDetails: {
                        entity: "/V3/Northwind/Northwind.svc/Order_Details"
                    },
                    getOrdersById: {
                        entity: "/V3/Northwind/Northwind.svc/Orders"
                    }
                },
                MODEL_ORDER:{
                    name: "modeloOrdenes"
                },
                MODEL_ORDERSELEC:{
                    name: "ordenSeleccionada"
                }
            },

            ids: {
            },
            
            routes: {
                JSON: {
                }
            }
        };
    }, true);