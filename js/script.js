// Sample JavaScript to fetch online member count from Discord API
// You'll need to replace this with your actual implementation using Discord API
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://discord.com/api/guilds/TaT4nvW9R9/members")
    .then(response => response.json())
    .then(data => {
        document.getElementById("onlineMembers").textContent = data.filter(member => member.status === "online").length;
    })
    .catch(error => console.error("Error fetching online members:", error));
});

