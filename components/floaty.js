AFRAME.registerComponent('floaty', {
    schema: {
      amplitude: { type: 'number', default: 0.2 },
      speed: { type: 'number', default: 1 }  // cycles per second
    },
  
    init: function () {
      this.startY = this.el.object3D.position.y;
      this.elapsed = 0;
    },
  
    tick: function (time, deltaTime) {
      this.elapsed += deltaTime / 1000; // convert ms to seconds
      const floatY = this.startY + Math.sin(this.elapsed * this.speed * Math.PI * 2) * this.data.amplitude;
      this.el.object3D.position.y = floatY;
    }
  });