AFRAME.registerComponent("hello", {

  schema: {
      message: { type: "string" }
  },

  init() {
      const messageEl = document.getElementById("robot-message")
      messageEl.setAttribute("value", this.data.message)

      // display the message after a delay
      setTimeout(() => {
          messageEl.setAttribute("animation", {
              property: "scale",
              to: {x: 1, y: 1, z: 1},
              dur: 500
          })
      }, 500)

      // pulse the message every 2 seconds
      setInterval(() => {
          messageEl.setAttribute("animation", {
              property: "scale",
              to: {x: 1.2, y: 1.2, z: 1.2},
              dur: 200,
          })
          setTimeout(() => {
              messageEl.setAttribute("animation", {
                  property: "scale",
                  to: {x: 1, y: 1, z: 1},
                  dur: 200
              })
          }, 200)
      }, 1500)

  },

})

AFRAME.registerComponent("move-alpaca", {
    init: function () {
      const alpaca = this.el;
  
      // Step 1: Move forward
      alpaca.setAttribute("animation__moveForward", {
        property: "position",
        to: {x: 20, y: 0, z: 20},
        dur: 3000,
        easing: "linear"
      });
  
      // Step 2: Rotate 180 degrees
      setTimeout(() => {
        alpaca.setAttribute("animation__rotate", {
          property: "rotation",
          to: {x: 0, y: 225, z: 0},
          dur: 1000,
          easing: "linear"
        });
      }, 3000);
  
      // Step 3: Move back to original position
      setTimeout(() => {
        alpaca.setAttribute("animation__moveBack", {
          property: "position",
          to: {x: 0, y: 0, z: 0},
          dur: 3000,
          easing: "linear"
        });
      }, 4000);
  
      // Step 4: Play death animation
      setTimeout(() => {
        alpaca.setAttribute("animation-mixer", {
          clip: "*Death*",
          loop: "once"
        });
      }, 7000);
    }
  });
  
  AFRAME.registerComponent('spin', {
    schema: {
      speed: {type: 'number', default: 0.5} // degrees per frame
    },
  
    tick: function (time, timeDelta) {
      // Increase the Y rotation based on speed and frame time
      const rotation = this.el.getAttribute('rotation');
      rotation.y += this.data.speed * (timeDelta / 16); // normalized for 60fps
      this.el.setAttribute('rotation', rotation);
    }
  });

  AFRAME.registerComponent('close-on-click', {
    init: function () {
      this.el.addEventListener('click', () => {
        const scene = document.querySelector('a-scene');
        if (scene) {
          scene.style.display = 'none';  // Hide the scene
          alert('DO NOT TOUCH MY CAT!!!');
        }
      });
    }
  });