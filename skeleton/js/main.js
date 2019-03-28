//TRIGGER PART ONE
//we are here now
//ai voice says welcome
//fade in of images, text
//ai voice says please discuss
//timer waits

//TRIGGER PART TWO
//ai voice says now activate special powers
//special powers happens
//stuff is revealed
//ai says please discuss
//timer waits

//TRIGGER PART THREE
//ai voice says please prepare your decision
//ai voice says please tell me your decision
//voice decision recognised
//ai voice says decision registered
//sends to database

//TRIGGER PART FOUR
//ai voice delivers Update to the world
//LEDS light up
//Centerpiece lights up
//POVs updated
//ai says go to the next mission

//commands for animation
var delay = 10000;

//audio: shown on ipad - how do we show this simulatenously / control ipad?
//preload audio
var wavesurfer = WaveSurfer.create({
    container: '#waveform'
});

$("body").keydown(function(event){ 
	console.log(event.which);





//PART ONE
	if(event.which==49){ //pressed 1
		console.log("activate 1")
		//images: projected
		console.log("loading images")
		$("#img1").fadeIn(delay);
		$("#img2").fadeIn(delay);
		$("#img3").fadeIn(delay);

		wavesurfer.load('audio/Fusion_1.mp3');
		//voice talking
		console.log("playing audio: Welcome Back from Mission")
		wavesurfer.on('ready', function () {
		    wavesurfer.play();
		});

		//text on images
		$("#imgTxt1").fadeIn(delay);
		$("#imgTxt2").fadeIn(delay);
		$("#imgTxt3").fadeIn(delay);

		// fade out images + text after timer e.g. 15 seconds.
		window.setTimeout(function(){
		console.log("fade out content...")
		$("#img1").fadeOut('delay');
		$("#imgTxt1").fadeOut('delay');
		$("#img2").fadeOut('delay');
		$("#imgTxt2").fadeOut('delay');
		$("#img3").fadeOut('delay');
		$("#imgTxt3").fadeOut('delay');
    	}, 15000);

    	// load special power visualization


		// audio instruction: special power
		window.setTimeout(function(){
		$("#img1").fadeIn(delay);
		$("#img2").fadeIn(delay);
		$("#img3").fadeIn(delay);
		wavesurfer.load('audio/Fusion_2._Special_Power.mp3'); 
		//voice talking
		console.log("playing audio: Special Power")
		wavesurfer.on('ready', function () {
		    wavesurfer.play();
		});
		}, 15000);
	}
		









//PART TWO
	if(event.which==50){ //pressed 2
		console.log("activate 2")	

		wavesurfer.load('audio/2.mp3');
		//voice talking
		wavesurfer.on('ready', function () {
		    wavesurfer.play();
		});

	}
	if(event.which==51){ //pressed 3
		console.log("activate 3")		

		wavesurfer.load('../audio/3.mp3');
		//voice talking
		wavesurfer.on('ready', function () {
		    wavesurfer.play();
		});
	}
});