AFRAME.registerComponent('sound-toggle', {
    isPlaying:true, 

  init() {
    this.el.addEventListener('click', () => {
   var entity = document.querySelector('[sound]');
    //   const clip = this.el.getAttribute('sound').on;  // could be "on" or "off"
    //   const newClip = clip === 'null' ? 'click' : 'null';
    //   this.el.setAttribute('sound', 'on', newClip);
// if(entity.components.sound.on.click){
//     entity.components.sound.pauseSound();}
// else {
//     entity.components.sound.playSound();
// }
//     });
//   }
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

