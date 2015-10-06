sap.ui.controller("com.sap.view.candidatePool", {
	onInit: function () {
		
		var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("com.sap", "/models/applicants.json"));
		this.getView().setModel(oModel);


		var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
		var oMessageManager = sap.ui.getCore().getMessageManager();

		oMessageManager.registerMessageProcessor(oMessageProcessor);

		oMessageManager.addMessages(
				new sap.ui.core.message.Message({
					message: "Something wrong happened",
					type: sap.ui.core.MessageType.Error,
					processor: oMessageProcessor
				})
		);
	},

	onSemanticButtonPress: function () {
		sap.m.MessageToast.show("Selected for the job post!!");
	},
	
	onFlag: function () {
		sap.m.MessageToast.show("This Candidate is Flagged!!");
	},
	
	onFavourite: function () {
		sap.m.MessageToast.show("This Candidate is added to your Favourites!!");
	},
	
	onDetailPress: function (oEvent) {
		var ctx = oEvent.getSource().getBindingContext();
		this.getView().byId("dynamicName").setBindingContext(ctx);
		this.getView().byId("dynamicDesc").setBindingContext(ctx);
		this.getView().byId("dynamicPoints").setBindingContext(ctx);
		this.getView().byId("dynamicRating").setBindingContext(ctx);
		this.getView().byId("dynamicCountry").setBindingContext(ctx);
	},
	
	sendEmailtoFriend: function(){
		sap.m.URLHelper.triggerEmail("", "SAP Innojam - Congratulation! You have been selected for our Orchestra Team", "An Expert Musician is Selected!"); 
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
	
	openAdmin: function() {
		app.to("login");
	},
	
	pressBackButton: function() {
		app.back();
	}

});