const plant =`<a-entity
      button_option="
      buttonSide: next;
      objects: [{&quot;modelUrl&quot;:&quot;./models/plants/Monstera Plant.glb&quot;,
                  &quot;scale&quot;:&quot;1 1 1&quot;},
                {&quot;modelUrl&quot;:&quot;./models/plants/Sansevieria Plant.glb&quot;},
                {&quot;modelUrl&quot;:&quot;./models/plants/Yucca Plant.glb&quot;},
                {&quot;modelUrl&quot;:&quot;./models/plants/Orchid.glb&quot;,
                  &quot;scale&quot;:&quot;0.05 0.05 0.05&quot;}]
      "
      geometry="primitive: triangle; vertexA: 0 1 0; vertexB: 0 -1 0; vertexC: 1 0 0" 
      position="5 0 -2" visible="true" scale="0.3 0.3 0.3"
      material="color: #FFECA1" class="clickable" >
</a-entity>`

export default plant;