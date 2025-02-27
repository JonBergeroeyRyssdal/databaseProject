// Add new hotel function
async function addHotel() {
    const name = prompt("Enter the hotel name:");
    const location = prompt("Enter the hotel location:");

    if (name && location) {
      const response = await fetch("/hotels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name: name, Location: location }),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert("Failed to add the hotel.");
      }
    } else {
      alert("Both name and location are required.");
    }
  }