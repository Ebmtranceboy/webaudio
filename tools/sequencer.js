
// here is my loadSample
// function that will load a sample
// from the sent URL and pass the 
// buffer back to the 'callback' function
// once it loads. 
function loadSample(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function(){
        var audioData = request.response;
        con.decodeAudioData(audioData, function(buffer) {
            console.log(buffer);
            callback(buffer);
        });
    };
    request.send();
}
