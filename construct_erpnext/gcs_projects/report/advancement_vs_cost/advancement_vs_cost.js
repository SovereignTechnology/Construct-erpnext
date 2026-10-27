// Copyright (c) 2026, Sovereign Technology S.A.S. de C.V. and contributors
// For license information, please see license.txt

frappe.query_reports["Advancement vs Cost"] = {
	filters: [
		{
			fieldname: "project",
			label: __("Project"),
			fieldtype: "Link",
			options: "Project",
		},
		{
			fieldname: "company",
			label: __("Company"),
			fieldtype: "Link",
			options: "Company",
			default: frappe.defaults.get_default("company"),
		},
	],
};
