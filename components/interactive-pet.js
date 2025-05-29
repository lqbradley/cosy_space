AFRAME.registerComponent('click-to-eat', {
    init() {
      this.el.addEventListener('click', () => {
        // Switch to Eating
        this.el.setAttribute('animation-mixer', 'clip', 'Eating');

        // After 3 seconds, switch back to Walk
        setTimeout(() => {
          this.el.setAttribute('animation-mixer', 'clip', 'Walk');
        }, 3000); // 3000ms = 3 seconds
      });
    }
  });