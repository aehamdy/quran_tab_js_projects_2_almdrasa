const labelElements = document.querySelectorAll("label");

labelElements.forEach(item => item.addEventListener("keydown", (e) => {
    e.key === "Enter" && item.click();
}))