// fixing ampersand fixes this test case. Errors are
// d#2&d# should be the same note
// f+2&f should be a different note
// mmlToPlay = "c2&cd#2&d#r2e2&e-f+2&fg2&a";

// UNCOMMENT one of these to test a full song

// balamb garden
//mmlToPlay = "l8t86v127rc>e4d4c4.<c>e4d4c4.<c>e4d4c4<b>cdc2r<rc>e4d4c4.<c>e4d4c4.<c>e4d4c4<fc4a2.caefeae4caefeae4ag#a>dc#edf#egf#bac#de1r<ag#a>dc#edf#egf#bac#da1,<<f1f1f1f1f1f1f1>b>cdc2r<<f1f1d1d1>>c1<<d1d1>>c1";
// chocobo theme
//mmlToPlay = "t162v127l8<a+>d<g>dc-d<fb+ab+g>dc-d<fb+ab+g>dc-d<fb+ab+g>dc-d<fb+ab+g>dc-d<fb+ab+g>dc-d<fb+ab+g>dc-d<fb+,l32gb>dfa>cega4l8bge>d<bgb4g4b4.agg16a16gfg4.fgg16b16>def2d4<bge>d<bgb4g4b4.agg16a16gfg4.";
// lttp dark world -- TODO fix ampersand to get this one complete
// mmlToPlay = "T128V127L8o5cg2&gcg>cc16<a#16a2.fg4c2&cff16d#16d2.<a#>c1,o3>g>d#2&d#<g>d#gg16f16f2.dd#4<g#2&g#>dd16c16<a#2.gg1,o4r4ggg16g16gg4g4aaa16a16aa4g4ggg16g16gg4g4fff16f16ff4f4ggg16g16ga2a#a#a#16a#16a#>c2";
// sarias song
//mmlToPlay = "L8T140V127fab4fab4fab>ed4<b>c<bge2rdege2.fab4fab4fab>ed4<b>ce<bg2rbgde2.,O4V100faaafaaafaaafaaaegggeggdegggegggfaaafaaafaaafaaaegggeggdegggeggg";
// OoT Courtyard Theme
// mmlToPlay = "o5t125l8d+e<cc>f+g<gg>>>d+e<<cc>>f+g<<<a+a+g+aff>efcc>g+a<ff>>ef<<d+d+d+e<cc>f+g<gg>>>d+e<<cc>>f+g<<<a+a+>rv127ggggffffede16f16d4.&dr8d+d+d+d+dc<a>c+dcd16d+16c4.&cr8cccc<ba+ar8g+aa+b>cc+d,o5l8c-c<<cc>>d+e<<gg>>>>c-c<<<cc>>>d+e<<<<a+a+>ef<ff>>cd<cc>>ef<<ff>>>cd<<<d+d+>c-cr4d+e<<gg>>>>c-c<<<cc>>>d+e<<<<a+a+v80l1.g&g4.f+8f&f4d+8d8c&c4c8c8,o4v80l1.rrrrg&g4.f+8f&f4d+8d8c&c4c8c8";

// mmlToPlay = "MML@r1t182v127l8o4g+4ba+4f+f+g+&g+g+ba+4f+4&f+g+ba+bg+ba+b>d+<bg+>d+<bg+ba+a+f+d+f+a+>c+<a+f+g+g+r4a+a+r4>d+r<b>c+r<a+rbrg+ra+rf+4&f+>d+r<b>c+r<a+rbrg+ra+rf+4&f+>d+r<b>c+r<a+rbrg+ra+rf+4&f+>d+r<b>c+r<a+rbrbrbra+4&a+g+4&g+g+g+g+a+ba+g+g2fgg+4gg+a+4g+a+b4a+b>c+4r4c+4c+c+<g+4>c+4<bbbf+4b4&b>c+c+c+<g+4>c+4c+c+2c2c+c+ed+4<b4>c+&c+c+ed+4<b4&b>c+c+ed+4<b4>g+&g+f+4e4d+4&d+c+4ed+4<bb>c+&c+c+ed+4<b4&b>c+4ed+4c+<b>c+1,r1t182v127l8o3g+r8r2r4r1<g+g+g+g+g+g+g+g+eeeeeeeef+f+f+f+f+f+f+f+>c+c+r4d+d+r4<g+g+16r16g+16r16g+g+16r16g+16r16g+g+16r16g+16r16g+g+16r16g+16r16g+g+16r16f+f+16r16ee16r16e16r16ee16r16e16r16ee16r16e16r16ee16r16e16r16ee16r16f+f+16r16g+g+16r16g+16r16g+g+16r16g+16r16g+g+16r16g+16r16g+g+16r16g+16r16g+g+16r16f+f+16r16ee16r16e16r16ee16r16e16r16ee16r16e16r16ee16r16e16r16ee16r16f+4>ererererd+rd+rd+rd+r<g+2a+2b2>c+2c+4c+16r16c+16r16c+4c+4<bb16r16b16r16brb4raa16r16a16r16ara4ra2g+2>c+c+c+c+c+c+c+c+<aaaaaaaabbbbbbbb>eee<bbbbb>c+c+c+c+c+c+c+c+<aaaaaaaabbr2r4>;"

MIDI.loadPlugin({
    instruments: ["acoustic_grand_piano", "acoustic_guitar_nylon", "flute"],
    callback: loadComplete
});

if (window.loadComplete === undefined) {
    window.loadComplete = function loadComplete() {
        // what do I even put here lol
        // the person using the library should define this :p
        console.log("ready to play!");
    }
}

// If you want to inspect the state of the MML after its done, you can check the variable test in the console
// var test;
// function test_all(){
//     console.log("instrument loaded");
//     console.log("begin parsing");
//     test = MML(mmlToPlay);
//     console.log("end parsing");
//     console.log("begin playing");
//     test.play();
// };
// var buffer_facade = {stop: function(){console.log("stopping a note that never started?");}};
var Note = function(note, octave, velocity, duration) {
    return {
        note: MIDI.keyToNote[note+octave],
        velocity: velocity,
        duration: duration,
        buffer: null,
        play: function(delay, channel) {
            this.buffer = MIDI.noteOn(channel, this.note, this.velocity, delay);
            MIDI.noteOff(channel, this.note, delay+duration);
            return delay + this.duration;
        },
        stop: function() {
            if (this.buffer !== undefined && this.buffer !== null){
                this.buffer.stop();
            }
        }
    };
}

var Rest = function(duration){
    return {
        note: "r",
        duration: duration,
        play: function(delay) {
            return delay + this.duration;
        },
        stop: function(delay) {
            return delay + this.duration;
        }
    };
}

// takes note length as follows 1 = whole note 2 = half note 4 = quarter note etc
// tempo is defined in Beats Per Minute and hasDot is whether the note is dotted
function getDuration(note_length, tempo, hasDot){
    if (hasDot) {
        return (4 / note_length + 4 / (note_length*2)) / (tempo / 60);
    } else {
        return 4 / note_length / (tempo / 60)
    }
}


var MML = function(text) {
    a = {
        input: text.toLowerCase().replace(/#/g, '+'),
        output: {0:[], 1:[], 2:[]},
        parse: function() {
            var input = this.input;
            // first off, remove that silly MML@ at the start of some
            // since I don't want it tripping up the parser at the l
            if (input.lastIndexOf("mml@", 0) === 0){
                input = input.substring(4, input.length);
            }

            var len = input.length;
            // current position of the parser
            var i = 0;
            // which channel we are 
            var channel = 0;

            // NOTE: archeage in game makes c5 sound like c4 so if you want a song to
            // sound the same, you need to raise the octave up one in game. Its weird like that
            // Archeage defaults to o5 which sounds like o4 for every other program

            // defaults that archeage uses if the user doesn't add them into the song
            // I THINK (not sure) that these all get reset when processing the next line
            // i need to double check that
            var global_octave = 4;
            var global_note_length = 4;
            // TODO: Which vars are global and which is channel local? I can't seem to tell
            var tempo = 120;
            while (i < len) {
                // It looks like these are the only two vars that reset. 
                // Octave and note length appear to be "global"
                var volume = 100;
                // too lame to tokenize. just going to do a single pass iteration with look ahead and call it a day
                // In the future, I would LOVE to turn this into a state machine. It would be much nicer
                // Process one channel of sound up until a comma
                while (i < len && input[i] != ',') {
                    // switch based on character
                    if (input[i] == 'r' || (input[i] >= 'a' && input[i] <= 'g')) {
                        var override_length = "";
                        // store a copy of this in case we hit a & and need to see if we do anything special
                        var orig_note = input[i];
                        // and store the sharp/flat of the note as well
                        if (input[i+1] == '+' || input[i+1] == '-'){
                            orig_note += input[i+1];
                        }
                        var note = input[i].toUpperCase();
                        var hasDot = false;
                        // if a flat or sharp moves the octave I need to temporarily move the octave just for this note
                        var note_octave = global_octave;
                        // this is a playable note or a rest. Lets check for and grab a length if its there
                        // chars allowed: number #/-/+ . &
                        ++i;
                        if (input[i] == '+') {
                            //convert the sharps to flats cause thats what it expects
                            switch (note) {
                                case 'C':
                                    note = "Db";
                                    break;
                                case 'D':
                                    note = "Eb";
                                    break;
                                case 'E':
                                    note = "F";
                                    break;
                                case 'F':
                                    note = "Gb";
                                    break;
                                case 'G':
                                    note = "Ab";
                                    break;
                                case 'A':
                                    note = "Bb";
                                    break;
                                case 'B':
                                    note = "C";
                                    ++note_octave;
                                    break;
                            }
                            ++i;
                        } else if (input[i] == '-') {
                            //convert the sharps to flats cause thats what it expects
                            switch (note) {
                                case 'C':
                                    note = "B";
                                    --note_octave;
                                    break;
                                case 'D':
                                    note = "Db";
                                    break;
                                case 'E':
                                    note = "Eb";
                                    break;
                                case 'F':
                                    note = "E";
                                    break;
                                case 'G':
                                    note = "Gb";
                                    break;
                                case 'A':
                                    note = "Ab";
                                    break;
                                case 'B':
                                    note = "Bb";
                                    break;
                            }
                            ++i;
                        }
                        while (i < input.length && (input[i] >= '0' && input[i] <= '9') || input[i] == '.') {
                            if (input[i] == '.') {
                                hasDot = true;
                            } else {
                                override_length += input[i];
                            }
                            ++i;
                        }
                        // the & means to hold the note for the duration of this one as well
                        // BUT ONLY IF the two notes to hold are the same. Think of it as a slur
                        var ampersand_duration = 0;
                        while (input[i] == '&'){
                            ++i;
                            // if they are the same named note
                            if (input[i] == orig_note[0]){
                                // and have the same sharp/flat or lack thereof
                                if ((orig_note.length > 1 && orig_note[1] == input[i+1]) ||
                                    (orig_note.length == 1 && input[i+1] != '+' && input[i+1] != '-')) {
                                    // get the note length of this next note and add it to the duration
                                    i += orig_note.length;
                                    var ampersand_dot = false;
                                    var ampersand_length = "";
                                    while (i < input.length && (input[i] >= '0' && input[i] <= '9') || input[i] == '.') {
                                        if (input[i] == '.') {
                                            ampersand_dot = true;
                                        } else {
                                            ampersand_length += input[i];
                                        }
                                        ++i;
                                    }
                                    var parsed_len = parseInt(ampersand_length, 10);
                                    var ampersand_length = (parsed_len > 0) ? parsed_len : global_note_length;
                                    ampersand_duration += getDuration(ampersand_length, tempo, ampersand_dot);
                                }
                            }
                        }
                        var parsedlen = parseInt(override_length, 10);
                        var note_length = (parsedlen > 0) ? parsedlen : global_note_length;
                        if (note == 'R') {
                            this.output[channel].push(new Rest(getDuration(note_length, tempo, hasDot) + ampersand_duration));
                        } else {
                            this.output[channel].push(new Note(note, note_octave, volume, getDuration(note_length, tempo, hasDot) + ampersand_duration));
                        }
                    } else if (input[i] == 't') {
                        // set the tempo for this channel. Archeage is weird in that each channel gets its own tempo :p
                        var new_tempo = "";
                        ++i;
                        while (i < input.length && (input[i] >= '0' && input[i] <= '9')) {
                            new_tempo += input[i++];
                        }
                        if (new_tempo == "") {
                            // TODO better error handling
                            console.log("Syntax error. 'T' found without a number following");
                            this.output = {};
                            return;
                        }
                        tempo = parseInt(new_tempo, 10);
                    } else if (input[i] == 'o') {
                        // change the octave
                        var new_octave = "";
                        ++i;
                        while (i < input.length && (input[i] >= '0' && input[i] <= '9')) {
                            new_octave += input[i++];
                        }
                        if (new_octave == "") {
                            // TODO better error handling
                            console.log("Syntax error. 'O' found without a number following");
                            this.output = {};
                            return;
                        }
                        // welcome to archeage. It's octave is one higher than everything else
                        global_octave = parseInt(new_octave, 10) - 1;
                    } else if (input[i] == '<') {
                        --global_octave;
                        ++i;
                    } else if (input[i] == '>') {
                        ++global_octave;
                        ++i;
                    } else if (input[i] == 'l') {
                        // change the current note length
                        var new_note_len = "";
                        ++i;
                        while (i < input.length && (input[i] >= '0' && input[i] <= '9')) {
                            new_note_len += input[i++];
                        }
                        if (new_note_len == "") {
                            // TODO better error handling
                            console.log("Syntax error. 'L' found without a number following");
                            this.output = {};
                            return;
                        }
                        new_note_len = parseFloat(new_note_len, 10)
                        // the 'L' allows for dotted note lengths as well
                        if (input[i] == '.') {
                            // through the scientific method of "guess and check"
                            // this seems to be the correct dot length modifier
                            new_note_len *= 2.0 / 3.0;
                            ++i;
                        }

                        global_note_length = new_note_len;
                    } else if (input[i] == 'v') {
                        // change the current note volume
                        var new_volume = "";
                        ++i;
                        while (i < input.length && (input[i] >= '0' && input[i] <= '9')) {
                            new_volume += input[i++];
                        }
                        if (new_volume == "") {
                            // TODO better error handling
                            console.log("Syntax error. 'V' found without a number following");
                            this.output = {};
                            return;
                        }
                        if (new_volume < 0 || new_volume > 127) {
                            console.log("Logic error. 'V' must be a number between 0 and 127");
                            this.output = {};
                            return;
                        }
                        volume = parseInt(new_volume, 10);
                    } else if (input[i] == ',') {
                        // we are going to break out of this loop and add more to the next channel
                    } else if (input[i] == ';') {
                        // just ignore semicolons and get on with life
                        ++i;
                        continue;
                    } else {
                        console.log("Invalid token '"+input[i]+"' at position "+i+". Skipping it and hoping for the best");
                        // this.output = {};
                        // return;
                        ++i;
                        continue;
                    }
                }
                ++channel;
                ++i;
            }
        },
        play: function(instrument) {
            instrument = typeof instrument !== 'undefined' ? instrument : "acoustic_grand_piano";
            if (this.output == null || this.output.length == 0) {
                console.log("No song has been parsed to play.");
                return;
            }
            // var channel = 0;
            switch (instrument) {
            case "acoustic_grand_piano":
                MIDI.programChange(0, 0);
                MIDI.programChange(1, 0);
                MIDI.programChange(2, 0);
                break;
            case "acoustic_guitar_nylon":
                MIDI.programChange(0, 24);
                MIDI.programChange(1, 24);
                MIDI.programChange(2, 24);
                break;
            case "flute":
                MIDI.programChange(0, 73);
                MIDI.programChange(1, 73);
                MIDI.programChange(2, 73);
                break;
            }
            var start_delay = 5; // bad choice? I dunno...
            var end_delay = 0; 
            for (var i=0; i<3; ++i) {
                // so it looks like if I have a delay that is too small
                // it will start playing while it is still loading notes
                var delay = start_delay;
                if (this.output[i] == [] || this.output[i] == undefined) {
                    break;
                }
                for (var j = 0; j < this.output[i].length; ++j) {
                    // console.log("i|j: "+i+"|"+j+ " note: "+
                    //     MIDI.noteToKey[this.output[i][j].note] +
                    //     " dur: " + this.output[i][j].duration + 
                    //     " delay: " + delay );
                    delay = this.output[i][j].play(delay, i);
                }
                // at the end, we want to return when the song is over so lets return the 
                // delay of the longest channel time
                if (delay > end_delay) {
                    end_delay = delay;
                }
            }
            return end_delay;
        },
        stop: function() {
            // basically a ghetto play function that just calls stop instead of play
            // var start_delay = 5; 
            for (var i=0; i<3; ++i) {
                // var delay = start_delay;
                if (this.output[i] == [] || this.output[i] == undefined) {
                    break;
                }
                for (var j = 0; j < this.output[i].length; ++j) {
                    this.output[i][j].stop();
                }
            }
            MIDI.stopAllNotes();
            // the ugliest hack ever. MIDI.js holds onto old Audiobuffers even when I try to stop it
            // so I just reload everything completely. I need to write a refresh or something
            // that just invasively reloads the buffers without redownloading everything
            MIDI.loadPlugin({
                instruments: ["acoustic_grand_piano", "acoustic_guitar_nylon", "flute"],
                callback: loadComplete
            });
        }
    };
    a.parse();
    return a;
}