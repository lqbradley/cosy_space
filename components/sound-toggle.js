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

