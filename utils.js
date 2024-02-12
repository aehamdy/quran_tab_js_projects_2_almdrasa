export const clickLabelEvent = item => {
    item.addEventListener("keydown", (e) => {
        e.key === "Enter" && item.click();
    })
}