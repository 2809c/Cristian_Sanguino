document.addEventListener("mousemove", (e) => {
    const background = document.getElementById("background");
    
    const rect = background.getBoundingClientRect();

    if (e.pageX > rect.left && e.pageX < rect.right && e.pageY > rect.top && e.pageY < rect.bottom) {
        createRedBox(e.pageX, e.pageY);
    }
});

function createRedBox(x, y) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.left = `${x - 10}px`;
    box.style.top = `${y - 10}px`;

    document.body.appendChild(box);

    setTimeout(() => {
        box.remove();
    }, 1000);
}
