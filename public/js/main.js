// variable to store our three.js scene:
let glScene;
let currentTheme = 0;

function createScene() {
    // initialize three.js scene
    console.log("creating three.js scene");
    glScene = new Scene(window.innerWidth, window.innerHeight, "#535353");
}

// called after audio and gltf assets are loaded
// should load it when the web is loaded 
function onLoadingFinished() {

    // change the div states
    document.getElementById("info").style.display = "none";
    document.getElementById("main").style.display = "block";
    playafter30mins();
}

function playafter30mins() {
    Play();

    // play the video file after 5 seconds
    // time stamp should be from doug  
    setTimeout(() => {
        const videoFile = document.getElementById("videoFile");
        const videoFileLeft = document.getElementById("videoFileLeft");
        const videoFileLeft2 = document.getElementById("videoFileLeft2");
        const videoFileLeft3 = document.getElementById("videoFileLeft3");
        videoFile.play();
        videoFile.muted = true; // mute audio 

        videoFile.addEventListener("play", function () {
            this.currentTime = 3;

        }, false);

        videoFileLeft.play();
        videoFileLeft.muted = true; // mute audio 
        videoFileLeft.addEventListener("play", function () {
            this.currentTime = 3;

        }, false);

        videoFileLeft2.play();
        videoFileLeft2.muted = true; // mute audio 
        videoFileLeft2.addEventListener("play", function () {
            this.currentTime = 3;

        }, false);
        videoFileLeft3.play();
        videoFileLeft3.muted = true; // mute audio 
        videoFileLeft3.addEventListener("play", function () {
            this.currentTime = 3;

        }, false);

    }, 1000);//5000
    // rotate the camera view on each theme
    const duration = 1000;//3000
    const easing = TWEEN.Easing.Cubic.InOut;

    // theme 1: left
    setTimeout(() => {
        currentTheme = 1;
        new TWEEN.Tween(glScene.initCamera.rotation).to({ y: THREE.Math.degToRad(90) }, duration).easing(easing).start();
    }, 400);//40000

    // theme 2: front

    setTimeout(() => {
        currentTheme = 2;
        new TWEEN.Tween(glScene.initCamera.rotation).to({ y: THREE.Math.degToRad(0) }, duration).easing(easing).start();
    }, 65000);//65000

    // theme 3: right

    setTimeout(() => {
        currentTheme = 3;
        new TWEEN.Tween(glScene.initCamera.rotation).to({ y: THREE.Math.degToRad(-90) }, duration).easing(easing).start();
    }, 175000);//175000


}
//when the loading finished, dont play the audio file until the previous audio is played 
// play the audio file
// load the model while listening to the audioplayer 

// everything starts from here
// 1. below listener function is called
// 2. trackMain() function is called
// 3. createScene() function is called
// 4. onLoadingFinished() function is called
document.addEventListener('DOMContentLoaded', () => {
    auidoandvideo();
})



function onlyexperience() {

    const videoContainer = document.getElementById("videoContainer");
    videoContainer.style.display = "block";
    // videoContainer.scrollIntoView({ behavior: "smooth" }); // auto scroll to bottom
    trackerMain();
}
//original function 

function auidoandvideo() {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.addEventListener("ended", function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        audioPlayer.src = "";         // make it no longer playable
        const videoContainer = document.getElementById("videoContainer");
        videoContainer.style.display = "block";
        videoContainer.scrollIntoView({ behavior: "smooth" }); // auto scroll to bottom
        trackerMain();
    });
}