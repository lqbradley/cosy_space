AFRAME.registerComponent('face-camera', {
    tick: function () {
      const camera = document.querySelector('[camera]');
      if (!camera) return;

      const camPosition = camera.object3D.position;
      this.el.object3D.lookAt(camPosition);
    }
  });