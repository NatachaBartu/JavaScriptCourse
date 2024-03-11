const video = document.querySelector(".webcam");

const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");

const faceCanvas = document.querySelector(".face");
const faceCtx = canvas.getContext("2d");

const faceDetector = new window.FaceDetector();

//write a functio that populate teh users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: 1280,
      height: 720,
    },
  });
  video.srcObject = stream;
  await video.play();

  //size the canvas to be equal as size as the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  faces.forEach(drawFace);

  //ask the browser when the next animation frame is, and tell it to run detect for us
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.strokeRect(left, top, width, height);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
}

populateVideo().then(detect);
