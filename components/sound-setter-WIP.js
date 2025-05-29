AFRAME.registerComponent("sound-setter", {
    init: function () {
      const media = this.el;
      const music = ["fireplace.mp3", "luxury-jazz-loop-312713.mp3", "rain-sound-272604.mp3"]

      // Toggle next
      media.setAttribute("src", {
        url: music[i]      
    });}});


      sound="src: url(luxury-jazz-loop-312713.mp3); autoplay: false; on: click"



      AFRAME.registerComponent('sound-toggle', {
    isPlaying:true, 

  init() {
    this.el.addEventListener('click', () => {
   var entity = document.querySelector('[sound]');
if(this.isPlaying){
    entity.components.sound.pauseSound();
    this.isPlaying=false
}
    
else {
    entity.components.sound.playSound();
    this.isPlaying=true;
}
    });
  }
});

