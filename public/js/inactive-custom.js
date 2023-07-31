const naoVideoPresentation = document.getElementById('nao-video');
const videoButton = document.getElementById('video-btn');
const progRange = document.getElementById("prog-range");
const play = document.getElementById("play");
const pause = document.getElementById("pause");

let currentProgRange = 0;
let dragged = true;

pause.hidden = true;

// const handlePlayVideo = () => {
//     if (!play.hidden) {
//         // naoVideoPresentation.play();
//         player.playVideo();
//         play.hidden = true;
//         pause.hidden = false;
//     } else {
//         //  naoVideoPresentation.pause();
//         player.pauseVideo();
//         play.hidden = false;
//         pause.hidden = true;
//     }
// }
