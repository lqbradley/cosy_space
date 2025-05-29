AFRAME.registerComponent('random-walk', {
    schema: {
      speed: { type: 'number', default: 0.5 },  
      areaSize: { type: 'number', default: 5 }
    },

    init: function () {
      this.targetPos = new THREE.Vector3();
      this.isMoving = false;
      this.el.object3D.position.set(0, 0, 0);

      // Get animation mixer and clips from model
      this.mixer = null;
      this.walkAction = null;

      this.el.addEventListener('model-loaded', e => {
        const model = e.detail.model;
        if (model.animations && model.animations.length) {
          this.mixer = new THREE.AnimationMixer(model);
          // Find walk animation clip by name
          const walkClip = THREE.AnimationClip.findByName(model.animations, 'Walk') || model.animations[0];
          this.walkAction = this.mixer.clipAction(walkClip);
          this.walkAction.play();
          this.walkAction.paused = true;  // start paused
        }
      });

      this.pickNewTarget();
    },

    pickNewTarget: function () {
      const half = this.data.areaSize;
      this.targetPos.set(
        (Math.random() * 2 - 1) * half,
        this.el.object3D.position.y,
        (Math.random() * 2 - 1) * half
      );
      this.isMoving = true;

      if (this.walkAction) {
        this.walkAction.paused = false;  // play walk animation when moving
      }
    },

    tick: function (time, delta) {
      if (this.mixer) this.mixer.update(delta / 1000);

      if (!this.isMoving) return;

      const pos = this.el.object3D.position;
      const distance = pos.distanceTo(this.targetPos);

      if (distance < 0.1) {
        this.isMoving = false;
        if (this.walkAction) this.walkAction.paused = true;  // pause walk anim when stopped

        setTimeout(() => this.pickNewTarget(), 2000);
        return;
      }

      const direction = new THREE.Vector3();
      direction.subVectors(this.targetPos, pos).normalize();

      // Rotate entity to face movement direction (Y axis up)
      const angle = Math.atan2(direction.x, direction.z);
      this.el.object3D.rotation.y = angle;

      const moveDistance = this.data.speed * (delta / 1000);
      pos.addScaledVector(direction, Math.min(moveDistance, distance));
    }
  });
