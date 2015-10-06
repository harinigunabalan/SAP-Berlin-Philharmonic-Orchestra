sap.ui.controller("com.sap.view.EmployeeHomePage", {

	onInit: function() {
		// set mock model
		var sPath = jQuery.sap.getModulePath("com.sap", "/json/feed.json");
		var oModel = new sap.ui.model.json.JSONModel(sPath);
		this.getView().setModel(oModel);
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

	onPost: function(oEvent) {
		var oFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
			style: "medium"
		});
		var oDate = new Date();
		var sDate = oFormat.format(oDate);
		// create new entry
		var sValue = oEvent.getParameter("value");
		var oEntry = {
			Author: "Alexandrina Victoria",
			AuthorPicUrl: "http://upload.wikimedia.org/wikipedia/commons/a/aa/Dronning_victoria.jpg",
			Type: "Reply",
			Date: "" + sDate,
			Text: sValue
		};

		// update model
		var oModel = this.getView().getModel();
		var aEntries = oModel.getData().EntryCollection;
		aEntries.unshift(oEntry);
		oModel.setData({
			EntryCollection: aEntries
		});
	},
	handleLogoffPress: function () {
		app.to("login");
	},
	onClickApplication: function() {
		app.to("candidatePool");
	},
	onClickCollaboration: function() {
		app.to("Rating");
	},
	onClickProfile: function() {
		app.to("profile");
	},
	onClickRevenue: function() {
		app.to("Revenue");
	},
	onPressItem: function(oEvent) {

		var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
		sap.m.MessageBox.show(
			"Build enterprise-ready web applications, responsive to all devices and running on the browser of your choice. That´s OpenUI5.", {
				title: "Rating",
				actions: [sap.m.MessageBox.Action.OK],
				styleClass: bCompact ? "sapUiSizeCompact" : ""
			}
		);
	}

});