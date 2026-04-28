document.querySelector(".buy-btn").addEventListener("click", function() {

    if (currentTotal === 0) {
        alert("Please search for a route first!");
        return;
    }

    payNow(currentTotal);
});