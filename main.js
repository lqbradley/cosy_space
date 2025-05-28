import 'aframe'
import 'aframe-extras'

import "spatial-design-system/primitives/ar-button.js"
import "spatial-design-system/primitives/ar-checkbox.js";
import "spatial-design-system/components/position.js";
import "spatial-design-system/components/ar/place-object.js"
import "spatial-design-system/components/ar/place-object-manager.js"

import "./components/touch-raycaster.js";
import "./components/hello.js";
import "./components/show-contact.js"
import "./components/place-once.js"

document.querySelector("#app").innerHTML = /*html*/`
<a-scene 
  webxr="optionalFeatures: hit-test" 
  xr-mode-ui="XRMode: ar;" 
  ar-hit-test="mapSize: 0 0"
  touch-raycaster
  place-object-manager="maxObjects: 20; showPreview: true;"
>
  <a-camera position="0 2 0">
  <!--
  <a-entity 
  geometry="primitive: plane; height: 0.01; width: 0.01" 
  material="color: green; shader: flat" 
  position="0 0 -1">
</a-entity> -->
</a-camera>

  <a-entity id="mouseRaycaster" raycaster="objects: .clickable" cursor="rayOrigin: mouse; fuse: false;"></a-entity> 
  
  <!--
  <a-assets>
    <img id="grass" src="textures/grass.jpg"></a-assets>
  <a-plane color="pink" height="100" width="100" rotation="-90 0 0" src="#grass"></a-plane>
  
  <a-entity position="-17.948 9.470 -10.085" scale="0.6 0.6 0.6" rotation="0 50 0" 
    gltf-model="models/cat.glb"
    spin="speed: 7"
    class="clickable"
    close-on-click
  ></a-entity>

  <a-entity position="3 0 -7.331" scale="1 1 1" rotation="0 80.000 0" 
    gltf-model="models/Alpaca.glb"
    animation-mixer="clip: *Eating*"
    hello="message: I love sushi!"
  >
    <a-text id="alpaca_message" scale="0 0 0" value="TEXT" position="4.374 4.868 0.463  " color="black" width="10" rotation="0 270 0"></a-text>
  </a-entity>

  <a-entity position="6.918 0.175 -6.905" scale="1 1 1" rotation="0 146.340 0" 
    gltf-model="models/SUSHI.glb"
  ></a-entity>

  <a-entity position="-6.953 0 4.507" scale="1 1 1" rotation="0 11.270 0" 
    gltf-model="models/Alpaca.glb"
    animation-mixer="clip: *Death*"
  ></a-entity>

  <a-entity position="-6.106 0 9.605" scale="1 1 1" rotation="0 11.270 0" 
    gltf-model="models/Alpaca.glb"
    animation-mixer="clip: *Attack_Kick*"
  ></a-entity>

  <a-entity position="0 0 0" scale="1 1 1" rotation="0 45 0" 
    gltf-model="models/Alpaca.glb"
    animation-mixer="clip: *Gallop*"
    move-alpaca
  ></a-entity>

  <a-entity position="0 0 0" scale="0.6 0.6 0.6" rotation="0 0 0" 
    gltf-model="models/cat.glb"
  ></a-entity>

  <a-entity position="-24.930 -0.026 -12.024" scale="0.2 0.15 0.15" rotation="0 243.140 0" 
    gltf-model="models/Farm.glb"
  ></a-entity>

  <a-ar-button 
  position="-12.663 4.554 -6.239"
  rotation="0 60 0"
  content="Press, if animals behave badly"
  primary="#018A6C"
  textcolor="white"
  size="large"
  billboard
></a-ar-button>

  <!-- Sign RUN 
  <a-plane scale="1 1 1" id="dialog" color="black" position="-20.200 5.000 -7.067" width="2", height="3" rotation="0 60 0">
  <a-text value="Run" position="0 0 0.01" align="center" ></a-text>
  <a-ar-button id="run-button"
  show-run
  position="0 -0.6 0.01"
  content="RUN"
  primary="#018A6C"
  textcolor="white"
  size="large"
></a-ar-button>
  </a-plane> -->

  <!-- ROBOT -->
  <a-entity 
    gltf-model="models/cat.glb"
    spin="speed: 10"
    position="0 0 -10"
    place-object="
      surfaceTypes: horizontal, wall;
      adjustOrientation: true;
      faceCamera: true;
      isPoster: false;
      scale: 0.2;
      heightRange: -1 5;"
  >

</a-scene>
`