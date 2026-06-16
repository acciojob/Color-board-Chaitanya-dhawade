const container = document.querySelector(".container");

// create 800 squares
for (let i = 0; i < 800; i++) {

    const square = document.createElement("div");
    square.classList.add("square");

    // random color on hover using CSS variable trick
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor();
    });

    square.addEventListener("mouseout", () => {
        setTimeout(() => {
            square.style.backgroundColor = "rgb(29, 29, 29)";
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