sap.ui.controller("com.sap.view.login", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf com.sap.view.login
	 */
	onInit: function() {
		
		/*var oModel = new sap.ui.model.json.JSONModel();
		
			oModel.setData({
				users: [{
					user: "Public"
				}, {
					user: "Employee"
				}, {
					user: "HR"
				}]
			});
		this.getView().setModel(oModel);*/
	},
	
	btnLogin: function() {
		var item = this.getView().byId("userType").getSelectedItem();
		var key = item.getKey();

        if(key === "Public"){
    		app.to("index");
        } if(key === "Admin"){
        	 app.to("employeeHomePage");
        } //else {
        	//app.to("candidatePool");
        //}
        //loading the second view but not placed anywhere, just for showing code usage
        //sap.ui.view({id:"myTickePage", viewName:"app.ticket", type:sap.ui.core.mvc.ViewType.JS});
    }

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf com.sap.view.login
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf com.sap.view.login
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf com.sap.view.login
	 */
	//	onExit: function() {
	//
	//	}

});