//your JS code here. If required.
const container = document.getElementById("container");

// create 800 squares
for (let i = 0; i < 800; i++) {

    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        const color = getRandomColor();
        square.style.background = color;

        setTimeout(() => {
            square.style.background = "#1d1d1d";
        }, 1000);
    });

    container.appendChild(square);
}

// random color generator
function getRandomColor() {
    const colors = [
        "#ff4d4d", "#4dff4d", "#4d4dff",
        "#ffff4d", "#ff4dff", "#4dffff",
        "#ff884d", "#8d4dff"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}