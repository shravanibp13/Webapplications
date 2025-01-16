function exploreMore() {
    alert("Welcome to the Home Decor Collection! Check back soon for more items.");
}


// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Fetch content from about.html and display it
    fetch('about1.html')
        .then(response => response.text())
        .then(data => {
            // Extract only the relevant content from about.html
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const aboutContent = doc.querySelector(".container1");

            // Insert the About content into the designated section in index.html
            document.getElementById("about-section").innerHTML = aboutContent.innerHTML;
        })
        .catch(error => console.error("Error loading About content:", error));
});
