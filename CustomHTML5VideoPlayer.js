const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filler');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton(){
    const icon = this.paused ? 'play':'pause';
    toggle.textContent = icon;
}
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
  
}
function handleRangeUpdate()
{   video[this.name] = this.value;

}
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeUpdate',handleProgress);
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));
