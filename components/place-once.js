AFRAME.registerComponent("place-once", {
    init() {
        this.el.addEventListener("object-placed", () => {
            this.el.removeAttribute("place-object");
            this.el.sceneEl.removeAttribute("place-object-manager");
        });
    }
})