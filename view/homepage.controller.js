sap.ui.controller("com.sap.view.homepage", {

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
	openAdmin: function() {
		app.to("login");
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
	openNone: function() {
		
	},
	onClickEducation: function() {
		app.to("education");
	},
	onClickApplication: function() {
		app.to("application");
	},
	onClickCollaboration: function() {
		app.to("collaboration");
	},
	onClickProfile: function() {
		app.to("profile");
	},
	
	handleJobPress: function(){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("jobPortal");
	}

});