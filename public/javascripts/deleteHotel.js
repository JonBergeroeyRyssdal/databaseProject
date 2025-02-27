// Delete hotel function
async function deleteHotel(id) {
    if (confirm("Are you sure you want to delete this hotel?")) {
      const response = await fetch("/hotels", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert("Failed to delete the hotel.");
      }
    }
  }