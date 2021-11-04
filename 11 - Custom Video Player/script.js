const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// switch play mode or pause mode
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
// change toggle button icon
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
// skip 25s or -10s
function skip() {
  video.currentTime += +this.dataset.skip;
}
// range cordinate value set range name
function handleRangeUpdate() {
  video[this.name] = this.value;
}
// when click skip button scrollbar filled
function handleProgress() {
  const present = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${present}%`;
}
// mousemove or click progresbar playing current time
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener('mousemove', handleRangeUpdate)
);
// mouse move work when click progress item and moving
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
