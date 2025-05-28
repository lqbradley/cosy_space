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
import "./components/animation-toggle.js"

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
  visible = "false"
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
<a-entity
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
></a-entity>  -->

<!-- briefcase -->
<a-box 
width="0.3" height="0.7" depth="0.9"
opacity= "0"
animation-toggle 
class="clickable"
>
<a-entity
position = "0 -0.25 0"
  gltf-model="models/briefcase.glb"
  animation-mixer="clip: *closed*"
  scale="0.3 0.3 0.3"
  xxvisible = "false"
  xxplace-object="
    surfaceTypes: horizontal;
    faceCamera: false;
    adjustOrientation: true;
    isPoster: false;
    scale: 0.3;
    heightRange: 0 6;
  "
  xxplace-once
>
</a-entity>
</a-box>
 

<!-- Gramophone 
<a-entity
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
></a-entity> -->

<!-- AlpaKa
<a-entity 
    gltf-model="models/Alpaca.glb"
    scale="0.33 0.33 0.33"
    place-object="surfaceTypes: horizontal, floor; adjustOrientation: true; faceCamera: true; isPoster: false; scale: 0.33; heightRange: 0 6;"
    visible="false"
    place-once
  ></a-entity>
  -->

</a-scene>
`