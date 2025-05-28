AFRAME.registerComponent('animation-toggle', {
  init() {
    this.el.addEventListener('click', () => {
      const clip = this.el.children[0].getAttribute('animation-mixer').clip;  // could be "*closed*"
      console.log('clip', clip)
      const newClip = clip === '*closed*' ? '*open*' : '*closed*';
      this.el.children[0].setAttribute('animation-mixer', 'clip', newClip);

    });
  }
});
