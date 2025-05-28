import 'aframe'
import 'aframe-extras'
import "spatial-design-system/primitives/ar-button.js"
import "spatial-design-system/primitives/ar-checkbox.js";
import "spatial-design-system/components/position.js";
import "spatial-design-system/components/ar/place-object.js";
import "spatial-design-system/components/ar/place-object-manager.js";

import "./components/touch-raycaster.js";
import "./components/hello.js";
import "./components/show-contact.js"
import "./components/place-once.js"

document.querySelector("#app").innerHTML = /*html*/`
<a-scene 
  webxr="optionalFeatures: hit-test" 
  xr-mode-ui="XRMode: ar;" 
  ar-hit-test="mapSize: 0 0" 
  place-object-manager="maxObjects: 20; showPreview: true"
  touch-raycaster
>

<!-- Photo
<a-plane
  class="clickable"
  src="textures/Paws.jpg"
  width="0.2" height="0.2" material="shader: flat"
  place-object="
    surfaceTypes: wall;
    faceCamera: false;
    isPoster: true;
    adjustOrientation: true;
    scale: 1;
    heightRange: 0 6;
  "
  place-once
></a-plane>  -->

<!-- Orchis 
<a-entity
  class="clickable"
  gltf-model="models/orchid.glb"
  scale="0.05 0.05 0.05"
  place-object="
    surfaceTypes: horizontal;
    faceCamera: false;
    adjustOrientation: true;
    isPoster: false;
    scale: 0.05;
    heightRange: 0 6;
  "
  place-once
></a-entity>  -->

<!-- briefcase -->
<a-entity
  class="clickable"
  gltf-model="models/briefcase.glb"
  animation-mixer="clip: closed"
  scale="0.3 0.3 0.3" 
  place-object="
    surfaceTypes: horizontal;
    faceCamera: false;
    adjustOrientation: false;
    isPoster: false;
    scale: 0.3;
    heightRange: 0 6;
  "
  place-once
  toggle-animation="openClip: open; closedClip: closed"
></a-entity>

  <!-- ROBOT 
  <a-entity 
    gltf-model="models/robot.glb"
    animation-mixer="clip: *Dance*"
    hello="message: Hello, I am a robot!"
    place-object="surfaceTypes: horizontal, wall; adjustOrientation: true; faceCamera: true; isPoster: false; scale: 0.1;"
    place-once
    visible="false"
  >
    <a-text 
      id="robot-message" 
      scale="0 0 0" 
      value="TEXT" 
      align="center"
      position="0 5.5 0" 
      color="black" 
      width="8"
    ></a-text>
    <a-ar-button
        show-contact
        position="0 6.5 0"
        content="Show contact"
        primary="blue"
        textcolor="white"
        size="large"
    ></a-ar-button>
  </a-entity>

  DIALOG
  <a-plane id="dialog" follow-camera="angle: 1; distance: 0.3;" billboard scale="0 0 0" color="black" width="2" height="2">
    <a-text value="Robot contact card" color="white" position="0 0.75 0.05" align="center" width="4"></a-text>
    <a-text value="Phone: 4542165654654" color="white" position="0 0.5 0.05" align="center" width="2"></a-text>
    <a-entity position="-0.4 0.25 0.05">
      <a-ar-checkbox size="small"></a-ar-checkbox>
      <a-text value="Add to favorites" color="white" position="0.15 0 0" align="left" width="2"></a-text>
    </a-entity>
    <a-ar-button id="dialog-close-button" position="0 -0.5 0.05" content="Close"></a-ar-button> 
  </a-plane> -->

</a-scene>
`