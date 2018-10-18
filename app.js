// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);


//My axis orientation
    var grid = document.getElementById("grid");
    var axis = document.getElementById("axis");

        /*broke the code... */
        //DeviceMOTION needed for gravity eval
        window.addEventListener("devicemotion", function(event) {
          // again, use vendor-prefixed transform property
          grid.style.transform = 
              "rotate(" + ( 90-calcAngle(event.accelerationIncludingGravity.x,event.accelerationIncludingGravity.y) ) + "deg) ";
            
          axis.style.transform = 
              "rotate(" + ( 180-calcAngle(event.accelerationIncludingGravity.x,event.accelerationIncludingGravity.y) ) + "deg) ";
        });