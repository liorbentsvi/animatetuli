(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"אנימציה תולי עצם העניין_atlas_1", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_2", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_3", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_4", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_5", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_6", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_7", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_8", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_9", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_10", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_11", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_12", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_13", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_14", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_15", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_16", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_17", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_18", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_19", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_20", frames: [[0,0,1718,1536]]},
		{name:"אנימציה תולי עצם העניין_atlas_21", frames: [[0,0,1717,1535]]},
		{name:"אנימציה תולי עצם העניין_atlas_22", frames: [[0,0,1431,1058],[0,1060,1614,870]]},
		{name:"אנימציה תולי עצם העניין_atlas_23", frames: [[0,0,1614,870],[0,872,1614,870]]},
		{name:"אנימציה תולי עצם העניין_atlas_24", frames: [[0,872,1183,833],[0,0,1613,870]]},
		{name:"אנימציה תולי עצם העניין_atlas_25", frames: [[0,1180,383,670],[0,448,393,730],[385,1180,383,669],[395,507,383,669],[770,1178,383,669],[780,507,383,669],[1155,1178,383,669],[1165,507,383,669],[1550,507,383,669],[1540,1178,383,669],[1065,0,732,505],[0,0,1063,446]]},
		{name:"אנימציה תולי עצם העניין_atlas_26", frames: [[385,671,224,1019],[385,1692,685,323],[611,671,318,583],[0,0,383,669],[0,671,383,669],[0,1342,383,669],[385,0,383,669],[1235,0,463,368],[611,1256,463,370],[931,742,463,367],[1396,738,463,362],[1537,1480,463,366],[1072,1628,463,369],[1396,370,463,366],[1541,1102,463,361],[1076,1111,463,367],[770,0,463,369],[931,371,463,369]]},
		{name:"אנימציה תולי עצם העניין_atlas_27", frames: [[227,0,155,736],[1906,401,126,260],[1906,663,120,260],[0,527,166,139],[1830,401,47,33],[1985,43,46,38],[1985,0,43,41],[1978,131,39,42],[1941,175,38,43],[1790,401,38,42],[1985,83,36,46],[1981,175,34,47],[1941,108,35,47],[0,0,225,525],[1251,977,424,99],[2030,0,1,1],[384,0,155,736],[541,0,155,736],[1677,977,166,139],[698,0,544,203],[1244,0,544,203],[698,205,544,203],[1244,205,544,203],[1790,0,149,256],[698,410,544,203],[1244,410,544,203],[698,615,544,203],[1941,0,42,106],[2019,131,29,50],[2017,183,29,50],[1941,220,24,35],[1244,795,321,180],[1830,436,24,52],[1244,615,329,178],[1879,401,24,53],[1790,445,24,52],[0,932,292,159],[0,738,302,192],[304,738,325,178],[1567,795,321,180],[957,977,292,159],[1842,510,24,35],[304,918,319,180],[1790,258,254,141],[1868,510,24,35],[168,527,24,35],[631,820,324,178],[1856,456,24,52],[1816,490,24,52],[957,820,274,128],[1790,499,24,52],[194,527,24,35],[1816,544,24,35],[1575,615,329,178],[1842,547,24,35],[1868,547,24,35]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_114 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(img.CachedBmp_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2592,3166);


(lib.CachedBmp_106 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(img.CachedBmp_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2518,3115);


(lib.CachedBmp_103 = function() {
	this.initialize(img.CachedBmp_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2518,3115);


(lib.CachedBmp_104 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(img.CachedBmp_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2986,3420);


(lib.CachedBmp_100 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(img.CachedBmp_99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3357,3597);


(lib.CachedBmp_98 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(img.CachedBmp_97);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3566,3607);


(lib.CachedBmp_96 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(img.CachedBmp_95);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3622,3504);


(lib.CachedBmp_94 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(img.CachedBmp_93);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3508,3147);


(lib.CachedBmp_92 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(img.CachedBmp_91);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3245,2707);


(lib.CachedBmp_90 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(img.CachedBmp_89);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2879,2198);


(lib.CachedBmp_88 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(img.CachedBmp_72);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1714,2741);


(lib.CachedBmp_71 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_22"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_24"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_22"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_23"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_23"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_24"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_26"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(img.CachedBmp_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_24 = function() {
	this.initialize(img.CachedBmp_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_23 = function() {
	this.initialize(img.CachedBmp_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_22 = function() {
	this.initialize(img.CachedBmp_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1538);


(lib.CachedBmp_21 = function() {
	this.initialize(img.CachedBmp_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_20 = function() {
	this.initialize(img.CachedBmp_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_19 = function() {
	this.initialize(img.CachedBmp_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_18 = function() {
	this.initialize(img.CachedBmp_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2207,1540);


(lib.CachedBmp_17 = function() {
	this.initialize(img.CachedBmp_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_16 = function() {
	this.initialize(img.CachedBmp_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1538);


(lib.CachedBmp_15 = function() {
	this.initialize(img.CachedBmp_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_14 = function() {
	this.initialize(img.CachedBmp_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1538);


(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2213,1540);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2207,1540);


(lib.CachedBmp_10 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_21"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_25"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_19"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_20"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BMP_04dfdcd1_3379_4481_9387_00475c556b62 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2f81e7ad_64ee_4401_92b2_26618f679f77 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3277a7d4_e7f2_472f_9443_82eba0df747d = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.BMP_416eb5cf_cd9e_4ebf_9d77_34b2deaf964c = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4536ad15_8e9f_42b9_882a_d201fa0874c1 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.BMP_52047b25_15d3_44d9_96b4_e3aeb2799df4 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.BMP_54f46113_a839_47d2_9dc5_c0f91c16a0b1 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6b4778fe_15ec_40c7_a8a4_82d22fef67bc = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6b8cf45c_1c6e_4151_ab03_efa2b1ba018b = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7b0bb6ee_7688_435e_97e0_682535f1f1ae = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8bcb5706_1258_409f_aee8_50d355ed8050 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.BMP_97a60e15_900f_42a4_bc46_879e88c817f5 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.BMP_aab62bb1_832f_4921_b1e0_57549d70ffe4 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b6ae4736_12ff_4281_847d_d586ed8627ee = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c13647af_ff60_47ca_b063_7d7d6043d519 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c6ef6819_88ce_48b7_b7b6_bdcdf9cc0deb = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d495122d_77f5_459c_a7ad_1d5e6e1ea333 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d4e2928b_4c4d_4fcc_b45d_2bde14854625 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d8021a14_059f_4cb1_aaf9_b2cb2cf1ecb6 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.BMP_dacd202c_2730_4600_b6f9_f5ac814e7684 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.BMP_def0656b_b901_464b_87c5_24caca4d3c1f = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e0ec2972_f06d_4a8b_a914_008a1b0465ea = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ed08c778_1917_4d34_bca1_a41f13484651 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f2878358_2b40_4981_99b5_e83fac3961e8 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f80e0299_3d97_4b1d_bb39_dde332ef71c6 = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f96a4d86_f037_411b_9b0c_bf614bb0e42b = function() {
	this.initialize(ss["אנימציה תולי עצם העניין_atlas_27"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ילדהמגישהעצם = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_112();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.5,368);


(lib.ידמגישהעצם = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_111();
	this.instance.setTransform(-2.75,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,0,63,130);


(lib.רגלקדמיתימן = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("ACMiQIhHC0QhOC3glAKQgyAOgWgDQgcgEACgeQABgRAggfQAkgkAQg7QAUhKArhqQAqhmANgKQAZgSAgAMQApAPgRBMg");
	this.shape.setTransform(14.5079,24.1115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2DwQgcgEACgeQABgRAggfQAkgkAQg7QAUhKArhqQAqhmANgKQAZgSAgAMQApAPgRBMIhHC0QhOC3glAKQgpAMgWAAIgJgBg");
	this.shape_1.setTransform(14.5079,24.1115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,31,50.2);


(lib.רגלקדמיתשמאל = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("ACIkvIANBGQAOBWAGBPQARD+hNBiIgEAcQgJAdgUAEQgtAQgaAIQgvAOgEgYQgFgeAPgfQAPgfAagRQAkgVAGhaQAIhpg5hOQhah1gig0Qg5hZAPgvQAPguCTAqQBIAUBGAeg");
	this.shape.setTransform(17.215,37.3954);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguFnQgFgeAPgfQAPgfAagRQAkgVAGhaQAIhpg5hOQhah1gig0Qg5hZAPgvQAPguCTAqQBIAUBGAeIANBGQAOBWAGBPQARD+hNBiIgEAcQgJAdgUAEQgtAQgaAIQgRAFgLAAQgUAAgDgPg");
	this.shape_1.setTransform(17.215,37.3954);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,36.4,76.8);


(lib.רגלאחוריתימן = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("ACQiVIg4CiQg9CmgdAQQgtAYg5gGQg/gGAlgvQAkgtAeh4QAZhmAAgxQAAgSAfgRQAdgQAlgFQAogEAYANQAbAQgFAmg");
	this.shape.setTransform(14.4829,21.3959);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoDVQg/gGAlgvQAkgtAeh4QAZhmAAgxQAAgSAfgRQAdgQAlgFQAogEAYANQAbAQgFAmIg4CiQg9CmgdAQQgkATgtAAIgVgBg");
	this.shape_1.setTransform(14.4829,21.3959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,31,44.8);


(lib.רגל_אחורית_שמאל = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("AjRhiQCJD4AdBRQALAhgBATQAAAFgIAXQgJAcAAAiQAAAhAJAXQAIATArgdQAZgPA1gnQAegTgBgtIgJgpQgWgkgKguQgUhcA8gzQA7gyAXiVQAIgvACgzIACgpQgJgzgwguIgsgj");
	this.shape.setTransform(21,43.63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpGtQgKgXABghQgBgiAKgcQAIgXAAgFQABgTgMghQgchRiJj4IE+lRIAsAjQAvAuAKAzIgCApQgCAzgIAvQgXCVg8AyQg7AzAUBcQAKAuAWAkIAIApQACAtgeATQg1AngZAPQgZARgOAAQgJAAgDgHg");
	this.shape_1.setTransform(21,43.63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,44,89.3);


(lib.ראש = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_109();
	this.instance.setTransform(0,-0.5,0.3223,0.3223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,53.5,44.8);


(lib.קופצת = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_108();
	this.instance.setTransform(0,-0.45,0.4185,0.4185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.קופצת, new cjs.Rectangle(0,-0.4,286.7,135.20000000000002), null);


(lib.זנב = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("AAwiyQABABAAANQAAAEAIAEQAJAFADADQADAEACAKQADAOABACQACAFAFAFQAKAHABAMQAAAFACAGQABAEAEALQACAIgBAIQgBAJABACQABACAEAGQAEAEgBAEQAAADgDAEQgCADADAGQACAEADAEQACAEgCAHQgCAHgFANQgEAMABAHQABARgNAQQgGAHgDAPQgDANgBAAQgBABgFAGQgFAGgHAFQgHAEgEAFQgIALgDADQgDAEgKAOQgFAGgGADQgRAKgMAFQgGADgtAIQgtAHgFADQgGADAcgzQAOgaAVgmQAJgQAIgLQABgDABgQQAAgOAGgHQAFgGgCgGQgDgKABgEQAAgDABgKQABgFACgFQADgCAEgSQACgJAEgDQAEgDABgIQABgIAAgFQAAgGABgHQACgLAAgBQAAgCgBgNQgBgIABgGQACgFgCgJQgBgIACgDQAEgDAAgJQABgLABgEQADgFABgFQABgGADgBQACAAACgOQADgZgFgFQAhAgAEAPg");
	this.shape.setTransform(11.5907,22.5709);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcCyIAjhAQAJgQAIgLQABgDABgQQAAgOAGgHQAFgGgCgGQgDgKABgEIABgNIADgKQADgCAEgSQACgJAEgDQAEgDABgIQABgIAAgFIABgNIACgMIgBgPQgBgIABgGQACgFgCgJQgBgIACgDQAEgDAAgJQABgLABgEQADgFABgFQABgGADgBQACAAACgOQADgZgFgFQAhAgAEAPIABAOQAAAEAIAEQAJAFADADQADAEACAKIAEAQQACAFAFAFQAKAHABAMQAAAFACAGIAFAPQACAIgBAIQgBAJABACIAFAIQAEAEgBAEQAAADgDAEQgCADADAGIAFAIQACAEgCAHIgHAUQgEAMABAHQABARgNAQQgGAHgDAPQgDANgBAAIgGAHQgFAGgHAFQgHAEgEAFIgLAOIgNASQgFAGgGADQgRAKgMAFQgGADgtAIQgtAHgFADIAAAAQgEAAAagwg");
	this.shape_1.setTransform(11.5907,22.5709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,25.2,47.2);


(lib.גוף = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("ApEAVQgMgggCgoQgBhoANgqQAIgbBhgNQAxgGAvgCIBGAjQBOAgAngTQAngTAbACQAOABASADQAPgCALgKQAJgJARgBQA6gEAcgHQAHgCAQABQARACALgDQATgEAqAEIAYAAQAFAAAVACQARABAKgBQARgCAoACIAZAMQAaAMAJgDQALgDAJADQAIADAKAKQANANAkAPIAQAQQAQAQAEAAQAKAAAmAcQAtAgAJAdQADAJAOAeQAFAMAAAUQAAAYg3AXQhTAdg2AVQhNAdggAPQgpAUgWAWQgCADgUgCQgVgCgDABQhbAfhcAOQiaAYhegk");
	this.shape.setTransform(59.4714,24.8465);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj2DjIlOjOQgMgggCgoQgBhoANgqQAIgbBhgNQAxgGAvgCIBGAjQBOAgAngTQAngTAbACQAOABASADQAPgCALgKQAJgJARgBQA6gEAcgHQAHgCAQABQARACALgDQATgEAqAEIAYAAIAaACQARABAKgBQARgCAoACIAZAMQAaAMAJgDQALgDAJADQAIADAKAKQANANAkAPIAQAQQAQAQAEAAQAKAAAmAcQAtAgAJAdIARAnQAFAMAAAUQAAAYg3AXIiJAyQhNAdggAPQgpAUgWAWQgCADgUgCQgVgCgDABQhbAfhcAOQg+AJg0AAQhOAAg4gVg");
	this.shape_1.setTransform(59.4714,24.8465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,121,51.7);


(lib.בודד = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("Ag3AtIAKgCQALgDAGgDQAngaAtg3");
	this.shape.setTransform(5.575,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,13.2,11);


(lib.באה3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_87();
	this.instance.setTransform(-0.45,-0.45,0.2229,0.2229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.באה3, new cjs.Rectangle(-0.4,-0.4,87.60000000000001,162.70000000000002), null);


(lib.באה2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_86();
	this.instance.setTransform(-0.45,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.באה2, new cjs.Rectangle(-0.4,-0.5,159,291.5), null);


(lib.באה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_85();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.באה, new cjs.Rectangle(-0.5,-0.5,112.5,262.5), null);


(lib.אוכלת = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.WarpedAsset_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BMP_b6ae4736_12ff_4281_847d_d586ed8627ee();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254,141);


(lib.WarpedAsset_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BMP_f2878358_2b40_4981_99b5_e83fac3961e8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329,178);


(lib.WarpedAsset_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BMP_4536ad15_8e9f_42b9_882a_d201fa0874c1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,53);


(lib.Tween71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(6.0575,3.0789,0.9998,0.9998,31.8405);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(6.0575,3.0789,0.9998,0.9998,31.8405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-50.1,96.69999999999999,100.30000000000001);


(lib.Tween70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(-4.4692,-2.2943,0.9998,0.9998,-13.1582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(-4.4692,-2.2943,0.9998,0.9998,-13.1582);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.6,-63.5,73.30000000000001,127);


(lib.Tween69 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(6.0643,3.0844,0.9999,0.9999,31.8398);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(6.0643,3.0844,0.9999,0.9999,31.8398);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-50.1,96.69999999999999,100.30000000000001);


(lib.Tween68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(-6.1965,-4.8675,0.9999,0.9999,-28.1595);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(-6.1965,-4.8675,0.9999,0.9999,-28.1595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-60.4,72.1,120.9);


(lib.Tween67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(6.0695,3.0863,0.9999,0.9999,31.8389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(6.0695,3.0863,0.9999,0.9999,31.8389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-50.1,96.69999999999999,100.30000000000001);


(lib.Tween66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(-6.192,-4.8717,0.9999,0.9999,-28.1606);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(-6.192,-4.8717,0.9999,0.9999,-28.1606);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-60.4,72.1,120.9);


(lib.Tween65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(6.7322,2.1122,0.9999,0.9999,37.547);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(6.7322,2.1122,0.9999,0.9999,37.547);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-47.5,100.5,95.1);


(lib.Tween64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(-8.2179,-3.8463,0.9999,0.9999,-22.4528);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(-8.2179,-3.8463,0.9999,0.9999,-22.4528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-62.1,67.1,124.30000000000001);


(lib.Tween63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(5.7979,3.3139,0.9999,0.9999,30.0002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(5.7979,3.3139,0.9999,0.9999,30.0002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-50.9,95.6,101.9);


(lib.Tween62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(-5.4623,-5.1572,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(-5.4623,-5.1572,1,1,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-59.8,73.9,119.69999999999999);


(lib.Tween61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(5.8072,3.3203,1,1,29.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(5.8072,3.3203,1,1,29.9992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-50.9,95.6,101.9);


(lib.Tween60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("ABdHlQAGgGA1gjQA9grAtgwQCSidgJjRQgKjSi/jaQg8hEhHg8Ig7gvQATA4ATBGQAnCLAFBDQAFBThHCEQhHCFhTA5IkAC+QgVAmBWCJQBVCJAqgGg");
	this.shape.setTransform(0.0308,-0.0124);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFHmQhWiJAVgmIEAi+QBTg5BHiFQBHiEgFhTQgFhDgniLQgThGgTg4IA7AvQBHA8A8BEQC/DaAKDSQAJDRiSCdQgtAwg9ArQg1AjgGAGIkjCEIgDAAQgrAAhRiDg");
	this.shape_1.setTransform(0.0308,-0.0124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-62.7,81.1,125.5);


(lib.Tween59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_84();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_83();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_82();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_81();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_80();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_79();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_78();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_77();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_76();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_74();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_73();
	this.instance.setTransform(-95.65,-167.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-167.3,191.5,334.5);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_72();
	this.instance.setTransform(-428.5,-685.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-428.5,-685.1,857,1370.5);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(-367.2,-256.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_70();
	this.instance_1.setTransform(155.2,-271.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.2,-271.6,734.4,543.7);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-295.55,-208.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.5,-208.3,591.5,416.5);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_61();
	this.instance.setTransform(-164.5,-88.7,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.5,-88.7,329,177.5);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(-38.8,-183.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-183.9,77.5,368);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_59();
	this.instance.setTransform(-38.85,-183.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-183.9,77.5,368);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(0,-0.5,0.3223,0.3223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,-0.5,53.5,44.8), null);


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_33();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_34();
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_35();
	this.instance_3.setTransform(-0.45,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,272.1,101.5);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,1,1).p("AgkInQAcgTAdgVQA9gsAtgwQCTicgKjTQgJjRjAjaQg8hEhFg8Ig7gvIAlB+QAnCLAFBDQAGBThHCEQhICFhTA6g");
	this.shape.setTransform(26.5039,55.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIC7QBTg5BIiFQBHiEgGhTQgFhDgniLIglh+IA7AvQBFA8A8BFQDADZAJDRQAKDTiTCcQgtAwg9ArIg5Apg");
	this.shape_1.setTransform(26.5039,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,55,112.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-9.45,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-9.4,0,74.5,128), null);


(lib.Scene_1_כוכבים = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// כוכבים
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-244.45,-0.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_14();
	this.instance_3.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_16();
	this.instance_5.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_17();
	this.instance_6.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_18();
	this.instance_7.setTransform(-244.45,-0.95,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_19();
	this.instance_8.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_20();
	this.instance_9.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_21();
	this.instance_10.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_22();
	this.instance_11.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_23();
	this.instance_12.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_24();
	this.instance_13.setTransform(-247.6,-0.95,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_25();
	this.instance_14.setTransform(-247.6,-0.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},120).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_תולי = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// תולי
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(239.4,501.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_רקע = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// רקע
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(-0.25,0.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.playagain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-0.55,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_29();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_30();
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,272,101.5);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.5,-385,861,770);


(lib.מחלףשמשון = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ראש
	this.instance = new lib.Symbol3();
	this.instance.setTransform(26.7,22.35,1,1,0,0,0,26.7,21.8);

	this.instance_1 = new lib.ראש("synched",0);
	this.instance_1.setTransform(43.3,33.75,1,1,0,0,0,43.3,33.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:21.8,y:22.35}}]}).to({state:[{t:this.instance,p:{regY:21.9,y:22.45}}]},1).to({state:[{t:this.instance,p:{regY:21.9,y:22.45}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:26.7,regY:21.9,x:-36.45,y:21.9},0).wait(1).to({x:-44.7},0).wait(1).to({x:-52.95},0).wait(1).to({x:-61.2},0).wait(1).to({x:-69.45},0).wait(1).to({x:-77.75},0).wait(1).to({x:-87.8},0).wait(1).to({x:-97.85},0).wait(1).to({x:-107.9},0).wait(1).to({x:-117.95},0).wait(1).to({x:-128},0).wait(1).to({x:-140.6},0).wait(1).to({x:-153.25},0).wait(1).to({x:-165.9},0).wait(1).to({x:-178.55},0).wait(1).to({x:-191.2},0).wait(1).to({x:-201.05},0).wait(1).to({x:-210.95},0).wait(1).to({x:-220.8},0).wait(1).to({x:-230.7},0).wait(1).to({x:-240.6},0).wait(1).to({x:-251.45},0).wait(1).to({x:-262.3},0).wait(1).to({x:-273.15},0).wait(1).to({x:-284},0).wait(1).to({x:-294.9},0).wait(1).to({x:-305.1},0).wait(1).to({x:-315.3},0).wait(1).to({x:-325.5},0).wait(1).to({x:-335.7},0).wait(1).to({x:-345.9},0).wait(1).to({x:-349.6},0).wait(1).to({x:-353.35},0).wait(1).to({x:-357.1,y:21.95},0).wait(1).to({x:-360.85},0).wait(1).to({x:-364.6,y:22},0).wait(1).to({x:-368.6,y:21.95},0).wait(1).to({x:-372.65},0).wait(1).to({x:-376.65,y:21.9},0).wait(1).to({x:-380.7},0).wait(1).to({x:-384.75},0).wait(1).to({x:-392.85},0).wait(1).to({x:-400.95},0).wait(1).to({x:-409.05},0).wait(1).to({x:-417.15},0).wait(1).to({x:-425.25},0).wait(1).to({x:-434.3},0).wait(1).to({x:-443.35},0).wait(1).to({x:-452.45},0).wait(1).to({x:-461.5},0).wait(1).to({x:-470.6},0).wait(1).to({x:-477.2},0).wait(1).to({x:-483.85},0).wait(1).to({x:-490.5},0).wait(1).to({x:-497.15},0).wait(1).to({x:-503.8},0).wait(1).to({x:-512.55},0).wait(1).to({x:-521.3},0).wait(1).to({x:-530.05},0).wait(1).to({x:-538.8},0).wait(1).to({x:-547.55},0).wait(1).to({x:-554.8},0).wait(1).to({x:-562.1},0).wait(1).to({x:-569.4},0).wait(1).to({x:-576.7},0).wait(1).to({x:-584},0).wait(1).to({x:-590.3},0).wait(1).to({x:-596.6},0).wait(1).to({x:-602.95},0).wait(1).to({x:-609.25},0).wait(1).to({x:-615.6},0).wait(1).to({x:-622.2},0).wait(1).to({x:-628.85},0).wait(1).to({x:-635.5},0).wait(1).to({x:-642.15},0).wait(1).to({x:-648.8},0).wait(1).to({x:-650.95},0).wait(1).to({x:-653.15},0).wait(1).to({x:-655.35},0).wait(1).to({x:-657.55},0).wait(1).to({x:-659.75},0).wait(1).to({x:-666.3},0).wait(1).to({x:-672.85},0).wait(1).to({x:-679.4},0).wait(1).to({x:-685.95},0).wait(1).to({x:-692.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// בודד
	this.instance_2 = new lib.בודד("synched",0);
	this.instance_2.setTransform(112.1,66.3,1,1,0,0,0,5.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:5.6,x:96.4,y:66.15},0).wait(1).to({x:80.6,y:66},0).wait(1).to({x:64.8,y:65.85},0).wait(1).to({x:49.05,y:65.75},0).wait(1).to({x:40.75},0).wait(1).to({x:32.5},0).wait(1).to({x:24.25},0).wait(1).to({x:16},0).wait(1).to({x:7.75},0).wait(1).to({x:-2.3},0).wait(1).to({x:-12.35},0).wait(1).to({x:-22.4},0).wait(1).to({x:-32.45},0).wait(1).to({x:-42.5},0).wait(1).to({x:-55.1},0).wait(1).to({x:-67.75},0).wait(1).to({x:-80.4},0).wait(1).to({x:-93.05},0).wait(1).to({x:-105.7},0).wait(1).to({x:-115.55},0).wait(1).to({x:-125.45},0).wait(1).to({x:-135.3},0).wait(1).to({x:-145.2},0).wait(1).to({x:-155.1},0).wait(1).to({x:-165.95},0).wait(1).to({x:-176.8},0).wait(1).to({x:-187.65},0).wait(1).to({x:-198.5},0).wait(1).to({x:-209.4},0).wait(1).to({x:-219.6},0).wait(1).to({x:-229.8},0).wait(1).to({x:-240},0).wait(1).to({x:-250.2},0).wait(1).to({x:-260.4},0).wait(1).to({x:-264.1},0).wait(1).to({x:-267.85},0).wait(1).to({x:-271.6,y:65.8},0).wait(1).to({x:-275.35},0).wait(1).to({x:-279.1,y:65.85},0).wait(1).to({x:-283.1,y:65.8},0).wait(1).to({x:-287.15},0).wait(1).to({x:-291.15,y:65.75},0).wait(1).to({x:-295.2},0).wait(1).to({x:-299.25},0).wait(1).to({x:-307.35},0).wait(1).to({x:-315.45},0).wait(1).to({x:-323.55},0).wait(1).to({x:-331.65},0).wait(1).to({x:-339.75},0).wait(1).to({x:-348.8},0).wait(1).to({x:-357.85},0).wait(1).to({x:-366.95},0).wait(1).to({x:-376},0).wait(1).to({x:-385.1},0).wait(1).to({x:-391.7},0).wait(1).to({x:-398.35},0).wait(1).to({x:-405},0).wait(1).to({x:-411.65},0).wait(1).to({x:-418.3},0).wait(1).to({x:-427.05},0).wait(1).to({x:-435.8},0).wait(1).to({x:-444.55},0).wait(1).to({x:-453.3},0).wait(1).to({x:-462.05},0).wait(1).to({x:-469.3},0).wait(1).to({x:-476.6},0).wait(1).to({x:-483.9},0).wait(1).to({x:-491.2},0).wait(1).to({x:-498.5},0).wait(1).to({x:-504.8},0).wait(1).to({x:-511.1},0).wait(1).to({x:-517.45},0).wait(1).to({x:-523.75},0).wait(1).to({x:-530.1},0).wait(1).to({x:-536.7},0).wait(1).to({x:-543.35},0).wait(1).to({x:-550},0).wait(1).to({x:-556.65},0).wait(1).to({x:-563.3},0).wait(1).to({x:-565.45},0).wait(1).to({x:-567.65},0).wait(1).to({x:-569.85},0).wait(1).to({x:-572.05},0).wait(1).to({x:-574.25},0).wait(1).to({x:-580.8},0).wait(1).to({x:-587.35},0).wait(1).to({x:-593.9},0).wait(1).to({x:-600.45},0).wait(1).to({x:-607.05},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// רגל_אחורית_שמאל
	this.instance_3 = new lib.רגל_אחורית_שמאל("synched",0);
	this.instance_3.setTransform(127.6,58.95,1,1,0,0,0,21,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:43.6,rotation:3.7497,x:110.35,y:80.4},0).wait(1).to({rotation:7.4995,x:93.15,y:80.2},0).wait(1).to({rotation:11.2492,x:76,y:79.8},0).wait(1).to({rotation:14.9989,x:58.8,y:79.35},0).wait(1).to({rotation:16.5876,x:50,y:79.2},0).wait(1).to({rotation:18.1764,x:41.1,y:78.95},0).wait(1).to({rotation:19.7651,x:32.25,y:78.8},0).wait(1).to({rotation:21.3539,x:23.45,y:78.6},0).wait(1).to({rotation:22.9426,x:14.65,y:78.35},0).wait(1).to({rotation:25.9423,x:3.6,y:77.9},0).wait(1).to({rotation:28.942,x:-7.45,y:77.35},0).wait(1).to({rotation:31.9417,x:-18.5,y:76.75},0).wait(1).to({rotation:34.9414,x:-29.5,y:76.2},0).wait(1).to({rotation:37.9411,x:-40.45,y:75.5},0).wait(1).to({rotation:34.9413,x:-52.15,y:76.2},0).wait(1).to({rotation:31.9414,x:-63.85,y:76.75},0).wait(1).to({rotation:28.9416,x:-75.5,y:77.35},0).wait(1).to({rotation:25.9417,x:-87.1,y:77.9},0).wait(1).to({rotation:22.9419,x:-98.75,y:78.35},0).wait(1).to({rotation:19.9419,x:-107.55,y:78.75},0).wait(1).to({rotation:16.942,x:-116.35,y:79.1},0).wait(1).to({rotation:13.942,x:-125.15,y:79.4},0).wait(1).to({rotation:10.9421,x:-133.95,y:79.7},0).wait(1).to({rotation:7.9421,x:-142.65,y:79.9},0).wait(1).to({x:-153.5},0).wait(1).to({x:-164.35},0).wait(1).to({x:-175.25},0).wait(1).to({x:-186.1},0).wait(1).to({x:-196.95},0).wait(1).to({rotation:10.942,x:-208.35,y:79.7},0).wait(1).to({rotation:13.9418,x:-219.6,y:79.4},0).wait(1).to({rotation:16.9416,x:-230.9,y:79.1},0).wait(1).to({rotation:19.9414,x:-242.15,y:78.75},0).wait(1).to({rotation:22.9412,x:-253.45,y:78.35},0).wait(1).to({rotation:22.941,x:-257.2,y:78.4},0).wait(1).to({rotation:22.9409,x:-260.95},0).wait(1).to({rotation:22.9407,x:-264.65,y:78.45},0).wait(1).to({rotation:22.9406,x:-268.4},0).wait(1).to({rotation:22.9404,x:-272.15},0).wait(1).to({rotation:19.9406,x:-275.1,y:78.85},0).wait(1).to({rotation:16.9408,x:-278.05,y:79.15},0).wait(1).to({rotation:13.9409,x:-281,y:79.45},0).wait(1).to({rotation:10.9411,x:-283.9,y:79.7},0).wait(1).to({rotation:7.9413,x:-286.8,y:79.9},0).wait(1).to({rotation:4.9415,x:-293.8,y:80},0).wait(1).to({rotation:1.9416,x:-300.75,y:80.05},0).wait(1).to({rotation:-1.0582,x:-307.7},0).wait(1).to({rotation:-4.058,x:-314.65,y:80},0).wait(1).to({rotation:-7.0579,x:-321.65,y:79.85},0).wait(1).to({rotation:-4.058,x:-331.85,y:80},0).wait(1).to({rotation:-1.0582,x:-342.05,y:80.05},0).wait(1).to({rotation:1.9416,x:-352.3},0).wait(1).to({rotation:4.9415,x:-362.5,y:80},0).wait(1).to({rotation:7.9413,x:-372.65,y:79.9},0).wait(1).to({rotation:10.941,x:-380.45,y:79.7},0).wait(1).to({rotation:13.9406,x:-388.15,y:79.4},0).wait(1).to({rotation:16.9403,x:-395.9,y:79.1},0).wait(1).to({rotation:19.94,x:-403.6,y:78.75},0).wait(1).to({rotation:22.9397,x:-411.35,y:78.35},0).wait(1).to({rotation:24.2391,x:-420.55,y:78.15},0).wait(1).to({rotation:25.5385,x:-429.75,y:77.95},0).wait(1).to({rotation:26.8379,x:-438.95,y:77.75},0).wait(1).to({rotation:28.1373,x:-448.15,y:77.5},0).wait(1).to({rotation:29.4367,x:-457.35,y:77.25},0).wait(1).to({rotation:26.4368,x:-463.6,y:77.8},0).wait(1).to({rotation:23.4369,x:-469.9,y:78.3},0).wait(1).to({rotation:20.4369,x:-476.05,y:78.7},0).wait(1).to({rotation:17.437,x:-482.25,y:79.1},0).wait(1).to({rotation:14.4371,x:-488.45,y:79.4},0).wait(1).to({rotation:17.4369,x:-495.9,y:79.1},0).wait(1).to({rotation:20.4367,x:-503.25,y:78.7},0).wait(1).to({rotation:23.4365,x:-510.7,y:78.3},0).wait(1).to({rotation:26.4363,x:-518.05,y:77.8},0).wait(1).to({rotation:29.4361,x:-525.4,y:77.25},0).wait(1).to({rotation:32.4359,x:-533,y:76.65},0).wait(1).to({rotation:35.4357,x:-540.6,y:76.05},0).wait(1).to({rotation:38.4355,x:-548.1,y:75.35},0).wait(1).to({rotation:41.4353,x:-555.6,y:74.65},0).wait(1).to({rotation:44.4351,x:-563.05,y:73.85},0).wait(1).to({rotation:41.4352,x:-564.45,y:74.65},0).wait(1).to({rotation:38.4352,x:-565.75,y:75.35},0).wait(1).to({rotation:35.4353,x:-567.1,y:76.05},0).wait(1).to({rotation:32.4353,x:-568.35,y:76.65},0).wait(1).to({rotation:29.4354,x:-569.55,y:77.25},0).wait(1).to({x:-576.1},0).wait(1).to({x:-582.65},0).wait(1).to({x:-589.2},0).wait(1).to({x:-595.75},0).wait(1).to({x:-602.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// גוף
	this.instance_4 = new lib.גוף("synched",0);
	this.instance_4.setTransform(89.25,51,1,1,0,0,0,59.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:73.45,y:50.85},0).wait(1).to({x:57.7,y:50.7},0).wait(1).to({x:41.9,y:50.55},0).wait(1).to({x:26.1,y:50.45},0).wait(1).to({x:17.85},0).wait(1).to({x:9.6},0).wait(1).to({x:1.35},0).wait(1).to({x:-6.9},0).wait(1).to({x:-15.2},0).wait(1).to({x:-25.25},0).wait(1).to({x:-35.3},0).wait(1).to({x:-45.35},0).wait(1).to({x:-55.4},0).wait(1).to({x:-65.45},0).wait(1).to({x:-78.05},0).wait(1).to({x:-90.7},0).wait(1).to({x:-103.35},0).wait(1).to({x:-116},0).wait(1).to({x:-128.65},0).wait(1).to({x:-138.5},0).wait(1).to({x:-148.4},0).wait(1).to({x:-158.25},0).wait(1).to({x:-168.15},0).wait(1).to({x:-178.05},0).wait(1).to({x:-188.9},0).wait(1).to({x:-199.75},0).wait(1).to({x:-210.6},0).wait(1).to({x:-221.45},0).wait(1).to({x:-232.35},0).wait(1).to({x:-242.55},0).wait(1).to({x:-252.75},0).wait(1).to({x:-262.95},0).wait(1).to({x:-273.15},0).wait(1).to({x:-283.35},0).wait(1).to({x:-287.05},0).wait(1).to({x:-290.8},0).wait(1).to({x:-294.55,y:50.5},0).wait(1).to({x:-298.3},0).wait(1).to({x:-302.05,y:50.55},0).wait(1).to({x:-306.05,y:50.5},0).wait(1).to({x:-310.1},0).wait(1).to({x:-314.1,y:50.45},0).wait(1).to({x:-318.15},0).wait(1).to({x:-322.2},0).wait(1).to({x:-330.3},0).wait(1).to({x:-338.4},0).wait(1).to({x:-346.5},0).wait(1).to({x:-354.6},0).wait(1).to({x:-362.7},0).wait(1).to({x:-371.75},0).wait(1).to({x:-380.8},0).wait(1).to({x:-389.9},0).wait(1).to({x:-398.95},0).wait(1).to({x:-408.05},0).wait(1).to({x:-414.65},0).wait(1).to({x:-421.3},0).wait(1).to({x:-427.95},0).wait(1).to({x:-434.6},0).wait(1).to({x:-441.25},0).wait(1).to({x:-450},0).wait(1).to({x:-458.75},0).wait(1).to({x:-467.5},0).wait(1).to({x:-476.25},0).wait(1).to({x:-485},0).wait(1).to({x:-492.25},0).wait(1).to({x:-499.55},0).wait(1).to({x:-506.85},0).wait(1).to({x:-514.15},0).wait(1).to({x:-521.45},0).wait(1).to({x:-527.75},0).wait(1).to({x:-534.05},0).wait(1).to({x:-540.4},0).wait(1).to({x:-546.7},0).wait(1).to({x:-553.05},0).wait(1).to({x:-559.65},0).wait(1).to({x:-566.3},0).wait(1).to({x:-572.95},0).wait(1).to({x:-579.6},0).wait(1).to({x:-586.25},0).wait(1).to({x:-588.4},0).wait(1).to({x:-590.6},0).wait(1).to({x:-592.8},0).wait(1).to({x:-595},0).wait(1).to({x:-597.2},0).wait(1).to({x:-603.75},0).wait(1).to({x:-610.3},0).wait(1).to({x:-616.85},0).wait(1).to({x:-623.4},0).wait(1).to({x:-630},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// רגל_קדימה_שמאל
	this.instance_5 = new lib.רגלקדמיתשמאל("synched",0);
	this.instance_5.setTransform(34.15,53.75,1,1,0,0,0,3.2,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:17.2,regY:37.4,rotation:3.7497,x:30.3,y:85},0).wait(1).to({rotation:7.4995,x:12.4,y:85.65},0).wait(1).to({rotation:11.2492,x:-5.45,y:86.05},0).wait(1).to({rotation:14.9989,x:-23.4,y:86.4},0).wait(1).to({rotation:14.9987,x:-31.65},0).wait(1).to({rotation:14.9986,x:-39.95},0).wait(1).to({rotation:14.9984,x:-48.2},0).wait(1).to({rotation:14.9983,x:-56.45},0).wait(1).to({rotation:14.9981,x:-64.7},0).wait(1).to({rotation:17.9978,x:-76.45,y:86.55},0).wait(1).to({rotation:20.9975,x:-88.3,y:86.75},0).wait(1).to({rotation:23.9972,x:-100.1,y:86.8},0).wait(1).to({rotation:26.9969,x:-111.9,y:86.75},0).wait(1).to({rotation:29.9966,x:-123.7,y:86.7},0).wait(1).to({rotation:26.9966,x:-134.6,y:86.75},0).wait(1).to({rotation:23.9966,x:-145.45,y:86.8},0).wait(1).to({rotation:20.9965,x:-156.35,y:86.75},0).wait(1).to({rotation:17.9965,x:-167.25,y:86.55},0).wait(1).to({rotation:14.9965,x:-178.15,y:86.4},0).wait(1).to({rotation:11.9972,x:-186.25,y:86.05},0).wait(1).to({rotation:8.9979,x:-194.45,y:85.6},0).wait(1).to({rotation:5.9986,x:-202.65,y:85.1},0).wait(1).to({rotation:2.9993,x:-210.85,y:84.45},0).wait(1).to({rotation:0,x:-219.15,y:83.8},0).wait(1).to({rotation:-1.6472,x:-229.15,y:83.35},0).wait(1).to({rotation:-3.2944,x:-239.15,y:82.9},0).wait(1).to({rotation:-4.9416,x:-249.15,y:82.45},0).wait(1).to({rotation:-6.5889,x:-259.1,y:82},0).wait(1).to({rotation:-8.2361,x:-269.2,y:81.45},0).wait(1).to({rotation:-5.2364,x:-280.9,y:82.4},0).wait(1).to({rotation:-2.2367,x:-292.65,y:83.2},0).wait(1).to({rotation:0.763,x:-304.45,y:84},0).wait(1).to({rotation:3.7627,x:-316.25,y:84.65},0).wait(1).to({rotation:6.7623,x:-328.1,y:85.25},0).wait(1).to({rotation:9.7621,x:-333.55,y:85.7},0).wait(1).to({rotation:12.7619,x:-338.95,y:86.2},0).wait(1).to({rotation:15.7617,x:-344.5,y:86.45},0).wait(1).to({rotation:18.7614,x:-350,y:86.75},0).wait(1).to({rotation:21.7612,x:-355.5,y:86.9},0).wait(1).to({rotation:18.7613,x:-357.75,y:86.75},0).wait(1).to({rotation:15.7613,x:-360,y:86.45},0).wait(1).to({rotation:12.7614,x:-362.3,y:86.2},0).wait(1).to({rotation:9.7614,x:-364.65,y:85.7},0).wait(1).to({rotation:6.7615,x:-366.95,y:85.2},0).wait(1).to({rotation:3.7616,x:-373.4,y:84.65},0).wait(1).to({rotation:0.7618,x:-379.9,y:84},0).wait(1).to({rotation:-2.2381,x:-386.4,y:83.2},0).wait(1).to({rotation:-5.2379,x:-392.95,y:82.4},0).wait(1).to({rotation:-8.2378,x:-399.55,y:81.45},0).wait(1).to({rotation:-6.8456,x:-409.3,y:81.9},0).wait(1).to({rotation:-5.4535,x:-419.1,y:82.3},0).wait(1).to({rotation:-4.0614,x:-428.85,y:82.7},0).wait(1).to({rotation:-2.6692,x:-438.6,y:83.1},0).wait(1).to({rotation:-1.2771,x:-448.45,y:83.45},0).wait(1).to({rotation:1.7228,x:-456.65,y:84.2},0).wait(1).to({rotation:4.7227,x:-465,y:84.8},0).wait(1).to({rotation:7.7225,x:-473.3,y:85.35},0).wait(1).to({rotation:10.7224,x:-481.6,y:85.85},0).wait(1).to({rotation:13.7223,x:-489.95,y:86.25},0).wait(1).to({x:-498.7},0).wait(1).to({x:-507.45},0).wait(1).to({x:-516.2},0).wait(1).to({x:-524.95},0).wait(1).to({x:-533.7},0).wait(1).to({rotation:10.7226,x:-539.3,y:85.85},0).wait(1).to({rotation:7.7229,x:-544.9,y:85.35},0).wait(1).to({rotation:4.7232,x:-550.5,y:84.8},0).wait(1).to({rotation:1.7235,x:-556.15,y:84.2},0).wait(1).to({rotation:-1.2762,x:-561.85,y:83.45},0).wait(1).to({rotation:1.7237,x:-569.75,y:84.2},0).wait(1).to({rotation:4.7235,x:-577.75,y:84.8},0).wait(1).to({rotation:7.7234,x:-585.75,y:85.35},0).wait(1).to({rotation:10.7232,x:-593.75,y:85.85},0).wait(1).to({rotation:13.7231,x:-601.75,y:86.25},0).wait(1).to({rotation:15.3194,x:-609.35,y:86.35},0).wait(1).to({rotation:16.9157,x:-616.95,y:86.55},0).wait(1).to({rotation:18.512,x:-624.45,y:86.6},0).wait(1).to({rotation:20.1083,x:-632.05,y:86.7},0).wait(1).to({rotation:21.7046,x:-639.65,y:86.75},0).wait(1).to({rotation:18.7046,x:-640.05,y:86.6},0).wait(1).to({rotation:15.7046,x:-640.5,y:86.4},0).wait(1).to({rotation:12.7046,x:-640.9,y:86.15},0).wait(1).to({rotation:9.7046,x:-641.45,y:85.7},0).wait(1).to({rotation:6.7046,x:-641.9,y:85.2},0).wait(1).to({x:-648.45},0).wait(1).to({x:-655.05},0).wait(1).to({x:-661.6},0).wait(1).to({x:-668.15},0).wait(1).to({x:-674.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// רגל_קדימה_מין
	this.instance_6 = new lib.רגלקדמיתימן("synched",0);
	this.instance_6.setTransform(51.9,66.15,1,1,0,0,0,29,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:14.5,regY:24.1,rotation:-3.7497,x:23.2,y:91},0).wait(1).to({rotation:-7.4994,x:9.15,y:91.65},0).wait(1).to({rotation:-11.2492,x:-5,y:92.15},0).wait(1).to({rotation:-14.9989,x:-19,y:92.65},0).wait(1).to({rotation:-17.9987,x:-25.8,y:92.95},0).wait(1).to({rotation:-20.9985,x:-32.6,y:93.25},0).wait(1).to({rotation:-23.9983,x:-39.45,y:93.45},0).wait(1).to({rotation:-26.9981,x:-46.25,y:93.6},0).wait(1).to({rotation:-29.9979,x:-53.05,y:93.65},0).wait(1).to({rotation:-32.9976,x:-61.65},0).wait(1).to({rotation:-35.9973,x:-70.2,y:93.6},0).wait(1).to({rotation:-38.9971,x:-78.8,y:93.45},0).wait(1).to({rotation:-41.9968,x:-87.4,y:93.2},0).wait(1).to({rotation:-44.9965,x:-96,y:92.9},0).wait(1).to({rotation:-41.9968,x:-110.05,y:93.2},0).wait(1).to({rotation:-38.9971,x:-124.2,y:93.45},0).wait(1).to({rotation:-35.9973,x:-138.25,y:93.6},0).wait(1).to({rotation:-32.9976,x:-152.4,y:93.65},0).wait(1).to({rotation:-29.9979,x:-166.5},0).wait(1).to({rotation:-26.9979,x:-177.85,y:93.6},0).wait(1).to({rotation:-23.998,x:-189.2,y:93.45},0).wait(1).to({rotation:-20.998,x:-200.5,y:93.25},0).wait(1).to({rotation:-17.9981,x:-211.85,y:92.95},0).wait(1).to({rotation:-14.9981,x:-223.15,y:92.65},0).wait(1).to({rotation:-11.9985,x:-235.4,y:92.15},0).wait(1).to({rotation:-8.9989,x:-247.7,y:91.65},0).wait(1).to({rotation:-5.9992,x:-259.9,y:91.05},0).wait(1).to({rotation:-2.9996,x:-272.05,y:90.4},0).wait(1).to({rotation:0,x:-284.2,y:89.7},0).wait(1).to({rotation:-2.9998,x:-293.1,y:90.4},0).wait(1).to({rotation:-5.9996,x:-302,y:91.05},0).wait(1).to({rotation:-8.9993,x:-310.85,y:91.65},0).wait(1).to({rotation:-11.9991,x:-319.65,y:92.15},0).wait(1).to({rotation:-14.9989,x:-328.45,y:92.65},0).wait(1).to({rotation:-17.9987,x:-330.75,y:92.95},0).wait(1).to({rotation:-20.9985,x:-333.05,y:93.3},0).wait(1).to({rotation:-23.9983,x:-335.35,y:93.55},0).wait(1).to({rotation:-26.9981,x:-337.6,y:93.65},0).wait(1).to({rotation:-29.9979,x:-339.9,y:93.75},0).wait(1).to({rotation:-26.9979,x:-345.4,y:93.65},0).wait(1).to({rotation:-23.998,x:-350.9,y:93.55},0).wait(1).to({rotation:-20.998,x:-356.35,y:93.3},0).wait(1).to({rotation:-17.9981,x:-361.85,y:92.95},0).wait(1).to({rotation:-14.9981,x:-367.3,y:92.65},0).wait(1).to({rotation:-11.9985,x:-376.8,y:92.15},0).wait(1).to({rotation:-8.9989,x:-386.3,y:91.65},0).wait(1).to({rotation:-5.9992,x:-395.75,y:91.05},0).wait(1).to({rotation:-2.9996,x:-405.15,y:90.4},0).wait(1).to({rotation:0,x:-414.55,y:89.7},0).wait(1).to({rotation:-2.9998,x:-422.3,y:90.4},0).wait(1).to({rotation:-5.9996,x:-430.1,y:91.05},0).wait(1).to({rotation:-8.9993,x:-437.85,y:91.65},0).wait(1).to({rotation:-11.9991,x:-445.45,y:92.15},0).wait(1).to({rotation:-14.9989,x:-453.15,y:92.65},0).wait(1).to({rotation:-17.9987,x:-458.35,y:92.95},0).wait(1).to({rotation:-20.9985,x:-463.55,y:93.25},0).wait(1).to({rotation:-23.9983,x:-468.75,y:93.45},0).wait(1).to({rotation:-26.9981,x:-473.9,y:93.6},0).wait(1).to({rotation:-29.9979,x:-479.1,y:93.65},0).wait(1).to({rotation:-32.9976,x:-486.4},0).wait(1).to({rotation:-35.9973,x:-493.65,y:93.6},0).wait(1).to({rotation:-38.9971,x:-500.95,y:93.45},0).wait(1).to({rotation:-41.9968,x:-508.25,y:93.2},0).wait(1).to({rotation:-44.9965,x:-515.55,y:92.9},0).wait(1).to({rotation:-41.9968,x:-524.25,y:93.2},0).wait(1).to({rotation:-38.9971,x:-533.05,y:93.45},0).wait(1).to({rotation:-35.9973,x:-541.75,y:93.6},0).wait(1).to({rotation:-32.9976,x:-550.55,y:93.65},0).wait(1).to({rotation:-29.9979,x:-559.3},0).wait(1).to({rotation:-32.9976,x:-564.15},0).wait(1).to({rotation:-35.9973,x:-569,y:93.6},0).wait(1).to({rotation:-38.9971,x:-573.85,y:93.45},0).wait(1).to({rotation:-41.9968,x:-578.7,y:93.2},0).wait(1).to({rotation:-44.9965,x:-583.6,y:92.9},0).wait(1).to({rotation:-47.9964,x:-588.8,y:92.5},0).wait(1).to({rotation:-50.9964,x:-594,y:92},0).wait(1).to({rotation:-53.9963,x:-599.35,y:91.45},0).wait(1).to({rotation:-56.9963,x:-604.65,y:90.9},0).wait(1).to({rotation:-59.9962,x:-610,y:90.2},0).wait(1).to({rotation:-56.9963,x:-613.45,y:90.9},0).wait(1).to({rotation:-53.9965,x:-617,y:91.45},0).wait(1).to({rotation:-50.9966,x:-620.5,y:92},0).wait(1).to({rotation:-47.9968,x:-624.15,y:92.55},0).wait(1).to({rotation:-44.9969,x:-627.75,y:92.9},0).wait(1).to({x:-634.3},0).wait(1).to({x:-640.85},0).wait(1).to({x:-647.4},0).wait(1).to({x:-653.95},0).wait(1).to({x:-660.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// רגל_אחורית_ימין
	this.instance_7 = new lib.רגלאחוריתימן("synched",0);
	this.instance_7.setTransform(106.6,70.85,1,1,0,0,0,20.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:14.5,regY:21.4,rotation:-3.7497,x:86.05,y:86},0).wait(1).to({rotation:-7.4994,x:71.35,y:86.15},0).wait(1).to({rotation:-11.2492,x:56.5,y:86.25},0).wait(1).to({rotation:-14.9989,x:41.8,y:86.2},0).wait(1).to({rotation:-17.9987,x:34.4,y:86.3},0).wait(1).to({rotation:-20.9985,x:26.95,y:86.35},0).wait(1).to({rotation:-23.9983,x:19.6,y:86.3},0).wait(1).to({rotation:-26.9981,x:12.15,y:86.2},0).wait(1).to({rotation:-29.9979,x:4.75,y:86.1},0).wait(1).to({rotation:-32.9976,x:-4.45,y:85.95},0).wait(1).to({rotation:-35.9973,x:-13.65,y:85.75},0).wait(1).to({rotation:-38.9971,x:-22.95,y:85.55},0).wait(1).to({rotation:-41.9968,x:-32.2,y:85.2},0).wait(1).to({rotation:-44.9965,x:-41.45,y:84.9},0).wait(1).to({rotation:-41.9968,x:-54.9,y:85.2},0).wait(1).to({rotation:-38.9971,x:-68.35,y:85.55},0).wait(1).to({rotation:-35.9973,x:-81.7,y:85.75},0).wait(1).to({rotation:-32.9976,x:-95.25,y:85.95},0).wait(1).to({rotation:-29.9979,x:-108.7,y:86.1},0).wait(1).to({rotation:-26.9979,x:-119.45,y:86.2},0).wait(1).to({rotation:-23.998,x:-130.1,y:86.3},0).wait(1).to({rotation:-20.998,x:-140.85,y:86.35},0).wait(1).to({rotation:-17.9981,x:-151.55,y:86.3},0).wait(1).to({rotation:-14.9981,x:-162.3,y:86.2},0).wait(1).to({rotation:-11.9985,x:-173.95,y:86.15},0).wait(1).to({rotation:-8.9989,x:-185.7,y:86},0).wait(1).to({rotation:-5.9992,x:-197.35,y:85.8},0).wait(1).to({rotation:-2.9996,x:-209,y:85.55},0).wait(1).to({rotation:0,x:-220.7,y:85.3},0).wait(1).to({rotation:-2.9998,x:-230.1,y:85.55},0).wait(1).to({rotation:-5.9996,x:-239.5,y:85.8},0).wait(1).to({rotation:-8.9993,x:-248.85,y:86},0).wait(1).to({rotation:-11.9991,x:-258.2,y:86.15},0).wait(1).to({rotation:-14.9989,x:-267.6,y:86.2},0).wait(1).to({rotation:-23.9984,x:-268.8,y:86.3},0).wait(1).to({rotation:-32.9978,x:-270.05,y:86},0).wait(1).to({rotation:-41.9973,x:-271.35,y:85.3},0).wait(1).to({rotation:-50.9967,x:-272.8,y:84.2},0).wait(1).to({rotation:-59.9962,x:-274.5,y:82.8},0).wait(1).to({rotation:-56.9963,x:-279.2,y:83.3},0).wait(1).to({rotation:-53.9965,x:-283.95,y:83.75},0).wait(1).to({rotation:-50.9966,x:-288.6,y:84.15},0).wait(1).to({rotation:-47.9968,x:-293.45,y:84.55},0).wait(1).to({rotation:-44.9969,x:-298.2,y:84.9},0).wait(1).to({rotation:-38.9971,x:-307.9,y:85.55},0).wait(1).to({rotation:-32.9974,x:-317.6,y:85.95},0).wait(1).to({rotation:-26.9976,x:-327.4,y:86.2},0).wait(1).to({rotation:-20.9979,x:-337.15,y:86.35},0).wait(1).to({rotation:-14.9981,x:-346.95,y:86.2},0).wait(1).to({rotation:-17.9978,x:-355.15,y:86.3},0).wait(1).to({rotation:-20.9975,x:-363.4,y:86.35},0).wait(1).to({rotation:-23.9972,x:-371.6,y:86.3},0).wait(1).to({rotation:-26.9969,x:-379.9,y:86.2},0).wait(1).to({rotation:-29.9966,x:-388.1,y:86.1},0).wait(1).to({rotation:-32.9964,x:-393.9,y:85.95},0).wait(1).to({rotation:-35.9962,x:-399.7,y:85.75},0).wait(1).to({rotation:-38.996,x:-405.6,y:85.55},0).wait(1).to({rotation:-41.9958,x:-411.4,y:85.2},0).wait(1).to({rotation:-44.9956,x:-417.25,y:84.9},0).wait(1).to({rotation:-47.9956,x:-425.25,y:84.55},0).wait(1).to({rotation:-50.9956,x:-433.2,y:84.15},0).wait(1).to({rotation:-53.9955,x:-441.35,y:83.7},0).wait(1).to({rotation:-56.9955,x:-449.35,y:83.2},0).wait(1).to({rotation:-59.9955,x:-457.45,y:82.7},0).wait(1).to({rotation:-56.9957,x:-465.4,y:83.2},0).wait(1).to({rotation:-53.9959,x:-473.4,y:83.7},0).wait(1).to({rotation:-50.9961,x:-481.35,y:84.15},0).wait(1).to({rotation:-47.9963,x:-489.4,y:84.55},0).wait(1).to({rotation:-44.9965,x:-497.45,y:84.9},0).wait(1).to({rotation:-47.9964,x:-503.05,y:84.55},0).wait(1).to({rotation:-50.9964,x:-508.55,y:84.15},0).wait(1).to({rotation:-53.9963,x:-514.25,y:83.7},0).wait(1).to({rotation:-56.9963,x:-519.85,y:83.2},0).wait(1).to({rotation:-59.9962,x:-525.5,y:82.7},0).wait(1).to({rotation:-62.9962,x:-531.5,y:82.15},0).wait(1).to({rotation:-65.9962,x:-537.5,y:81.55},0).wait(1).to({rotation:-68.9962,x:-543.55,y:80.9},0).wait(1).to({rotation:-71.9962,x:-549.65,y:80.25},0).wait(1).to({rotation:-74.9962,x:-555.85,y:79.65},0).wait(1).to({rotation:-71.9965,x:-558.5,y:80.25},0).wait(1).to({rotation:-68.9967,x:-561.2,y:80.9},0).wait(1).to({rotation:-65.997,x:-564,y:81.55},0).wait(1).to({rotation:-62.9972,x:-566.8,y:82.15},0).wait(1).to({rotation:-59.9975,x:-569.6,y:82.7},0).wait(1).to({x:-576.2},0).wait(1).to({x:-582.75},0).wait(1).to({x:-589.3},0).wait(1).to({x:-595.85},0).wait(1).to({x:-602.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// זנב
	this.instance_8 = new lib.זנב("synched",0);
	this.instance_8.setTransform(138.8,43.05,1,1,0,0,0,6.4,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:11.6,regY:22.6,x:128.2,y:25.9},0).wait(1).to({x:112.4,y:25.75},0).wait(1).to({x:96.6,y:25.6},0).wait(1).to({x:80.85,y:25.5},0).wait(1).to({x:72.55},0).wait(1).to({x:64.3},0).wait(1).to({x:56.05},0).wait(1).to({x:47.8},0).wait(1).to({x:39.55},0).wait(1).to({x:29.5},0).wait(1).to({x:19.45},0).wait(1).to({x:9.4},0).wait(1).to({x:-0.65},0).wait(1).to({x:-10.7},0).wait(1).to({rotation:1.3949,x:-22.9,y:25.65},0).wait(1).to({rotation:2.7897,x:-35.1,y:25.7},0).wait(1).to({rotation:4.1846,x:-47.4,y:25.9},0).wait(1).to({rotation:5.5795,x:-59.6,y:26.1},0).wait(1).to({rotation:6.9743,x:-71.85,y:26.25},0).wait(1).to({rotation:11.5793,x:-80.45,y:26.9},0).wait(1).to({rotation:16.1843,x:-89.1,y:27.6},0).wait(1).to({rotation:20.7892,x:-97.8,y:28.45},0).wait(1).to({rotation:25.3942,x:-106.55,y:29.3},0).wait(1).to({rotation:29.9992,x:-115.45,y:30.35},0).wait(1).to({rotation:25.8888,x:-127.2,y:29.45},0).wait(1).to({rotation:21.7784,x:-139.1,y:28.65},0).wait(1).to({rotation:17.6681,x:-150.9,y:27.85},0).wait(1).to({rotation:13.5577,x:-162.85,y:27.15},0).wait(1).to({rotation:9.4473,x:-174.85,y:26.55},0).wait(1).to({rotation:6.7614,x:-185.8,y:26.2},0).wait(1).to({rotation:4.0756,x:-196.8,y:25.85},0).wait(1).to({rotation:1.3897,x:-207.75,y:25.65},0).wait(1).to({rotation:-1.2961,x:-218.75,y:25.4},0).wait(1).to({rotation:-3.982,x:-229.8,y:25.15},0).wait(1).to({rotation:-6.1853,x:-234.15,y:25},0).wait(1).to({rotation:-8.3887,x:-238.55,y:24.9},0).wait(1).to({rotation:-10.5921,x:-243,y:24.85},0).wait(1).to({rotation:-12.7955,x:-247.45},0).wait(1).to({rotation:-14.9989,x:-251.85},0).wait(1).to({rotation:-13.7413,x:-255.55,y:24.8},0).wait(1).to({rotation:-12.4836,x:-259.1},0).wait(1).to({rotation:-11.226,x:-262.75},0).wait(1).to({rotation:-9.9684,x:-266.45,y:24.85},0).wait(1).to({rotation:-8.7108,x:-270.1,y:24.9},0).wait(1).to({rotation:-6.9686,x:-277.65,y:25},0).wait(1).to({rotation:-5.2264,x:-285.2,y:25.05},0).wait(1).to({rotation:-3.4843,x:-292.75,y:25.2},0).wait(1).to({rotation:-1.7421,x:-300.35,y:25.35},0).wait(1).to({rotation:0,x:-307.95,y:25.5},0).wait(1).to({rotation:1.3992,x:-316.55,y:25.65},0).wait(1).to({rotation:2.7983,x:-325.2,y:25.7},0).wait(1).to({rotation:4.1975,x:-333.9,y:25.9},0).wait(1).to({rotation:5.5967,x:-342.55,y:26.1},0).wait(1).to({rotation:6.9959,x:-351.25,y:26.25},0).wait(1).to({rotation:8.5965,x:-357.45,y:26.45},0).wait(1).to({rotation:10.1971,x:-363.65,y:26.65},0).wait(1).to({rotation:11.7977,x:-369.8,y:26.85},0).wait(1).to({rotation:13.3983,x:-376,y:27.15},0).wait(1).to({rotation:14.9989,x:-382.25,y:27.4},0).wait(1).to({rotation:13.5469,x:-391.35,y:27.15},0).wait(1).to({rotation:12.0949,x:-400.55,y:26.95},0).wait(1).to({rotation:10.6428,x:-409.65,y:26.75},0).wait(1).to({rotation:9.1908,x:-418.8,y:26.5},0).wait(1).to({rotation:7.7388,x:-428,y:26.3},0).wait(1).to({rotation:6.191,x:-435.7,y:26.1},0).wait(1).to({rotation:4.6433,x:-443.45,y:26},0).wait(1).to({rotation:3.0955,x:-451.15,y:25.8},0).wait(1).to({rotation:1.5478,x:-458.9,y:25.6},0).wait(1).to({rotation:0,x:-466.7,y:25.5},0).wait(1).to({rotation:-1.6424,x:-473.5,y:25.3},0).wait(1).to({rotation:-3.2848,x:-480.3,y:25.2},0).wait(1).to({rotation:-4.9273,x:-487.1,y:25.05},0).wait(1).to({rotation:-6.5697,x:-493.95,y:24.95},0).wait(1).to({rotation:-8.2121,x:-500.7,y:24.9},0).wait(1).to({rotation:-9.5695,x:-507.8,y:24.85},0).wait(1).to({rotation:-10.9268,x:-514.85,y:24.8},0).wait(1).to({rotation:-12.2842,x:-521.95},0).wait(1).to({rotation:-13.6415,x:-529,y:24.7},0).wait(1).to({rotation:-14.9989,x:-536.05,y:24.75},0).wait(1).to({rotation:-13.6403,x:-537.85,y:24.7},0).wait(1).to({rotation:-12.2818,x:-539.6,y:24.8},0).wait(1).to({rotation:-10.9232,x:-541.35},0).wait(1).to({rotation:-9.5647,x:-543.15,y:24.85},0).wait(1).to({rotation:-8.2061,x:-544.85,y:24.9},0).wait(1).to({rotation:-6.5649,x:-551,y:24.95},0).wait(1).to({rotation:-4.9237,x:-557,y:25.05},0).wait(1).to({rotation:-3.2824,x:-563.05,y:25.2},0).wait(1).to({rotation:-1.6412,x:-569.15,y:25.3},0).wait(1).to({rotation:0,x:-575.25,y:25.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-719.2,-0.5,875.8000000000001,125.8);


(lib.יד = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_110();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(34.8,60.8,1,1,0,0,0,32.4,63.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:27.8,regY:64,rotation:-0.5632,x:30.55,y:60.4},0).wait(1).to({rotation:-1.1264,x:30.85,y:59.85},0).wait(1).to({rotation:-1.6896,x:31.2,y:59.35},0).wait(1).to({rotation:-2.2528,x:31.5,y:58.8},0).wait(1).to({rotation:-2.816,x:31.85,y:58.25},0).wait(1).to({rotation:-3.3792,x:32.15,y:57.75},0).wait(1).to({rotation:-3.9424,x:32.55,y:57.2},0).wait(1).to({rotation:-4.5056,x:32.85,y:56.65},0).wait(1).to({rotation:-5.0688,x:33.25,y:56.15},0).wait(1).to({rotation:-5.632,x:33.55,y:55.6},0).wait(1).to({rotation:-6.1952,x:33.9,y:55.1},0).wait(1).to({rotation:-6.7584,x:34.25,y:54.55},0).wait(1).to({rotation:-7.3216,x:34.55,y:54.05},0).wait(1).to({rotation:-7.8848,x:34.95,y:53.5},0).wait(1).to({rotation:-8.4481,x:35.25,y:52.95},0).wait(1).to({rotation:-9.0113,x:35.55,y:52.4},0).wait(1).to({rotation:-9.5745,x:35.95,y:51.9},0).wait(1).to({rotation:-10.1377,x:36.25,y:51.35},0).wait(1).to({rotation:-10.7009,x:36.6,y:50.85},0).wait(1).to({rotation:-11.2641,x:36.95,y:50.25},0).wait(1).to({rotation:-11.8273,x:37.25,y:49.75},0).wait(1).to({rotation:-12.3905,x:37.65,y:49.25},0).wait(1).to({rotation:-12.9537,x:38,y:48.65},0).wait(1).to({rotation:-13.5169,x:38.35,y:48.15},0).wait(1).to({rotation:-14.0801,x:38.65,y:47.65},0).wait(1).to({rotation:-14.6433,x:39.05,y:47.05},0).wait(1).to({rotation:-15.2065,x:39.4,y:46.55},0).wait(1).to({rotation:-15.7697,x:39.7,y:46.05},0).wait(1).to({rotation:-16.3329,x:40.05,y:45.5},0).wait(1).to({rotation:-16.8961,x:40.4,y:44.95},0).wait(1).to({rotation:-17.4593,x:40.7,y:44.4},0).wait(1).to({rotation:-18.0225,x:41.1,y:43.9},0).wait(1).to({rotation:-18.5857,x:41.45,y:43.35},0).wait(1).to({rotation:-19.1489,x:41.75,y:42.85},0).wait(1).to({rotation:-19.7121,x:42.1,y:42.25},0).wait(1).to({rotation:-20.2753,x:42.5,y:41.75},0).wait(1).to({rotation:-20.8385,x:42.8,y:41.2},0).wait(1).to({rotation:-21.4017,x:43.2,y:40.7},0).wait(1).to({rotation:-21.9649,x:43.55,y:40.15},0).wait(1).to({rotation:-22.5281,x:43.85,y:39.6},0).wait(1).to({rotation:-23.0913,x:44.2,y:39.05},0).wait(1).to({rotation:-23.6545,x:44.55,y:38.5},0).wait(1).to({rotation:-24.2177,x:44.9,y:38},0).wait(1).to({rotation:-24.7809,x:45.3,y:37.45},0).wait(1).to({rotation:-25.3442,x:45.6,y:36.95},0).wait(1).to({rotation:-25.9074,x:45.95,y:36.35},0).wait(1).to({rotation:-26.4706,x:46.35,y:35.85},0).wait(1).to({rotation:-27.0338,x:46.65,y:35.3},0).wait(1).to({rotation:-27.597,x:47.05,y:34.75},0).wait(1).to({rotation:-28.1602,x:47.35,y:34.25},0).wait(1).to({rotation:-28.7234,x:47.75,y:33.7},0).wait(1).to({rotation:-29.2866,x:48.1,y:33.15},0).wait(1).to({rotation:-29.8498,x:48.45,y:32.6},0).wait(1).to({rotation:-30.413,x:48.75,y:32.1},0).wait(1).to({rotation:-30.9762,x:49.2,y:31.55},0).wait(1).to({rotation:-31.5394,x:49.55,y:31},0).wait(1).to({rotation:-32.1026,x:49.85,y:30.5},0).wait(1).to({rotation:-32.6658,x:50.2,y:29.95},0).wait(1).to({rotation:-33.229,x:50.55,y:29.4},0).wait(1).to({rotation:-33.7922,x:50.95,y:28.9},0).wait(1).to({rotation:-34.3554,x:51.25,y:28.3},0).wait(1).to({rotation:-34.9186,x:51.65,y:27.8},0).wait(1).to({rotation:-35.4818,x:52,y:27.2},0).wait(1).to({rotation:-36.045,x:52.4,y:26.7},0).wait(1).to({rotation:-36.6082,x:52.7,y:26.1},0).wait(1).to({rotation:-37.1714,x:53.05,y:25.6},0).wait(1).to({rotation:-37.7346,x:53.45,y:25.05},0).wait(1).to({rotation:-38.2978,x:53.75,y:24.55},0).wait(1).to({rotation:-38.861,x:54.15,y:24},0).wait(1).to({rotation:-39.4242,x:54.5,y:23.45},0).wait(1).to({rotation:-39.9874,x:54.9,y:22.95},0).wait(1).to({rotation:-40.5506,x:55.2,y:22.4},0).wait(1).to({rotation:-41.1138,x:55.65,y:21.75},0).wait(1).to({rotation:-41.6771,x:55.95,y:21.25},0).wait(1).to({rotation:-42.2403,x:56.3,y:20.75},0).wait(1).to({rotation:-42.8035,x:56.7,y:20.15},0).wait(1).to({rotation:-43.3667,x:57.05,y:19.65},0).wait(1).to({rotation:-43.9299,x:57.4,y:19.1},0).wait(1).to({rotation:-44.4931,x:57.8,y:18.5},0).wait(1).to({rotation:-45.0563,x:58.15,y:17.95},0).wait(1).to({rotation:-45.6195,x:58.5,y:17.45},0).wait(1).to({rotation:-46.1827,x:58.9,y:16.9},0).wait(1).to({rotation:-46.7459,x:59.2,y:16.35},0).wait(1).to({rotation:-47.3091,x:59.6,y:15.8},0).wait(1).to({rotation:-47.8723,x:59.95,y:15.3},0).wait(1).to({rotation:-48.4355,x:60.35,y:14.7},0).wait(1).to({rotation:-48.9987,x:60.7,y:14.15},0).wait(1).to({rotation:-49.5619,x:61.05,y:13.6},0).wait(1).to({rotation:-50.1251,x:61.4,y:13.1},0).wait(1).to({rotation:-50.6883,x:61.75,y:12.55},0).wait(1).to({rotation:-51.2515,x:62.15,y:11.95},0).wait(1).to({rotation:-51.8147,x:62.55,y:11.4},0).wait(1).to({rotation:-52.3779,x:62.9,y:10.9},0).wait(1).to({rotation:-52.9411,x:63.25,y:10.3},0).wait(1).to({rotation:-53.5043,x:63.65,y:9.75},0).wait(1).to({rotation:-54.0675,x:63.95,y:9.25},0).wait(1).to({rotation:-54.6307,x:64.4,y:8.7},0).wait(1).to({rotation:-55.1939,x:64.7,y:8.1},0).wait(1).to({rotation:-55.7571,x:65.1,y:7.55},0).wait(1).to({rotation:-56.3203,x:65.45,y:7},0).wait(1).to({rotation:-56.8835,x:65.85,y:6.45},0).wait(1).to({rotation:-57.4467,x:66.2,y:5.9},0).wait(1).to({rotation:-58.0099,x:66.6,y:5.35},0).wait(1).to({rotation:-58.5732,x:66.95,y:4.8},0).wait(1).to({rotation:-59.1364,x:67.3,y:4.3},0).wait(1).to({rotation:-59.6996,x:67.7,y:3.7},0).wait(1).to({rotation:-60.2628,x:68.05,y:3.15},0).wait(1).to({rotation:-60.826,x:68.45,y:2.6},0).wait(1).to({rotation:-61.3892,x:68.8,y:2.05},0).wait(1).to({rotation:-61.9524,x:69.15,y:1.45},0).wait(1).to({rotation:-62.5156,x:69.6,y:0.95},0).wait(1).to({rotation:-63.0788,x:69.85,y:0.35},0).wait(1).to({rotation:-63.642,x:70.25,y:-0.2},0).wait(1).to({rotation:-64.2052,x:70.6,y:-0.8},0).wait(1).to({rotation:-64.7684,x:71,y:-1.3},0).wait(1).to({rotation:-65.3316,x:71.35,y:-1.85},0).wait(1).to({rotation:-65.8948,x:71.7,y:-2.45},0).wait(1).to({rotation:-66.458,x:72.05,y:-3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-62.7,161.39999999999998,192.7);


(lib.קופצתחישוק = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// למעלה
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#337BBE").ss(8).p("Ai+wTQCOAABjEyQBkEyAAGvQAAGwhkEyQhjEyiOAA");
	this.shape.setTransform(103.2257,202.1663,1.9371,1.9371);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// תולי
	this.instance = new lib.קופצת();
	this.instance.setTransform(173.95,173.35,1.1946,1.1946,21.7362,0,0,140.2,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:143.3,regY:67.1,scaleX:1.1947,scaleY:1.1947,rotation:20.5231,x:161.4,y:188.05},0).wait(1).to({rotation:19.3197,x:152.8,y:184.1},0).wait(1).to({rotation:18.1267,x:143.7,y:180.75},0).wait(1).to({rotation:16.944,x:135.45,y:176.8},0).wait(1).to({rotation:15.8204,x:126,y:173.9},0).wait(1).to({rotation:14.7758,x:116.9,y:171.45},0).wait(1).to({rotation:13.7405,x:107.8,y:169.15},0).wait(1).to({rotation:12.7145,x:98.75,y:167.05},0).wait(1).to({rotation:11.6978,x:89.7,y:165.1},0).wait(1).to({rotation:10.6906,x:81.25,y:163.65},0).wait(1).to({rotation:9.6938,x:75.7,y:163.25},0).wait(1).to({rotation:8.7068,x:70.15,y:162.75},0).wait(1).to({rotation:7.7286,x:64.75,y:162.25},0).wait(1).to({rotation:6.7596,x:59.35,y:161.7},0).wait(1).to({rotation:5.7994,x:54,y:161.1},0).wait(1).to({rotation:4.5759,x:47.6,y:160.35},0).wait(1).to({rotation:3.0793,x:40.05,y:159.85},0).wait(1).to({rotation:1.5975,x:32.5,y:159.7},0).wait(1).to({rotation:0.1305,x:25.05,y:159.8},0).wait(1).to({rotation:-1.3218,x:17.7,y:160.15},0).wait(1).to({rotation:-2.7602,x:10.4,y:160.7},0).wait(1).to({rotation:-3.8378,x:3.3,y:161},0).wait(1).to({rotation:-4.6461,x:-3.55,y:161.3},0).wait(1).to({rotation:-5.446,x:-10.45,y:161.9},0).wait(1).to({rotation:-6.2373,x:-17.1,y:162.9},0).wait(1).to({rotation:-7.0207,x:-23.7,y:164.1},0).wait(1).to({rotation:-7.7952,x:-30.25,y:165.5},0).wait(1).to({rotation:-8.4893,x:-37.25,y:167.35},0).wait(1).to({rotation:-8.9797,x:-45.95,y:169.8},0).wait(1).to({rotation:-9.4647,x:-54.55,y:172.15},0).wait(1).to({rotation:-9.9444,x:-63.1,y:174.6},0).wait(1).to({rotation:-10.4184,x:-71.55,y:176.95},0).wait(1).to({rotation:-10.8872,x:-79.85,y:179.25},0).wait(1).to({rotation:-11.3506,x:-88.05,y:181.6},0).wait(1).to({rotation:-11.8084,x:-94.9,y:183.65},0).wait(1).to({rotation:-12.2611,x:-100.25,y:185.6},0).wait(1).to({rotation:-12.708,x:-105.55,y:187.45},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,rotation:-13.1497,x:-110.8,y:189.3},0).wait(1).to({scaleX:1.1947,scaleY:1.1947,rotation:-13.586,x:-116,y:191.1},0).wait(1).to({rotation:-14.0167,x:-121.15,y:192.9},0).wait(1).to({rotation:-14.442,x:-126.15,y:194.7},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,rotation:-14.9016,x:-131.65,y:196.7},0).wait(1).to({scaleX:1.1947,scaleY:1.1947,rotation:-15.6041,x:-139.9,y:200.35},0).wait(1).to({rotation:-16.2975,x:-148.1,y:203.95},0).wait(1).to({rotation:-16.9815,x:-156.1,y:207.45},0).wait(1).to({rotation:-17.6562,x:-164.05,y:211},0).wait(1).to({rotation:-18.3216,x:-171.9,y:214.45},0).wait(1).to({rotation:-18.9783,x:-179.65,y:217.85},0).wait(1).to({rotation:-19.6258,x:-187.3,y:221.15},0).wait(1).to({rotation:-20.2639,x:-194.8,y:224.45},0).wait(1).to({rotation:-20.9235,x:-202.75,y:229.55},0).wait(1).to({rotation:-21.5741,x:-210.6,y:234.55},0).wait(1).to({rotation:-22.2144,x:-218.4,y:239.5},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,rotation:-22.8456,x:-226.1,y:244.35},0).wait(1).to({scaleX:1.1947,scaleY:1.1947,rotation:-23.467,x:-233.6,y:249.2},0).wait(1).to({rotation:-24.0793,x:-241,y:253.9},0).wait(1).to({rotation:-24.6812,x:-248.3,y:258.5},0).wait(1).to({rotation:-25.2739,x:-255.5,y:263.05},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,rotation:-25.8564,x:-262.55,y:267.55},0).wait(1).to({scaleX:1.1947,scaleY:1.1947,rotation:-26.0014,x:-270.55,y:271.55},0).wait(1).to({x:-278.8,y:275.3},0).wait(1).to({x:-286.9,y:279.05},0).wait(1).to({x:-294.85,y:282.7},0).wait(1).to({x:-302.65,y:286.25},0).wait(1).to({x:-310.35,y:289.8},0).wait(1).to({x:-317.85,y:293.25},0).wait(1).to({rotation:-25.4078,x:-325,y:297.4},0).wait(1).to({rotation:-23.554,x:-331.5,y:303.2},0).wait(1).to({rotation:-21.7346,x:-337.95,y:308.85},0).wait(1).to({rotation:-19.9516,x:-344.2,y:314.4},0).wait(1).to({rotation:-18.205,x:-350.3,y:319.75},0).wait(1).to({rotation:-16.4949,x:-356.4,y:325.05},0).wait(1).to({rotation:-14.819,x:-362.3,y:330.2},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,rotation:-13.1796,x:-368.05,y:335.2},0).wait(1).to({scaleX:1.1947,scaleY:1.1947,rotation:-11.5766,x:-373.8,y:340.15},0).wait(1).to({rotation:-11.0001,x:-380.35,y:341.95},0).wait(1).to({x:-387.35},0).wait(1).to({x:-394.15},0).wait(1).to({x:-400.8},0).wait(1).to({x:-407.3},0).wait(1).to({x:-413.65},0).wait(1).to({x:-419.8},0).wait(1).to({x:-425.8},0).wait(1).to({x:-431.65},0).wait(1).to({rotation:-10.2875,x:-436.15,y:342},0).wait(1).to({rotation:-8.8799,x:-439.3,y:342.15},0).wait(1).to({rotation:-7.5148,x:-442.35,y:342.25},0).wait(1).to({rotation:-6.1897,x:-445.3,y:342.45},0).wait(1).to({rotation:-4.9096,x:-448.25,y:342.5},0).wait(1).to({rotation:-3.6695,x:-451,y:342.65},0).wait(1).to({rotation:-2.4719,x:-453.7,y:342.75},0).wait(1).to({rotation:-1.3168,x:-456.3,y:342.8},0).wait(1).to({rotation:-0.2017,x:-458.8,y:342.9},0).wait(1).to({rotation:0.8684,x:-461.25,y:342.95},0).wait(1).to({rotation:1.8984,x:-463.55,y:343},0).wait(1).to({rotation:2.886,x:-465.8,y:343.05},0).wait(1).to({rotation:3.8311,x:-467.95,y:343.15},0).wait(1).to({rotation:4.0011,x:-473.9,y:343.1},0).wait(1).to({x:-480.4},0).wait(1).to({x:-486.6},0).wait(1).to({x:-492.5},0).wait(1).to({x:-498.1},0).wait(1).to({x:-503.35},0).wait(1).to({x:-508.3},0).wait(1).to({x:-512.9},0).wait(1).to({x:-517.2},0).wait(1).to({x:-521.15},0).wait(1).to({x:-524.85},0).wait(1).to({x:-528.2},0).wait(1).to({x:-531.2},0).wait(1).to({x:-533.9},0).wait(1).to({x:-536.3},0).wait(1).to({x:-538.4},0).wait(1).to({x:-540.1},0).wait(1).to({x:-541.55},0).wait(1).to({x:-542.7},0).wait(1).to({x:-543.45},0).wait(1).to({x:-543.95},0).wait(1).to({x:-544.1},0).wait(1));

	// למטה
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#337BBE").ss(8).p("AC/QUQiOAAhjkyQhkkyAAmwQAAmvBkkyQAwiQA8hQQBAhSBFAA");
	this.shape_1.setTransform(29.2272,202.1663,1.9371,1.9371);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-720.4,-18.2,1080.4,472);


(lib.נהנת = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween48("synched",0);
	this.instance.setTransform(94.65,210.6);

	this.instance_1 = new lib.Tween49("synched",0);
	this.instance_1.setTransform(94.65,210.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween50("synched",0);
	this.instance_2.setTransform(94.65,210.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween51("synched",0);
	this.instance_3.setTransform(94.65,210.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween52("synched",0);
	this.instance_4.setTransform(94.65,210.6);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween53("synched",0);
	this.instance_5.setTransform(94.65,210.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween54("synched",0);
	this.instance_6.setTransform(94.65,210.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween55("synched",0);
	this.instance_7.setTransform(94.65,210.6);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween56("synched",0);
	this.instance_8.setTransform(94.65,210.6);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween57("synched",0);
	this.instance_9.setTransform(94.65,210.6);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween58("synched",0);
	this.instance_10.setTransform(94.65,210.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween59("synched",0);
	this.instance_11.setTransform(94.65,210.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_11}]},10).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true},10).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},10).to({_off:true},10).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},10).to({_off:true},10).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},10).to({_off:true},10).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},10).to({_off:true},10).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},10).to({_off:true},10).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},10).to({_off:true},10).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({_off:false},10).to({_off:true},10).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({_off:false},10).to({_off:true},10).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({_off:false},10).to({_off:true},10).wait(9));

	// זנב
	this.instance_12 = new lib.Tween60("synched",0);
	this.instance_12.setTransform(168.45,61.75);

	this.instance_13 = new lib.Tween61("synched",0);
	this.instance_13.setTransform(180.5,67.85);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween62("synched",0);
	this.instance_14.setTransform(153.8,67.75);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween63("synched",0);
	this.instance_15.setTransform(180.65,67.85);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween64("synched",0);
	this.instance_16.setTransform(161.7,65.25);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween65("synched",0);
	this.instance_17.setTransform(183.3,72.9);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween66("synched",0);
	this.instance_18.setTransform(155.9,67.25);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween67("synched",0);
	this.instance_19.setTransform(181.35,69.15);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween68("synched",0);
	this.instance_20.setTransform(156,67.25);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween69("synched",0);
	this.instance_21.setTransform(181.45,69.2);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween70("synched",0);
	this.instance_22.setTransform(164.35,63.35);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween71("synched",0);
	this.instance_23.setTransform(181.55,69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_18}]},10).to({state:[{t:this.instance_19}]},10).to({state:[{t:this.instance_20}]},10).to({state:[{t:this.instance_21}]},10).to({state:[{t:this.instance_22}]},10).to({state:[{t:this.instance_23}]},10).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,x:180.5,y:67.85},9).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:false},9).to({_off:true,x:153.8,y:67.75},10).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},10).to({_off:true,x:180.65,y:67.85},10).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},10).to({_off:true,x:161.7,y:65.25},10).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(29).to({_off:false},10).to({_off:true,x:183.3,y:72.9},10).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(39).to({_off:false},10).to({_off:true,x:155.9,y:67.25},10).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(49).to({_off:false},10).to({_off:true,x:181.35,y:69.15},10).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(59).to({_off:false},10).to({_off:true,x:156,y:67.25},10).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(69).to({_off:false},10).to({_off:true,x:181.45,y:69.2},10).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(79).to({_off:false},10).to({_off:true,x:164.35,y:63.35},10).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(89).to({_off:false},10).to({_off:true,x:181.55,y:69.2},10).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,234.6,378.8);


(lib.Tween77 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(-88.75,248.1,1,1,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSB5IgBjaQAAgNADgIQAGgNAKACQAJAAAFAMQAFALAAAYIABCpQAAASgDAIQgEAPgNADg");
	this.shape.setTransform(382.15,-443.058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384.2,-456.1,768.4,912.4000000000001);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(253.95,559.8,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_57();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,859,768.2), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(309.35,561.15,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_55();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,859,768.2), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_54();
	this.instance.setTransform(765.9,560.2,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_53();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,997.4,768.2), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_52();
	this.instance.setTransform(697.05,561.2,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_51();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,928.6,768.2), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_50();
	this.instance.setTransform(610.9,564.05,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_49();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,859,768.2), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_48();
	this.instance.setTransform(557.3,561.5,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_47();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,859,768.2), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(496.55,560,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_45();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,859,768.2), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_44();
	this.instance.setTransform(439.6,561.7,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_43();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,859,768.2), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_42();
	this.instance.setTransform(372.75,564.1,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_41();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,859,768.2), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(194.25,560.9,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_39();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,859,768.2), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_38();
	this.instance.setTransform(858.7,555.7,0.5,0.5);

	this.instance_1 = new lib.ילדהמגישהעצם("synched",0);
	this.instance_1.setTransform(73.95,584.05,1,1,0,0,0,38.8,183.9);

	this.instance_2 = new lib.ידמגישהעצם("synched",0);
	this.instance_2.setTransform(125.15,541.95,1,1,0,0,0,29.8,65);

	this.instance_3 = new lib.CachedBmp_37();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,1090.2,768.2), null);


(lib.Scene_1_מקבלת_עצם = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// מקבלת_עצם
	this.instance = new lib.Symbol4();
	this.instance.setTransform(545.25,384.1,1,1,0,0,0,545,384.1);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(498.85,384.1,1,1,0,0,0,498.6,384.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol11();
	this.instance_2.setTransform(464.45,384.1,1,1,0,0,0,464.2,384.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol10();
	this.instance_3.setTransform(429.65,384.1,1,1,0,0,0,429.4,384.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(429.65,384.1,1,1,0,0,0,429.4,384.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(429.65,384.1,1,1,0,0,0,429.4,384.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(429.65,384.1,1,1,0,0,0,429.4,384.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(429.65,384.1,1,1,0,0,0,429.4,384.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol13();
	this.instance_8.setTransform(429.65,384.1,1,1,0,0,0,429.4,384.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol14();
	this.instance_9.setTransform(429.65,384.1,1,1,0,0,0,429.4,384.1);
	this.instance_9._off = true;

	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(429.65,384.1,1,1,0,0,0,429.4,384.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(608).to({_off:false},0).wait(1).to({regX:545.1,x:545.35},0).wait(3).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(613).to({_off:false},0).wait(1).to({regX:498.7,x:498.95},0).wait(3).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(618).to({_off:false},0).wait(1).to({regX:464.3,x:464.55},0).wait(3).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(623).to({_off:false},0).wait(1).to({regX:429.5,x:429.75},0).wait(3).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(628).to({_off:false},0).wait(1).to({regX:429.5,x:429.75},0).wait(3).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(633).to({_off:false},0).wait(1).to({regX:429.5,x:429.75},0).wait(3).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(638).to({_off:false},0).wait(1).to({regX:429.5,x:429.75},0).wait(3).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(643).to({_off:false},0).wait(1).to({regX:429.5,x:429.75},0).wait(3).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(648).to({_off:false},0).wait(1).to({regX:429.5,x:429.75},0).wait(3).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(653).to({_off:false},0).wait(1).to({regX:429.5,x:429.75},0).wait(3).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(658).to({_off:false},0).wait(1).to({regX:429.5,x:429.75},0).wait(8).to({regX:429.4,x:429.65},0).wait(1).to({regX:429.5,x:429.75},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ילדה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ילדה
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-95.95,584.05);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(146.75,584.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},118).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:146.75,y:584.5},118).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_יד = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// יד
	this.instance = new lib.יד();
	this.instance.setTransform(-44.25,543.8,1,1,0,0,0,29.8,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:65,regY:33.6,x:-6.95,y:512.4},0).wait(1).to({x:-4.9},0).wait(1).to({x:-2.85},0).wait(1).to({x:-0.8},0).wait(1).to({x:1.25},0).wait(1).to({x:3.3},0).wait(1).to({x:5.35},0).wait(1).to({x:7.45,y:512.45},0).wait(1).to({x:9.5},0).wait(1).to({x:11.55},0).wait(1).to({x:13.6},0).wait(1).to({x:15.65},0).wait(1).to({x:17.7},0).wait(1).to({x:19.75},0).wait(1).to({x:21.85},0).wait(1).to({x:23.9,y:512.5},0).wait(1).to({x:25.95},0).wait(1).to({x:28},0).wait(1).to({x:30.05},0).wait(1).to({x:32.1},0).wait(1).to({x:34.15},0).wait(1).to({x:36.2},0).wait(1).to({x:38.3},0).wait(1).to({x:40.35,y:512.55},0).wait(1).to({x:42.4},0).wait(1).to({x:44.45},0).wait(1).to({x:46.5},0).wait(1).to({x:48.55},0).wait(1).to({x:50.6},0).wait(1).to({x:52.7},0).wait(1).to({x:54.75},0).wait(1).to({x:56.8,y:512.6},0).wait(1).to({x:58.85},0).wait(1).to({x:60.9},0).wait(1).to({x:62.95},0).wait(1).to({x:65},0).wait(1).to({x:67.05},0).wait(1).to({x:69.1},0).wait(1).to({x:71.15},0).wait(1).to({x:73.2,y:512.65},0).wait(1).to({x:75.25},0).wait(1).to({x:77.3},0).wait(1).to({x:79.35},0).wait(1).to({x:81.4},0).wait(1).to({x:83.5},0).wait(1).to({x:85.55},0).wait(1).to({x:87.6},0).wait(1).to({x:89.65,y:512.7},0).wait(1).to({x:91.7},0).wait(1).to({x:93.75},0).wait(1).to({x:95.8},0).wait(1).to({x:97.9},0).wait(1).to({x:99.95},0).wait(1).to({x:102},0).wait(1).to({x:104.05},0).wait(1).to({x:106.1,y:512.75},0).wait(1).to({x:108.15},0).wait(1).to({x:110.2},0).wait(1).to({x:112.3},0).wait(1).to({x:114.35},0).wait(1).to({x:116.4},0).wait(1).to({x:118.45},0).wait(1).to({x:120.5,y:512.8},0).wait(1).to({x:122.55},0).wait(1).to({x:124.6},0).wait(1).to({x:126.65},0).wait(1).to({x:128.75},0).wait(1).to({x:130.8},0).wait(1).to({x:132.85},0).wait(1).to({x:134.9},0).wait(1).to({x:136.95,y:512.85},0).wait(1).to({x:139},0).wait(1).to({x:141.05},0).wait(1).to({x:143.15},0).wait(1).to({x:145.2},0).wait(1).to({x:147.25},0).wait(1).to({x:149.3},0).wait(1).to({x:151.35},0).wait(1).to({x:153.4,y:512.9},0).wait(1).to({x:155.45},0).wait(1).to({x:157.5},0).wait(1).to({x:159.6},0).wait(1).to({x:161.65},0).wait(1).to({x:163.7},0).wait(1).to({x:165.75},0).wait(1).to({x:167.8},0).wait(1).to({x:169.85,y:512.95},0).wait(1).to({x:171.9},0).wait(1).to({x:174},0).wait(1).to({x:176.05},0).wait(1).to({x:178.1},0).wait(1).to({x:180.15},0).wait(1).to({x:182.2},0).wait(1).to({x:184.25},0).wait(1).to({x:186.3,y:513},0).wait(1).to({x:188.4},0).wait(1).to({x:190.45},0).wait(1).to({x:192.5},0).wait(1).to({x:194.55},0).wait(1).to({x:196.6},0).wait(1).to({x:198.65},0).wait(1).to({x:200.7},0).wait(1).to({x:202.75,y:513.05},0).wait(1).to({x:204.85},0).wait(1).to({x:206.9},0).wait(1).to({x:208.95},0).wait(1).to({x:211},0).wait(1).to({x:213.05},0).wait(1).to({x:215.1},0).wait(1).to({x:217.15},0).wait(1).to({x:219.25,y:513.1},0).wait(1).to({x:221.3},0).wait(1).to({x:223.35},0).wait(1).to({x:225.4},0).wait(1).to({x:227.45},0).wait(1).to({x:229.5},0).wait(1).to({x:231.55},0).wait(1).to({x:233.65,y:513.15},0).wait(1).to({regX:29.8,regY:65,x:198.5,y:544.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_קופצת = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// קופצת
	this.instance = new lib.קופצתחישוק();
	this.instance.setTransform(603.05,491.2,1,1,0,0,0,252.8,195.1);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},399).wait(116));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_הולכת = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// הולכת
	this.instance = new lib.מחלףשמשון();
	this.instance.setTransform(859.15,551.5,1.5514,1.5514,0,0,0,0.1,0.1);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},515).wait(93));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_flash0_ai_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.נהנת();
	this.instance.setTransform(439.85,511.95,1,1,0,0,0,104,188.5);

	this.instance_1 = new lib.אוכלת();
	this.instance_1.setTransform(424.15,511.95,1,1,0,0,0,104,188.5);

	this.instance_2 = new lib.CachedBmp_7();
	this.instance_2.setTransform(0.25,-0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},789).wait(119));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_flash0_ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(429.1,558.25,1,1,0,0,0,135.4,50.2);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.start(), 3);

	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(453.55,389.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-0.25,0.35,0.5,0.5);

	this.replay = new lib.playagain();
	this.replay.name = "replay";
	this.replay.setTransform(429.4,557.8,1,1,0,0,0,135.3,50.2);
	new cjs.ButtonHelper(this.replay, 0, 1, 2);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(695.85,370.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(163.35,199.6,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_4();
	this.instance_4.setTransform(453.85,388.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(0,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.start}]}).to({state:[]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.replay}]},906).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.PuppetShape_13copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.instance_1 = new lib.BMP_54f46113_a839_47d2_9dc5_c0f91c16a0b1();
	this.instance_1.setTransform(0,-19.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19,292,160);


(lib.PuppetShape_13copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.instance_1 = new lib.BMP_8bcb5706_1258_409f_aee8_50d355ed8050();
	this.instance_1.setTransform(0,-19.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19,292,160);


(lib.PuppetShape_12copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.instance_1 = new lib.BMP_dacd202c_2730_4600_b6f9_f5ac814e7684();
	this.instance_1.setTransform(0.1,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274.1,142.1);


(lib.PuppetShape_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.BMP_d495122d_77f5_459c_a7ad_1d5e6e1ea333();
	this.instance_1.setTransform(0,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.5,329.5,184.5);


(lib.PuppetShape_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.BMP_aab62bb1_832f_4921_b1e0_57549d70ffe4();
	this.instance_1.setTransform(0,-42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.2,329.5,220.2);


(lib.PuppetShape_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.BMP_6b8cf45c_1c6e_4151_ab03_efa2b1ba018b();
	this.instance_1.setTransform(0,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329.5,182.5);


(lib.PuppetShape_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.BMP_7b0bb6ee_7688_435e_97e0_682535f1f1ae();
	this.instance_1.setTransform(0,-35.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35.7,329.5,213.7);


(lib.PuppetShape_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.BMP_6b4778fe_15ec_40c7_a8a4_82d22fef67bc();
	this.instance_1.setTransform(0,-80.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-80.5,329.5,258.5);


(lib.PuppetShape_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.BMP_2f81e7ad_64ee_4401_92b2_26618f679f77();
	this.instance_1.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-50,329.5,228);


(lib.PuppetShape_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.BMP_416eb5cf_cd9e_4ebf_9d77_34b2deaf964c();
	this.instance_1.setTransform(0,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329.5,178.2);


(lib.PuppetShape_2copy7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_c6ef6819_88ce_48b7_b7b6_bdcdf9cc0deb();
	this.instance_1.setTransform(0.15,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,53);


(lib.PuppetShape_2copy6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_f96a4d86_f037_411b_9b0c_bf614bb0e42b();
	this.instance_1.setTransform(0.15,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,53);


(lib.PuppetShape_2copy5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_ed08c778_1917_4d34_bca1_a41f13484651();
	this.instance_1.setTransform(0.15,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,53);


(lib.PuppetShape_2copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_e0ec2972_f06d_4a8b_a914_008a1b0465ea();
	this.instance_1.setTransform(0.15,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,53);


(lib.PuppetShape_2copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_f80e0299_3d97_4b1d_bb39_dde332ef71c6();
	this.instance_1.setTransform(0.15,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,53);


(lib.PuppetShape_2copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_04dfdcd1_3379_4481_9387_00475c556b62();
	this.instance_1.setTransform(0.15,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,53);


(lib.PuppetShape_2copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_c13647af_ff60_47ca_b063_7d7d6043d519();
	this.instance_1.setTransform(0.15,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,53);


(lib.PuppetShape_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_97a60e15_900f_42a4_bc46_879e88c817f5();
	this.instance_1.setTransform(0.15,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,53);


(lib.PuppetShape_1copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_def0656b_b901_464b_87c5_24caca4d3c1f();
	this.instance_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,53);


(lib.PuppetShape_1copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_d4e2928b_4c4d_4fcc_b45d_2bde14854625();
	this.instance_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,53);


(lib.PuppetShape_1copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_3277a7d4_e7f2_472f_9443_82eba0df747d();
	this.instance_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,53);


(lib.PuppetShape_1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_52047b25_15d3_44d9_96b4_e3aeb2799df4();
	this.instance_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,53);


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_d8021a14_059f_4cb1_aaf9_b2cb2cf1ecb6();
	this.instance_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,53);


(lib.מציעה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_114();
	this.instance.setTransform(197.95,119.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// יד_2
	this.instance_1 = new lib.PuppetShape_3("synched",1,false);
	this.instance_1.setTransform(455.95,247.5,1,1,0,0,0,165,89);

	this.instance_2 = new lib.PuppetShape_4("synched",1,false);
	this.instance_2.setTransform(455.95,247.5,1,1,0,0,0,165,89);

	this.instance_3 = new lib.PuppetShape_5("synched",1,false);
	this.instance_3.setTransform(455.95,247.5,1,1,0,0,0,165,89);

	this.instance_4 = new lib.PuppetShape_6("synched",1,false);
	this.instance_4.setTransform(455.95,247.5,1,1,0,0,0,165,89);

	this.instance_5 = new lib.PuppetShape_7("synched",1,false);
	this.instance_5.setTransform(455.95,247.5,1,1,0,0,0,165,89);

	this.instance_6 = new lib.PuppetShape_8("synched",1,false);
	this.instance_6.setTransform(455.95,247.5,1,1,0,0,0,165,89);

	this.instance_7 = new lib.PuppetShape_9("synched",1,false);
	this.instance_7.setTransform(455.95,247.5,1,1,0,0,0,165,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_7}]},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(198,78,422,550.8);


(lib.כבלב = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// לשון
	this.instance = new lib.PuppetShape_1("synched",1,false);
	this.instance.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);

	this.instance_1 = new lib.PuppetShape_2("synched",1,false);
	this.instance_1.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.PuppetShape_2copy("synched",1,false);
	this.instance_2.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.PuppetShape_1copy2("synched",1,false);
	this.instance_3.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.PuppetShape_2copy2("synched",1,false);
	this.instance_4.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.PuppetShape_2copy3("synched",1,false);
	this.instance_5.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.PuppetShape_1copy4("synched",1,false);
	this.instance_6.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.PuppetShape_2copy4("synched",1,false);
	this.instance_7.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.PuppetShape_2copy5("synched",1,false);
	this.instance_8.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.PuppetShape_1copy("synched",1,false);
	this.instance_9.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.PuppetShape_2copy6("synched",1,false);
	this.instance_10.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.PuppetShape_2copy7("synched",1,false);
	this.instance_11.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.PuppetShape_1copy3("synched",1,false);
	this.instance_12.setTransform(64.5,218.75,0.5,0.5,0,0,0,12,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:12.1,x:64.55,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:12.1,x:64.55,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).wait(1).to({regX:12.1,x:64.55,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).wait(1).to({regX:12.1,x:64.55,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).wait(1).to({regX:12.1,x:64.55,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).wait(1).to({regX:12.1,x:64.55,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(58).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(63).to({_off:false},0).wait(1).to({regX:12.1,x:64.55,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(74).to({_off:false},0).wait(1).to({regX:12.1,x:64.55,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// קשקשפנים
	this.instance_13 = new lib.CachedBmp_113();
	this.instance_13.setTransform(-1,43.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(83));

	// זנב
	this.instance_14 = new lib.Symbol2();
	this.instance_14.setTransform(153.75,94.2,1,1,0,0,0,4.2,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:26.5,regY:55.1,rotation:2.9998,x:180.85,y:54.8},0).wait(1).to({rotation:5.9996,x:185.7,y:57.8},0).wait(1).to({rotation:8.9993,x:190.45,y:61},0).wait(1).to({rotation:11.9991,x:195.05,y:64.3},0).wait(1).to({rotation:14.9989,x:199.65,y:67.65},0).wait(1).to({rotation:8.5704,x:189.15,y:62.2},0).wait(1).to({rotation:2.1419,x:178.3,y:57.15},0).wait(1).to({rotation:-4.2866,x:167.1,y:52.7},0).wait(1).to({rotation:-10.715,x:155.75,y:48.75},0).wait(1).to({rotation:-17.1435,x:144.1,y:45.35},0).wait(1).to({rotation:-23.572,x:132.45,y:42.6},0).wait(1).to({rotation:-30.0005,x:120.7,y:40.4},0).wait(1).to({rotation:-23.572,x:132.45,y:42.55},0).wait(1).to({rotation:-17.1435,x:144.1,y:45.35},0).wait(1).to({rotation:-10.715,x:155.7,y:48.75},0).wait(1).to({rotation:-4.2866,x:167.1,y:52.7},0).wait(1).to({rotation:2.1419,x:178.25,y:57.15},0).wait(1).to({rotation:8.5704,x:189.1,y:62.15},0).wait(1).to({rotation:14.9989,x:199.6,y:67.6},0).wait(1).to({rotation:8.8415,x:189.7,y:61.9},0).wait(1).to({rotation:2.684,x:179.35,y:56.65},0).wait(1).to({rotation:-3.4734,x:168.85,y:51.9},0).wait(1).to({rotation:-9.6308,x:158.05,y:47.55},0).wait(1).to({rotation:-15.7883,x:147.1,y:43.8},0).wait(1).to({rotation:-21.9457,x:136.05,y:40.55},0).wait(1).to({rotation:-17.6601,x:143.85,y:42.5},0).wait(1).to({rotation:-13.3745,x:151.7,y:44.7},0).wait(1).to({rotation:-9.0889,x:159.4,y:47.15},0).wait(1).to({rotation:-4.8032,x:167,y:49.9},0).wait(1).to({rotation:-0.5176,x:174.55,y:52.85},0).wait(1).to({rotation:3.768,x:182,y:56.05},0).wait(1).to({rotation:8.0536,x:189.3,y:59.4},0).wait(1).to({rotation:3.768,x:182,y:56.05},0).wait(1).to({rotation:-0.5176,x:174.6,y:52.8},0).wait(1).to({rotation:-4.8032,x:167.05,y:49.85},0).wait(1).to({rotation:-9.0889,x:159.4,y:47.1},0).wait(1).to({rotation:-13.3745,x:151.75,y:44.65},0).wait(1).to({rotation:-17.6601,x:143.9,y:42.45},0).wait(1).to({rotation:-21.9457,x:136.1,y:40.5},0).wait(1).to({rotation:-17.6601,x:143.9,y:42.45},0).wait(1).to({rotation:-13.3745,x:151.75,y:44.65},0).wait(1).to({rotation:-9.0889,x:159.45,y:47.1},0).wait(1).to({rotation:-4.8032,x:167.05,y:49.85},0).wait(1).to({rotation:-0.5176,x:174.6,y:52.8},0).wait(1).to({rotation:3.768,x:182.05,y:56},0).wait(1).to({rotation:8.0536,x:189.35,y:59.35},0).wait(1).to({rotation:1.8954,x:178.8,y:54.95},0).wait(1).to({rotation:-4.2627,x:167.95,y:50.95},0).wait(1).to({rotation:-10.4209,x:156.8,y:47.4},0).wait(1).to({rotation:-16.5791,x:145.6,y:44.45},0).wait(1).to({rotation:-22.7372,x:134.3,y:41.95},0).wait(1).to({rotation:-28.8954,x:122.9,y:40.1},0).wait(1).to({rotation:-23.6819,x:132.6,y:41.6},0).wait(1).to({rotation:-18.4685,x:142.2,y:43.55},0).wait(1).to({rotation:-13.255,x:151.8,y:45.9},0).wait(1).to({rotation:-8.0416,x:161.2,y:48.6},0).wait(1).to({rotation:-2.8281,x:170.5,y:51.65},0).wait(1).to({rotation:2.3854,x:179.7,y:55.05},0).wait(1).to({rotation:7.5988,x:188.6,y:58.8},0).wait(1).to({rotation:5.099,x:186.9,y:57.65},0).wait(1).to({rotation:2.5991,x:185.1,y:56.55},0).wait(1).to({rotation:0.0993,x:183.3,y:55.5},0).wait(1).to({rotation:-2.4006,x:181.45,y:54.6},0).wait(1).to({rotation:-4.9005,x:179.5,y:53.75},0).wait(1).to({rotation:-7.4003,x:177.6,y:53},0).wait(1).to({rotation:-3.6951,x:180.45,y:54.15},0).wait(1).to({rotation:0.0101,x:183.25,y:55.45},0).wait(1).to({rotation:3.7152,x:185.95,y:57},0).wait(1).to({rotation:7.4204,x:188.55,y:58.7},0).wait(1).to({rotation:11.1256,x:191,y:60.55},0).wait(1).to({rotation:14.8308,x:193.35,y:62.6},0).wait(1).to({rotation:12.3309,x:191.8,y:61.25},0).wait(1).to({rotation:9.831,x:190.15,y:59.9},0).wait(1).to({rotation:7.331,x:188.45,y:58.7},0).wait(1).to({rotation:4.8311,x:186.7,y:57.5},0).wait(1).to({rotation:2.3312,x:184.95,y:56.45},0).wait(1).to({rotation:-0.1687,x:183.1,y:55.4},0).wait(1).to({rotation:-0.1687},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-7.2,227.1,385.5);


(lib.הכל3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.CachedBmp_89();
	this.instance.setTransform(136.75,134.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_88();
	this.instance_1.setTransform(715.5,763.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_91();
	this.instance_2.setTransform(45.15,6.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_90();
	this.instance_3.setTransform(700.75,737.25,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_93();
	this.instance_4.setTransform(-20.55,-102.95,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_92();
	this.instance_5.setTransform(691,706.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_95();
	this.instance_6.setTransform(-49,-192.1,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_94();
	this.instance_7.setTransform(688.55,667.15,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_97();
	this.instance_8.setTransform(-35.2,-217.85,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_96();
	this.instance_9.setTransform(692.75,640.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_99();
	this.instance_10.setTransform(17.05,-215.25,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_98();
	this.instance_11.setTransform(703.9,608.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_101();
	this.instance_12.setTransform(110,-171.05,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_100();
	this.instance_13.setTransform(719.85,578.2,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_103();
	this.instance_14.setTransform(226.95,-94.6,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_104();
	this.instance_15.setTransform(740,554.65,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_105();
	this.instance_16.setTransform(226.95,-94.6,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_107();
	this.instance_17.setTransform(208.6,-107.5,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_106();
	this.instance_18.setTransform(773,531.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},79).to({state:[{t:this.instance_3},{t:this.instance_2}]},4).to({state:[{t:this.instance_5},{t:this.instance_4}]},3).to({state:[{t:this.instance_7},{t:this.instance_6}]},3).to({state:[{t:this.instance_9},{t:this.instance_8}]},3).to({state:[{t:this.instance_11},{t:this.instance_10}]},3).to({state:[{t:this.instance_13},{t:this.instance_12}]},3).to({state:[{t:this.instance_15},{t:this.instance_14}]},3).to({state:[{t:this.instance_15},{t:this.instance_16}]},3).to({state:[{t:this.instance_18},{t:this.instance_17}]},2).wait(3));

	// flash0_ai
	this.instance_19 = new lib.Tween77("synched",0);
	this.instance_19.setTransform(474.85,831.35);

	this.instance_20 = new lib.Tween32("synched",0);
	this.instance_20.setTransform(611.8,953.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3AWBQACgjgjgwIgIgLIAAAHIgBALIACATQACApgVARQgHgBgGgHQgFgHgBgIQgBgHACgZIAAgbIgBgPIgBgKIABgTIAAgoQgBgOACgkIAAgBQgBgPAAgVIgEgMIgPgfQgHgVAJgMQALgEALALIACgHQAGgDAHADQAHACAEAGQAFAIABASQABAVgBApQAFgBAGAEQAIAFADAIQAIAUgMAeIgDAHQAJAMATAUQAWAXAIANQgDAIgFAFQgFAEgEABQAJAPADAKQAIAUgGAPQgEAJgIAEQgFACgFAAQgDAAgEgCgA9mveQgDgGAAgOQgChGAHgiQAJgqAagxQAJgQAGgFQAMgKAMAEQAEADABAHQABAGgDAGIgOAUQgEAHgEAQIgJAdIgNAoQgFAYAEASQAWABAUAFIAGASQgEAJgRAGQgVAGgFAGIgJAPQgFAKgGACQgKAAgFgMgAdRwmQgHgCgHgLQgRgYgEgQQAAgPgCgJQgSgGgSgJQADANgFAOQgFANgLAJQgLgBgFgOQgEgKABgPQABgPgDgKQgFgNgLgBQgQANgWgEQgXgEgKgSQgFgIgCgMQgPgDgEgCQgGgDgJgKQgUgXAEgQQAHgNgBgHQAMgEAJAIQAIAHABAMIACAJQACAEAIACIACAAIAAgDQAEhIgZhCQAOgCAMgLQAbAdAkAUQgBgKAEgIQAFgJAIgFQAIgFAKABQAKABAIAGQARAOgCAkIgCAiQgCAUABANQADApAYAUQAHAGARAIQASAIAHAGQAMAKACAQQACAQgMAHIgGACIADARQAFAOARAVQgKATgLAAIgEAAg");
	this.shape.setTransform(899.0028,652.6941);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_19}]},62).to({state:[{t:this.shape},{t:this.instance_20}]},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:639.2,y:742.1},62).to({_off:true},1).wait(46));

	// flash0_ai
	this.instance_21 = new lib.Tween33("synched",0);
	this.instance_21.setTransform(863.9,684.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(109));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-217.8,1811,1803.5);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PuppetShape_13copy3("synched",1,false);
	this.instance.setTransform(-95.45,28.5,0.5,0.5,0,0,0,127,70.5);

	this.instance_1 = new lib.CachedBmp_64();
	this.instance_1.setTransform(-164.7,-88.7,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-88.7,329.2,177.5);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PuppetShape_12copy("synched",1,false);
	this.instance.setTransform(-95.45,28.5,0.5,0.5,0,0,0,127,70.5);

	this.instance_1 = new lib.CachedBmp_63();
	this.instance_1.setTransform(-164.7,-88.7,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-88.7,329.2,177.5);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PuppetShape_13copy2("synched",1,false);
	this.instance.setTransform(-95.45,28.5,0.5,0.5,0,0,0,127,70.5);

	this.instance_1 = new lib.CachedBmp_62();
	this.instance_1.setTransform(-164.7,-88.7,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-88.7,329.2,177.5);


(lib.Scene_1_מציעהחישוק = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// מציעהחישוק
	this.instance = new lib.מציעה();
	this.instance.setTransform(280.6,284.85,1,1,0,0,0,211.5,254.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2B993").s().p("EgufArVMAAAhWqMBc/AAAMAAABWqg");
	this.shape.setTransform(429.489,384.0801,1.4431,1.3845);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},234).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_קשקש = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// קשקש
	this.instance = new lib.כבלב();
	this.instance.setTransform(409.6,587.55,0.5293,0.5293,0,0,0,104,188.6);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(0.25,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},150).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_flash0_ai_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.הכל3();
	this.instance.setTransform(211.55,467.8,1,1,0,0,0,646.1,758.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(679).to({_off:false},0).wait(110));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.מציעהתקריב = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(164.45,88.75);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(164.45,88.75);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(164.45,88.75);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(164.45,88.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_3}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true},20).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},20).to({_off:true},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.1,329.2,177.4);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.באה3();
	this.instance.setTransform(66.7,152.6,2.2429,2.2429,0,0,0,43.3,80.9);

	this.instance_1 = new lib.CachedBmp_68();
	this.instance_1.setTransform(-53687091.2,-53687091.2,0.5,0.5);

	this.instance_2 = new lib.מציעהתקריב();
	this.instance_2.setTransform(-105.4,146.5,2.4513,2.4513,0,0,0,164.5,88.9);

	this.instance_3 = new lib.CachedBmp_67();
	this.instance_3.setTransform(-350.3,-383.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2147483.6,-2147483.6,2147992.3000000003,2147867.7);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.באה2();
	this.instance.setTransform(63.95,188.75,1,1,0,0,0,79,145.2);

	this.instance_1 = new lib.מציעהתקריב();
	this.instance_1.setTransform(-105.4,146.5,2.4513,2.4513,0,0,0,164.5,88.9);

	this.instance_2 = new lib.CachedBmp_66();
	this.instance_2.setTransform(-350.3,-383.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.7,-383.9,1017.4,768);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.באה();
	this.instance.setTransform(63.45,202.85,1,1,0,0,0,55.7,130.8);

	this.instance_1 = new lib.מציעהתקריב();
	this.instance_1.setTransform(-105.4,146.5,2.4513,2.4513,0,0,0,164.5,88.9);

	this.instance_2 = new lib.CachedBmp_65();
	this.instance_2.setTransform(-350.3,-383.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.7,-383.9,1017.4,768);


(lib.Scene_1_מציעהתקריב = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// מציעהתקריב
	this.instance = new lib.מציעהתקריב();
	this.instance.setTransform(369.35,364.75,2.4513,2.4513,0,0,0,164.5,88.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2B993").s().p("EgufArWMAAAhWrMBc/AAAMAAABWrg");
	this.shape.setTransform(429.4981,384.1215,1.4431,1.3842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},294).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_באה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// באה
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(350.3,384);
	this.instance._off = true;

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(350.3,384);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.setTransform(350.3,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},354).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},17).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(354).to({_off:false},0).to({_off:true},15).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(354).to({_off:false},15).to({_off:true},17).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.אנימציהתוליעצםהעניין = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,907];
	this.streamSoundSymbolsList[0] = [{id:"morningfunnybeat7741",startFrame:0,endFrame:908,loop:1,offset:0}];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("morningfunnybeat7741",0);
		this.InsertIntoSoundStreamData(soundInstance,0,908,1);
		this.start = this.flash0_ai.start;
		var self = this;  
		self.stop(); 
		
		self.start.addEventListener("click", startPlaying);
		
		function startPlaying()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.start = undefined;
	}
	this.frame_907 = function() {
		this.replay = this.flash0_ai.replay;
		this.___loopingOver___ = true;
		var self = this;
		self.stop(); 
		
		self.replay.addEventListener("click", playAgain);
		
		function playAgain()
		{	
			self.gotoAndPlay(1); 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(906).call(this.frame_907).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(429.55,384.1,0.989,0.989,0,0,0,0,0.1);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:0.1,regY:0.2,scaleX:0.8135,scaleY:0.8135,x:429.65,y:384.15},1).to({regY:0.1,scaleX:0.998,scaleY:0.998,y:384.1},118).to({regY:0.2,scaleX:0.8307,scaleY:0.8307,x:429.6,y:384.2},30).to({scaleX:0.9938,scaleY:0.9938},2).to({regX:0.3,regY:0.4,scaleX:0.6859,scaleY:0.6859,x:416.2,y:494.85},82).to({regX:0.6,regY:0.6,scaleX:0.7171,scaleY:0.7171,x:410.45,y:369.3},1).to({regY:0.7,scaleX:0.9936,scaleY:0.9936,x:424.75,y:390.25},35).wait(520).to({regX:0.7,regY:0.8,scaleX:0.5886,scaleY:0.5886,x:431.5,y:512.55},117).to({regX:0.9,regY:1.1,scaleX:0.9879,scaleY:0.9879,x:430.1,y:387.7},1).wait(1));

	// flash0_ai_obj_
	this.flash0_ai = new lib.Scene_1_flash0_ai();
	this.flash0_ai.name = "flash0_ai";
	this.flash0_ai.setTransform(429.2,384.3,1.0112,1.0112,0,0,0,429.2,384.2);
	this.flash0_ai.depth = 0;
	this.flash0_ai.isAttachedToCamera = 0
	this.flash0_ai.isAttachedToMask = 0
	this.flash0_ai.layerDepth = 0
	this.flash0_ai.layerIndex = 0
	this.flash0_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flash0_ai).wait(1).to({regX:429.3,scaleX:1.2293,scaleY:1.2293},0).wait(906).to({regX:428.9,regY:386.9,scaleX:1.0122,scaleY:1.0122,x:429.25,y:384.35},0).wait(1));

	// flash0_ai_obj_
	this.flash0_ai_1 = new lib.Scene_1_flash0_ai_1();
	this.flash0_ai_1.name = "flash0_ai_1";
	this.flash0_ai_1.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.flash0_ai_1.depth = 0;
	this.flash0_ai_1.isAttachedToCamera = 0
	this.flash0_ai_1.isAttachedToMask = 0
	this.flash0_ai_1.layerDepth = 0
	this.flash0_ai_1.layerIndex = 1
	this.flash0_ai_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flash0_ai_1).wait(234).to({regX:102,regY:93.5,scaleX:1.3945,scaleY:1.3945,y:0.1},0).wait(555).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(119));

	// flash0_ai_obj_
	this.flash0_ai_2 = new lib.Scene_1_flash0_ai_2();
	this.flash0_ai_2.name = "flash0_ai_2";
	this.flash0_ai_2.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.flash0_ai_2.depth = 0;
	this.flash0_ai_2.isAttachedToCamera = 0
	this.flash0_ai_2.isAttachedToMask = 0
	this.flash0_ai_2.layerDepth = 0
	this.flash0_ai_2.layerIndex = 2
	this.flash0_ai_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flash0_ai_2).wait(234).to({regX:102,regY:93.5,scaleX:1.3945,scaleY:1.3945,y:0.1},0).wait(445).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).to({_off:true},110).wait(119));

	// מקבלת_עצם_obj_
	this.מקבלת_עצם = new lib.Scene_1_מקבלת_עצם();
	this.מקבלת_עצם.name = "מקבלת_עצם";
	this.מקבלת_עצם.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.מקבלת_עצם.depth = 0;
	this.מקבלת_עצם.isAttachedToCamera = 0
	this.מקבלת_עצם.isAttachedToMask = 0
	this.מקבלת_עצם.layerDepth = 0
	this.מקבלת_עצם.layerIndex = 3
	this.מקבלת_עצם.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.מקבלת_עצם).wait(234).to({regX:102,regY:93.5,scaleX:1.3945,scaleY:1.3945,y:0.1},0).wait(374).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(4).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(8).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(1).to({regX:545.4,regY:384.1,scaleX:1,scaleY:1,x:547.9,y:376.15},0).wait(10).to({_off:true},1).wait(229));

	// הולכת_obj_
	this.הולכת = new lib.Scene_1_הולכת();
	this.הולכת.name = "הולכת";
	this.הולכת.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.הולכת.depth = 0;
	this.הולכת.isAttachedToCamera = 0
	this.הולכת.isAttachedToMask = 0
	this.הולכת.layerDepth = 0
	this.הולכת.layerIndex = 4
	this.הולכת.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.הולכת).wait(234).to({regX:102,regY:93.5,scaleX:1.3945,scaleY:1.3945,y:0.1},0).wait(281).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).to({_off:true},93).wait(300));

	// קופצת_obj_
	this.קופצת = new lib.Scene_1_קופצת();
	this.קופצת.name = "קופצת";
	this.קופצת.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.קופצת.depth = 0;
	this.קופצת.isAttachedToCamera = 0
	this.קופצת.isAttachedToMask = 0
	this.קופצת.layerDepth = 0
	this.קופצת.layerIndex = 5
	this.קופצת.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.קופצת).wait(234).to({regX:102,regY:93.5,scaleX:1.3945,scaleY:1.3945,y:0.1},0).wait(165).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).to({_off:true},116).wait(393));

	// באה_obj_
	this.באה = new lib.Scene_1_באה();
	this.באה.name = "באה";
	this.באה.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.באה.depth = 0;
	this.באה.isAttachedToCamera = 0
	this.באה.isAttachedToMask = 0
	this.באה.layerDepth = 0
	this.באה.layerIndex = 6
	this.באה.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.באה).wait(234).to({regX:102,regY:93.5,scaleX:1.3945,scaleY:1.3945,y:0.1},0).wait(120).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).wait(32).to({_off:true},13).wait(509));

	// מציעהתקריב_obj_
	this.מציעהתקריב = new lib.Scene_1_מציעהתקריב();
	this.מציעהתקריב.name = "מציעהתקריב";
	this.מציעהתקריב.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.מציעהתקריב.depth = 0;
	this.מציעהתקריב.isAttachedToCamera = 0
	this.מציעהתקריב.isAttachedToMask = 0
	this.מציעהתקריב.layerDepth = 0
	this.מציעהתקריב.layerIndex = 7
	this.מציעהתקריב.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.מציעהתקריב).wait(234).to({regX:102,regY:93.5,scaleX:1.3945,scaleY:1.3945,y:0.1},0).wait(60).to({regX:-2.6,regY:8,scaleX:1.0065,scaleY:1.0065,x:-0.05,y:0},0).to({_off:true},60).wait(554));

	// מציעהחישוק_obj_
	this.מציעהחישוק = new lib.Scene_1_מציעהחישוק();
	this.מציעהחישוק.name = "מציעהחישוק";
	this.מציעהחישוק.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.מציעהחישוק.depth = 0;
	this.מציעהחישוק.isAttachedToCamera = 0
	this.מציעהחישוק.isAttachedToMask = 0
	this.מציעהחישוק.layerDepth = 0
	this.מציעהחישוק.layerIndex = 8
	this.מציעהחישוק.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.מציעהחישוק).wait(234).to({regX:102,regY:93.5,scaleX:1.3945,scaleY:1.3945,y:0.1},0).to({_off:true},60).wait(614));

	// קשקש_obj_
	this.קשקש = new lib.Scene_1_קשקש();
	this.קשקש.name = "קשקש";
	this.קשקש.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.קשקש.depth = 0;
	this.קשקש.isAttachedToCamera = 0
	this.קשקש.isAttachedToMask = 0
	this.קשקש.layerDepth = 0
	this.קשקש.layerIndex = 9
	this.קשקש.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.קשקש).wait(150).to({regX:72.7,regY:65,scaleX:1.2038,scaleY:1.2038,x:0,y:-0.05},0).to({_off:true},84).wait(674));

	// כוכבים_obj_
	this.כוכבים = new lib.Scene_1_כוכבים();
	this.כוכבים.name = "כוכבים";
	this.כוכבים.setTransform(0.05,0.05,1.0112,1.0112,0,0,0,4.8,4.2);
	this.כוכבים.depth = 0;
	this.כוכבים.isAttachedToCamera = 0
	this.כוכבים.isAttachedToMask = 0
	this.כוכבים.layerDepth = 0
	this.כוכבים.layerIndex = 10
	this.כוכבים.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.כוכבים).wait(120).to({regX:0.9,regY:0.8,scaleX:1.002,scaleY:1.002,x:0},0).wait(29).to({regX:72.7,regY:65,scaleX:1.2038,scaleY:1.2038,y:-0.05},0).to({_off:true},1).wait(758));

	// ילדה_obj_
	this.ילדה = new lib.Scene_1_ילדה();
	this.ילדה.name = "ילדה";
	this.ילדה.setTransform(-96,584.2,1.0112,1.0112,0,0,0,-90.2,581.9);
	this.ילדה.depth = 0;
	this.ילדה.isAttachedToCamera = 0
	this.ילדה.isAttachedToMask = 0
	this.ילדה.layerDepth = 0
	this.ילדה.layerIndex = 11
	this.ילדה.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ילדה).to({regX:2,regY:546.8,scaleX:1.2293,scaleY:1.2293,x:-96.05,y:584.15},118).to({_off:true},2).wait(788));

	// יד_obj_
	this.יד = new lib.Scene_1_יד();
	this.יד.name = "יד";
	this.יד.setTransform(-44.05,543.85,1.0112,1.0112,0,0,0,-38.8,542);
	this.יד.depth = 0;
	this.יד.isAttachedToCamera = 0
	this.יד.isAttachedToMask = 0
	this.יד.layerDepth = 0
	this.יד.layerIndex = 12
	this.יד.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.יד).wait(1).to({regX:112.3,regY:512.8,scaleX:1,scaleY:1,x:107.1,y:514.65},0).wait(118).to({regX:-43.1,regY:543.5,scaleX:1.002,scaleY:1.002,x:-44.1,y:543.85},0).to({_off:true},1).wait(788));

	// תולי_obj_
	this.תולי = new lib.Scene_1_תולי();
	this.תולי.name = "תולי";
	this.תולי.setTransform(422.4,627.95,1.0112,1.0112,0,0,0,422.5,625.2);
	this.תולי.depth = 0;
	this.תולי.isAttachedToCamera = 0
	this.תולי.isAttachedToMask = 0
	this.תולי.layerDepth = 0
	this.תולי.layerIndex = 13
	this.תולי.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.תולי).to({_off:true},120).wait(788));

	// רקע_obj_
	this.רקע = new lib.Scene_1_רקע();
	this.רקע.name = "רקע";
	this.רקע.setTransform(429.2,384.3,1.0112,1.0112,0,0,0,429.2,384.2);
	this.רקע.depth = 0;
	this.רקע.isAttachedToCamera = 0
	this.רקע.isAttachedToMask = 0
	this.רקע.layerDepth = 0
	this.רקע.layerIndex = 14
	this.רקע.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.רקע).to({_off:true},120).wait(788));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2147054.1,-2147099.6,2148155.3000000003,2148179.2);
// library properties:
lib.properties = {
	id: '01DF0CE2F7730A4D92E3D39F59F65E69',
	width: 859,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_107.png?1658909244278", id:"CachedBmp_107"},
		{src:"images/CachedBmp_105.png?1658909244278", id:"CachedBmp_105"},
		{src:"images/CachedBmp_103.png?1658909244278", id:"CachedBmp_103"},
		{src:"images/CachedBmp_101.png?1658909244278", id:"CachedBmp_101"},
		{src:"images/CachedBmp_99.png?1658909244278", id:"CachedBmp_99"},
		{src:"images/CachedBmp_97.png?1658909244278", id:"CachedBmp_97"},
		{src:"images/CachedBmp_95.png?1658909244278", id:"CachedBmp_95"},
		{src:"images/CachedBmp_93.png?1658909244278", id:"CachedBmp_93"},
		{src:"images/CachedBmp_91.png?1658909244278", id:"CachedBmp_91"},
		{src:"images/CachedBmp_89.png?1658909244278", id:"CachedBmp_89"},
		{src:"images/CachedBmp_72.png?1658909244278", id:"CachedBmp_72"},
		{src:"images/CachedBmp_25.png?1658909244278", id:"CachedBmp_25"},
		{src:"images/CachedBmp_24.png?1658909244278", id:"CachedBmp_24"},
		{src:"images/CachedBmp_23.png?1658909244278", id:"CachedBmp_23"},
		{src:"images/CachedBmp_22.png?1658909244278", id:"CachedBmp_22"},
		{src:"images/CachedBmp_21.png?1658909244278", id:"CachedBmp_21"},
		{src:"images/CachedBmp_20.png?1658909244278", id:"CachedBmp_20"},
		{src:"images/CachedBmp_19.png?1658909244278", id:"CachedBmp_19"},
		{src:"images/CachedBmp_18.png?1658909244278", id:"CachedBmp_18"},
		{src:"images/CachedBmp_17.png?1658909244278", id:"CachedBmp_17"},
		{src:"images/CachedBmp_16.png?1658909244278", id:"CachedBmp_16"},
		{src:"images/CachedBmp_15.png?1658909244278", id:"CachedBmp_15"},
		{src:"images/CachedBmp_14.png?1658909244278", id:"CachedBmp_14"},
		{src:"images/CachedBmp_13.png?1658909244278", id:"CachedBmp_13"},
		{src:"images/CachedBmp_12.png?1658909244278", id:"CachedBmp_12"},
		{src:"images/CachedBmp_11.png?1658909244278", id:"CachedBmp_11"},
		{src:"images/אנימציה תולי עצם העניין_atlas_1.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_1"},
		{src:"images/אנימציה תולי עצם העניין_atlas_2.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_2"},
		{src:"images/אנימציה תולי עצם העניין_atlas_3.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_3"},
		{src:"images/אנימציה תולי עצם העניין_atlas_4.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_4"},
		{src:"images/אנימציה תולי עצם העניין_atlas_5.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_5"},
		{src:"images/אנימציה תולי עצם העניין_atlas_6.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_6"},
		{src:"images/אנימציה תולי עצם העניין_atlas_7.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_7"},
		{src:"images/אנימציה תולי עצם העניין_atlas_8.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_8"},
		{src:"images/אנימציה תולי עצם העניין_atlas_9.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_9"},
		{src:"images/אנימציה תולי עצם העניין_atlas_10.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_10"},
		{src:"images/אנימציה תולי עצם העניין_atlas_11.png?1658909243924", id:"אנימציה תולי עצם העניין_atlas_11"},
		{src:"images/אנימציה תולי עצם העניין_atlas_12.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_12"},
		{src:"images/אנימציה תולי עצם העניין_atlas_13.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_13"},
		{src:"images/אנימציה תולי עצם העניין_atlas_14.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_14"},
		{src:"images/אנימציה תולי עצם העניין_atlas_15.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_15"},
		{src:"images/אנימציה תולי עצם העניין_atlas_16.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_16"},
		{src:"images/אנימציה תולי עצם העניין_atlas_17.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_17"},
		{src:"images/אנימציה תולי עצם העניין_atlas_18.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_18"},
		{src:"images/אנימציה תולי עצם העניין_atlas_19.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_19"},
		{src:"images/אנימציה תולי עצם העניין_atlas_20.png?1658909243925", id:"אנימציה תולי עצם העניין_atlas_20"},
		{src:"images/אנימציה תולי עצם העניין_atlas_21.png?1658909243928", id:"אנימציה תולי עצם העניין_atlas_21"},
		{src:"images/אנימציה תולי עצם העניין_atlas_22.png?1658909243928", id:"אנימציה תולי עצם העניין_atlas_22"},
		{src:"images/אנימציה תולי עצם העניין_atlas_23.png?1658909243928", id:"אנימציה תולי עצם העניין_atlas_23"},
		{src:"images/אנימציה תולי עצם העניין_atlas_24.png?1658909243928", id:"אנימציה תולי עצם העניין_atlas_24"},
		{src:"images/אנימציה תולי עצם העניין_atlas_25.png?1658909243929", id:"אנימציה תולי עצם העניין_atlas_25"},
		{src:"images/אנימציה תולי עצם העניין_atlas_26.png?1658909243929", id:"אנימציה תולי עצם העניין_atlas_26"},
		{src:"images/אנימציה תולי עצם העניין_atlas_27.png?1658909243931", id:"אנימציה תולי עצם העניין_atlas_27"},
		{src:"sounds/morningfunnybeat7741.mp3?1658909244278", id:"morningfunnybeat7741"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['01DF0CE2F7730A4D92E3D39F59F65E69'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;