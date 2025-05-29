AFRAME.registerComponent('animation-toggle', {
  init() {
    this.el.addEventListener('click', () => {
      const briefcaseEntity = this.el.children[0];
      const currentClip = briefcaseEntity.getAttribute('animation-mixer').clip;
      const newClip = currentClip === '*closed*' ? '*open*' : '*closed*';
      briefcaseEntity.setAttribute('animation-mixer', 'clip', newClip);

      // Toggle the photo visibility
      const photo = document.querySelector('#popup-photo');
      const isVisible = photo.getAttribute('visible');
      photo.setAttribute('visible', !isVisible);
      this.el.remove;
    });
  }
});