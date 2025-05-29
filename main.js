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
import "./components/sound-toggle.js"

import "./components/animation-toggle.js"
import "./components/face-camera.js"
import "./components/random-walk.js"
import "./components/scene.js"

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

<!--
<a-entity position="0 -2 0">
  <a-plane material="src:./textures/wood.jpg; repeat: 20 20" height="50" width="50" rotation="-90 0 0"></a-plane>
</a-entity>

<a-sky material="src:./textures/wallpaper.jpg; repeat: 10 10"></a-sky> -->
<!-- Photo
<a-plane id="Photo"
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

<!-- Orchid 
<a-entity id="Orchid"
  class="clickable"
  gltf-model="models/orchid.glb"
  scale="0.05 0.05 0.05"
  visible = "false"
  place-object="
    surfaceTypes: horizontal;
    faceCamera: false;
    adjustOrientation: true;
    isPoster: false;
    scale: 0.05;
    heightRange: 0 6;
  "
  place-once
>
</a-entity>  
-->



<!-- arrows for plants-->
<a-entity 
      button_option='
      buttonSide: next;
      objects: [{"modelUrl":"./models/plants/Sansevieria Plant.glb",
                 "scale":"1 1 1"},
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

<!-- arrows for desk 
<a-entity face-camera
      button_option='
      buttonSide: next;
      objects: [{"modelUrl":"./models/desks/Desk_1.glb",
                  "scale":"2 2 2"},
                {"modelUrl":"./models/desks/Desk.glb"},
                {"modelUrl":"./models/desks/Drafting Table.glb"}]
      '
      geometry="primitive: triangle; vertexA: 0 1 0; vertexB: 0 -1 0; vertexC: 1 0 0" 
      position="-5 0 -2" visible="true" scale="0.3 0.3 0.3"
      material="color: #FFECA1" class="clickable">
</a-entity> -->

<!-- briefcase 
<a-box id="Briefcase"
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
-->
<!-- Gramophone 
<a-entity id="Gramophone"
  class="clickable"
  gltf-model="models/Gramophone.glb"
  scale="0.7 0.7 0.7"
  visible = "false"
  place-object="
    surfaceTypes: horizontal, floor;
    faceCamera: true;
    adjustOrientation: true;
    isPoster: false;
    scale: 0.7;
    heightRange: 0 6;
  "
  place-once

  sound="src: url(luxury-jazz-loop-312713.mp3); autoplay: false; on: click"
  sound-toggle
></a-entity> 
-->
<!-- alpaca
<a-entity 
    gltf-model="models/Alpaca.glb"
    scale="0.33 0.33 0.33"
    place-object="surfaceTypes: horizontal, floor; adjustOrientation: true; faceCamera: false; isPoster: false; scale: 0.33; heightRange: 0 6;"
    place-once
    random-walk="speed: 0.7; areaSize: 4"
  animation-mixer="clip: Walk"
  ></a-entity> 
  -->

</a-scene>
`