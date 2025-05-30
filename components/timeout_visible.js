AFRAME.registerComponent('timeout_visible', {
    init: function () {
        this.el.setAttribute('visible', false);
 
    setTimeout(() => {
      this.el.setAttribute('visible', true);
    }, 3000);
    }
})