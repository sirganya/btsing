define(['exports'], function(modelScaffold) {


	modelScaffold.checkBoxMulti = {
		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "Question Name",
		type: "checkBoxMulti",
		question: "New Question",
		options: ["New Option"],
		sortOrder: null,
		required: true
	};

	modelScaffold.dropDown = {

		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "Question Name",
		type: "dropDown",
		question: "New Question",
		options: ["New Option"],
		required: true,
		sortOrder: null
		//what's all this then?
		// WHAT? TODO: "branchDone: true,
		//"branchDoneIfResponseIs: "Other",
		//"branchDoneTo: "G",
	};

	modelScaffold.email = {
		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "email",
		type: "textField",
		question: "Please enter your e-mail address",
		required: true,
		openEnded: true,
		sortOrder: null
	};

	modelScaffold.infoMessage = {
		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "infoMessage",
		type: "infoMessage",
		question: "New infoMessage",
		required: false,
		openEnded: false,
		sortOrder: null
	};

	modelScaffold.matrix = {
		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "Question Name",
		type: "matrix",
		question: "New Question",
		matrixSchema: {
			options: ["New Option"],
			items: ["New Item"]
		},
		required: true,
		sortOrder: null
	};

	modelScaffold.multiDropDown = {
		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "Question Name",
		type: "multiDropDowns",
		question: "New Question",
		schema: {
			selects: ["NewList"],
			options: {
				NewList: ["New Option"]
			}
		},
		sortOrder: null
	};



	modelScaffold.openEnded = {

		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "Question Name",
		type: "textField",
		question: "New Question",
		required: true,
		openEnded: true,
		sortOrder: null
	};

	modelScaffold.radioList = {
		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "New Question",
		type: "radioList",
		question: "New Question",
		options: {
			0: "New Option"
		},
		required: true,
		sortOrder: null
	};

	modelScaffold.rankWithDropDowns = {
		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "Question Name",
		type: "rankWithDropDowns",
		question: "New Question",
		schema: {
			rank: ["New Rank"],
			options: ["New Option"]
		},
		branch: true,
		required: true,
		sortOrder: 4

	};

	modelScaffold.zip = {
		//contains a hack, id is copied to oroginal tid and name is changed to zip
		surveyID: null,
		partition: "surveytemplates",
		element: "question",
		name: "zip",
		type: "textField",
		question: "What is your zip code?",
		required: true,
		openEnded: false,
		sortOrder: 0.5,
		originalTID: null
	};

	modelScaffold.welcomeMessage = {
		surveyID: null,
		partition: "surveytemplates",
		element: "welcomeMessage",
		name: "welcomeMessage",
		welcomeMessage: {
			text: "New Welcome Message"
		},
		sortOrder: 0
	};

	modelScaffold.goodbyeMessage = {
		surveyID: null,
		partition: "surveytemplates",
		element: "goodbyeMessage",
		name: "goodbyeMessage",
		goodbyeMessage: {
			text: "New Goodbye Message"
		},
		sortOrder: 0
	};
});