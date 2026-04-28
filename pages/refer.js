// Generate referral link
const code = document.getElementById("refCode").textContent;
const link = "https://afri-nairobi-bus.com/signup?ref=" + code;

document.getElementById("refLink").value = link;

// Copy code
function copyCode() {
    navigator.clipboard.writeText(code);
    alert("Referral code copied!");
}

// Copy link
function copyLink() {
    navigator.clipboard.writeText(link);
    alert("Referral link copied!");
}

// Earnings
let earnings = 0;

// Simulate referral
function simulateReferral() {
    earnings += 200;
    document.getElementById("earnings").textContent = "Ksh " + earnings;
}