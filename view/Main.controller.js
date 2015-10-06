sap.ui.controller("com.sap.view.Main", {

	onInit: function() {
		if (sap.ui.Device.support.touch === false) {
			this.getView().addStyleClass("sapUiSizeCompact");
		}
	}
});