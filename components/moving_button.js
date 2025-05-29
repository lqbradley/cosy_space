import * as AFRAME from "aframe";
import * as THREE from "three";

AFRAME.registerComponent('button_option', {
    schema: {
        buttonSide: { type: 'string'}, // accepts 'next' or 'back'
        objects: { type: 'string', default: '[]' } 
    },
    multiple: true, // need to put 2 arrows in the same approximate entity
    init: function () {

        this.el.setAttribute("animation", {
            property: "components.material.material.color",
            to: "beige",
            type: "color", 
            dur: 1000,
            loop: true,
        })

        if (this.data.buttonSide === "back") {
            this.el.setAttribute("rotation", "0 0 180")
        }
        
        // get the objects list, else empty
        try {
            this.objects = JSON.parse(this.data.objects);
            console.log('objects', this.objects)
          } catch (e) {
            console.warn('Invalid JSON passed to objects:', this.data.objects);
            this.objects = [];
        } 
        
        let currentIndex = 0;
        // have it respond to a click event 
        // TODO: Make sure the menu doesn't pop up if there are no objects
        this.el.addEventListener('click', () => {
            if (this.data.buttonSide === 'next') {
                currentIndex = (currentIndex + 1) % this.objects.length;
  
            } else if (this.data.buttonSide === 'back') {
                currentIndex = (currentIndex - 1 + this.objects.length) % this.objects.length;
            }
             
              this.mockup_object(currentIndex);
              console.log(currentIndex)
        })
        
    },
    // so let's have a floating version of it
    mockup_object: function(index) {
        if (!this.objects.length) return;

        const objectData = this.objects[index];
        if (!objectData) return;

        let mockupEl = this.el.querySelector('.mockup');


        if (!mockupEl) {
            mockupEl = document.createElement('a-entity');
            mockupEl.classList.add('mockup');
            
            if (this.data.buttonSide === "back") {
                mockupEl.setAttribute('rotation', '0 0 180');
                mockupEl.setAttribute('position', '-2 1 0.1')
            }

            if (this.data.buttonSide === "next") {
                mockupEl.setAttribute('position', '-2 -1 0.1')
            }
            this.el.appendChild(mockupEl);
        }
        
        mockupEl.setAttribute('gltf-model', objectData.modelUrl || ''); ;
        mockupEl.setAttribute('scale', objectData.scale || "1.5 1.5 1.5")
    }

})

