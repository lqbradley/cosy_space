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
import "./components/moving_button.js"
import "./components/animation-toggle.js"
import "./components/face-camera.js"

document.querySelector("#app").innerHTML = /*html*/`
<a-scene 
  webxr="optionalFeatures: hit-test" 
  xr-mode-ui="XRMode: ar;" 
  ar-hit-test="mapSize: 0 0" 
  place-object-manager="maxObjects: 20; showPreview: true"
  touch-raycaster
  background="color: black"
>
  <a-camera position="0 0 2"></a-camera>
 
 <a-assets>
    <audio id="sound" src="luxury-jazz-loop-312713.mp3" preload="auto"></audio>
    <audio id="sound" src="fireplace.mp3" preload="auto"></audio>
    <audio id="sound" src="rain-sound-272604.mp3" preload="auto"></audio>
  </a-assets>

<a-entity id="mouseRaycaster" raycaster="objects: .clickable" cursor="rayOrigin: mouse; fuse: false;"></a-entity>

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
<!-- Plant select -->
<a-entity
  class="clickable"
  place-object="
    surfaceTypes: horizontal;
    faceCamera: false;
    adjustOrientation: true;
    isPoster: false;
    scale: 0.05;
    heightRange: 0 6;
  "
  place-once
  position= "-0.5 0 2"
>

<a-entity button_option="
      buttonSide: back;
      objects: [{&quot;modelUrl&quot;:&quot;./models/plants/Houseplant_1.glb&quot;},
                {&quot;modelUrl&quot;:&quot;./models/plants/orchid.glb&quot;},
                {&quot;modelUrl&quot;:&quot;./models/plants/Plant - White Pot.glb&quot;},
                {&quot;modelUrl&quot;:&quot;./models/plants/Vines.glb&quot;}]
      "
      geometry="primitive: triangle; vertexA: 0 1 0; vertexB: 0 -1 0; vertexC: 1 0 0" 
      position="0 0 -2" visible="true" scale="0.1 0.1 0.1"
      material="color: red">
</a-entity>
<!--<a-entity id="nextBtn" button_option="buttonSide: next;
 objects: [{&quot;modelUrl&quot;:&quot;./models/plants/Houseplant_1.glb&quot;},
          {&quot;modelUrl&quot;:&quot;./models/plants/orchid.glb&quot;},
          {&quot;modelUrl&quot;:&quot;./models/plants/Plant - White Pot.glb&quot;},
          {&quot;modelUrl&quot;:&quot;./models/plants/Vines.glb&quot;}]" 
          position="1 1 -2"
          text="value: >"
          visible=true></a-entity>


<a-entity id="backBtn" button_option="buttonSide: back; 
objects: [{&quot;modelUrl&quot;:&quot;./models/plants/Houseplant_1.glb&quot;},
          {&quot;modelUrl&quot;:&quot;./models/plants/orchid.glb&quot;},
          {&quot;modelUrl&quot;:&quot;./models/plants/Plant - White Pot.glb&quot;},
          {&quot;modelUrl&quot;:&quot;./models/plants/Vines.glb&quot;}]" 
          position="-1 1 -2"
          visible=true></a-entity>-->

</a-entity>  

<!-- briefcase -->
<a-box 
width="1" height="2.5" depth="3"
color="transparent"
opacity= "0"
visible="false"
animation-toggle 
class="clickable"
place-object="
      surfaceTypes: horizontal, floor, vertical;
      faceCamera: false;
      adjustOrientation: true;
      isPoster: false;
      scale: 0.1;
      heightRange: 0 6;
    "
     place-once
>
<a-entity
  position = "0 -1 0"
  gltf-model="models/briefcase.glb"
  animation-mixer="clip: *closed*"
  scale="1 1 1"
  ></a-entity>
</a-box>
 
<a-image 
    id="popup-photo"
    src="textures/maxresdefault.jpg" 
    follow-camera="angle: 1; distance: 4;"
    position="0 1.5 -1" 
    visible="false" 
    width="1" 
    height="1"
    opacity="0.65"
    face-camera
  ></a-image>

 

<!-- Gramophone 
<a-entity
  class="clickable"
  gltf-model="models/Gramophone.glb"
  scale="0.05 0.05 0.05"
  place-object="
    surfaceTypes: horizontal, floor;
    faceCamera: true;
    adjustOrientation: true;
    isPoster: false;
    scale: 0.05;
    heightRange: 0 6;
  "
  place-once
></a-entity>


<a-entity 
    gltf-model="models/Alpaca.glb"
    animation-mixer="clip: *Walk*"
    hello="message: Hey, nom nom, how are you feeling?"
    place-object="surfaceTypes: horizontal, wall; adjustOrientation: true; faceCamera: true; isPoster: false; scale: 0.1;"
    place-once
    visible="false"
  >
  </a-entity>

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