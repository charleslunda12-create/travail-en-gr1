// Switch sections
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}

// Save profile
function saveProfile() {
    const name = document.getElementById("newName").value;
    const email = document.getElementById("newEmail").value;

    if (name) {
        document.getElementById("userName").textContent = name;
    }

    if (email) {
        document.getElementById("userEmail").textContent = email;
    }

    alert("Profile updated!");
}

// Fake bookings (demo)
const bookings = [
    { from: "Nairobi", to: "Mombasa", price: 2400 },
    { from: "Kisumu", to: "Busia", price: 800 }
];

function loadBookings() {
    const container = document.getElementById("bookingList");

    bookings.forEach(b => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${b.from} → ${b.to}</p>
            <p>Ksh ${b.price}</p>
            <hr>
        `;
        container.appendChild(div);
    });
}

loadBookings();

// Logout
function logout() {
    alert("Logged out!");
    window.location.href = "index.html";
}