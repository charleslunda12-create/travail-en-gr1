// Toggle FAQ
function toggleFAQ(element) {
    const p = element.nextElementSibling;

    if (p.style.display === "block") {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
}

// Contact button
function contactUs() {
    window.location.href = "contact.html";
}

// Search help
document.getElementById("searchHelp").addEventListener("keyup", function() {
    const value = this.value.toLowerCase();
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
        const text = item.innerText.toLowerCase();

        if (text.includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});