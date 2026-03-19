const database = {
    blox: [
        { title: "Auto Farm", code: `while true do wait(1) print("farm") end` },
        { title: "Auto Quest", code: `while true do wait(2) print("quest") end` }
    ],
    bedwars: [
        { title: "Kill Aura", code: `while true do wait(0.3) print("hit") end` },
        { title: "Speed", code: `game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 50` }
    ],
    doors: [
        { title: "ESP", code: `for i,v in pairs(workspace:GetChildren()) do print(v.Name) end` },
        { title: "Auto Door", code: `print("opening")` }
    ],
    arsenal: [
        { title: "Aimbot", code: `print("aiming")` },
        { title: "Wallhack", code: `print("walls")` }
    ],
    jailbreak: [
        { title: "Auto Rob", code: `print("rob")` },
        { title: "Car Speed", code: `print("speed")` }
    ]
};

let currentCategory = [];
let currentName = "";

const container = document.getElementById("scripts");
const searchInput = document.getElementById("search");

function load(category) {
    if (!database[category]) return;

    currentCategory = database[category];
    currentName = category;

    render(currentCategory);
}

function render(list) {
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>No scripts found</p>";
        return;
    }

    const fragment = document.createDocumentFragment();

    list.forEach(script => {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = script.title;

        const pre = document.createElement("pre");
        pre.textContent = script.code;

        card.appendChild(title);
        card.appendChild(pre);
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

function searchScripts() {
    const value = searchInput.value.toLowerCase().trim();

    if (!value) {
        render(currentCategory);
        return;
    }

    const filtered = currentCategory.filter(script =>
        script.title.toLowerCase().includes(value) ||
        script.code.toLowerCase().includes(value)
    );

    render(filtered);
}

window.onload = () => {
    load("blox");
};