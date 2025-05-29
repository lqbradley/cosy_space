AFRAME.registerComponent("show-journal", {
    init() {
        this.el.addEventListener("click", () => {
            const dialog = document.getElementById("dialog")
            journal.setAttribute("animation", {
                property: 'scale',
                to: {x: 0.1, y: 0.1, z: 0.1},
                dur: 500, 
            })
        })

        const closeButton = document.getElementById("journal-close-button")
        closeButton.addEventListener("click", () => {
            const dialog = document.getElementById("dialog")
            dialog.setAttribute("animation", {
                property: 'scale',
                to: {x: 0, y: 0, z: 0},
                dur: 500, 
            })
        })
    }
})