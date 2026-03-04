const form = document.getElementById("contact_form");
const responseEl = document.getElementById("form_response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    responseEl.innerHTML = `
      <p class="${json.success ? "success-message" : "error-message"}">
        ${json.message}
      </p>
    `;

  } catch (err) {
    responseEl.innerHTML = `
      <p class="error-message">
        Network error. Please try again.
      </p>
    `;
  }
});