define(['exports', 'backbone', 'wad'], function(sounds, Backbone, wad) {



	Wad.setGlobalReverb({
		wet: 1, // Volume of the reverberations.
		impulse:  "assets/reverbs/large_bottle_hall.wav" // A URL for an impulse response file
	});


	var a_tine1 = new Wad({
		source: "assets/sounds/rhodes/65755__corsica-s__c-s-rhodes-mark-ii-a2.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav", // A URL for an impulse response file, if you do not want to use the default impulse response.
		},
	});
	var a_tine2 = new Wad({
		source: "assets/sounds/rhodes/65719__corsica-s__c-s-rhodes-mark-ii-c2.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine3 = new Wad({
		source: "assets/sounds/rhodes/65723__corsica-s__c-s-rhodes-mark-ii-d2.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine4 = new Wad({
		source: "assets/sounds/rhodes/65725__corsica-s__c-s-rhodes-mark-ii-e2.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine5 = new Wad({
		source: "assets/sounds/rhodes/65730__corsica-s__c-s-rhodes-mark-ii-g2.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine7 = new Wad({
		source: "assets/sounds/rhodes/65720__corsica-s__c-s-rhodes-mark-ii-c3.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine8 = new Wad({
		source: "assets/sounds/rhodes/65724__corsica-s__c-s-rhodes-mark-ii-d3.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine9 = new Wad({
		source: "assets/sounds/rhodes/65726__corsica-s__c-s-rhodes-mark-ii-e3aif.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine10 = new Wad({
		source: "assets/sounds/rhodes/65651__corsica-s__c-s-rhodes-mark-ii-a5.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine11 = new Wad({
		source: "assets/sounds/rhodes/65657__corsica-s__c-s-rhodes-mark-ii-d5.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine12 = new Wad({
		source: "assets/sounds/rhodes/65659__corsica-s__c-s-rhodes-mark-ii-e5.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});
	var a_tine13 = new Wad({
		source: "assets/sounds/rhodes/65664__corsica-s__c-s-rhodes-mark-ii-g5.mp3",
		reverb: {
			wet: 1, // Volume of the reverberations.
			impulse: "assets/reverbs/large_bottle_hall.wav"
		},
	});



	var rhodes = [a_tine1, a_tine2, a_tine3, a_tine4, a_tine5, a_tine7, a_tine8, a_tine9, a_tine10, a_tine11, a_tine12, a_tine13];
	var notes = ['A5', 'C6', 'D6', 'E6', 'G6', 'A6', 'C7', 'D7', 'G7', 'E7'];


	var saw = new Wad({
		source: 'sine',
		globalReverb : true,
		volume: 0.01, // Peak volume can range from 0 to an arbitrarily high number, but you probably shouldn't set it higher than 1.
		pitch: 'A6', // Set a default pitch on the constuctor if you don't want to set the pitch on play().
		panning: -10, // Horizontal placement of the sound source. Sensible values are from 10 to -10.
		env: { // This is the ADSR envelope.
			attack: 0.01, // Time in seconds from onset to peak volume.  Common values for oscillators may range from 0.05 to 0.3.
			decay: 0.3, // Time in seconds from peak volume to sustain volume.
			sustain: .3, // Sustain volume level. This is a percent of the peak volume, so sensible values are between 0 and 1.
			hold: .1, // Time in seconds to maintain the sustain volume level. If this is not set to a lower value, oscillators must be manually stopped by calling their stop() method.
			release: .2 // Time in seconds from the end of the hold period to zero volume, or from calling stop() to zero volume.
		}
	});


	sounds.triggerRhodes = function(note, pan, verb) {

		//console.log('trigger note', note);
		rhodes[note].play({
			volume: 0.2,
			panning: pan,
			setreverb: verb
		});
	};


	sounds.triggerSynth = function(note, pan, wait) {
		console.log('wait: ', wait);
		saw.play({

			wait: wait,
			pitch: notes[note]
		});

	};
});



//var context = window.webkitAudioContext ? new webkitAudioContext() : new AudioContext(); // Create Audio Container
// sourceGainNode = context.createGainNode(); // Create source gain control
// lowPassFilter = context.createBiquadFilter(); // Create low pass filter
// highPassFilter = context.createBiquadFilter(); // Create high pass filter
// compressorPost = context.createDynamicsCompressor(); // Create post filter compressor
// masterGainNode = context.createGainNode(); // Create master gain control
// pannerNode = context.createPanner(); // Create panner

// // Bank A Ascending
// var a_tine1 = new audioAscendingKey("b_tine1", "assets/sounds/rhodes/65755__corsica-s__c-s-rhodes-mark-ii-a2.aif");
// var a_tine2 = new audioAscendingKey("b_tine2", "assets/sounds/rhodes/65719__corsica-s__c-s-rhodes-mark-ii-c2.aif");
// var a_tine3 = new audioAscendingKey("b_tine3", "assets/sounds/rhodes/65723__corsica-s__c-s-rhodes-mark-ii-d2.aif");
// var a_tine4 = new audioAscendingKey("b_tine4", "assets/sounds/rhodes/65725__corsica-s__c-s-rhodes-mark-ii-e2.aif");
// var a_tine5 = new audioAscendingKey("b_tine5", "assets/sounds/rhodes/65730__corsica-s__c-s-rhodes-mark-ii-g2.aif");
// var a_tine7 = new audioAscendingKey("b_tine7", "assets/sounds/rhodes/65720__corsica-s__c-s-rhodes-mark-ii-c3.aif");
// var a_tine8 = new audioAscendingKey("b_tine8", "assets/sounds/rhodes/65724__corsica-s__c-s-rhodes-mark-ii-d3.aif");
// var a_tine9 = new audioAscendingKey("b_tine9", "assets/sounds/rhodes/65726__corsica-s__c-s-rhodes-mark-ii-e3aif.aif");
// var a_tine10 = new audioAscendingKey("b_tine10", "assets/sounds/rhodes/65651__corsica-s__c-s-rhodes-mark-ii-a5.aif");
// var a_tine11 = new audioAscendingKey("b_tine11", "assets/sounds/rhodes/65657__corsica-s__c-s-rhodes-mark-ii-d5.aif");
// var a_tine12 = new audioAscendingKey("b_tine12", "assets/sounds/rhodes/65659__corsica-s__c-s-rhodes-mark-ii-e5.aif");
// var a_tine13 = new audioAscendingKey("b_tine13", "assets/sounds/rhodes/65664__corsica-s__c-s-rhodes-mark-ii-g5.aif");

// masterGainNode.gain.value = 0.2;
// masterGainNode.connect(context.destination);

// function audioAscendingKey(triggerEvt, fileDirectory) {
// 	//console.log('audioAscendingKey', triggerEvt);
// 	this.triggerEvt = triggerEvt;
// 	this.fileDirectory = fileDirectory;
// 	var incomingBuffer;
// 	var savedBuffer;
// 	var xhr;



// 	var xhr = new XMLHttpRequest();
// 	xhr.open('get', fileDirectory, true);
// 	xhr.responseType = 'arraybuffer';
// 	xhr.onload = function() {
// 			var playAudioFile = function() {
// 				//console.log('playAudioFile');
// 				var source = context.createBufferSource();
// 				//console.log(source);
// 				source.buffer = savedBuffer;
// 				source.connect(sourceGainNode);
// 				source.connect(masterGainNode);
// 				source.noteOn(0); // Play sound immediately
// 			};
// 			//console.log(xhr.response);
// 			context.decodeAudioData(xhr.response,
// 				function(incomingBuffer) {
// 					savedBuffer = incomingBuffer; // Save the buffer, we'll reuse it
// 					//console.log('sounds', triggerEvt);
// 					sounds.on(triggerEvt, playAudioFile);
// 				}, function(e) {
// 					console.log('Error decoding file', e);
// 				});

// };

//xhr.send();