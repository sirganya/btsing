define(['exports', 'tweenmax', 'js/views/sounds.js', 'text!templates/home.html'], function(home, Tweenmax, Sounds, homeTemplate) {

	home.methods = Backbone.View.extend({

		tagName: 'div',

		className: 'home',

		parentElement: null,

		sounds: Sounds,

		template: _.template(homeTemplate),

		events: {

			'click .info': 'showCredits'

		},

		rows: 8,
		cols: 11,
		thisCol: 1,
		thisRow: 1,
		render: function(parentElement) {

			var that = this;
			//console.log('init');
			this.parentElement = parentElement;
			var compiledTemplate = this.template();
			this.parentElement.html($(this.el).html(compiledTemplate));
			var exampleSocket = new WebSocket("ws://ws.blockchain.info:8335/inv");
			exampleSocket.onopen = function(e) {

				exampleSocket.send(JSON.stringify({
					"op": "unconfirmed_sub"
				}));
			};

			// var stockSocket = new WebSocket("wss://demo.kaazing.com/jms");

			// stockSocket.onmessage = function(event){

			// 	console.log(event);
			// };


			exampleSocket.onmessage = function(event) {

				var message = JSON.parse(event.data);


				if ( that.sounds.areAllSamplesLoaded() ) {
					$('.spinner').hide();
					that.paintIt(message);
					that.playIt(message);
					that.playOutputs(message);
					that.paintOutputs(message);
				}

			};
		},


		startIt: function() {


		},

		playIt: function(message) {


			var size = String(message.x.size);
			var note = size.charAt(0);
			var pan = note * Math.random() < 0.5 ? -1 : 1;
			var verb = note / 100;
			this.sounds.triggerRhodes(note, pan, verb);
		},

		playOutputs: function(message) {

			//var wait = .02;

			_.each(message.x.out, function(out, idx) {

				var note = String(out.value).charAt(0);
				var pan = note * 2 * Math.random() < 0.5 ? -1 : 1;
				//console.log(idx);
				var wait = 0.6 * idx;
				var volume = 0.05 / idx;
				this.sounds.triggerSynth(note, pan, wait, volume);

			}, this);

		},


		paintOutputs: function(message) {


			var currentCol = this.thisCol;
			var currentRow = this.thisRow;

			_.each(message.x.out, function(out, idx) {

				var cssPath = this.getCssPath(currentRow, currentCol);
				var wait = 0.9 * idx / 10;
				var hex = '#' + out.addr.substring(0, 6);
				var tl = new TimelineMax();
				//console.log(cssPath);
				tl.add(
					Tweenmax.to(cssPath, wait, {
						delay: wait,
						borderColor: hex,
						opacity: 0.7

					}));

				tl.add(Tweenmax.to(cssPath, 5, {


					borderColor: '#FFF',
					opacity: 0.3

				}));

				currentCol++;

				if (currentCol === this.cols) {

					currentCol = 1;
					currentRow++;
					if (currentRow === this.rows) currentRow = 1;

				}



			}, this);
		},

		paintIt: function(message) {

			var that = this;

			//console.log(message);
			$('.size').text(message.x.size);
			$('.relayed_by').text(message.x.relayed_by);
			$('.hash').text(message.x.hash);

			var outputList = '';
			_.each(message.x.out, function(o) {

				outputList += '<li>' + o.value + '</li>';
			});


			var hex = '#' + message.x.hash.substring(0, 6);
			var decPLaces = String(message.x.size).length;
			var opacity = message.x.size / Math.pow(10, decPLaces);
			$('.output').html(outputList);
			//$('.block').css('background-color', hex);
			//$('.block').css('opacity', opacity);
			var cssPath = this.getCssPath(that.thisRow, that.thisCol);

			var tl = new TimelineMax();
			tl.add(
				Tweenmax.to(cssPath, opacity, {

					backgroundColor: hex,
					opacity: opacity,
					borderColor: '#000'

				}));

			tl.add(Tweenmax.to(cssPath, 30, {


				backgroundColor: '#000',
				borderColor: '#FFF'

			}));

			this.thisCol++;

			if (this.thisCol === this.cols) {

				this.thisCol = 1;
				this.thisRow++;
				if (this.thisRow === this.rows) this.thisRow = 1;

			}


		},

		showCredits: function() {

			$('.credits').toggle();
		},



		getCssPath: function(row, col) {

			return '.row' + row + ' .color' + col;

		},

		destroy: function() {

			this.undelegateEvents();
			this.remove();
		}


	});
});