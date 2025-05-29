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
import "./components/show-journal.js"
import "./components/place-once.js"

import "./components/animation-toggle.js"
import "./components/face-camera.js"
import "./components/random-walk.js"
import "./components/sound-toggle.js"
import "./components/interactive-pet.js"

import "./components/moving_button.js"


document.querySelector("#app").innerHTML = /*html*/`
<a-scene 
  webxr="optionalFeatures: hit-test" 
  xr-mode-ui="XRMode: ar;" 
  ar-hit-test="mapSize: 0 0" 
  place-object-manager="maxObjects: 20; showPreview: true"
  touch-raycaster
>

 
<a-camera posiion="0 0 0"></a-camera>
 <a-assets>
    <audio id="sound" src="luxury-jazz-loop-312713.mp3" preload="auto"></audio>
    <audio id="sound" src="fireplace.mp3" preload="auto"></audio>
    <audio id="sound" src="rain-sound-272604.mp3" preload="auto"></audio>
  </a-assets>

  <a-entity
  place-once
  place-object="
  surfaceTypes: horizontal;
  faceCamera: false;
  adjustOrientation: true;
  isPoster: false;
  scale: 0.2;
  heightRange: 0 6;
  "
  visible="false"
  >


<!-- arrows for plants-->
<a-entity 
      button_option='
      buttonSide: next;
      objects: [{"modelUrl":"./models/plants/Sansevieria Plant.glb",
                 "scale":"5 5 5"},
                {"modelUrl":"./models/plants/Sansevieria Plant.glb"},
                {"modelUrl":"./models/plants/Yucca Plant.glb"},
                {"modelUrl":"./models/plants/Orchid.glb",
                  "scale":"0.05 0.05 0.05"},
                {"modelUrl":""}
                ]
      '
      geometry="primitive: triangle; vertexA: 0 1 0; vertexB: 0 -1 0; vertexC: 1 0 0" 
      position="5 0 -2" visible="true" scale="0.3 0.3 0.3"
      material="color: #FFECA1" class="clickable" rotation="2 0 0">
</a-entity>

<!-- Alpaca -->
<a-entity 
    gltf-model="models/Alpaca.glb"
    scale="2 2 2"
    visible="true"
    random-walk="speed: 7; areaSize: 100"
  animation-mixer="clip: Walk"
  class="clickable"
  click-to-eat
   ></a-entity>

<!-- Gramophone-->
<a-entity id="Gramophone"
  class="clickable"
  gltf-model="models/Gramophone.glb"
  scale="3 3 3"
  visible = "true"
  sound="src: url(luxury-jazz-loop-312713.mp3); autoplay: false; on: click"
  sound-toggle
  position="0 0 12.855"
></a-entity>   

<!-- Photo -->
<a-plane
  class="clickable"
  src="textures/Paws.jpg"
  width="1" height="1" material="shader: flat"
  visible = "true"
  position="0 6 0"
  face-camera
></a-plane>  

<!-- Orchid 
<a-entity
  class="clickable"
  gltf-model="models/Orchid.glb"
  scale="0.5 0.5 0.5"
  position="2 0 -10"
></a-entity>  -->

<!-- briefcase -->

<a-box id="Briefcase"
width="1" height="2.5" depth="3"
color="transparent"
opacity= "0"
visible="true"
animation-toggle 
class="clickable"

>
<a-entity
  position = "0 -1 0"
  gltf-model="models/briefcase.glb"
  animation-mixer="clip: *closed*"
  scale="1 1 1"
  ></a-entity>
</a-box>

<a-image 
  id="popup-photo1"
  src="textures/maxresdefault.jpg" 
  visible="false" 
  width="1" 
  height="1"
  opacity="0.65"
  face-camera
></a-image>

<a-image 
  id="popup-photo2"
  src="textures/images.jpg" 
  visible="false" 
  width="1" 
  height="1"
  opacity="0.65"
  face-camera
></a-image>

<a-image 
  id="popup-photo3"
  src="textures/smiley.png" 
  visible="false" 
  width="1" 
  height="1"
  opacity="0.65"
  face-camera
></a-image> 

<a-entity 
      button_option='
      buttonSide: next;
      objects: [{"modelUrl":"./models/decorations/Lava lamp.glb",
                 "scale":"1.5 1.5 1.5"},
                {"modelUrl":"./models/decorations/Globe.glb",
                "scale":"1.15 1.15 1.15"},
                {"modelUrl":"./models/decorations/paint kit mini.glb",
                "scale":"50 50 50 "},
                {"modelUrl":"./models/decorations/Snowglobe.glb",
                  "scale":"2 2 2"},
                {"modelUrl":"./models/decorations/Open Book.glb",
                  "scale":"7 7 7"},
                {"modelUrl":"./models/decorations/Camera.glb",
                  "scale":"10 10 10"}]
      '
      geometry="primitive: triangle; vertexA: 0 1 0; vertexB: 0 -1 0; vertexC: 1 0 0" 
      position="12 0 -9" visible="true" scale="0.3 0.3 0.3"
      material="color: #FFECA1" class="clickable" rotation="2 0 0">
</a-entity>
<!-- <a-entity id="Lava-lamp"
  class="clickable"
  gltf-model="models/Lava lamp.glb"
  scale="0.5 0.5 0.5"
  visible = "true"
  posiion="12 0 -9"
>
  </a-entity> -->

  <!--
  "objects: [{&quot;modelUrl&quot;:&quot;./models/Lava lamp;},
                {&quot;modelUrl&quot;:&quot;./models/Globe;},
                {&quot;modelUrl&quot;:&quot;./models/paint kit mini},
                {&quot;modelUrl&quot;:&quot;./models/rug;}]
      "
      -->

  <!--
  "objects: [{&quot;modelUrl&quot;:&quot;./luxury-jazz-loop-312713.mp3;},
                {&quot;modelUrl&quot;:&quot;./fireplace.mp3;},
                {&quot;modelUrl&quot;:&quot;./rain-sound-272604.mp3},

      " -->

</a-entity>
</a-scene>
`