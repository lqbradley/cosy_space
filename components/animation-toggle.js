AFRAME.registerComponent('animation-toggle', {
  init() {
    this.el.addEventListener('click', () => {
      const briefcaseEntity = this.el.children[0];
      const currentClip = briefcaseEntity.getAttribute('animation-mixer').clip;
      const newClip = currentClip === '*closed*' ? '*open*' : '*closed*';
      briefcaseEntity.setAttribute('animation-mixer', 'clip', newClip);

      // Get all three photos by ID
      const photo1 = document.querySelector('#popup-photo1');
      const photo2 = document.querySelector('#popup-photo2');
      const photo3 = document.querySelector('#popup-photo3');

      const isVisible = photo1.getAttribute('visible');  // assume same for all

      if (!isVisible) {
        // Position photos in a triangle around the box
        const boxPos = this.el.object3D.position;

        // Left bottom
        photo1.object3D.position.set(boxPos.x - 1.2, boxPos.y + 1.5, boxPos.z);

        // Right bottom
        photo2.object3D.position.set(boxPos.x + 1.2, boxPos.y + 1.5, boxPos.z);

        // Center top (above the other two)
        photo3.object3D.position.set(boxPos.x, boxPos.y + 2.7, boxPos.z);
      }

      // Toggle visibility of all three
      photo1.setAttribute('visible', !isVisible);
      photo2.setAttribute('visible', !isVisible);
      photo3.setAttribute('visible', !isVisible);
    });
  }
});
