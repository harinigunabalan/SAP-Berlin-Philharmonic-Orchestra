sap.ui.controller("com.sap.view.ViewProfile", {

	
	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf view.viewProfile
	 */
	onInit: function() {
			//	create JSON model instance
			var sPath = jQuery.sap.getModulePath("com.sap", "/json/profile.json");
		
			
			var oModel = new sap.ui.model.json.JSONModel(sPath);
			this.getView().setModel(oModel);
			var oQuickViewCard = this.getView().byId("quickViewCard");
			oQuickViewCard.setShowVerticalScrollBar(false);
		},
		
		formatAttribute : function (sValue) {
			jQuery.sap.require("sap.ui.core.format.FileSizeFormat");
			if (jQuery.isNumeric(sValue)) {
				return sap.ui.core.format.FileSizeFormat.getInstance({
					binaryFilesize : false,
					maxFractionDigits : 1,
					maxIntegerDigits : 3
				}).format(sValue);
			} else {
				return sValue;
			}
		},

		onChange: function(oEvent) {
			var oUploadCollection = oEvent.getSource();
			// Header Token
			var oCustomerHeaderToken = new sap.m.UploadCollectionParameter({
				name : "x-csrf-token",
				value : "securityTokenFromModel"
			});
			oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
		},

		onFileDeleted: function(oEvent) {
			var oData = this.getView().getModel().getData();
			var aItems = jQuery.extend(true, {}, oData).items;
			var sDocumentId = oEvent.getParameter("documentId");
			jQuery.each(aItems, function(index) {
				if (aItems[index] && aItems[index].documentId === sDocumentId) {
					aItems.splice(index, 1);
				}
			});
			this.getView().byId("UploadCollection").getModel().setData({
				"items" : aItems,
				"pages" : oData.pages 
			});
			var oUploadCollection = oEvent.getSource();
			oUploadCollection.setNumberOfAttachmentsText("Upload Videos/Recordings  (" +  oUploadCollection.getItems().length + ")");
		},

		onFileRenamed: function(oEvent) {
			var oData = this.getView().getModel().getData();
			var aItems = jQuery.extend(true, {}, oData).items;
			var sDocumentId = oEvent.getParameter("documentId");
			jQuery.each(aItems, function(index) {
				if (aItems[index] && aItems[index].documentId === sDocumentId) {
					aItems[index].fileName = oEvent.getParameter("item").getFileName();
				}
			});
			this.getView().byId("UploadCollection").getModel().setData({
				"items" : aItems,
				"pages" : oData.pages 
			});
		},

		onUploadComplete: function(oEvent) {
			var oData = this.getView().getModel().getData();
			var aItems = jQuery.extend(true, {}, oData).items;
			var oItem = {};
			var sUploadedFile = oEvent.getParameter("files")[0].fileName;
			// at the moment parameter fileName is not set in IE9
			if (!sUploadedFile) {
				var aUploadedFile = (oEvent.getParameters().getSource().getProperty("value")).split(/\" "/);
				sUploadedFile = aUploadedFile[0];
			}
			oItem = {
					"documentId" : jQuery.now().toString(), // generate Id,
					"fileName" : sUploadedFile,
					"mimeType" : "",
					"thumbnailUrl" : "",
					"url" : "",
					"attributes":[
						{
							"title" : "Uploaded By",
							"text" : "You"
						},
						{
							"title" : "Uploaded On",
							"text" : new Date(jQuery.now()).toLocaleDateString()
						},
						{
							"title" : "File Size",
							"text" : "505000"
						}
					]
			};
			aItems.unshift(oItem);
			
			this.getView().byId("UploadCollection").getModel().setData({
				"items" : aItems,
				"pages" : oData.pages 
			});
			var oUploadCollection = oEvent.getSource();
			oUploadCollection.setNumberOfAttachmentsText("Upload Videos/Recordings  (" +  oUploadCollection.getItems().length + ")");
			// delay the success message for to notice onChange message
			setTimeout(function() {
			//	MessageToast.show("UploadComplete event triggered.");
			}, 4000);
		},

		onSelectChange:  function(oEvent) {
			var oUploadCollection=sap.ui.getCore().byId(this.getView().getId() + "--UploadCollection");
			oUploadCollection.setShowSeparators(oEvent.getParameters().selectedItem.getProperty("key"));
		},
		onBeforeUploadStarts: function(oEvent) {
			// Header Slug
			var oCustomerHeaderSlug = new sap.m.UploadCollectionParameter({
				name : "slug",
				value : oEvent.getParameter("fileName")
			});
			oEvent.getParameters().addHeaderParameter(oCustomerHeaderSlug);
		//	MessageToast.show("BeforeUploadStarts event triggered.");
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