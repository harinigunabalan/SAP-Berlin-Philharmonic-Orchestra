sap.ui.controller("com.sap.view.Revenue", {
	
	onInit: function () {

	},
	
	pressBackButton: function() {
		app.back();
	},
	
	handleLogoffPress: function () {
		app.to("login");
	}

 });