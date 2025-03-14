// Toggle navigation menu for mobile
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Existing toggle button functionality
document.getElementById("toggleButton").addEventListener("click", function() {
    const desc = document.getElementById("project-desc");
    if (desc.style.display === "none") {
        desc.style.display = "block";
        this.textContent = "Show Less";
    } else {
        desc.style.display = "none";
        this.textContent = "Show More";
    }
});