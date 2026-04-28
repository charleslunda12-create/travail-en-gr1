// Liste des villes
const cities = [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Busia",
    "Sirare",
    "Mumias",
    "Malaba",
    "Usenge"
];

// Remplir les dropdowns
function loadCities() {
    const fromList = document.getElementById("fromList");
    const toList = document.getElementById("toList");

    cities.forEach(city => {
        let li1 = document.createElement("li");
        li1.textContent = city;
        li1.onclick = () => selectCity("fromInput", city);
        fromList.appendChild(li1);

        let li2 = document.createElement("li");
        li2.textContent = city;
        li2.onclick = () => selectCity("toInput", city);
        toList.appendChild(li2);
    });
}

loadCities();

// Ouvrir / fermer liste
function toggleList(id) {
    document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    document.getElementById(id).style.display = "block";
}

// Sélection ville
function selectCity(inputId, city) {
    document.getElementById(inputId).value = city;
    document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
}

// Bouton SEARCH
function searchRoute() {
    const from = document.getElementById("fromInput").value;
    const to = document.getElementById("toInput").value;
    const date = document.getElementById("dateInput").value;

    if (from === "" || to === "") {
        alert("Please select both From and To");
        return;
    }

    if (from === to) {
        alert("From and To cannot be the same!");
        return;
    }

    document.getElementById("result").innerText =
        `Searching buses from ${from} to ${to} on ${date}`;
}

// Fermer dropdown si clic ailleurs
document.addEventListener("click", function(e) {
    if (!e.target.closest(".field")) {
        document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    }
});
// Position des villes (distance simulée en km depuis Nairobi)
const cityDistance = {
    Nairobi: 0,
    Nakuru: 160,
    Eldoret: 310,
    Kitale: 380,
    Bungoma: 410,
    Busia: 430,
    Kisumu: 350,
    Sirare: 520,
    Mombasa: 480
};

// prix par km
const pricePerKm = 5; // Ksh

function searchRoute() {
    const from = document.getElementById("fromInput").value;
    const to = document.getElementById("toInput").value;
    const passengers = parseInt(document.getElementById("passengers").value);

    if (!from || !to) {
        document.getElementById("result").innerHTML = "Select destinations";
        return;
    }

    if (from === to) {
        document.getElementById("result").innerHTML = "Same location not allowed";
        return;
    }

    if (!cityDistance[from] && cityDistance[from] !== 0) {
        document.getElementById("result").innerHTML = "City not supported";
        return;
    }

    if (!cityDistance[to] && cityDistance[to] !== 0) {
        document.getElementById("result").innerHTML = "City not supported";
        return;
    }

    if (!passengers || passengers < 1) {
        document.getElementById("result").innerHTML = "Enter valid passengers";
        return;
    }

    // ✅ calcul distance réelle simulée
    const distance = Math.abs(cityDistance[from] - cityDistance[to]);

    // ✅ calcul prix
    const price = distance * pricePerKm;

    const total = price * passengers;

    document.getElementById("result").innerHTML = `
        <h3>${from} → ${to}</h3>
        <p>Distance: ${distance} km</p>
        <p>Price per seat: Ksh ${price}</p>
        <p>Passengers: ${passengers}</p>
        <h2>Total: Ksh ${total}</h2>

        <button onclick="payNow(${total})" style="
            background: green;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        ">
            💳 Pay with M-Pesa
        </button>
    `;
}

function payNow(amount) {
    alert("Payment request sent for Ksh " + amount);
}