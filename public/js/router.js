define([
	'exports',
	'views/home',


], function(router, home) {


	var AppRouter = Backbone.Router.extend({

		routes: {
			'': 'home',
			'home': 'home',

		},

		home: function() {

			//attempt to keep the views modular, but using require means I need to pass the element to attach the
			//view to.

			new home.methods().render($('#page'));

		},

	});



	router.initialize = function() {

		appRouter = new AppRouter();

		Backbone.history.start();
	};
});