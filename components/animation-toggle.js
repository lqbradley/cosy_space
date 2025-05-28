AFRAME.registerComponent('animation-toggle', {
  init() {
    this.el.addEventListener('click', () => {
      const clip = this.el.getAttribute('animation-mixer').clip;  // could be "*closed*"
      const newClip = clip === '*closed*' ? '*open*' : '*closed*';
      this.el.setAttribute('animation-mixer', 'clip', newClip);

    });
  }
});
