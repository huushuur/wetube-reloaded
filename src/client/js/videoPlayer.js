const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayClick = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.paused ? "Play" : "Pause";
};

const handleMute = (e) => {
  if (video.muted) {
    video.muted = false;
    video.volume = volumeValue;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  if (value == 0) {
    video.muted = true;
    muteBtn.innerText = "Unmute";
  }
  video.volume = value;
};

const formatTime = (seconds) => {
  const time = new Date(seconds * 1000)
    .toISOString()
    .substring(11, 19)
    .replace(/:/g, "");
  const timeStr = Number(time).toString().padStart(3, "0");

  const hour = timeStr.slice(-6, -4) + ":";
  const min = timeStr.slice(-4, -2) + ":";
  const sec = timeStr.slice(-2);

  if (seconds >= 3600) {
    return hour + min + sec;
  }
  return min + sec;
};

const handleChangeVolumeRange = (event) => {
  const {
    target: { value },
  } = event;
  if (value != 0) {
    volumeValue = value;
  }
};

const handleLoadedMetaData = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
};
const handleTimeUpdate = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleVolumeChange);
volumeRange.addEventListener("change", handleChangeVolumeRange);
video.addEventListener("loadedmetadata", handleLoadedMetaData);
video.addEventListener("timeupdate", handleTimeUpdate);
