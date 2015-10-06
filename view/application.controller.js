sap.ui.controller("com.sap.view.application", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf com.sap.view.education
	 */
	 onInit: function () {

			// set explored app's demo model on this sample
	},
	changeInstrument:function(){
		//var item = oEvt.getParameter("selectedItem");
		//var key = item.getKey();
		
		//if(key === 3){
			//set panel visible
		var control = this.getView().byId("popCoursesPanel");
		control.setVisible(true);
		//}
	},
	openSettings: function (oEvent) {
		var oButton = oEvent.getSource();

			// create action sheet only once
			if (!this._actionSheet) {
				this._actionSheet = sap.ui.xmlfragment(
					"com.sap.view.ActionSheet",
					this
				);
				this.getView().addDependent(this._actionSheet);
			}

			this._actionSheet.openBy(oButton);
	},
	onPressApplicationsButton: function () {
		app.to("MyApplications");
		//.location.href = "https://team03-d062286trial.dispatcher.hanatrial.ondemand.com/webapp/test/index.html#nwepmrefappsextprodmanage-display&/Product/BritneySpears%2540hotmail.ded=cr&ei=a9cJVtL1BqyF8QedmIyYAQ&gws_rd=ssl"
	},
	openNone: function() {
		
	},
	pressBackButton: function() {
		app.back();
	},
	pressPiano: function() {
		app.to("openPositions");
	},
	
	openAdmin: function() {
		app.to("login");
	}
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf com.sap.view.education
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf com.sap.view.education
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf com.sap.view.education
	 */
	//	onExit: function() {
	//
	//	}

});