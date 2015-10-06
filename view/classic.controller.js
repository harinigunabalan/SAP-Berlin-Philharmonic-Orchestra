sap.ui.controller("com.sap.view.classic", {

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

	onInit: function () {
			// set explored app's demo model on this sample
			var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("com.sap", "/json/volin.json"));
			this.getView().setModel(oModel);
		},
	pressBackButton: function() {
		app.back();
	}
});