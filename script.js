function calculateTotal() {
    let price = document.getElementById("food-select").value;
    let quantity = document.getElementById("quantity").value;
    let total = price * quantity;
    document.getElementById("total-price").innerText = total;
}

function placeOrder() {
    const phone = "916261371002";
    const select = document.getElementById("food-select");
    const itemName = select.options[select.selectedIndex].getAttribute('data-name');
    const quantity = document.getElementById("quantity").value;
    const total = document.getElementById("total-price").innerText;

    if (itemName === "None" || total == 0) {
        alert("Please select a food item first!");
        return;
    }

    // Creating the WhatsApp Message Link
    const message = `Hello Naman Chowmin Center! I would like to order:
- Item: ${itemName}
- Quantity: ${quantity}
- Total Price: ₹${total}
Please confirm my order.`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}