document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        hideLoader();
        showContent();
    }, 2000);

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
});
