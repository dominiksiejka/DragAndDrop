export const createModal = () => {
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.innerHTML = `<div class="error-message">
    <p>All input fields must be filled in order to add project !</p><button class="error-button">OK</button>
</div>`;
    modal.addEventListener("click", (event) => {
        const clickedEl = event.target;
        if (clickedEl.id === "modal" ||
            clickedEl.classList.contains("error-button")) {
            modal.classList.remove("hide");
        }
        else
            return;
    });
    document.body.appendChild(modal);
};
//# sourceMappingURL=modal.js.map