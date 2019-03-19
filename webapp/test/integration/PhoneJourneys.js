jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ztest500/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ztest500/test/integration/pages/App",
	"ztest500/test/integration/pages/Browser",
	"ztest500/test/integration/pages/Master",
	"ztest500/test/integration/pages/Detail",
	"ztest500/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ztest500.view."
	});

	sap.ui.require([
		"ztest500/test/integration/NavigationJourneyPhone",
		"ztest500/test/integration/NotFoundJourneyPhone",
		"ztest500/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});