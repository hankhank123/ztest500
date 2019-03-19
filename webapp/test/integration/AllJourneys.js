jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ALVSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"ztest500/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ztest500/test/integration/pages/App",
	"ztest500/test/integration/pages/Browser",
	"ztest500/test/integration/pages/Master",
	"ztest500/test/integration/pages/Detail",
	"ztest500/test/integration/pages/Create",
	"ztest500/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ztest500.view."
	});

	sap.ui.require([
		"ztest500/test/integration/MasterJourney",
		"ztest500/test/integration/NavigationJourney",
		"ztest500/test/integration/NotFoundJourney",
		"ztest500/test/integration/BusyJourney",
		"ztest500/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});