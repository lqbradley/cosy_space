AFRAME.registerComponent('toggle-animation', {
  schema: {
    openClip: {type: 'string', default: 'open'},
    closedClip: {type: 'string', default: 'closed'}
  },
  init: function () {
    this.open = false;
    this.el.addEventListener('click', () => {
      const clip = this.open ? this.data.closedClip : this.data.openClip;
      this.el.setAttribute('animation-mixer', 'clip', clip);
      this.open = !this.open;
    });
  }
});
