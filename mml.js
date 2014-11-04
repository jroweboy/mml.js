mmlToPlay = "abcdefg";

MIDI.loadPlugin(test);

var test;
function test(){
    console.log("instrument loaded");
    test = MML(mmlToPlay);
    test.parse();
    test.play();
};

var note = function(note, octave, velocity, delay) {
    return {
        note: MIDI.keyToNote[note.toUpperCase()+octave],
        velocity: velocity,
        delay: delay
    };
}

// takes note length as follows 1 = whole note 2 = half note 4 = quarter note etc
// tempo is defined in Beats Per Minute and hasDot is whether the note is dotted
function getDelay(note_length, tempo, hasDot){
    if (hasDot) {
        return (4 / note_length + 4 / (note_length*2)) / (tempo / 60);
    } else {
        return 4 / note_length / (tempo / 60)
    }
}


var MML = function(text) {
    return {
        input: text.toLowerCase(),
        //instrument_loaded: false,
        //midi:,
        output: [],
        parse: function() {
            var input = this.input;
            len = input.length;
            i = 0;
            // defaults that archeage uses if the user doesn't add them into the song
            note_length = 4;
            tempo = 120;
            volume = 100;
            // NOTE: archeage in game makes c5 sound like c4 so if you want a song to
            // sound the same, you need to raise the octave up one in game. Its weird like that
            // Archeage defaults to o5 which sounds like o4 for every other program
            octave = 5;
            //this.output = [];
            // too lame to tokenize. just going to do a single pass iteration with look ahead and call it a day
            while (i < len) {
                // switch based on character
                if (input[i] >= 'a' && input[i] <= 'g'){
                    // this is a playable note. TODO Lets check for and grab a length if its there
                    this.output.push(note(input[i], octave, 100, getDelay(note_length, tempo, false)));
                    i++;
                }
            }
        },
        play: function() {
            //if (!midi.instrument_loaded) {
            //    console.log("waiting for the instrumnet to load")
            //    setTimeout(this.play, 100);
            //    return;
            //}
            if (this.output == null || this.output.length == 0) {
                console.log("No song has been parsed to play.");
                return;
            }

            console.log("Begin playing");
            for (i=0; i<this.output.length; ++i) {
                MIDI.noteOn(0, this.output[i].note, this.output[i].velocity, this.output[i].delay);
            }
            console.log("End playing");
        }
    };
}