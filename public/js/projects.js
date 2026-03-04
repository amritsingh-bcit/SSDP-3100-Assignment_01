const container = document.getElementById("projects-container");
const detailsSection = document.getElementById("project-details");
const detailsContent = document.getElementById("details-content");
const closeBtn = document.getElementById("close-details");

async function loadProjects() {
  try {
    const res = await fetch("/api/projects");
    if (!res.ok) throw new Error("Failed to fetch projects");

    const projects = await res.json();

    container.innerHTML = projects
      .map(
        (p) => `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.tagline}</p>
        <div>
          ${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}
        </div>
        <button onclick="showDetails('${p.id}')">Details</button>
      </div>
    `,
      )
      .join("");
  } catch (err) {
    container.innerHTML = "<p>Error loading projects.</p>";
  }
}

async function showDetails(id) {
  try {
    const res = await fetch(`/api/projects/${id}`);
    if (!res.ok) throw new Error("Project not found");

    const p = await res.json();

    detailsContent.innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.tagline}</p>
      <p>${p.description}</p>

      <div>
        ${p.tags.map((t) => `<span class="chip">${t}</span>`).join("")}
      </div>

      <img src="${p.images[0].path}" alt="${p.images[0].alt}" width=400px>
      <img src="${p.images[1].path}" alt="${p.images[1].alt}" width=400px>
    `;

    detailsSection.style.display = "block";
    container.style.display = "none";
  } catch (err) {
    detailsContent.innerHTML = "<p>Error loading project details.</p>";
  }
}

closeBtn.addEventListener("click", () => {
  detailsSection.style.display = "none";
  container.style.display = "block";
});

loadProjects();
