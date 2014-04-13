requirejs.config({
    //appDir: ".",
    baseUrl: "js",
    paths: {
        /* Load jquery from cdnjs. On fail, load local file. */

        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'text': 'libs/text',
        'backbone_collection_view': 'libs/backbone.collectionView',
        'jqueryui': 'libs/jqueryui.min',
        'modernizr': 'libs/modernizr.custom.70563',
        'bootstrap': 'libs/bootstrap.min',
        "socketio": "bower_components/socket.io-client/dist/socket.io",
        "tweenmax": "bower_components/greensock/src/minified/TweenMax.min",
        "wad": "bower_components/wad/src/wad"

    },

    shim: {


        'jquery': {
            exports: '$'
        },

        'jqueryui': {
            exports: "$",
            deps: ['jquery']
        },

        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'backbone': {
            deps: ['jquery'],
            exports: 'Backbone'
        },

        'backbone_collection_view': {
            deps: ['backbone']
        },

        'bootstrap': {

            exports: 'Bootstrap'
        },
        'socketio': {
            exports: 'io'
        },
        'wad': {
            exports: 'Wad'
        },
        'tweenmax': {
            exports: 'TweenMax'
        }


    }



});



require(['underscore', 'backbone', 'app', 'backbone_collection_view', 'modernizr'],
    function(_, Backbone, App) {

        App.initialize();

    });