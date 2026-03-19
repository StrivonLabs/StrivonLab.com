let db = {};
let current = [];

const container = document.getElementById("scripts");

fetch("data.json")
    .then(res => res.json())
    .then(data => {
        db = data;
        load("blox");
    });

function load(game, btn) {
    current = db[game] || [];
    render(current);

    document.querySelectorAll(".sidebar button").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
}

function render(list) {
    container.innerHTML = "";

    list.forEach(s => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
      <h3>${s.title}</h3>
      <pre>${s.code}</pre>
      <button class="copy">Copy</button>
    `;

        div.querySelector(".copy").onclick = () => {
            navigator.clipboard.writeText(s.code);
            toast("Copied to clipboard");
        };

        container.appendChild(div);
    });
}

function searchScripts() {
    const val = document.getElementById("search").value.toLowerCase();
    const filtered = current.filter(s => s.title.toLowerCase().includes(val));
    render(filtered);
}

function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.style.opacity = 1;
    setTimeout(() => t.style.opacity = 0, 1500);
}