// Redirect to the shopping cart page
function redirectToShopping() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name && email && phone) {
        // Basic validation passed
        window.location.href = "shopping.html";
    } else {
        alert("Please fill in all fields");
    }
}
