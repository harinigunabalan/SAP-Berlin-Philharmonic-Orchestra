sap.ui.controller("com.sap.view.collaboration", {

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
	
	onCompetitionPress: function(){
		app.to("competition");	
	},
	
	sendPost: function() {
		var postText = this.getView().byId("postText").getValue();
		var news = this.getView().byId("xx");
		news.setTitle(postText);
		news.setDescription("Posted by Iwa.")
	},
	
	openAdmin: function() {
		app.to("login");
	},
	pressBackButton: function() {
		app.back();
	}
});