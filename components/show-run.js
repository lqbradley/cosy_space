AFRAME.registerComponent("show-run", {
    init(){
        document    
         .getElementById("run-button")
         .addEventListener("click", () => {
            alert("button pressed")
         })
    }
})