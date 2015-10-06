sap.ui.controller("com.sap.view.openPositions", {
	
	onInit: function () {
		
		var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("com.sap", "/models/team3.json"));
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
	openAdmin: function() {
		app.to("login");
	},
	
	onSemanticButtonPress: function () {
		sap.m.MessageToast.show("Applied to the job post!!");
	},
	
	onFlag: function () {
		sap.m.MessageToast.show("This Job Post is Flagged!!");
	},
	
	onFavourite: function () {
		sap.m.MessageToast.show("This Job Post is added to your Favourites!!");
	},
	
	onDetailPress: function (oEvent) {
		var ctx = oEvent.getSource().getBindingContext();
		this.getView().byId("dynamicDesc").setBindingContext(ctx);
	},
	
	sendEmailtoFriend: function(){
		sap.m.URLHelper.triggerEmail("", "SAP Innojam - MUSICIAN REQUIRED", "An Expert Musician is Required!"); 
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

	pressBackButton: function() {
		app.back();
	}
	
 });